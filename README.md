# Evaluate reviews with NLP

First things first: this project is part of the (Udacity's Front End Nanodegree Program)[https://www.udacity.com/course/front-end-web-developer-nanodegree--nd0011].

It takes a restaurant/meal review as input to be analysed and categorized by (Meaning Cloud's Sentiment Analysis API)[https://www.meaningcloud.com/developer/sentiment-analysis], which uses Natural Language Processing.

This project was design to build practice with:
- Setting up Webpack
- Using Sass styles
- Webpack Loaders and Plugins
- Service workers
- Unit testing with Jest
- Using APIs and creating requests to external urls

## Getting started

Once you cloned this project, remember to install all of its dependencies:

`cd` into your new folder and run:
- `npm install`

## Setting up the Sentiment Analysis API

### Step 1: Signup for an API key
You need to create an account in the Meaning Cloud website in order to be given an API key. You can do that by accessing it [here](https://www.meaningcloud.com/developer/sentiment-analysis). The API is free to use up to 20,000 requests per month, with a limit of 2 requests per second.

### Step 2: Environment Variables
In order not to expose my own keys, I've used the (`dotenv` package)[https://www.npmjs.com/package/dotenv].

- [ ] Install the dotenv package ```npm install dotenv```.
- [ ] Create a new ```.env``` file in the root of your project.
- [ ] Go to your .gitignore file and add ```.env```.
- [ ] Fill the .env file with your API key stored in a variable.
- [ ] Add this code to the very top of your server/index.js file:
```
const dotenv = require('dotenv');
dotenv.config();
```
- [ ] Reference variables you created in the .env file by putting ```process.env``` in front of it, an example might look like this:

### Step 3: Using the API
I've already set up the API endpoints to take the key assigned to the variable in the `.env` file, but I recommend you to read the (API documentation)[https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/what-is-sentiment-analysis] to be sure that it will perform the way you like it.


## Additional information about this project and Udacity
Please, refer to the original repo, when using this one: (Front End Nanodegree Program)[https://github.com/udacity/fend/tree/refresh-2019].
