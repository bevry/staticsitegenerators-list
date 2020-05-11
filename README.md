<!-- TITLE/ -->

<h1>Static Site Generators Listing</h1>

<!-- /TITLE -->


<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.com/bevry/staticsitegenerators-list" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/com/bevry/staticsitegenerators-list/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/staticsitegenerators" title="View this project on NPM"><img src="https://img.shields.io/npm/v/staticsitegenerators.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/staticsitegenerators" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/staticsitegenerators.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/bevry/staticsitegenerators-list" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/bevry/staticsitegenerators-list.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/bevry/staticsitegenerators-list#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/bevry/staticsitegenerators-list.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<!-- /BADGES -->


<!-- DESCRIPTION/ -->

A comprehensive, partially automatically generated comparison of static site generators with some minimal meta data about them

<!-- /DESCRIPTION -->


-   [View the source listing](https://github.com/bevry/staticsitegenerators-list/blob/master/source/list.ts) | [Edit the source listing](https://github.com/bevry/staticsitegenerators-list/edit/master/source/list.ts)
-   [View the raw JSON listing](https://staticsitegenerators.net/raw.json)
-   [View the rendered JSON listing](https://staticsitegenerators.net/list.json)
-   [View the website](http://staticsitegenerators.net) | [View the website source](https://github.com/bevry/staticsitegenerators-website)

## Contributing

### Requirements

There are generally three types of Content Management Systems:

1. Dynamic Servers (e.g. WordPress, Ghost, DocPad, Harp) — these allow you to have re-render on every request abilities
2. Flat File Content Management Systems (e.g. Yellow, Techy) — these allow you to write your content as files
3. Static Site Generators (e.g. Jekyll, DocPad) — these generate a static website from your input that you can deploy anywhere

Currently, this listing is only for projects that relate to Flat File Content Management Systems and/or Static Site Generators, but not for projects which relate only to Dynamic Servers (such as WordPress and Ghost).

### Adding

Entries are stored within the [`source/list.ts` file](https://github.com/bevry/staticsitegenerators-list/blob/master/source/list.ts).

Entries must conform to the [`RawEntry` type](http://master.staticsitegenerators-list.bevry.surge.sh/docs/interfaces/rawentry).

### Testing

When you submit your pull request, your submission will be automatically tested, so no need to test locally, however if you do wish to, you can:

1. Install [Node.js](https://learn.bevry.me/node/install) (5-15 minutes)

1. Fork the project and clone your fork - [guide](https://help.github.com/articles/fork-a-repo/) (5 minutes)

1. Install local dependencies (1 minute)

    ```bash
    npm install
    ```

1. Running the tests (1 minute)

    ```bash
    npm test
    ```

1. Make any changes that the tests indicate, commit your changes, and submit

## Usage

[Complete API Documentation.](http://master.staticsitegenerators.bevry.surge.sh/docs/globals.html)

Using the npm package is done like so:

```javascript
const listing = require('staticsitegenerators')

// get the hydrated data
console.log(listing.hydrated)

// get the raw data
console.log(listing.raw)
```

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/bevry/staticsitegenerators-list/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->


<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="http://jaspervdj.be">Jasper Van der Jeugt</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=jaspervdj" title="View the GitHub contributions of Jasper Van der Jeugt on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/balupton">Benjamin Lupton</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/davisonio">Craig Davison</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=davisonio" title="View the GitHub contributions of Craig Davison on repository bevry/staticsitegenerators-list">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-githubsponsors"><a href="https://github.com/sponsors/balupton" title="Donate to this project using GitHub Sponsors"><img src="https://img.shields.io/badge/github-donate-yellow.svg" alt="GitHub Sponsors donate button" /></a></span>
<span class="badge-patreon"><a href="https://patreon.com/bevry" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/balupton" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/bevry" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-buymeacoffee"><a href="https://buymeacoffee.com/balupton" title="Donate to this project using Buy Me A Coffee"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg" alt="Buy Me A Coffee donate button" /></a></span>
<span class="badge-opencollective"><a href="https://opencollective.com/bevry" title="Donate to this project using Open Collective"><img src="https://img.shields.io/badge/open%20collective-donate-yellow.svg" alt="Open Collective donate button" /></a></span>
<span class="badge-crypto"><a href="https://bevry.me/crypto" title="Donate to this project using Cryptocurrency"><img src="https://img.shields.io/badge/crypto-donate-yellow.svg" alt="crypto donate button" /></a></span>
<span class="badge-paypal"><a href="https://bevry.me/paypal" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>
<span class="badge-wishlist"><a href="https://bevry.me/wishlist" title="Buy an item on our wishlist for us"><img src="https://img.shields.io/badge/wishlist-donate-yellow.svg" alt="Wishlist browse button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://jaspervdj.be">Jasper Van der Jeugt</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=jaspervdj" title="View the GitHub contributions of Jasper Van der Jeugt on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/balupton">Benjamin Lupton</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=balupton" title="View the GitHub contributions of Benjamin Lupton on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/davisonio">Craig Davison</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=davisonio" title="View the GitHub contributions of Craig Davison on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/LomigLavnek">Lomig Lavnek</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=LomigLavnek" title="View the GitHub contributions of Lomig Lavnek on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/SurajShukla">Suraj Shukla</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=SurajShukla" title="View the GitHub contributions of Suraj Shukla on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://stoneship.org/">Denis Defreyne</a></li>
<li><a href="https://github.com/ipavl">ipavl</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=ipavl" title="View the GitHub contributions of ipavl on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/klml">Klaus Mueller</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=klml" title="View the GitHub contributions of Klaus Mueller on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://japh.com.au">Japh</a></li>
<li><a href="https://github.com/mixu">Mikito Takada</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=mixu" title="View the GitHub contributions of Mikito Takada on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/dbohdan">dbohdan</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=dbohdan" title="View the GitHub contributions of dbohdan on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://tuxproject.de">Cthulhux</a></li>
<li><a href="https://github.com/davidsiaw">David Siaw</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=davidsiaw" title="View the GitHub contributions of David Siaw on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/wikismith">Jeffrey Hicks</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=wikismith" title="View the GitHub contributions of Jeffrey Hicks on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/mblayman">Matt Layman</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=mblayman" title="View the GitHub contributions of Matt Layman on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://appernetic.io">goransv</a></li>
<li><a href="https://github.com/vikrantrathore">vikrantrathore</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=vikrantrathore" title="View the GitHub contributions of vikrantrathore on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://narno.org">Arnaud Ligny</a></li>
<li><a href="https://github.com/solderjs">AJ ONeal</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=solderjs" title="View the GitHub contributions of AJ ONeal on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/tak1n">Benjamin Klotz</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=tak1n" title="View the GitHub contributions of Benjamin Klotz on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/juanbrujo">Jorge Epuñan</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=juanbrujo" title="View the GitHub contributions of Jorge Epuñan on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/koistya">Konstantin Tarkus</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=koistya" title="View the GitHub contributions of Konstantin Tarkus on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://datenstrom.se">Mark Seuffert</a></li>
<li><a href="https://github.com/MoOx">Max Thirouin</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=MoOx" title="View the GitHub contributions of Max Thirouin on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/pawandubey">Pawan Dubey</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=pawandubey" title="View the GitHub contributions of Pawan Dubey on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/yaph">Ramiro Gómez</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=yaph" title="View the GitHub contributions of Ramiro Gómez on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/RobLoach">Rob Loach</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=RobLoach" title="View the GitHub contributions of Rob Loach on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/kelindar">Roman Atachiants</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=kelindar" title="View the GitHub contributions of Roman Atachiants on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/lesaff">Rudy Affandi</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=lesaff" title="View the GitHub contributions of Rudy Affandi on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/micrypt">Seyi Ogunyemi</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=micrypt" title="View the GitHub contributions of Seyi Ogunyemi on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://www.dte.web.id">Taufik Nurrohman</a></li>
<li><a href="https://github.com/tomtom">Tom Link</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=tomtom" title="View the GitHub contributions of Tom Link on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/wcaleb">W. Caleb McDaniel</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=wcaleb" title="View the GitHub contributions of W. Caleb McDaniel on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/harijsm">harijs.me</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=harijsm" title="View the GitHub contributions of harijs.me on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/jandecaluwe">jandecaluwe</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=jandecaluwe" title="View the GitHub contributions of jandecaluwe on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/Kwpolska">Chris Warrick</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=Kwpolska" title="View the GitHub contributions of Chris Warrick on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="www.isnowfy.com">Rui Wang</a></li>
<li><a href="https://github.com/bomberstudios">Ale Muñoz</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=bomberstudios" title="View the GitHub contributions of Ale Muñoz on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://razbakov.com/">Aleksey Razbakov</a></li>
<li><a href="https://github.com/lexoyo">Alex Hoyau</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=lexoyo" title="View the GitHub contributions of Alex Hoyau on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/opoo">Alex Lin</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=opoo" title="View the GitHub contributions of Alex Lin on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/pierogitus">Alex Thompson</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=pierogitus" title="View the GitHub contributions of Alex Thompson on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/agonzalezro">Alexandre González</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=agonzalezro" title="View the GitHub contributions of Alexandre González on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/agrison">Alexandre Grison</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=agrison" title="View the GitHub contributions of Alexandre Grison on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/rudyryk">Alexey Kinev</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=rudyryk" title="View the GitHub contributions of Alexey Kinev on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://amitu.com/">Amit Upadhyay</a></li>
<li><a href="https://github.com/Aisbergg">Aisbergg</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=Aisbergg" title="View the GitHub contributions of Aisbergg on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/andrewjamesmurray">Andrew Murray</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=andrewjamesmurray" title="View the GitHub contributions of Andrew Murray on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/andrewmallis">Andrew_Mallis</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=andrewmallis" title="View the GitHub contributions of Andrew_Mallis on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/rhukster">Andy Miller</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=rhukster" title="View the GitHub contributions of Andy Miller on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/ankushg">Ankush Gupta</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=ankushg" title="View the GitHub contributions of Ankush Gupta on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/anthonny">Anthonny Quérouil</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=anthonny" title="View the GitHub contributions of Anthonny Quérouil on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/podviaznikov">Anton Podviaznikov</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=podviaznikov" title="View the GitHub contributions of Anton Podviaznikov on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/anton-iarchuk-sysgears">Anton Iarchuk</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=anton-iarchuk-sysgears" title="View the GitHub contributions of Anton Iarchuk on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/akrylysov">Artem Krylysov</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=akrylysov" title="View the GitHub contributions of Artem Krylysov on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/arty-name">Artemy Tregubenko</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=arty-name" title="View the GitHub contributions of Artemy Tregubenko on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://www.0x743.com">Brett Estrade</a></li>
<li><a href="https://github.com/barryclark">Barry Clark</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=barryclark" title="View the GitHub contributions of Barry Clark on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/grv87">Basil Peace</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=grv87" title="View the GitHub contributions of Basil Peace on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/venthur">Bastian Venthur</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=venthur" title="View the GitHub contributions of Bastian Venthur on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/zoobab">Benjamin Henrion</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=zoobab" title="View the GitHub contributions of Benjamin Henrion on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/0xxon">Johanna</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=0xxon" title="View the GitHub contributions of Johanna on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/whump">Bill Humphries</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=whump" title="View the GitHub contributions of Bill Humphries on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/boscoh">Bosco Ho</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=boscoh" title="View the GitHub contributions of Bosco Ho on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://byronkellett.github.io">Byron Kellett</a></li>
<li><a href="https://github.com/bullpizzle">Byron LK</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=bullpizzle" title="View the GitHub contributions of Byron LK on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://celehner.com/">Charles Lehner</a></li>
<li><a href="https://github.com/xrd">Chris Dawson</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=xrd" title="View the GitHub contributions of Chris Dawson on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/AdamBien">Adam Bien</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=AdamBien" title="View the GitHub contributions of Adam Bien on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/kalgynirae">Colin Chan</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=kalgynirae" title="View the GitHub contributions of Colin Chan on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/elaOnMars">Daniela Knoll</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=elaOnMars" title="View the GitHub contributions of Daniela Knoll on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/imdario">Dario Castañé</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=imdario" title="View the GitHub contributions of Dario Castañé on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/daveaglick">Dave Glick</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=daveaglick" title="View the GitHub contributions of Dave Glick on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/snide">Dave Snider</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=snide" title="View the GitHub contributions of Dave Snider on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/caldwell">David Caldwell</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=caldwell" title="View the GitHub contributions of David Caldwell on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/eads">David Eads</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=eads" title="View the GitHub contributions of David Eads on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/robogeek">David Herron</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=robogeek" title="View the GitHub contributions of David Herron on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/Xeoncross">David Pennington</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=Xeoncross" title="View the GitHub contributions of David Pennington on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/denisftw">Denis</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=denisftw" title="View the GitHub contributions of Denis on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/deber">Denis Bernard</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=deber" title="View the GitHub contributions of Denis Bernard on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/denis-soundcloud">Denis Defreyne</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=denis-soundcloud" title="View the GitHub contributions of Denis Defreyne on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/preaction">Doug Bell</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=preaction" title="View the GitHub contributions of Doug Bell on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/aaemnnosttv">Evan Mattson</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=aaemnnosttv" title="View the GitHub contributions of Evan Mattson on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/esonderegger">Evan Sonderegger</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=esonderegger" title="View the GitHub contributions of Evan Sonderegger on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/g4b1nagy">Gabi Nagy</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=g4b1nagy" title="View the GitHub contributions of Gabi Nagy on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/gar1t">Garrett Smith</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=gar1t" title="View the GitHub contributions of Garrett Smith on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/shapeshed">George Ornbo</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=shapeshed" title="View the GitHub contributions of George Ornbo on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/mhlakhani">Hasnain Lakhani</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=mhlakhani" title="View the GitHub contributions of Hasnain Lakhani on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://imelnikov.ru">Ivan Melnikov</a></li>
<li><a href="http://www.janpecha.cz/">Jan Pecha</a></li>
<li><a href="http://grow.io">Jeremy Weinstein</a></li>
<li><a href="http://jex.im/">Jex</a></li>
<li><a href="http://campbell.fm">Jim Campbell</a></li>
<li><a href="http://www.m0ngr31.us">Joe Ipson</a></li>
<li><a href="http://boyne.tech/">Johannes Boyne</a></li>
<li><a href="http://genehack.org">John SJ Anderson</a></li>
<li><a href="https://github.com/johngtait">John Tait</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=johngtait" title="View the GitHub contributions of John Tait on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/jonschlinkert">Jon Schlinkert</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=jonschlinkert" title="View the GitHub contributions of Jon Schlinkert on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://jonathanbullock.com">Jonathan Bullock</a></li>
<li><a href="Saint Aardvark the Carpeted) <aardvark@saintaardvarkthecarpeted.com> (http://saintaardvarkthecarpeted.com">Hugh Brown</a></li>
<li><a href="http://git.alanpearce.uk">Alan Pearce</a></li>
<li><a href="https://github.com/alexchopin">Alexandre Chopin</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=alexchopin" title="View the GitHub contributions of Alexandre Chopin on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://git-ssb.celehner.com/%40f%2F6sQ6d2CMxRUhLpspgGIulDxDCwYD7DzFzPNr7u5AU%3D.ed25519">Charles Lehner</a></li>
<li><a href="https://github.com/datagrok">Michael F. Lamb</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=datagrok" title="View the GitHub contributions of Michael F. Lamb on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/vokeio">Alexander Elias</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=vokeio" title="View the GitHub contributions of Alexander Elias on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/clehner">Charles Lehner</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=clehner" title="View the GitHub contributions of Charles Lehner on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://igapyon.github.io/diary/">Toshiki Iga</a></li>
<li><a href="https://github.com/ddfreyne">Denis Defreyne</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=ddfreyne" title="View the GitHub contributions of Denis Defreyne on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/wifiextender">wifiextender</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=wifiextender" title="View the GitHub contributions of wifiextender on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://mayberg.se">Mark Seuffert</a></li>
<li><a href="https://github.com/MinchinWeb">MinchinWeb</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=MinchinWeb" title="View the GitHub contributions of MinchinWeb on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/kambrium">kambrium</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=kambrium" title="View the GitHub contributions of kambrium on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://alanpearce.uk">Alan Pearce</a></li>
<li><a href="https://github.com/estrabd">___^___</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=estrabd" title="View the GitHub contributions of ___^___ on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/byrondev">Byron LK</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=byrondev" title="View the GitHub contributions of Byron LK on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/jevets">Steve Jamesson</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=jevets" title="View the GitHub contributions of Steve Jamesson on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/beudbeud">Adrien Beudin</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=beudbeud" title="View the GitHub contributions of Adrien Beudin on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/cjbrooks12">Casey Brooks</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=cjbrooks12" title="View the GitHub contributions of Casey Brooks on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/Manvel">Manvel Saroyan</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=Manvel" title="View the GitHub contributions of Manvel Saroyan on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://latitudu.tk">Taufik Nurrohman</a></li>
<li><a href="https://github.com/Japh">Japh</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=Japh" title="View the GitHub contributions of Japh on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://www.alanpearce.eu">Alan Pearce</a></li>
<li><a href="https://github.com/gflohr">Guido Flohr</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=gflohr" title="View the GitHub contributions of Guido Flohr on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/fiatjaf">fiatjaf</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=fiatjaf" title="View the GitHub contributions of fiatjaf on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/igapyon">Toshiki Iga</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=igapyon" title="View the GitHub contributions of Toshiki Iga on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/amitu">Amit Upadhyay</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=amitu" title="View the GitHub contributions of Amit Upadhyay on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/dertuxmalwieder">Cthulhux</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=dertuxmalwieder" title="View the GitHub contributions of Cthulhux on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/Narno">Arnaud Ligny</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=Narno" title="View the GitHub contributions of Arnaud Ligny on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="http://www.ceriously.com">Steven</a></li>
<li><a href="https://github.com/markseu">Mark Seuffert</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=markseu" title="View the GitHub contributions of Mark Seuffert on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/ericalli">Eric Alli</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=ericalli" title="View the GitHub contributions of Eric Alli on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/ByronKellett">Byron Kellett</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=ByronKellett" title="View the GitHub contributions of Byron Kellett on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/davisonio">Craig Davison</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=davisonio" title="View the GitHub contributions of Craig Davison on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/taufik-nurrohman">Taufik Nurrohman</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=taufik-nurrohman" title="View the GitHub contributions of Taufik Nurrohman on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/styfle">Steven</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=styfle" title="View the GitHub contributions of Steven on repository bevry/staticsitegenerators-list">view contributions</a></li>
<li><a href="https://github.com/saintaardvark">Hugh Brown</a> — <a href="https://github.com/bevry/staticsitegenerators-list/commits?author=saintaardvark" title="View the GitHub contributions of Hugh Brown on repository bevry/staticsitegenerators-list">view contributions</a></li></ul>

<a href="https://github.com/bevry/staticsitegenerators-list/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->


<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2013+ <a href="http://bevry.me">Bevry Pty Ltd</a></li>
<li>Copyright &copy; 2013 <a href="http://jaspervdj.be">Jasper Van der Jeugt</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/Unlicense.html">The Unlicense</a></li></ul>

<!-- /LICENSE -->
