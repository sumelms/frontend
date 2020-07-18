<p align="center">
  <a href="http://www.sumelms.com">
    <img src=".github/sumelms.png" />
  </a>
</p>

<p align="center">
  <a href="https://travis-ci.com/sumelms/frontend">
    <img alt="Travis (.org)" src="https://travis-ci.com/sumelms/frontend.svg?token=MN3cHwnz3mjsieVHKzbs&branch=main">
  </a>
  <a href="https://codecov.io/gh/sumelms/frontend">
    <img src="https://codecov.io/gh/sumelms/frontend/branch/main/graph/badge.svg?token=OIC51X2RE2" />
  </a>
  <img alt="GitHub" src="https://img.shields.io/github/license/sumelms/frontend">
  <a href="https://discord.gg/Yh9q9cd">
    <img alt="Discord" src="https://img.shields.io/discord/726500188021063682">
  </a>
</p>

## About Sumé LMS

> Note: This repository contains the web application of the Sumé LMS. If you are looking for more information about the application, we strongly recommend you to [check the documentation](https://www.sumelms.com/docs).

Sumé LMS is a modern and open-source learning management system that uses modern technologies to deliver performance and scalability to your learning environment.

  * Compatible with SCORM and xAPI (TinCan)
  * Flexible and modular
  * Open-source and Free
  * Fast and modern
  * Easy to install and run
  * Designed for microservices
  * REST API based application
  * and more.

----

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Commands](#commands)
- [Tests E2E](#tests-e2e)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [Team](#team)
- [Support](#support)
- [License](#license)

## Prerequisites

[node v12.16.3](https://nodejs.org/en/download/releases/)

## Setup

Install the dependencies

```.sh
$ yarn install
```

Compile all translations

```.sh
$ yarn generate:translations
```

Running the app
```.sh
$ yarn start
```

## Commands


Build the app

```.sh
$ yarn build
```

## Tests E2E
 - [Cypress](https://www.cypress.io/)
 - [Cypress Examples](https://example.cypress.io/)
 - [Cypress Recipes](https://github.com/cypress-io/cypress-example-recipes#fundamentals)
 - [Cypress TypeScript](https://docs.cypress.io/guides/tooling/typescript-support.html#Configure-tsconfig-json)


### Tests E2E commands

Verify that Cypress is installed correctly and is executable.

```.sh
$ npm run cy:verify

# or

$ yarn cy:verify
```

Runs Cypress tests to completion.
```.sh
$ npm run test:e2e:run

# or

$ yarn test:e2e:run
```

Opens the Cypress Test Runner.
```.sh
$ npm run test:e2e:open

# or

$ yarn test:e2e:open
```

Runs tests E2E to CI.
```.sh
$ npm run test:e2e:ci

# or

$ yarn test:e2e:ci
```

## Contributing

Thank you for considering contributing to the project. In order to ensure that the Sumé LMS community is welcome to all make sure to read our [Contributor Guideline](https://www.sumelms.com/docs/ontributing).

## Code of Conduct

@TODO

## Team

@TODO

## Support

@TODO

## License

This project is licensed by the Apache License 2.0. For more information check the LICENSE file.

