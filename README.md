# Astra/Gatsby.js Starter
A sample React, Typescript, [DataStax Astra](https://astra.datastax.com/register), Gatsby.js app starter app.

Contributor: [Alex Leventer](https://github.com/alexleventer)

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/astra-gatsbyjs-starter) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DataStax-Examples/astra-gatsbyjs-starter)

## Objectives
* Provide a fullstack development example using GraphQL with Astra as the storage backend.

## How this works
Once the Astra credentials are provided, the necessary tables are created in the database. The webservice will be available on port 8080 once the application has been deployed.

This example uses Typescript. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, and adds optional static typing to the language. It is is designed for development of large applications and transcompiles to JavaScript.

[Gatsby](https://www.gatsbyjs.org/) is a React-based, GraphQL powered, static site generator, with much of the functionality of a modern front-end framework. It brings together the best components of React, webpack, react-router, GraphQL, and other front-end tools. This is used to generate the application.

Deploying a static web application on [Netlify](https://www.netlify.com/) allows us to reap the benefits and not having to rely on our own webserver; it will also handle the Astra user credentials for us.

## 🚀 Getting Started Paths:
1. [Run the app locally](#running-on-your-local-machine)
2. [Run the app on Gitpod](#running-on-gitpod)
3. [Deploy the app to Netlify](#deploying-to-netlify)

### Running on your local machine
1. Create a [DataStax Astra account](https://astra.datastax.com/register) and free-tier Cassandra database:
![image](https://user-images.githubusercontent.com/3254549/88737275-c938f080-d0ed-11ea-8273-f547da8ef9e6.png)
2. Click 'Use this template' at the top of the README:
![image](https://user-images.githubusercontent.com/3254549/88746600-c3e5a100-d101-11ea-90a4-6fbd9873f2df.png)
3. Enter a repository name and click 'Create repository from template':
![image](https://user-images.githubusercontent.com/3254549/88746670-eb3c6e00-d101-11ea-9b7c-f9e83c754be5.png)
4. Clone the repository:
![image](https://user-images.githubusercontent.com/3254549/88746708-01e2c500-d102-11ea-9b25-174a45ef8545.png)
5. Install Node dependencies with [Yarn](https://yarnpkg.com/): `yarn install` (Alternatively, use npm: `npm install`)
6. Run the set up script: ` . ./gitpod-setup.sh`
7. Start your app by running: `yarn start`(If using npm: `npm start`)
8. You can view your app at  http://localhost:8000/:
![image](https://user-images.githubusercontent.com/3254549/88751025-9e5d9500-d10b-11ea-9776-3276ada4fece.png)

### Running on Gitpod
1. Create a [DataStax Astra account](https://astra.datastax.com/register) and free-tier Cassandra database:
![image](https://user-images.githubusercontent.com/3254549/88737275-c938f080-d0ed-11ea-8273-f547da8ef9e6.png)
2. Click the 'Open in Gitpod link':

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/DataStax-Examples/astra-gatsbyjs-starter)

3. Wait for your Gitpod workspace to start:
![image](https://user-images.githubusercontent.com/3254549/88744125-5171c280-d0fb-11ea-9676-de4589e42589.png)
4. Set your Astra credentials in the Gitpod terminal at the bottom of the screen:
![image](https://user-images.githubusercontent.com/3254549/88752966-f7c7c300-d10f-11ea-9a78-d2a9707192bd.png)
You can find your database id here:
![image](https://user-images.githubusercontent.com/3254549/88744238-a1508980-d0fb-11ea-83fc-6efc6b370780.png)
5. Click the 'Open browser' button in the bottom right of the screen:
![image](https://user-images.githubusercontent.com/3254549/88753046-23e34400-d110-11ea-80d9-62a6ba437183.png)
6. View your application:
![image](https://user-images.githubusercontent.com/3254549/88753166-6ad13980-d110-11ea-84c4-87932a933c6b.png)

### Deploying to Netlify
1. Create a [DataStax Astra account](https://astra.datastax.com/register) and free-tier Cassandra database:
![image](https://user-images.githubusercontent.com/3254549/88737275-c938f080-d0ed-11ea-8273-f547da8ef9e6.png)
2. Click the 'Deploy to Netlify' button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/DataStax-Examples/astra-gatsbyjs-starter)

3. Connect your GitHub account:
![image](https://user-images.githubusercontent.com/3254549/88753274-a2d87c80-d110-11ea-99cd-671b9da9cfcc.png)
4. Fill in the Netlify environment variables with information on your Astra environment:
![image](https://user-images.githubusercontent.com/3254549/88753302-bab00080-d110-11ea-809a-22f17acb68c5.png)
You can find your database id here:
![image](https://user-images.githubusercontent.com/3254549/88744238-a1508980-d0fb-11ea-83fc-6efc6b370780.png)
5. Click 'Save and Deploy':
![image](https://user-images.githubusercontent.com/3254549/88744776-2c7e4f00-d0fd-11ea-8530-71e2a85e34a2.png)
6. Wait for your app to deploy:
![image](https://user-images.githubusercontent.com/3254549/88753399-e337fa80-d110-11ea-8a70-55c1867b3faa.png)
7. Click your Netlify app link to view your live app:
![image](https://user-images.githubusercontent.com/3254549/88753507-2e520d80-d111-11ea-8d3a-ce9e79e04c45.png)
8. You've deployed your app to Netlify!
![image](https://user-images.githubusercontent.com/3254549/88753526-3c079300-d111-11ea-9ce8-44c5115a6cc6.png)

