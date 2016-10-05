<!-- TITLE -->

<!-- BADGES -->

<!-- DESCRIPTION -->

- [View the listing](https://github.com/bevry/staticsitegenerators-list/blob/master/list.json) | [Edit the listing](https://github.com/bevry/staticsitegenerators-list/edit/master/list.json)-
- [View the rendered listing](https://staticsitegenerators.net/list.json)-
- [View the website](http://staticsitegenerators.net) | [View the website source](https://github.com/bevry/staticsitegenerators-website)-


## Contributing

### Requirements

There are generally three types of Content Management Systems:

1. Dynamic Servers (e.g. WordPress, Ghost, DocPad, Harp) — these allow you to have re-render on every request abilities
2. Flat File Content Management Systems (e.g. Yellow, Techy) — these allow you to write your content as files
3. Static Site Generators (e.g. Jekyll, DocPad) — these generate a static website from your input that you can deploy anywhere

Currently, this listing is only for projects that relate to Flat File Content Management Systems and/or Static Site Generators, but not for projects which relate only to Dynamic Servers (such as WordPress and Ghost).

### Adding

Entries are stored within the `list.json` file.

#### Fields

Accepted project fields:

- `name` - the project's name
- `github` - the slug of the GitHub repository if applicable
- `gitlab` - the slug of the GitLab repository if applicable
- `bitbucket` - the slug of BitBucket repository if applicable
- `website` - the project's website if they have one
- `tags` - the entry type must currently be one or more of the following
  - `flat-file` for projects that import file content into a database
  - `generator` for projects that export content to a static website
  - `editor` for projects that provide gui based editor for content, e.g. Contentful.com, Prose.io
  - `host` for projects that host generated static content, e.g. GitHub Pages, Surge.sh
- `license` - the project's [SPDX license code](https://spdx.org/licenses/)
  - if license is missing, omit this field
  - if license is not applicable because it is a commercial service, use `false`
  - if multiple licenses, see the [SPDX parser](https://www.npmjs.com/package/spdx) for formatting
- `language` - the project's primary programming language if applicable
- `description` - the project's description
- `created_at` - the project's date of creation in ISO format
- `updated_at` - the project's date of last update in ISO format

Dates should be in ISO format which looks like this `2006-08-18T16:00:00.000Z`. Conversion can be done with JavaScript using `console.log(new Date('19-Aug-2006').toISOString())` or via the command line using Node.js via `node -e "console.log(new Date('19-Aug-2006').toISOString())"`.

At the very least, the following fields are required:

- `name`
- `tags`
- `github` or `gitlab` or `bitbucket` or `website`

If `github` is specified, the following fields should only be specified if GitHub's data is incorrect:

- `license`
- `website`
- `language`
- `description`
- `created_at`
- `updated_at`

If `gitlab` is specified, the following fields should only be specified if GitLab's data is incorrect:

- `language`
- `description`
- `created_at`
- `updated_at`

The following fields are automatic and only apply to our rendered listing:

- `stars`
- `forks`
- `watchers`


#### Testing

When you submit your pull request, your submission will be automatically tested, so no need to test locally, however if you do wish to, you can:

1. Install [Node.js](https://learn.bevry.me/node/install) (5-15 minutes)

1. Fork the project and clone your fork - [guide](https://help.github.com/articles/fork-a-repo/) (5 minutes)

1. Install local dependencies (1 minute)

  ``` bash
  npm install
  ```

1. Running the tests (1 minute)

  ``` bash
  npm test
  ```

1. Make any changes that the tests indicate, commit your changes, and submit

<!-- HISTORY -->

<!-- BACKERS -->

<!-- LICENSE -->
