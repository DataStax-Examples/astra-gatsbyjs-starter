<!--- STARTEXCLUDE --->
# Astra DB and Gatsby.js Starter
*30 minutes, Beginner, [Start Building](https://github.com/DataStax-Examples/astra-gatsbyjs-starter#quick-start)*

Create a React.js, Gatsby application that reads data from [DataStax Astra DB](https://dtsx.io/3BEQp7R) using GraphQL.
<!--- ENDEXCLUDE --->

![image](https://raw.githubusercontent.com/DataStax-Examples/astra-gatsbyjs-starter/master/hero.png)

## Quick Start
<!--- STARTEXCLUDE --->
* [Signup for DataStax Astra](https://dtsx.io/3BEQp7R), or login to your already existing account. 
* [Create an Astra DB Database](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db) if you don't already have one.
<!--- ENDEXCLUDE --->
* [Create an Astra DB Keyspace](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-astra-db-keyspace) called `sag_gatsby_starter` in your database.
* [Generate an Application Token](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#create-an-application-token) with the role of `Database Administrator` for the Organization that your Astra DB is in.
* Click the 'Open in Gitpod' link: [![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/astra-gatsbyjs-starter)
* Once the app is finished launching in the Gitpod IDE, copy the `env.example` file to a file named `.env` and fill the required values in from your Application Token and [Astra DB connection settings](https://github.com/DataStax-Examples/sample-app-template/blob/master/GETTING_STARTED.md#get-your-astra-db-connection-settings).
* Start the example by running `npm run develop` in the Gitpod console.

## Objectives
* Provide a development example using GraphQL with Astra DB as the storage backend.

## How this works
Once the Astra DB credentials are provided, Gatsby can connect to your Astra DB's GraphQL endpoint. The webservice will be available on port 8080 once the application has been deployed.

[Gatsby](https://www.gatsbyjs.org/) is a React-based, GraphQL powered, static site generator, with much of the functionality of a modern front-end framework. It brings together the best components of React, webpack, react-router, GraphQL, and other front-end tools. This is used to generate the application.
