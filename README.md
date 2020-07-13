# frontend
The Sumé LMS Front-end repository.


---

## Tests e2e
 - [Cypress](https://www.cypress.io/)
 - [Cypress Examples](https://example.cypress.io/)
 - [Cypress Recipes](https://github.com/cypress-io/cypress-example-recipes#fundamentals)
 - [Cypress TypeScript](https://docs.cypress.io/guides/tooling/typescript-support.html#Configure-tsconfig-json)


### Tests E2E commands

Verify that Cypress is installed correctly and is executable.
```.sh
$ npm run cy:verify
```

Runs Cypress tests to completion.
```.sh
$ npm run test:e2e:run
```

Opens the Cypress Test Runner.
```.sh
$ npm run test:e2e:open
```

Runs tests E2E to CI.
```.sh
$ npm run test:e2e:ci
```