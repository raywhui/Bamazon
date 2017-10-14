# Bamazon: The CLI Fake-Amazon That's Kinda Cool, but Not Really.
This app is a Command Line Interface (CLI) that allows the user to purchase fake items from a local database and manipulate values in the database from the command line. There are three main files that are used for demonstrating how to create, read, and update entries in a MySQL database: bamazonCustomer.js, bamazonManager.js, and bamazonSupervisor.js. Also provided in the folder is both the package.json and sql file used to generate the database. All functionality of the app follows the instructions set by the mysql homework folder README.md and has no practical use other than testing and implementing various activities done in the mysql activities folder.

## Getting Started/Installation
This CLI was created to be compatible with JavaScript and node.js. There is no guarantee that this app will run without them. First, you will need to clone the repository. If you are not familiar with cloning a repository, here's a helpful guide provided by GitHub that teaches you how to do it:

[Cloning a Repository](https://help.github.com/articles/cloning-a-repository/)

Next you will need to download node.js and npm on your computer. Node.js is a serverside framework that allows JavaScript to be used on a server. In this particular case, we will be using node.js to create, read, update, and delete (CRUD) data on a local server. npm is a package manager that can easily download various packages or modules. Here are some resources on how to get both:
 
* [Install Node and NPM for Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows)
* [Install Node and NPM for Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac)
* [Install Node and NPM for Linux](http://blog.teamtreehouse.com/install-node-js-npm-linux)

The app uses 3 npm modules, which can be downloaded by typing either of the following into your terminal:
```
npm install mysql inquirer console.table
```
or with the package.json file in the same directory:
```
npm install
```

## How it Works

