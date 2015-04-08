# Static Site Generators Listing

[![Build Status](https://api.travis-ci.org/jaspervdj/static-site-generator-comparison.svg?branch=master)](https://travis-ci.org/jaspervdj/static-site-generator-comparison)

A comprehensive listing of static site generators with some minimal meta data about them.

**[View the listing](https://github.com/jaspervdj/static-site-generator-comparison/blob/master/list.yaml) | [Edit the listing](https://github.com/jaspervdj/static-site-generator-comparison/edit/master/list.yaml)**

**[View the website](http://staticsitegenerators.net) | [View the website source](https://github.com/bevry/staticsitegenerators)**


## Contributing

### Requirements for additions

There are generally three types of Content Management Systems:

1. Dynamic Servers (e.g. WordPress, Ghost, DocPad, Harp) — these allow you to have re-render on every request abilities
2. Flat File CMS (e.g. Yellow, Techy) — these allow you to write your content as files
3. Static Site Generators (e.g. Jekyll, DocPad) — these generate a static website from your input that you can deploy anywhere

Currently, this listing is only for projects that are either a Flat File CMS and/or Static Site Generator, but not for projects which are only Dynamic Servers (such as WordPress and Ghost).

### Adding a static site generator

Accepted project fields:

* `name` - the project's name
* `github` - the location of the GitHub repository
* `license` - the project's license (or lack of license), see [license types](https://github.com/jaspervdj/static-site-generator-comparison/blob/master/list.yaml)

Other fields are automatically collected from the GitHub repository but if the project does not have one you can use the following fields:

* `website` - the project's website if they have one
* `language` - the project's language (note, if the entry is closed-source, use "Web" or "App")
* `description` - the project's description
* `created_at` - the project's creation date in "2010-10-20T13:46:08Z" format (not needed if the project has a GitHub repo)

Example:

``` yaml
- name: "Amazing"
  github: "octocat/amazing"
  license: "MIT"
  website: "http://theamazingstaticsitegenerator.com"
  language: "Go"
  description: "The most amazing static site generator yet."
  created_at: "2010-10-20T13:46:08Z"
```

## License

This listing is released into the public domain.
