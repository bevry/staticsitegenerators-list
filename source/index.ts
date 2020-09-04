import { RawEntry, HydratedEntry } from './types.js'
import hydrated from '../hydrated.json'
import raw from '../raw.json'
export function getHydrated(): HydratedEntry[] {
	return hydrated
}
export function getRaw(): RawEntry[] {
	return raw
}
