// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

console.log(process.env.BLAH);
console.log(process.env.PORT);
// the env file is where we store secret variables
// the only real reason they are secret is because .env is listed in the .gitignore file
// so .env never gets published to github 
// instead, when we deploy, there is a special place to put these variables

// ℹ️ Connects to the database
require("./db");
// with require you usually require a filename or filepath
// but if you require a folder, there needs to file a file called index.js inside of that folder

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "example-project";


app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

app.locals.blah = "hello";
// now on every single hbs file in the entire project I will have a variable
// called blah that is equal to the string "hello" 
// when you pass a variable into an HBS file its called a Template Variable
// this is just a way to set a global template variable

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
