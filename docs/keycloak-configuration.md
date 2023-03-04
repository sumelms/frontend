# Configure Keycloak using file import

To configure the realm by importing the configuration file: `frontend/keycloak/sume.json`, you will need to follow the steps below:

1. Run the Keycloak image without informing the environment variable to import the config file.

```sh
$ podman run -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  quay.io/keycloak/keycloak:18.0.2 \
  start-dev
```

2. Access the Keycloak admin interface to import the configuration

To configure you should be able to visit the URL:

```
  ➜  Keycloak Admin:   http://localhost:8080/admin

  USER: admin
  PASSWORD: admin
```

3. After logging into the admin interface, navigate to the interface to import the configuration file by clicking on the `add realm` link located in the sidebar → dropdown menu under the title in the sidebar.

![Image](./assets/menu-add-realm.png?raw=true)

4. Import and configure the realm

- Import the configuration file located on [frontend/keycloak/sume.json](https://github.com/sumelms/frontend/blob/main/keycloak/sume.json) by clicking on the select file button;
- After successfully importing the file, check the import details. The Name should be `sume,` and the Enabled option should be selected as `on.` You can also visualize the details of the imported file by clicking on `view details.
- Click on the `create` button to finish the configuration and create the realm according to the imported file.

![Image](./assets/sume_config.png?raw=true)

5. Change your .env file to use the Keycloak on your machine and restart the application.

```.sh
REACT_APP_KEYCLOAK_URL=http://localhost:8080
```

After change the env variable run

```.sh
yarn start
```
