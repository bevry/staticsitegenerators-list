/* eslint camelcase:0 */

// Imports
import { RawEntry, HydratedEntry } from './types'
import naturalCompare from 'string-natural-compare'
import { validate as validateGithub } from 'githubauthreq'
import { getRepos } from 'getrepos'
import arrangekeys from 'arrangekeys'
import crypto from 'crypto'

const keyorder =
	'id name github gitlab bitbucket website license language description created_at updated_at abandoned is extensible stars forks watchers'

function sort<T extends { name: string; github?: string }>(data: T[]) {
	return data.sort(
		(a, b) =>
			naturalCompare(a.name, b.name, {
				caseInsensitive: true,
			}) ||
			naturalCompare(a.github, b.github, {
				caseInsensitive: true,
			})
	)
}

function same(a: any, b: any): boolean {
	const ta = typeof a,
		tb = typeof b
	if (ta === tb) {
		if (ta === 'string') return a.toLowerCase() === b.toLowerCase()
		return a === b
	}
	/* eslint eqeqeq:0 */
	return a == b
}

export interface HydrateOptions {
	corrective?: boolean
	cache?: number
	log?: (logLevel: string, ...args: any[]) => void
}

export interface HydrateReturn {
	raw: RawEntry[]
	hydrated: HydratedEntry[]
}

/** Trim redundant data from the listing */
export async function hydrate(
	data: RawEntry[],
	opts: HydrateOptions = {}
): Promise<HydrateReturn> {
	validateGithub()
	if (opts.corrective == null) opts.corrective = false
	if (opts.cache == null) opts.cache = 1000 * 60 * 60 * 24 // one day

	const rawMap: { [id: string]: RawEntry } = {}
	const hydratedMap: { [id: string]: HydratedEntry } = {}
	const githubRepos: string[] = []
	data.forEach(function (entry, index) {
		// @ts-ignore
		delete entry.id
		const key = (entry.github && entry.github.toLowerCase()) || index
		rawMap[key] = Object.assign({}, arrangekeys(entry, keyorder))
		hydratedMap[key] = Object.assign(
			{
				id: crypto
					.createHash('md5')
					.update(
						JSON.stringify({
							name: entry.name,
							website: entry.website,
							github: entry.github,
						})
					)
					.digest('hex'),
			},
			arrangekeys(entry, keyorder)
		)
		if (entry.github) {
			githubRepos.push(entry.github)
		}
	})

	// Log
	if (opts.log) {
		opts.log(
			'info',
			`Fetching the github information, all ${githubRepos.length} of them`
		)
	}

	// Enhance with github data
	const repos = await getRepos(githubRepos)
	for (const github of repos) {
		// Prepare
		const key = github.full_name.toLowerCase()
		const raw = rawMap[key]
		const hydrated = hydratedMap[key]

		// Confirm existance as name may have changed from the listing, for example a repo rename
		if (raw == null) {
			if (opts.log) {
				opts.log('warn', `${github.full_name} is missing, likely due to rename`)
			}
			continue // skip
		}

		// Apply github fields
		const fields: Partial<HydratedEntry> = {
			description: github.description,
			language: github.language,
			license: github.license && github.license.key,
			website:
				github.homepage &&
				github.homepage.toLowerCase().includes(`github.com/${key}`) &&
				github.homepage,
			stars: github.stargazers_count,
			watchers: github.watchers_count,
			forks: github.forks_count,
			// @ts-ignore
			created_at: github.created_at,
			// @ts-ignore
			updated_at: github.updated_at,
		}
		for (const [key, value] of Object.entries(fields)) {
			const rawValue = raw[key]
			if (value) {
				if (opts.corrective && rawValue && value && same(rawValue, value)) {
					if (opts.log) {
						opts.log(
							'note',
							`trimming ${key} on ${github.full_name} as it is the same as the github data: ${value}`
						)
					}
					delete raw[key]
				}
				if (hydrated[key] == null) {
					if (opts.log) {
						opts.log(
							'info',
							`added ${key} on ${github.full_name} from the github data`
						)
					}
					hydrated[key] = value
				}
			}
		}
		hydratedMap[key] = arrangekeys(hydrated, keyorder)
	}

	return {
		hydrated: sort(Object.keys(hydratedMap).map((k) => hydratedMap[k])),
		raw: sort(Object.keys(rawMap).map((k) => rawMap[k])),
	}
}
