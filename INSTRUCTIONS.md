<!--- Enter the repository name --->
# Running Astra/Gatsby.js Starter
Follow the instructions below to get started.

<!--- 
Modify this section as needed, however always include the Astra setup parts
--->
## Prerequisites
Let's do some initial setup.

### DataStax Astra
<!--- enter a unique UTM_CODE for your sample app below --->
1. Create a [DataStax Astra account](https://astra.datastax.com/register?utm_source=github&utm_medium=referral&utm_campaign=astra-gatsbyjs-starter) if you don't 
already have one:
![image](https://astra-screenshots.s3.amazonaws.com/current/register-basic-auth.png)

2. Create an (always) free-tier Cassandra database (take note of your db password):
![image](https://user-images.githubusercontent.com/69874632/101203026-ef801700-361e-11eb-8321-de2d65259763.png)
![image](https://user-images.githubusercontent.com/69874632/101203076-0292e700-361f-11eb-88ee-1f6356f4d7dc.png)
![image](https://user-images.githubusercontent.com/69874632/101203115-12aac680-361f-11eb-9087-8ff5cb9516d7.png)

3. After your database is provisioned, head to the `Connect` screen and copy your connection 
information (we'll need this later!):
![image](https://user-images.githubusercontent.com/69874632/101203076-0292e700-361f-11eb-88ee-1f6356f4d7dc.png)

### Github
<!-- Enter your GITHUB_URL below -->
1. Click `Use this template` at the top of the [GitHub Repository](https://github.com/DataStax-Examples/astra-gatsbyjs-starter):
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-use-template.png)

2. Enter a repository name and click 'Create repository from template':
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-create-repository.png)

3. Clone the repository:
![image](https://raw.githubusercontent.com/DataStax-Examples/sample-app-template/master/screenshots/github-clone.png)

<!--- 
Include locally as a minimum so that folks will
create an Astra DB and use your repository as a template.

Remove paths that you don't need.
--->
## 🚀 Getting Started Paths:
*Make sure you've completed the [prerequisites](#prerequisites) before starting this step*
  - [Running on your local machine](#running-on-your-local-machine)
  - [Running on Gitpod](#running-on-gitpod)
  - [Deploying to Netlify](#deploying-to-netlify)

<!--- 
Include the appropriate commands to run the app locally (post cloning). If you're using
Docker or something similar, include that setup here.
--->
### Running on your local machine
1. Install Node dependencies with [Yarn](https://yarnpkg.com/): `yarn install` (Alternatively, use npm: `npm install`)

2. Run the set up script: ` . ./gitpod-setup.sh`

3. Start your app by running: `yarn start`(If using npm: `npm start`)

4. You can view your app at  http://localhost:8000/:
![image](https://user-images.githubusercontent.com/3254549/88751025-9e5d9500-d10b-11ea-9776-3276ada4fece.png)

<!--- 
Include Gitpod where possible, it provides a good DX for experimentation 
--->
### Running on Gitpod
<!-- Enter your GITPOD_LINK below -->
1. Click the 'Open in Gitpod' link:
[![Open in IDE](https://gitpod.io/button/open-in-gitpod.svg)](https://dtsx.io/3iX75yf)

2. Wait for your Gitpod workspace to start:
![image](https://user-images.githubusercontent.com/3254549/88744125-5171c280-d0fb-11ea-9676-de4589e42589.png)

3. Set your Astra database details in the Gitpod terminal at the bottom of the screen:
![image](https://user-images.githubusercontent.com/3254549/88752966-f7c7c300-d10f-11ea-9a78-d2a9707192bd.png)

4. Click the 'Open browser' button in the bottom right of the screen:
![image](https://user-images.githubusercontent.com/3254549/88753046-23e34400-d110-11ea-80d9-62a6ba437183.png)

5. View your application:
![image](https://user-images.githubusercontent.com/3254549/88753166-6ad13980-d110-11ea-84c4-87932a933c6b.png)

### Deploying to Netlify
<!-- Enter your NETLIFY_URL below -->
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