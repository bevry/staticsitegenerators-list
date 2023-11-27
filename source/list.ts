import { RawEntry, Is } from './types.js'
const rawList: RawEntry[] = [
	{
		name: 'ABlog',
		github: 'abakan-zz/ablog',
		website: 'https://ablog.readthedocs.io/',
		description:
			'ABlog is a Sphinx extension that converts any documentation or personal website project into a full-fledged blog.',
	},
	{
		name: 'Ace',
		github: 'botanicus/ace',
	},
	{
		name: 'acrylamid',
		github: 'posativ/acrylamid',
		website: 'https://posativ.org/acrylamid/',
		license: 'BSD-2-Clause',
		defunct: true,
	},
	{
		name: 'Adduce',
		github: 'DeclanChidlow/Adduce',
		is: Is.SSGenerator,
	},
	{
		name: 'AkashaCMS',
		github: 'akashacms/akashacms',
	},
	{
		name: 'Akashic',
		github: 'Liutos/cl-github-page',
	},
	{
		name: 'antwar',
		github: 'antwarjs/antwar',
	},
	{
		name: 'Appernetic',
		website: 'https://appernetic.io/',
		license: false,
		language: 'Web',
		description:
			'A Static Site Generator as a Service. Appernetic is a web service for managing and generating static content for GitHub Pages.',
		created_at: '2016-01-20T15:46:08Z',
	},
	{
		name: 'assemble',
		github: 'assemble/assemble',
		language: 'JavaScript',
	},
	{
		name: 'Astro',
		github: 'withastro/astro',
		language: 'TypeScript',
		website: 'https://astro.build',
	},
	{
		name: 'Automad',
		website: 'https://automad.org/',
		license: 'MIT',
		language: 'PHP',
		description:
			"Automad is a file-based CMS and template engine. It is designed to be fully portable without any dependencies on databases or fixed locations and doesn't require any complicated setup process.",
	},
	{
		name: 'awestruct',
		github: 'awestruct/awestruct',
	},
	{
		name: 'Axiom',
		github: 'TheLastZombie/Axiom',
	},
	{
		name: 'AYM CMS',
		github: 'lethain/aym-cms',
	},
	{
		name: 'baker',
		github: 'taylorchu/baker',
	},
	{
		name: 'Balloon',
		github: 'gschier/balloon',
		license: 'ISC',
	},
	{
		name: 'BAM',
		github: 'twilson63/bam',
		license: 'MIT',
	},
	{
		name: 'bashblog',
		github: 'cfenollosa/bashblog',
		license: 'GPL-3.0',
	},
	{
		name: 'Basildon',
		github: 'samwilson/basildon',
		license: 'GPL-3.0-or-later',
		website: 'https://basildon.netlify.app/',
		description:
			'A simple generator written in PHP, built around Markdown with Yaml frontmatter that is read into a SQLite database and queried in Twig templates.',
		is: Is.SSGenerator,
		language: 'PHP',
	},
	{
		name: 'bazinga',
		github: 'ap0calypse/bazinga',
	},
	{
		name: 'Beetle',
		github: 'cknv/beetle',
	},
	{
		name: 'Benjen',
		github: 'daeken/Benjen',
		license: 'WTFPL',
	},
	{
		name: 'Bitbucket Pages',
		website: 'https://pages.bitbucket.io',
		description: 'Host your static websites on Bitbucket.com for free.',
		is: Is.SSHost,
	},
	{
		name: 'Blacksmith',
		github: 'flatiron/blacksmith',
	},
	{
		name: 'Blag',
		github: 'venthur/blag',
		description: 'Blog-aware, static site generator',
		license: 'MIT',
		language: 'Python',
		is: Is.SSGenerator,
	},
	{
		name: 'Blatter',
		bitbucket: 'jek/blatter',
		license: 'MIT',
		language: 'Python',
		description:
			'Blatter is a tiny tool for creating and publishing static web sites built from dynamic templates.',
		is: Is.SSGenerator,
	},
	{
		name: 'BlazeBlogger',
		website: 'http://blaze.blackened.cz/',
		license: 'GPL-3.0',
		language: 'Perl',
	},
	{
		name: 'bliper',
		website: 'http://git.2f30.org/bliper/files.html',
		license: 'BSD-2-Clause',
		language: 'Perl',
		description: 'static html page generation in perl',
		is: Is.SSGenerator,
	},
	{
		name: 'Blode',
		github: 'stackoverflow/blode',
	},
	{
		name: 'blogc',
		github: 'blogc/blogc',
		website: 'https://blogc.rgm.io',
	},
	{
		name: 'blogc++',
		bitbucket: 'tux_/blogcpp',
		website: 'https://blogcpp.org',
		license: 'WTFPL',
		language: 'C++',
		description: 'Just another static blog generator, written in C++17.',
		is: Is.SSGenerator,
		extensible: false,
	},
	{
		name: 'Blogen',
		github: 'ipconfiger/blogen',
	},
	{
		name: 'blogit',
		github: 'oz123/blogit',
		license: 'BSD-3-Clause',
	},
	{
		name: 'Blogofile',
		github: 'EnigmaCurry/blogofile',
		license: 'MIT',
		is: Is.SSGenerator,
	},
	{
		name: 'blogpy',
		github: 'travisred/blogpy',
		language: 'Python',
		is: Is.SSGenerator,
	},
	{
		name: 'blosxom',
		website: 'http://blosxom.sourceforge.net/',
		license: 'MIT',
		language: 'Perl',
		description:
			'Blosxom (pronounced blossom) is a lightweight yet feature-packed weblog application designed from the ground up with simplicity, usability, and interoperability in mind.',
		created_at: '2002-02-28T00:00:00Z',
		defunct: true,
	},
	{
		name: 'Blug',
		github: 'jeffknupp/blug',
		license: 'MIT',
		language: 'Python',
		is: Is.SSGenerator,
		defunct: true,
	},
	{
		name: 'Bonsai',
		github: 'benschwarz/bonsai',
	},
	{
		name: 'Bramble MVC',
		github: 'iansullivan88/bramble-mvc',
	},
	{
		name: 'Bread',
		github: 'pvorb/node-bread',
	},
	{
		name: 'Bricolage CMS',
		github: 'bricoleurs/bricolage',
		website: 'http://bricolagecms.org/',
		license: '(BSD-3-Clause AND LGPL-2.1 AND CC-BY-SA-2.5)',
	},
	{
		name: 'Bridgetown',
		github: 'bridgetownrb/bridgetown',
	},
	{
		name: 'Broccoli Taco',
		github: 'moudy/broccoli-taco',
		license: 'MIT',
		is: Is.SSGenerator,
	},
	{
		name: 'brochure',
		github: 'sstephenson/brochure',
	},
	{
		name: 'Bryar',
		website: 'https://metacpan.org/pod/Bryar::Frontend::Static',
		license: 'Artistic-1.0-Perl',
		language: 'Perl',
	},
	{
		name: 'Bunto',
		github: 'bunto/bunto',
		description:
			'A modern web application framework and static site generator based on Jekyll.',
		is: Is.SSGenerator,
	},
	{
		name: 'buster',
		github: 'axitkhurana/buster',
	},
	{
		name: 'Cabin',
		github: 'CabinJS/Cabin',
		is: Is.SSGenerator,
	},
	{
		name: 'Cactus',
		github: 'eudicots/Cactus',
	},
	{
		name: 'caixw-blogit',
		github: 'caixw/blogit',
		license: 'MIT',
		language: 'Go',
		is: Is.SSGenerator,
	},
	{
		name: 'Calepin',
		github: 'jokull/calepin',
	},
	{
		name: 'Capro',
		description: 'Flexible PHP static-site generator',
		github: 'xy2z/capro',
		language: 'PHP',
		website: 'https://capro.xy2z.io',
		license: 'MIT',
	},
	{
		name: 'Carew',
		github: 'carew/carew',
	},
	{
		name: 'catsup',
		github: 'whtsky/Catsup',
		website: 'https://catsup.readthedocs.io/en/latest/',
	},
	{
		name: 'Cecil',
		github: 'Cecilapp/Cecil',
		is: Is.SSGenerator,
	},
	{
		name: 'Chili',
		github: 'clvrobj/chili',
	},
	{
		name: 'Chisel',
		github: 'dz/chisel',
	},
	{
		name: 'Chronicle',
		github: 'skx/chronicle2',
		website: 'https://steve.fi/software/chronicle/',
		license: '(GPL-3.0 OR Artistic-1.0-Perl)',
	},
	{
		name: 'Cipherpress',
		github: 'lejonet/Cipherpress',
		license: 'GPL-2.0',
	},
	{
		name: 'cl-blog-generator',
		github: 'hugoduncan/cl-blog-generator',
		website: 'http://hugoduncan.org/cl-blog-generator/content/site/index.xhtml',
	},
	{
		name: 'cl-yag',
		language: 'Common LISP',
		website: 'https://dataswamp.org/~solene/2017-12-16-announcement-cl-yag.html',
		description: 'Publish a website and/or a gopher hole from a list of articles. Supports different markup language per article'
	},
	{
		name: 'Cloud Cannon',
		website: 'https://cloudcannon.com/',
		description:
			'The Cloud CMS for Jekyll. Build static or Jekyll websites, have your team and clients update inline with the CloudCannon GUI.',
		is: Is.SSHost,
	},
	{
		name: 'CMintS',
		github: 'cmints/cmints',
		is: Is.SSGenerator,
	},
	{
		name: 'cobalt.rs',
		github: 'cobalt-org/cobalt.rs',
	},
	{
		name: 'Codex',
		github: 'logicalparadox/codex',
		license: 'MIT',
	},
	{
		name: 'Coisas',
		github: 'fiatjaf/coisas',
		description:
			'Pure client-side CMS-like file editor and media manager for stuff hosted on GitHub.',
		is: Is.SSEditor,
		extensible: true,
	},
	{
		name: 'coleslaw',
		github: 'coleslaw-org/coleslaw',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Composer',
		github: 'shazow/composer',
	},
	{
		name: 'Contentful',
		website: 'https://www.contentful.com',
		description:
			'Contentful is a content management developer platform with an API at its core.',
		is: Is.SSEditor,
	},
	{
		name: 'Cory',
		github: 'leo/cory',
	},
	{
		name: 'Create Static Web',
		github: 'franciscop/create-static-web',
		description: 'Another static site generator',
		license: 'MIT',
	},
	{
		name: 'cub',
		github: 'patcoll/cub',
		license: 'MIT',
	},
	{
		name: 'Curvenote',
		description: 'Generate websites from Markdown and Jupyter Notebooks',
		github: 'https://github.com/curvenote/curvenote',
		website: 'https://curvenote.com/docs/web',
		license: 'MIT',
		is: Is.SSGenerator,
	},
	{
		name: 'cyrax',
		github: 'piranha/cyrax',
		website: 'https://pypi.org/project/cyrax/',
		is: Is.SSGenerator,
	},
	{
		name: 'cytoplasm',
		github: 'startling/cytoplasm',
	},
	{
		name: 'Dapper',
		github: 'markdbenson/dapper',
		license: 'MIT',
	},
	{
		name: 'Daux.io',
		github: 'dauxio/daux.io',
		website: 'https://daux.io',
		license: 'MIT',
	},
	{
		name: 'deplate',
		github: 'tomtom/deplate',
	},
	{
		name: 'Desi',
		github: 'DearDesi/desirae',
	},
	{
		name: 'django-medusa',
		github: 'mtigas/django-medusa',
		defunct: true,
	},
	{
		name: 'django-staticgen',
		github: 'mishbahr/django-staticgen',
	},
	{
		name: 'djangothis',
		github: 'amitu/djangothis',
	},
	{
		name: 'DocKnot',
		github: 'rra/docknot',
		website: 'https://www.eyrie.org/~eagle/software/docknot/',
		language: 'Perl',
		description: 'Static web site generator with special support for managing software releases. It can generate distribution tarballs and software package documentation from a YAML metadata file and templates. The goal is to generate both web pages and distributed documentation files from the same source, using templates for consistency across multiple packages',
	},
	{
		name: 'DocPad',
		github: 'docpad/docpad',
		license: 'MIT',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Docta',
		github: '05bit/docta',
	},
	{
		name: 'Docusaurus',
		github: 'facebook/docusaurus',
		license: 'MIT',
		description:
			'Docusaurus makes it easy to build and maintain Open Source documentation websites.',
		is: Is.SSGenerator,
	},
	{
		name: 'Drapache',
		github: 'louissobel/Drapache',
		website: 'https://github.com/louissobel/Drapache',
	},
	{
		name: 'drfrederson',
		github: 'klml/drfrederson',
		website: 'http://drfrederson.klml.org/',
	},
	{
		name: 'dropbox-blog',
		github: 'markashleybell/dropbox-blog',
	},
	{
		name: 'Dropplets',
		github: 'johnroper100/dropplets',
		license: 'MIT',
	},
	{
		name: 'DropPress',
		github: 'Reiot/droppress',
	},
	{
		name: 'Drupan',
		github: 'fallenhitokiri/drupan',
		license: 'BSD-2-Clause',
	},
	{
		name: 'DSSG',
		github: 'kambrium/dssg',
		is: Is.SSGenerator,
	},
	{
		name: 'DSW',
		github: 'dfr62/dsw',
	},
	{
		name: 'dwttool',
		github: 'kambrium/dwttool',
		is: Is.SSGenerator,
	},
	{
		name: 'dynamicmatic',
		github: 'nex3/dynamicmatic',
	},
	{
		name: 'Easystatic',
		github: 'easystatic/easystatic',
	},
	{
		name: 'ecstatic',
		github: 'samrat/ecstatic',
		website: 'https://github.com/samrat/ecstatic',
		license: 'EPL-1.0',
	},
	{
		name: 'electro',
		github: 'caldwell/electro',
	},
	{
		name: 'Eleventy',
		github: '11ty/eleventy',
		is: Is.SSGenerator,
	},
	{
		name: 'Elyse',
		github: 'FSX/elyse',
		is: Is.SSGenerator,
	},
	{
		name: 'embellih',
		github: 'boscoh/embellish',
		website: 'http://boscoh.github.io/embellish/',
	},
	{
		name: 'enfield',
		github: 'fortes/enfield',
	},
	{
		name: 'Engineer',
		github: 'tylerbutler/engineer',
		website: 'https://engineer.readthedocs.io/en/latest/',
	},
	{
		name: 'Equiprose',
		github: 'thibaultCha/Equiprose',
		license: 'MIT',
	},
	{
		name: 'Fairytale',
		github: '46Bit/fairytale',
	},
	{
		name: 'FantasticWindmill',
		github: 'sylvainhalle/FantasticWindmill',
		website: 'http://sylvainhalle.github.io/FantasticWindmill/',
	},
	{
		name: 'fBlog',
		website: 'https://sourceforge.net/projects/fortranblog/',
		license: 'GPL-3.0',
		language: 'Fortran',
	},
	{
		name: 'Firedrop2',
		website: 'http://www.voidspace.org.uk/python/firedrop2/',
		license: 'BSD-3-Clause',
		language: 'Python',
		description: 'The Blog Tool for Discerning Pythoneers',
	},
	{
		name: 'Firmant',
		website: 'https://pypi.org/project/Firmant/0.2.2/',
		license: 'BSD-3-Clause',
		language: 'Python',
	},
	{
		name: 'fjord',
		github: 'dkuntz2/fjord',
		website: 'https://github.com/dkuntz2/fjord',
	},
	{
		name: 'Flamel',
		github: 'ipavl/flamel',
	},
	{
		name: 'Fledermaus',
		github: 'sapegin/fledermaus',
	},
	{
		name: 'flim',
		github: 'shapeshed/flim',
		is: Is.SSGenerator,
	},
	{
		name: 'Floyd',
		github: 'nikcub/floyd',
		website: 'https://nikcub.github.io/floyd/',
	},
	{
		name: 'FMPP',
		website: 'http://fmpp.sourceforge.net/',
		license: 'Apache-2.0',
		language: 'Java',
		description: 'FreeMarker-based text file PreProcessor',
	},
	{
		name: 'ford.py',
		github: 'citruspi/ford.py',
	},
	{
		name: 'Frank',
		github: 'blahed/frank',
	},
	{
		name: 'Franklin',
		github: 'bryanbraun/franklin',
		license: 'MIT',
		language: 'Ruby',
	},
	{
		name: 'Frog',
		github: 'greghendershott/frog',
		license: 'MIT',
		is: Is.SSGenerator,
		extensible: false,
	},
	{
		name: 'Frozen-Flask',
		github: 'Frozen-Flask/Frozen-Flask',
	},
	{
		name: 'Funnel',
		github: 'shuhaowu/Funnel',
	},
	{
		name: 'Garoozis',
		github: 'aguerrera/Garoozis',
		language: 'F#',
	},
	{
		name: 'Gatsby',
		github: 'gatsbyjs/gatsby',
		website: 'https://www.gatsbyjs.org/',
	},
	{
		name: 'Gen',
		github: 'trq/Gen',
	},
	{
		name: 'Generic Static Site Generator',
		github: 'theabbie/Generic-Static-Site-Generator',
		website: 'https://github.com/theabbie/Generic-Static-Site-Generator',
		license: 'MIT',
		language: 'JavaScript',
		is: Is.SSGenerator,
		description: 'A Generic Static Site Generator',
	},
	{
		name: 'Genesis',
		github: 'samstefan/genesis',
	},
	{
		name: 'Gerablog',
		github: 'paulohrpinheiro/gerablog',
		description:
			'Gerablog is a static blog generator. Write your posts in in *Markdown*, publish in *HTML*. Just two commands (create and generate) and seven templates (header, footer, categories page, categories block, main index, post and feed).',
		is: Is.SSGenerator,
	},
	{
		name: 'gettheshitdone',
		github: 'johannesboyne/gettheshitdone',
	},
	{
		name: 'ghost-render',
		github: 'mixu/ghost-render',
	},
	{
		name: 'GitHub Pages',
		website: 'https://pages.github.com',
		description:
			'Websites for you and your projects, hosted directly from your GitHub repository. Just edit, push, and your changes are live.',
		is: Is.SSHost,
	},
	{
		name: 'GitLab Pages',
		website: 'https://pages.gitlab.io',
		description:
			'Host your static websites on GitLab.com for free, or on your own GitLab Enterprise Edition instance.',
		is: Is.SSHost,
	},
	{
		name: 'Glyph',
		github: 'h3rald/glyph',
		website: 'https://h3rald.com/glyph/',
	},
	{
		name: 'Glyph',
		github: 'dbriemann/glyph',
		website: 'https://dbriemann.github.io/blog/2-introducing-glyph-static-site-generator-powered-by-github-issues-and-pages.html',
		description: 'A static site generator utilizing Github issues and pages.',
		license: 'MIT',
	},
	{
		name: 'Go-Static!',
		github: 'colynb/generator-go-static',
	},
	{
		name: 'goblog',
		github: 'icub3d/goblog',
		license: 'MIT',
	},
	{
		name: 'Goldbarg',
		github: 'Schnouki/Golbarg',
	},
	{
		name: 'gollum-site',
		github: 'dreverri/gollum-site',
		license: 'MIT',
	},
	{
		name: 'gor',
		github: 'wendal/gor',
		license: 'BSD-3-Clause',
	},
	{
		name: 'gostatic',
		github: 'piranha/gostatic',
	},
	{
		name: 'Grain',
		github: 'sysgears/grain',
		website: 'https://sysgears.com/work/grain/',
		license: '(Apache-2.0 AND MIT)',
	},
	{
		name: 'Grav',
		github: 'getgrav/grav',
		website: 'https://getgrav.org/',
		is: Is.FlatFileCMS,
		extensible: true,
	},
	{
		name: 'Grav Administration Panel',
		github: 'getgrav/grav-plugin-admin',
		website: 'https://learn.getgrav.org/15/admin-panel/introduction',
		is: Is.SSEditor,
	},
	{
		name: 'Graze',
		github: 'mikoskinen/graze',
		website:
			'https://mikaelkoskinen.net/post/Graze-Static-site-generator-using-Razor',
		license: 'MIT',
	},
	{
		name: 'grender',
		github: 'peterbourgon/grender',
		license: 'BSD-3-Clause',
	},
	{
		name: 'Griffin',
		github: 'pawandubey/griffin',
	},
	{
		name: 'Grow',
		github: 'grow/grow',
		website: 'https://grow.io/',
	},
	{
		name: 'Growl',
		github: 'xfire/growl',
		license: 'GPL-2.0',
	},
	{
		name: 'grunt-generator',
		github: 'clavery/grunt-generator',
	},
	{
		name: 'GSL',
		github: 'imatix/gsl',
	},
	{
		name: 'guetzli',
		github: 'muellermichel/guetzli',
		license: '(LGPL-3.0 OR GPL-3.0)',
	},
	{
		name: 'gulp-ssg',
		github: 'paulwib/gulp-ssg',
		license: 'MIT',
		description: 'Static site generator plugin for gulp',
	},
	{
		name: 'Gustav',
		github: 'futape/gustav',
		website: 'https://github.com/futape/gustav',
		license: 'BSD-3-Clause',
	},
	{
		name: 'habit',
		github: 'punkave/habit',
		license: 'MIT',
	},
	{
		name: 'haggis',
		github: 'tych0/haggis',
	},
	{
		name: 'Hakyll',
		github: 'jaspervdj/hakyll',
		website: 'https://jaspervdj.be/hakyll/',
		is: Is.SSGenerator,
	},
	{
		name: 'Halwa',
		github: 'mhlakhani/halwa',
	},
	{
		name: 'Hammer',
		website: 'https://hammerformac.com',
		license: false,
		description:
			"Super-charge your web development with Hammer. Still using PHP includes for HTML? You're going to love hammer.",
		is: Is.SSGenerator,
	},
	{
		name: 'hanayo',
		github: 'disoul/hanayo',
	},
	{
		name: 'handcrank',
		website: 'https://pythonhosted.org/handcrank/',
		language: 'Python',
	},
	{
		name: 'Handle',
		github: 'gilbitron/handle',
	},
	{
		name: 'handroll',
		github: 'handroll/handroll',
	},
	{
		name: 'happyplan',
		github: 'happyplan/happyplan',
	},
	{
		name: 'Harmonic',
		github: 'JSRocksHQ/harmonic',
	},
	{
		name: 'haroopress',
		github: 'rhiokim/haroopress',
		license: 'MIT',
	},
	{
		name: 'HaroldJS',
		github: 'juliancwirko/create-harold-app',
		website: 'https://www.haroldjs.com',
		license: 'MIT',
	},
	{
		name: 'Harp',
		github: 'sintaxi/harp',
		website: 'http://harpjs.com/',
		license: 'MIT',
	},
	{
		name: 'Hastie',
		github: 'mkaz/hastie',
	},
	{
		name: 'Haunt',
		website: 'https://dthompson.us/projects/haunt.html',
		license: 'GPL-3.0-or-later',
		language: 'Scheme',
		description:
			'A simple, functional, hackable static site generator that gives authors the ability to treat websites as Scheme programs.',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Heckle',
		github: 'marijnh/heckle',
	},
	{
		name: 'Helpful Site',
		github: 'g4b1nagy/helpful-site',
		language: 'Python',
	},
	{
		name: 'Hepek',
		github: 'sake92/hepek',
		description: 'Content generators in Scala. Intuitive, scalable, powerful.',
		is: Is.SSGenerator,
	},
	{
		name: 'Hexo',
		github: 'hexojs/hexo',
		website: 'https://hexo.io/',
		is: Is.SSGenerator,
	},
	{
		name: 'HiD',
		github: 'genehack/HiD',
		website: 'https://metacpan.org/pod/HiD',
		license: 'Artistic-1.0-Perl',
	},
	{
		name: 'High Voltage',
		github: 'thoughtbot/high_voltage',
		website: 'http://thoughtbot.github.io/high_voltage/',
	},
	{
		name: 'Hobix',
		github: 'hobix/hobix',
		website: 'https://hobix.github.io/hobix/',
	},
	{
		name: 'HSC',
		github: 'mbethke/hsc',
		created_at: '1998-09-21',
	},
	{
		name: 'htmd',
		website: 'https://github.com/Siecje/htmd',
		github: 'Siecje/htmd',
		language: 'Python',
		license: 'MIT',
		is: Is.SSGenerator,
		created_at: '2015-01-31',
		updated_at: '2022-03-16',
	},
	{
		name: 'hublo',
		github: 'pyr/hublo',
		website: 'http://spootnik.org/',
	},
	{
		name: 'HubPress',
		github: 'HubPress/hubpress.io',
	},
	{
		name: 'Hugo',
		github: 'gohugoio/hugo',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Hyde',
		github: 'hyde/hyde',
		website: 'http://hyde.github.io/',
	},
	{
		name: 'Hyde (CHICKEN)',
		license: 'BSD',
		description: 'Schemey clone of programs such as Webby and Jekyll',
		is: Is.SSGenerator,
		extensible: true,
		website: 'http://wiki.call-cc.org/eggref/5/hyde',
		language: 'Scheme',
	},
	{
		name: 'Hydrastic',
		github: 'bpizzi/Hydrastic',
	},
	{
		name: 'igapyon',
		github: 'igapyon/igapyonv3',
		license: 'Apache-2.0',
		description:
			'Lightweight and turnkey static site/blog generator for developers',
		is: Is.SSGenerator,
	},
	{
		name: 'igor',
		github: 'aconbere/igor',
	},
	{
		name: 'Ikiwiki',
		website: 'http://ikiwiki.info/',
		license: 'GPL-2.0',
		language: 'Perl',
		description: 'Ikiwiki is a wiki compiler. It converts wiki pages into HTML pages suitable for publishing on a website.',
		created_at: '2006-03-10',
		updated_at: '2022-05-30',
	},
	{
		name: 'ink',
		github: 'InkProject/ink',
	},
	{
		name: 'ipsum genera',
		github: 'dom96/ipsumgenera',
	},
	{
		name: 'JAGSS',
		github: 'esonderegger/jagss',
		language: 'Python',
	},
	{
		name: 'JBake',
		github: 'jbake-org/jbake',
		website: 'https://jbake.org/',
	},
	{
		name: 'Jedie',
		github: 'mattn/jedie',
	},
	{
		name: 'Jekxll',
		github: 'osaris/jekxyl',
	},
	{
		name: 'Jekyde',
		github: 'zohooo/jekyde',
		website: 'http://zohooo.github.io/jekyde/',
		license: 'MIT',
	},
	{
		name: 'Jekyll',
		github: 'jekyll/jekyll',
		is: Is.SSGenerator,
	},
	{
		name: 'Jekyll Admin',
		github: 'jekyll/jekyll-admin',
		is: Is.SSEditor,
	},
	{
		name: 'Jekyll Now',
		github: 'barryclark/jekyll-now',
		website: 'http://www.jekyllnow.com',
	},
	{
		name: 'Jekytrum',
		github: 'georgeOsdDev/jekytrum',
	},
	{
		name: 'jem-press',
		github: 'stsievert/jem-press',
		license: 'GPL-3.0',
	},
	{
		name: 'Jen',
		github: 'rfunduk/jen',
		defunct: true,
	},
	{
		name: 'jigsaw',
		github: 'tightenco/jigsaw',
		website: 'https://jigsaw.tighten.co',
	},
	{
		name: 'jinjet',
		github: 'jokull/jinjet',
	},
	{
		name: 'jkl',
		github: 'drone/jkl',
	},
	{
		name: 'Jott',
		github: 'jonsherrard/jott',
	},
	{
		name: 'Journo',
		github: 'jashkenas/journo',
		license: 'MIT',
	},
	{
		name: 'Jr',
		github: 'xeoncross/jr',
		website: 'http://xeoncross.github.io/jr/',
		license: 'MIT',
	},
	{
		name: 'jssg',
		github: 'agrison/jssg',
		license: 'MIT',
	},
	{
		name: 'jstatico',
		github: 'egeozcan/jstatico',
	},
	{
		name: 'kalastatic',
		github: 'kalamuna/kalastatic',
		license: 'MIT',
	},
	{
		name: 'Kel',
		github: 'koostudios/kel',
		license: 'MIT',
	},
	{
		name: 'Kerouac',
		github: 'jaredhanson/kerouac',
	},
	{
		name: 'Kirby',
		github: 'getkirby/starterkit',
		website: 'https://getkirby.com/',
		license: false,
	},
	{
		name: 'kkr',
		github: 'dchest/kkr',
	},
	{
		name: 'Korma',
		github: 'practicingruby/korma',
	},
	{
		name: 'Kulfon',
		github: 'kulfonjs/kulfon',
		is: Is.SSGenerator,
	},
	{
		name: 'Lambda Pad',
		github: 'gar1t/lambdapad',
	},
	{
		name: 'Lannister',
		github: 'wjlroe/lannister',
		license: 'CC-BY-SA-3.0',
	},
	{
		name: 'Lanyon',
		github: 'arthurk/lanyon',
		website: 'https://lanyon.readthedocs.io/en/latest/',
	},
	{
		name: 'larassg',
		github: 'andygwood/larassg',
	},
	{
		name: 'Latemp',
		bitbucket: 'shlomif/latemp',
		website: 'http://web-cpan.shlomifish.org/latemp/',
		language: 'Perl',
	},
	{
		name: 'lava',
		github: 'johannhof/lava',
	},
	{
		name: 'Laze',
		github: 'avdgaag/laze',
		website: 'http://avdgaag.github.io/laze/',
	},
	{
		name: 'lazyblorg',
		github: 'novoid/lazyblorg',
	},
	{
		name: 'Leeflets',
		github: 'Leeflets/leeflets',
		license: 'MIT',
	},
	{
		name: 'Lektor',
		github: 'lektor/lektor',
		is: Is.FlatFileCMS,
		extensible: true,
	},
	{
		name: 'Lenscap',
		github: 'honza/lenscap',
	},
	{
		name: 'Leo',
		website: 'http://leohtml.sourceforge.net/',
		license: 'GPL-2.0',
		language: 'C++',
	},
	{
		name: 'Letterpress',
		github: 'an0/Letterpress',
	},
	{
		name: 'lettersmith',
		github: 'gordonbrander/lettersmith',
	},
	{
		name: 'Liara',
		github: 'anteru/liara',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'lightning',
		github: 'borismus/lightning',
		license: 'MIT',
	},
	{
		name: 'liquidluck',
		github: 'avelino/liquidluck',
		website: 'https://liquidluck.readthedocs.io/en/latest/',
	},
	{
		name: 'Logya',
		github: 'yaph/logya',
		description:
			'Logya is a static website generator written in Python designed to be easy to use and flexible.',
		created_at: '2011-08-21T00:00:00Z',
		is: Is.SSGenerator,
	},
	{
		name: 'Luapress',
		github: 'Fizzadar/Luapress',
	},
	{
		name: 'Machined',
		github: 'petebrowne/machined',
	},
	{
		name: 'Madoko',
		github: 'houshuang/madoko',
	},
	{
		name: 'Magneto',
		github: 'donmelton/magneto',
	},
	{
		name: 'makebakery',
		github: 'datagrok/makebakery',
		website: 'http://datagrok.github.io/makebakery/',
		license: 'AGPL-3.0+ WITH Autoconf-exception-3.0',
		description: 'A static website generator built on GNU Make',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'makeblog',
		github: 'fyhuang/makeblog',
	},
	{
		name: 'Makefly',
		github: 'blankoworld/makefly',
		license: 'GPL-3.0',
	},
	{
		name: 'makesite.py',
		github: 'sunainapai/makesite',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Markbox',
		github: 'myfreeweb/markbox',
	},
	{
		name: 'Markdoc',
		github: 'zacharyvoase/markdoc',
	},
	{
		name: 'markdown-styles',
		github: 'mixu/markdown-styles',
		license: 'BSD-3-Clause',
	},
	{
		name: 'Markx',
		github: 'jgallen23/markx',
	},
	{
		name: 'massimo',
		github: 'petebrowne/massimo',
	},
	{
		name: 'Maven Site Plugin',
		website: 'http://maven.apache.org/plugins-archives/maven-site-plugin-3.3/',
		license: 'Apache-2.0',
		language: 'Java',
		description:
			"The Site Plugin is used to generate a site for the project. The generated site also includes the project's reports that were configured in the POM.",
	},
	{
		name: 'mdwiki',
		github: 'Dynalon/mdwiki',
		website: 'http://dynalon.github.io/mdwiki/',
		license: 'AGPL-3.0',
	},
	{
		name: 'Mecha',
		github: 'mecha-cms/mecha',
	},
	{
		name: 'meinhof',
		github: 'miguelibero/meinhof',
	},
	{
		name: 'metalsmith',
		github: 'segmentio/metalsmith',
		license: 'MIT',
	},
	{
		name: 'Miblo',
		github: 'rafalp/Miblo',
		license: 'BSD-2-Clause',
	},
	{
		name: 'Middleman',
		github: 'middleman/middleman',
	},
	{
		name: 'Minimal',
		github: 'lutzroeder/Minimal',
		language: 'JavaScript',
		description:
			'Personal static website and blog generator for Go, Node.js and Python. No external dependencies and requires only a few hundred lines of code to run.',
	},
	{
		name: 'MinoriWiki',
		github: 'phoenixlzx/MinoriWiki',
		website: 'http://phoenixlzx.github.io/MinoriWiki/',
	},
	{
		name: 'Misakai Baker',
		github: 'Kelindar/misakai-baker',
		website: 'http://baker.misakai.com',
	},
	{
		name: 'misaki',
		github: 'liquidz/misaki',
		website: 'http://liquidz.github.io/misaki/',
	},
	{
		name: 'MkDocs',
		github: 'mkdocs/mkdocs',
	},
	{
		name: 'mksite',
		github: 'clehner/mksite',
		website: 'http://celehner.com/mksite/',
	},
	{
		name: 'mkws',
		github: 'mkws-1/mkws',
		website: 'http://mkws.sh/',
		description:
			'A simple static site generator using sh as a template language',
	},
	{
		name: 'monkeyman',
		github: 'wspringer/monkeyman',
	},
	{
		name: 'Mulder',
		github: 'dragan/mulder',
	},
	{
		name: 'Muleify',
		github: 'vokeio/muleify',
		description:
			'A zero configuration static site generator and asset preprocessor compiler.',
	},
	{
		name: 'mynt',
		github: 'Anomareh/mynt',
	},
	{
		name: 'NanoBlogger',
		website: 'http://nanoblogger.sourceforge.net/',
		license: 'GPL-3.0',
		language: 'Shell',
	},
	{
		name: 'Nanoc',
		github: 'nanoc/nanoc',
		website: 'https://nanoc.ws/',
		created_at: '2007-05-03T00:00:00Z',
	},
	{
		name: 'nanogen',
		github: 'epochblue/nanogen',
	},
	{
		name: 'NestaCMS',
		github: 'gma/nesta',
		website: 'http://nestacms.com/',
	},
	{
		name: 'Netlify Drop',
		website: 'https://app.netlify.com/drop',
		description:
			'Drag and drop a folder with your site’s HTML, CSS, and JS files. We’ll publish them live and give you a link to share it.',
		is: Is.SSHost,
	},
	{
		name: 'Neverland',
		github: 'demon386/Neverland',
	},
	{
		name: 'Newcomen',
		gitlab: 'goeb/newcomen',
		website: 'https://subtype.de/newcomen/',
		license: 'GPL-3.0',
		language: 'Perl',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Next.js',
		github: 'vercel/next.js',
		website: 'https://nextjs.org',
		license: 'MIT',
	},
	{
		name: 'nib',
		github: 'jreese/nib',
	},
	{
		name: 'Nibbleblog',
		github: 'dignajar/nibbleblog',
	},
	{
		name: 'Nico',
		github: 'lepture/nico',
	},
	{
		name: 'Nikola',
		github: 'getnikola/nikola',
	},
	{
		name: 'node-blog',
		github: 'creationix/node-blog',
	},
	{
		name: 'node-qssg',
		github: 'shanewholloway/node-qssg',
	},
	{
		name: 'nodeache',
		github: 'nunull/nodeache',
	},
	{
		name: 'noflo-jekyll',
		github: 'noflo/noflo-jekyll',
		license: 'MIT',
	},
	{
		name: 'noter',
		github: 'koutsie/noter',
		license: 'MIT',
	},
	{
		name: 'Nuxt.js',
		github: 'nuxt/nuxt.js',
		website: 'https://nuxtjs.org/',
	},
	{
		name: 'o-blog',
		github: 'renard/o-blog',
		website: 'http://renard.github.io/o-blog-v2/',
		license: 'WTFPL',
	},
	{
		name: 'Oak',
		github: 'marc0s/oak',
	},
	{
		name: 'obelisk',
		github: 'BennyHallett/obelisk',
	},
	{
		name: 'Ocam',
		github: 'toddlucas/ocam',
		website: 'http://toddlucas.github.io/ocam/',
	},
	{
		name: 'Octopress',
		github: 'octopress/octopress',
	},
	{
		name: 'onessg',
		github: 'RyanZim/onessg',
		is: Is.SSGenerator,
	},
	{
		name: 'operator-DD3',
		github: 'operator-dd3/operator-dd3',
	},
	{
		name: 'OpooPress',
		github: 'opoo/opoopress',
	},
	{
		name: 'Orca',
		github: 'blaesus/orca',
	},
	{
		name: 'Orchid',
		github: 'orchidhq/Orchid',
		website: 'https://orchid.run',
		created_at: '2018-03-19T00:00:00Z',
		is: Is.SSGenerator,
		extensible: true,
	},
	
	{
		name: 'Page',
		github: 'fmalina/page',
		license: 'BSD-3-Clause',
		language: 'Python',
		is: Is.SSGenerator,
		extensible: true,
		description: 'A static website generator that creates a well organized website with clear navigation reflecting the folder structure of source text documents. Produces fast, well compressed, mobile friendly pages, feed and sitemap files and supports import from any CMS DB',
	},
	{
		name: 'Pagegen',
		github: 'oliverfields/pagegen_v2',
		website: 'http://pagegen.phnd.net/',
	},
	{
		name: 'Pagen',
		github: 'jawerty/pagen',
	},
	{
		name: 'Pancake.io',
		github: 'hassox/pancake',
		website: 'https://pancakestacks.wordpress.com/',
	},
	{
		name: 'pansite',
		github: 'wcaleb/website',
		license: 'CC-BY-SA-3.0',
	},
	{
		name: 'Papery',
		website: 'https://metacpan.org/pod/Papery',
		license: 'Artistic-1.0-Perl',
		language: 'Perl',
	},
	{
		name: 'pblog',
		website: 'https://pblog.xyz/',
		license: 'ISC',
		language: 'Shell',
		description: 'Pandoc static blog generator. 5-second configuration. Markdown. Valid RSS 2.0 feed. No advanced template layouts. No themes. No categories / tagging systems. No comments. No auto rebuilds for local testing. But you can add these things yourself with a little know-how and patience',
	},
	{
		name: 'Pelican',
		github: 'getpelican/pelican',
		license: 'GPL-3.0',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Perun',
		github: 'hashobject/perun',
	},
	{
		name: 'Petrify',
		github: 'caolan/petrify',
	},
	{
		name: 'Phenomic',
		github: 'phenomic/phenomic',
	},
	{
		name: 'Phileas',
		github: 'farvardin/phileas',
		license: 'MIT',
	},
	{
		name: 'PhlyBlog',
		github: 'phly/PhlyBlog',
		license: 'BSD-2-Clause',
	},
	{
		name: 'PHPetite',
		website: 'https://phpetite.org/',
		github: 'bradleytaunt/phpetite',
		language: 'PHP',
	},
	{
		name: 'PieCrust',
		github: 'ludovicchabant/piecrust',
		license: 'Apache-2.0',
	},
	{
		name: 'Pigmeat',
		github: 'MadeByEmil/Pigmeat',
		license: 'GPL-3.0',
		website: 'https://madebyemil.github.io/pigmeat-website',
		language: 'C#',
		description: 'A static content publishing tool for the modern web.',
	},
	{
		name: 'Pilcrow',
		github: 'ljcooke/pilcrow',
		defunct: true,
	},
	{
		name: 'Pith',
		github: 'mdub/pith',
	},
	{
		name: 'PMBlog',
		github: 'lizheming/PMBlog',
	},
	{
		name: 'poet',
		github: 'jsantell/poet',
		website: 'http://jsantell.github.io/poet/',
	},
	{
		name: 'Pointless',
		github: 'scarwu/Pointless',
	},
	{
		name: 'Polo',
		github: 'agonzalezro/polo',
	},
	{
		name: 'poole',
		github: 'obensonne/poole',
		license: 'GPL-3.0',
	},
	{
		name: 'pop',
		github: 'alexyoung/pop',
		website: 'https://github.com/alexyoung/pop',
	},
	{
		name: 'portable-php',
		github: 'cadars/portable-php',
		website: 'https://portable.fyi',
		language: 'PHP',
		license: 'MIT',
	},
	{
		name: 'PowerSite',
		github: 'Jaykul/PowerSite',
	},
	{
		name: 'Pretzel',
		github: 'Code52/pretzel',
		website: 'http://code52.org/pretzel/',
	},
	{
		name: 'Prismic',
		website: 'https://prismic.io',
		description:
			'A hosted, API based and developer friendly CMS backend. We take care of upgrades, scalability and security.',
		is: Is.SSEditor,
	},
	{
		name: 'Propeller',
		github: 'thegreatsunra/propeller',
		defunct: true,
	},
	{
		name: 'Prose',
		website: 'http://prose.io',
		description:
			'Prose is a content editor for GitHub designed for managing websites.',
		is: Is.SSEditor,
	},
	{
		name: 'Prosopopee',
		github: 'Psycojoker/prosopopee',
		website: false,
		language: 'Python',
		is: Is.SSEditor,
		extensible: true,
	},
	{
		name: 'Pulse CMS',
		website: 'https://www.pulsecms.com/',
		license: false,
		language: 'PHP',
		description: 'The easiest flat-file CMS for designers and their clients.',
		is: Is.SSEditor,
	},
	{
		name: 'Punch',
		github: 'laktek/punch',
		website: 'https://laktek.github.io/punch/',
	},
	{
		name: 'Publii',
		github: 'GetPublii/Publii',
	},
	{
		name: 'PyBlosxom',
		github: 'pyblosxom/pyblosxom',
		website: 'http://pyblosxom.github.io/',
		defunct: true,
	},
	{
		name: 'PyBlue',
		github: 'ialbert/pyblue-central',
		license: 'MIT',
	},
	{
		name: 'Pyll',
		github: 'arthurk/pyll',
	},
	{
		name: 'Qgoda',
		github: 'gflohr/qgoda',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Quietly Confident',
		website:
			'https://metacpan.org/pod/release/TLINDEN/Quietly-Confident-0.11/qc.pod',
		license: 'Artistic-1.0-Perl',
		language: 'Perl',
	},
	{
		name: 'Quill',
		github: 'theycallmeswift/quill',
		license: 'Beerware',
	},
	{
		name: 'RakeWeb',
		github: 'rweald/rakeweb',
		license: 'Apache-2.0',
		language: 'Ruby',
	},
	{
		name: 'rant',
		github: 'lrvick/rant',
	},
	{
		name: 'Rassmalog',
		github: 'sunaku/rassmalog',
		website: 'http://snk.tuxfamily.org/lib/rassmalog/doc/guide.html',
	},
	{
		name: 'rawk',
		github: 'kisom/rawk',
		website: 'https://github.com/kisom/rawk',
	},
	{
		name: 'reacat',
		github: 'reacat/reacat',
	},
	{
		name: 'react-static',
		github: 'rpearce/react-static',
	},
	{
		name: 'react-static-site',
		github: 'BradDenver/react-static-site',
	},
	{
		name: 'reactivate',
		github: 'azmenak/reactivate',
		license: 'MPL-2.0',
	},
	{
		name: 'Read the Docs (RTD)',
		github: 'readthedocs/readthedocs.org',
	},
	{
		name: 'Really Static',
		github: 'trajano/really-static',
		website: 'https://wordpress.org/plugins/really-static/',
	},
	{
		name: 'Refrain',
		github: 'shootaroo/refrain',
		license: 'MIT',
	},
	{
		name: 'regenerate',
		website: 'https://gist.github.com/TeMPOraL/4190622',
		language: 'Lisp',
	},
	{
		name: 'reptar',
		github: 'reptar/reptar',
	},
	{
		name: 'Riji',
		github: 'Songmu/p5-Riji',
		website: 'https://junkyard.song.mu/p5-Riji/blog/',
		license: 'Artistic-1.0-Perl',
	},
	{
		name: 'Rizzo',
		github: 'fifthposition/rizzo',
	},
	{
		name: 'romulus',
		github: 'felixge/node-romulus',
	},
	{
		name: 'Roots',
		github: 'jescalan/roots',
	},
	{
		name: 'Rosid',
		github: 'electerious/Rosid',
	},
	{
		name: 'rstblog',
		github: 'mitsuhiko/rstblog',
	},
	{
		name: 'RubyFrontier',
		github: 'mattneub/RubyFrontier',
		website: 'http://www.apeth.com/RubyFrontierDocs/default.html',
		license: 'MIT',
	},
	{
		name: 'Ruhoh',
		github: 'ruhoh/ruhoh.rb',
		license: 'MIT',
	},
	{
		name: 's2gen',
		github: 'denisftw/s2gen',
	},
	{
		name: 'saait',
		website: 'http://codemadness.org/saait.html',
		license: 'ISC',
	},
	{
		name: 'sblg',
		github: 'kristapsdz/sblg',
		website: 'https://kristaps.bsd.lv/sblg/',
		language: 'C',
		description: 'Generate static HTML files, Atom feeds, and JSON files. You write your XHTML articles and templates. You can write articles in any format — like Markdown — so long it converts into XHTML. sblg(1) pulls data from the articles and merges it into the templates. Orchestrated with a Makefile'
	},
	{
		name: 'Scroll',
		github: 'publicdomaincompany/scroll',
		website: 'https://scroll.pub/',
		is: Is.SSGenerator,
		language: 'JavaScript',
		extensible: true,
	},
	{
		name: 'Sculpin',
		github: 'sculpin/sculpin',
		website: 'https://sculpin.io/',
	},
	{
		name: 'Second Crack',
		github: 'marcoarment/secondcrack',
	},
	{
		name: 'sessg',
		github: 'pachacamac/sessg',
		license: 'MIT',
		description: 'Simple Extendable Static Site Generator',
		is: Is.SSGenerator,
		language: 'JavaScript',
		extensible: true,
	},
	{
		name: 'serif',
		github: 'aprescott/serif',
	},
	{
		name: 'serious-chicken',
		github: 'rtorr/serious-chicken',
	},
	{
		name: 'Serve',
		github: 'jlong/serve',
		website: 'http://get-serve.com/',
	},
	{
		name: 'SG',
		github: 'maxailloud/SG',
	},
	{
		name: 'sg.py',
		github: 'venthur/sg',
		license: 'GPL-3.0',
	},
	{
		name: 'SGG',
		github: 'Charlesworth/SSG',
	},
	{
		name: 'shelob',
		github: 'rubyworks/shelob',
	},
	{
		name: 'Shinobi',
		website: 'https://shinobi.website/',
		language: 'Shell',
		license: 'MIT',
	},
	{
		name: 'Shire',
		github: 'sangupta/shire',
		license: 'Apache-2.0',
	},
	{
		name: 'Shonku',
		github: 'kushaldas/shonku',
		website: 'https://shonku.readthedocs.io/en/latest/',
	},
	{
		name: 'Silex',
		github: 'silexlabs/Silex',
	},
	{
		name: 'Simiki',
		github: 'tankywoo/simiki',
	},
	{
		name: 'Simple',
		github: 'isnowfy/simple',
	},
	{
		name: 'simple-static',
		github: 'wlangstroth/simple-static',
	},
	{
		name: 'simple-website',
		github: 'alexanderte/simple-website',
	},
	{
		name: 'simsalabash',
		github: 'markusfisch/simsalabash',
	},
	{
		name: 'Site builder',
		github: 'inanimatt/site-builder',
	},
	{
		name: 'Site builder console',
		github: 'efdummy/Site-builder-console',
	},
	{
		name: 'Site44',
		website: 'http://www.site44.com/',
		license: false,
		language: 'Web',
	},
	{
		name: 'SiteGen (Dart)',
		github: 'MikeMitterer/dart-sitegen',
		website: 'https://pub.dev/packages/sitegen',
		license: '(Apache-2.0 AND BSD-3-Clause)',
		description: 'Sitegenerator for Dart',
	},
	{
		name: 'Sitegen (MoonScript)',
		github: 'leafo/sitegen',
		license: 'MIT',
	},
	{
		name: 'sitio',
		github: 'fiatjaf/sitio',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Smallest Blogger',
		github: 'ranmocy/smallest-blogger',
	},
	{
		name: 'snowshoe',
		github: 'edvanbeinum/snowshoe',
		website: 'https://github.com/edvanbeinum/snowshoe',
	},
	{
		name: 'Soapbox',
		github: 'arnolddevos/Soapbox',
	},
	{
		name: 'Socrates',
		github: 'honza/socrates',
		website: 'http://honza.ca/socrates/',
	},
	{
		name: 'sortastatic',
		github: 'haldean/sortastatic',
	},
	{
		name: 'Speechhub',
		github: 'pythonmg/speechhub',
	},
	{
		name: 'Spelt',
		github: 'njdehoog/Spelt',
		is: Is.SSGenerator,
	},
	{
		name: 'SPG',
		github: 'AdamBien/spg',
	},
	{
		name: 'Sphinx',
		github: 'sphinx-doc/sphinx',
		website: 'https://www.sphinx-doc.org/en/master/',
		license: 'BSD-2-Clause',
	},
	{
		name: 'Spike',
		github: 'static-dev/spike',
	},
	{
		name: 'Spina',
		github: 'SpinaCMS/Spina',
	},
	{
		name: 'Spine',
		github: 'varl/spine',
	},
	{
		name: 'Spress',
		github: 'spress/Spress',
	},
	{
		name: 'Spring Board',
		github: 'htaidirt/SpringBoard',
		license: 'MIT',
	},
	{
		name: 'Squid',
		github: 'geekforbrains/squid',
	},
	{
		name: 'squido',
		website: 'https://squido.org',
		license: 'MIT',
		language: 'Node.js',
		github: 'mrvautin/squido',
		description: 'A dead simple static HTML website builder which can be hosted anywhere for super fast websites and very little effort.',
		created_at: '2021-04-23T15:46:08Z',
	},
	{
		name: 'Squirrel',
		github: 'nickpetty/squirrel',
	},
	{
		name: 'Stacey',
		github: 'kolber/stacey',
	},
	{
		name: 'Stacktic',
		github: 'bahiamartins/stacktic',
		defunct: true,
	},
	{
		name: 'Stadø',
		github: 'lecnim/stado',
		license: 'MIT',
	},
	{
		name: 'StaGen',
		github: 'wiztools/stagen',
	},
	{
		name: 'Stapy',
		website: 'https://www.stapy.net/',
		license: 'BSD-2-Clause',
		language: 'Python',
		description: 'A Static Site Generator that can generate a Website without a command line.',
	},
	{
		name: 'Stasis',
		github: 'winton/stasis',
	},
	{
		name: 'Stasis.clj',
		github: 'magnars/stasis',
		license: 'EPL-1.0',
	},
	{
		name: 'Statamic',
		website: 'https://statamic.com/',
		license: false,
		language: 'PHP',
		description:
			"The friendliest CMS you'll ever meet. Powered by flat files, your favorites content parsers, and the raw power of nature.",
	},
	{
		name: 'Stati',
		github: 'jfoucher/stati',
		website: 'https://github.com/jfoucher/stati',
		description:
			'A static site generator written in PHP that can work with any (most) existing Jekyll site, but can be easily extended in your (and my) favorite programming language, PHP!',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'static',
		github: 'nakkaya/static',
		license: 'EPL-1.0',
	},
	{
		name: 'Static Site Boilerplate',
		github: 'ericalli/static-site-boilerplate',
		is: Is.SSGenerator,
	},
	{
		name: 'Static Website Starter Kit',
		github: 'kriasoft/static-site-starter',
	},
	{
		name: 'static-io',
		github: 'CosAnca/static-io',
		language: 'JavaScript',
	},
	{
		name: 'Static-weber',
		github: 'xorpd/static_weber',
	},
	{
		name: 'static2000',
		github: 'judas-christ/static2000',
	},
	{
		name: 'staticjinja',
		github: 'Ceasar/staticjinja',
	},
	{
		name: 'StaticMatic',
		github: 'staticmatic/staticmatic',
	},
	{
		name: 'StaticMatic2',
		github: 'gilbert/staticmatic2',
	},
	{
		name: 'staticpress',
		github: 'ravinggenius/staticpress',
		license: 'MIT',
	},
	{
		name: 'staticpy',
		github: 'toddsifleet/staticpy',
	},
	{
		name: 'staticsite',
		github: 'trevorc/staticsite',
		license: 'BSD-3-Clause',
	},
	{
		name: 'Staticsmoothie',
		website:
			'https://github.com/johannesboyne/go_lab/tree/master/staticsmoothie',
		license: 'MIT',
		language: 'Go',
	},
	{
		name: 'StaticVolt',
		website: 'https://metacpan.org/pod/StaticVolt',
		license: 'Artistic-1.0-Perl',
		language: 'Perl',
	},
	{
		name: 'Statik',
		github: 'thanethomson/statik',
	},
	{
		name: 'Statix',
		website: 'https://gist.github.com/plugnburn/c2f7cc3807e8934b179e',
		language: 'Shell',
	},
	{
		name: 'Statocles',
		github: 'preaction/Statocles',
		license: 'Artistic-1.0-Perl',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Stog',
		github: 'zoggy/stog',
		website: 'http://zoggy.github.io/stog/',
	},
	{
		name: 'StrangeCase',
		github: 'colinta/StrangeCase',
	},
	{
		name: 'stratic',
		github: 'jaubourg/stratic',
	},
	{
		name: 'Striker',
		github: 'swaroopsm/striker',
	},
	{
		name: 'Surge',
		website: 'https://surge.sh',
		description:
			'Shipping web projects should be fast, easy, and low risk. Surge is static web publishing for Front-End Developers, right from the CLI.',
		is: Is.SSHost,
	},
	{
		name: 'Susi',
		github: 'AVGP/susi',
	},
	{
		name: 'SWG',
		github: 'evilsocket/SWG',
		website: 'https://pythonhosted.org/swg/',
	},
	{
		name: 'SWSG',
		github: 'derdon/swsg',
		website: 'http://derdon.github.io/swsg/',
	},
	{
		name: 'Szyslak',
		github: 'ido50/Szyslak',
	},
	{
		name: 'Tacot',
		bitbucket: 'harobed/tacot',
		license: 'MIT',
		language: 'Python',
	},
	{
		name: 'Tags',
		github: 'braceio/tags',
	},
	{
		name: 'Tagy',
		github: 'melnikov-ivan/tagy',
		license: 'MIT',
		description: 'Fully customizable structure and any params',
	},
	{
		name: 'Tahchee',
		github: 'sebastien/tahchee',
	},
	{
		name: 'Tapestry',
		github: 'tapestry-cloud/tapestry',
		website: 'https://www.tapestry.cloud',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Tarbell',
		github: 'tarbell-project/tarbell',
		website: 'http://www.tarbell.io/',
		license: 'MIT',
	},
	{
		name: 'tclog',
		website: 'http://wiki.tcl.tk/9148',
		license: 'BSD-3-Clause',
		language: 'Tcl',
		description:
			'Weblog generator with a GUI editor. Uploads entries via FTP. Features: RSS 1.0, HTML templates, TrackBack, wiki-like formatting, Namazu index creation.',
		created_at: '2003-03-17T00:00:00Z',
		testWebsite: false,
	},
	{
		name: 'Tclssg',
		github: 'tclssg/tclssg',
	},
	{
		name: 'Techy',
		github: 'krasimir/techy',
		website: 'http://krasimir.github.io/techy/',
		language: 'JavaScript',
	},
	{
		name: 'Templer',
		github: 'skx/templer',
		license: 'Artistic-1.0-Perl',
	},
	{
		name: 'Text Assembler',
		website: 'http://www.akiwi.co.uk/ta.html',
		license: false,
		language: 'JavaScript',
		description:
			'A static website generator written in C++ integrating the Google V8 Javascript engine',
	},
	{
		name: 'Thot',
		github: 'wmark/thot',
	},
	{
		name: 'Tinkerer',
		github: 'vladris/tinkerer',
		website: 'http://tinkerer.me/',
		license: 'BSD-2-Clause-FreeBSD',
	},
	{
		name: 'toto',
		github: 'cloudhead/toto',
	},
	{
		name: 'Tribo',
		github: 'CarterA/Tribo',
	},
	{
		name: 'trofaf',
		github: 'mna/trofaf',
	},
	{
		name: 'Ultra simple Site Maker',
		website: 'http://loup-vaillant.fr/projects/ussm/',
		license: 'GPL-3.0',
		language: 'Shell',
	},
	{
		name: 'Urubu',
		github: 'jandecaluwe/urubu',
		website: 'http://urubu.jandecaluwe.com',
		license: 'GPL-3.0',
	},
	{
		name: 'Utterson',
		github: 'pepijndevos/utterson',
		website: 'https://github.com/pepijndevos/utterson',
	},
	{
		name: 'Utterson',
		github: 'stef/utterson',
		website: 'https://github.com/stef/utterson',
	},
	{
		name: 'Uzu',
		github: 'scmorrison/uzu',
		website: 'https://uzluisf.github.io/uzu-demo-site/',
		language: 'Raku',
		description:
			'Uzu is a static site generator with built-in web server, file modification watcher, live reload, i18n, themes, multi-page support, inject external data via local Raku module, and external pre/post command execution. Uzu is a work in progress - it is functional and does a bunch of cool stuff, but it is not perfect.',
		extensible: true,
	},
	{
		name: 'vee',
		github: 'estrabd/vee',
	},
	{
		name: 'Vegetables',
		github: 'partageit/vegetables',
		website: 'http://partageit.github.io/vegetables/',
	},
	{
		name: 'vimwiki',
		github: 'vimwiki/vimwiki',
		license: 'MIT',
	},
	{
		name: 'Voldemort',
		github: 'semk/voldemort',
	},
	{
		name: 'volt',
		github: 'bow/volt',
		license: 'BSD-3-Clause',
	},
	{
		name: 'VoodooPad',
		website: 'https://www.voodoopad.com/',
		license: false,
		language: 'App',
		description:
			'MacOS/iOS application for editing notes. Has a static site publishing functionality extensible via JavaScript.',
	},
	{
		name: 'VuePress',
		github: 'vuejs/vuepress',
		website: 'https://vuepress.vuejs.org/',
		description: 'Vue-powered Static Site Generator',
		created_at: '2018-04-12T22:41:30Z',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'wadoo',
		github: 'alpacaaa/wadoo',
	},
	{
		name: 'Wallflower',
		github: 'book/App-Wallflower',
		website: 'https://metacpan.org/pod/wallflower',
		license: 'Artistic-1.0-Perl',
	},
	{
		name: 'Wanna',
		github: 'shaoshuai0102/wanna',
		defunct: true,
	},
	{
		name: 'Weaver',
		github: 'davidsiaw/weaver',
		website: 'http://davidsiaw.github.io/weaver-docs/',
	},
	{
		name: 'Webby',
		github: 'TwP/webby',
		license: 'MIT',
	},
	{
		name: 'webgen',
		github: 'gettalong/webgen',
		license: 'GPL-3.0',
	},
	{
		name: 'webgen',
		github: 'webgen-org/webgen',
	},
	{
		name: 'Webhook',
		github: 'webhook/webhook',
	},
	{
		name: 'Websleydale',
		github: 'kalgynirae/websleydale',
	},
	{
		name: 'Wheat',
		github: 'creationix/wheat',
	},
	{
		name: 'Wikismith',
		github: 'wikismith/wikismith',
		license: 'MIT',
	},
	{
		name: 'Wintersmith',
		github: 'jnordberg/wintersmith',
	},
	{
		name: 'wok',
		github: 'mythmon/wok',
	},
	{
		name: 'Woods',
		github: 'paperjs/woods',
	},
	{
		name: 'wordsister',
		github: 'kaihendry/wordsister',
		license: 'MIT',
	},
	{
		name: 'WP2Static',
		github: 'WP2Static/wp2static',
		is: Is.SSExporter,
	},
	{
		name: 'WPWMM4',
		github: 'uzsolt/wpwmm4',
		language: 'Makefile, m4',
		is: Is.SSGenerator,
		extensible: true,
	},
	{
		name: 'Wyam',
		github: 'Wyamio/Wyam',
	},
	{
		name: 'Yana',
		github: 'dariubs/yana',
		license: 'MIT',
	},
	{
		name: 'yassg',
		github: 'sma/yassg',
		license: 'BSD-3-Clause',
	},
	{
		name: 'Yellow',
		github: 'datenstrom/yellow',
	},
	{
		name: 'Yggdrasil',
		website: 'http://www.psyke.org/yggdrasil/',
		license: 'GPL-2.0',
		language: 'Perl',
		created_at: '2002-07-17T00:00:00.000Z',
		updated_at: '2003-10-19T00:00:00.000Z',
	},
	{
		name: 'Yozuch',
		github: 'akrylysov/yozuch',
	},
	{
		name: 'yst',
		github: 'jgm/yst',
	},
	{
		name: 'zas',
		github: 'imdario/zas',
	},
	{
		name: 'ZenWeb',
		github: 'seattlerb/zenweb',
		website: 'https://www.zenspider.com/projects/zenweb.html',
		license: 'MIT',
	},
	{
		name: 'Zine',
		github: 'mikekreuzer/zine',
		is: Is.SSGenerator,
	},
	{
		name: 'zodiac',
		github: 'nuex/zodiac',
	},
	{
		name: 'zola',
		github: 'getzola/zola',
		website: 'https://www.getzola.org',
		description:
			'Your one-stop static site engine. Forget dependencies. Everything you need in one binary. Previously called Gutenberg until WordPress took the name.',
		created_at: '2016-12-06T13:51:00+08:00',
		updated_at: '2020-09-28T00:00:00+08:00',
		is: Is.SSGenerator,
	},
	{
		name: 'Zucchini',
		website: 'https://metacpan.org/pod/Zucchini',
		license: 'Artistic-1.0-Perl',
		language: 'Perl',
	},
	{
		name: 'Log4brains',
		github: 'thomvaill/log4brains',
		description:
			'Docs-as-code knowledge base to manage Architecture Decision Records (ADR) for your project and publish them automatically as a static website.',
		license: 'Apache-2.0',
		language: 'JavaScript',
		created_at: '2020-12-11T13:00:00+01:00',
		updated_at: '2020-12-11T13:00:00+01:00',
		is: Is.SSGenerator,
	},
]
export default rawList
