<!--- STARTEXCLUDE --->
# Astra/Gatsby.js Starter
*30 minutes, Beginner, [Start Building](https://github.com/DataStax-Examples/astra-gatsbyjs-starter#prerequisites)*

Create a React.js, Gatsby application that reads data from [DataStax Astra](https://astra.datastax.com/register?utm_source=devplay&utm_medium=github&utm_campaign=astra-gatsbyjs-starter) using GraphQL.
<!--- ENDEXCLUDE --->

![image](https://monosnap.com/image/uPQ08h8exAXqn0d8C2GoT65SDwGT51)

## Objectives
* Provide a fullstack development example using GraphQL with Astra as the storage backend.

## How this works
Once the Astra credentials are provided, the necessary tables are created in the database. The webservice will be available on port 8080 once the application has been deployed.

This example uses Typescript. TypeScript is a typed superset of JavaScript that compiles to plain JavaScript, and adds optional static typing to the language. It is is designed for development of large applications and transpiles to JavaScript.

[Gatsby](https://www.gatsbyjs.org/) is a React-based, GraphQL powered, static site generator, with much of the functionality of a modern front-end framework. It brings together the best components of React, webpack, react-router, GraphQL, and other front-end tools. This is used to generate the application.

## Get Started
To build and play with this app, follow the build instructions that are located here: [https://github.com/DataStax-Examples/astra-gatsbyjs-starter](https://github.com/DataStax-Examples/astra-gatsbyjs-starter#prerequisites)

<!--- STARTEXCLUDE --->
# Running Astra/Gatsby.js Starter
Follow the instructions below to get started.

## Prerequisites
Let's do some initial setup by creating a serverless(!) database.

### DataStax Astra
1. Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=astra-gatsbyjs-starter) if you don't 
already have one:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-register-basic-auth.png)

2. On the home page. Locate the button **`Create Database`**
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-dashboard.png)

3. Locate the **`Get Started`** button to continue
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-select-plan.png)

4. Define a **database name**, **keyspace name** and select a database **region**, then click **create database**.
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-create-db.png)

5. Your Astra DB will be ready when the status will change from *`Pending`* to **`Active`** 💥💥💥 
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-active.png)

6. After your database is provisioned, we need to generate an Application Token for our App. Go to the `Settings` tab in the database home screen.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings.png)

7. Select `Admin User` for the role for this Sample App and then generate the token. Download the CSV so that we can use the credentials we need later.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-settings-token.png)

8. After you have your Application Token, head to the database connect screen and copy the connection information that we'll need later. We'll replace `ASTRA_DB_APPLICATION_TOKEN` with the `Token` value that is part of your Application Token.
information (we'll need this later!):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/astra-db-connect.png)

### Github
1. Click `Use this template` at the top of the [GitHub Repository](https://github.com/DataStax-Examples/astra-gatsbyjs-starter):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

2. Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

3. Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)

## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)
  - [Running on Gitpod](#running-on-gitpod)
  - [Deploying to Netlify](#deploying-to-netlify)

### Running on your local machine
1. Install Node dependencies with [Yarn](https://yarnpkg.com/): `yarn install` (Alternatively, use npm: `npm install`)

2. Run the set up script: ` . ./gitpod-setup.sh`

3. Start your app by running: `yarn start`(If using npm: `npm start`)

4. You can view your app at  http://localhost:8000/:
![image](https://user-images.githubusercontent.com/3254549/88751025-9e5d9500-d10b-11ea-9776-3276ada4fece.png)

### Running on GitPod
1. Click the 'Open in GitPod' link:
[![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://dtsx.io/3iX75yf)

2. Wait for your GitPod workspace to start:
![image](https://user-images.githubusercontent.com/3254549/88744125-5171c280-d0fb-11ea-9676-de4589e42589.png)

3. Set your Astra database details in the GitPod terminal at the bottom of the screen:
![image](https://user-images.githubusercontent.com/3254549/88752966-f7c7c300-d10f-11ea-9a78-d2a9707192bd.png)

4. Click the 'Open browser' button in the bottom right of the screen:
![image](https://user-images.githubusercontent.com/3254549/88753046-23e34400-d110-11ea-80d9-62a6ba437183.png)

5. View your application:
![image](https://user-images.githubusercontent.com/3254549/88753166-6ad13980-d110-11ea-84c4-87932a933c6b.png)

### Deploying to Netlify
1. Click the 'Deploy to Netlify' button:
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://dtsx.io/3aZJLxa)

2. Connect your GitHub account:
![image](https://user-images.githubusercontent.com/3254549/88753274-a2d87c80-d110-11ea-99cd-671b9da9cfcc.png)

3. Fill in the Netlify environment variables with information on your Astra database:
![image](https://user-images.githubusercontent.com/3254549/88753302-bab00080-d110-11ea-809a-22f17acb68c5.png)

4. Click 'Save and Deploy':
![image](https://user-images.githubusercontent.com/3254549/88744776-2c7e4f00-d0fd-11ea-8530-71e2a85e34a2.png)

5. Wait for your app to deploy (this will take a minute or two, the screen will auto-refresh when the deployment is complete):
![image](https://user-images.githubusercontent.com/3254549/88753399-e337fa80-d110-11ea-8a70-55c1867b3faa.png)

6. Click your Netlify app link to view your live app:
![image](https://user-images.githubusercontent.com/3254549/88753507-2e520d80-d111-11ea-8d3a-ce9e79e04c45.png)

7. You've deployed your app to Netlify!
![image](https://user-images.githubusercontent.com/3254549/88753526-3c079300-d111-11ea-9ce8-44c5115a6cc6.png)
<!--- ENDEXCLUDE --->
