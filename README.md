simple-mvc-basket
=================

IMPLICIT CONVENTIONS:
__ double underscore method prefixes denote private methods
_ single underscore method prefixes denote protected methods

RUN:
open index.html under gorkana-test root directory in a browser

REQUIREMENTS:
internet connection as both jQuery and QUnit are pulled in as CDN resources

EXTERNAL LIBRARIES
events.js is copied from Backbone.js library (slightly modified)

ASSUMPTIONS:
1. The description is always unique (otherwise more complex logic to support multiple items with the same description is needed

TODO:
1. Full QUnit test coverage (using Sinon.js for mocks / stubs / spies) is required
2. Values in the view layer should be always updated from changes coming from the model only, but don't have time to implement
3. Add require js and order plugin for it
4. Choose on which is the preferred objects / class structure within the company and refactor as appropriate:
  - Object Literal Pattern / Singleton
  - Module Pattern
  - Constructor Pattern
  - Other forms of Classical / Prototypal Inheritance structures TBC
  5. More explicit directory structure inside the view could be added - e.g. view/page to hold basketView.js and view/partials - to hold itemCountView.js and itemView.js or others
