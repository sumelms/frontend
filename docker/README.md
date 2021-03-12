# Development auth server

To authenticate users into the Sumé LMS frontend we need first to start an authentication server.

To start it you can use the command bellow in this folder.

```sh
docker-compose -f docker-compose-dev-auth.yml up
```

This will fire a Keycloak server on port 8080 with some basic setup.

Some test users are included in this basic setup. Here they are:

| Username | Role    | Name    | E-mail              | Password |
| -------- | ------- | ------- | ------------------- | -------- |
| admin    | Admin   | Admin   | admin@sumelms.com   | sume123  |
| teacher  | Teacher | Teacher | teacher@sumelms.com | sume123  |
| student  | Student | Student | student@sumelms.com | sume123  |

After that, you can start the development server as with `yarn start` in the project root folder.

The frontend will redirect the application to the Keycloak login screem. And you can use one of the users above to enter in App.

The Keyckoak admin interface is gonna be available at port 8080 too. You can access it at [http://localhost:8080](http://localhost:8080)

For more information on Keycloak please visit [https://www.keycloak.org/](https://www.keycloak.org/)
