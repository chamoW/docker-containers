# Keycloak #
* This is a Spring boot application for practicing all about Oauth 2.0 using keycloak.
* Version: 1.0.0-SNAPSHOT


## Project stack
* Maven
* Java 11
* Spring boot 2.7.11
* keycloak lastest


## Set up on local environment
You can create a keycloak docker container following these steps:

### 1.  Copy the templates
1.1 Please copy the file *.env_template*

1.2 After you copy the file, please erase *_template* from the copied names
>For example: .env_template the copy will be .env

1.3 Set the properties values

1.4 Happy coding !!! 🚀


### 2. Steps to build the application
2.1. You must have docker and task configurated on your local environment

2.1.1. Please execute the command:
```console
docker compose-up
```
2.1.2. If you use the configuration in Taskfile.yml, please execute the command:
```console
task docker-compose-up
```
2.3. By default the application runs on 7080 port (*configurated in docker-compose.yml file*) [http://localhost:7080](http://localhost:7080)


## Configuration
You must configure the following system properties; all these properties are secret.
Env                                     | Description
----------------------------------------|---------------------------------------------------
KEYCLOAK_ADMIN                          | Key cloak administrator user
KEYCLOAK_ADMIN_PASSWORD                 | Key cloak administrator password
KC_DB                                   | The database provider 
KC_DB_URL                               | The URL to connect to a Posgres database
KC_DB_USERNAME                          | The user to connect to a Postgres database
KC_DB_PASSWORD                          | The password to connect to a Postgres database
KC_HOSTNAME                             | The hostname where keycloak will be invoked

