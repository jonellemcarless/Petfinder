# PETFINDER OR PETCHAT

# Requirements
1. Must utilize one new library
2. Must use at least two api's
3. Write own API
4. Route go into server

# Description
App will help you find a pet at a shelter/rescue or breeder then connect you so that you'll be able to find a pet close to you and connect to be able to video chat with the pet.

--------------------

# Project Requirements

This document outlines the base requirements for Project 2.

### Requirements

Your project must:

* Use a Node and Express Web Server;

* Be backed by a MySQL Database an ORM (not necessarily Sequelize);

* Have both GET and POST routes for retrieving and adding new data;

* Be deployed using Heroku (with Data);

* Utilize at least one new library, package, or technology that we haven’t discussed;

* Have a polished frontend / UI;

* Have folder structure that meets MVC Paradigm;

* Meet good quality coding standards (indentation, scoping, naming).

* Must not expose sensitive API key information on the server, see [Protecting-API-Keys-In-Node.md](../../../10-nodejs/03-Supplemental/Protecting-API-Keys-In-Node.md)



# SUGGESTIONS

* Prior to implementing a function, use Mocha and Chai to write unit tests against it.

* Run your tests prior to committing your code so you can be sure nothing breaks between commits.

* **Non-Obligatory Bonus**: If you're confident and feel like you have some time to tinker, set up [Travis CI](https://travis-ci.org/). This will automatically run your tests whenever you or any of your team members makes a commit. 

#### Directory structure

All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars