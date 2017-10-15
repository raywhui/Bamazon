# Bamazon: The CLI Fake-Amazon That's Kinda Cool, but Not Really.
This app is a Command Line Interface (CLI) that allows the user to purchase fake items from a local database and manipulate values in the database from the command line. There are three main files that are used for demonstrating how to create, read, and update entries in a MySQL database: bamazonCustomer.js, bamazonManager.js, and bamazonSupervisor.js. Also provided in the folder is both the package.json and sql file used to generate the database. All functionality of the app follows the instructions set by the mysql homework folder README.md and has no practical use other than testing and implementing various activities done in the mysql activities folder.

## Getting Started/Installation
This CLI was created to be compatible with JavaScript and node.js. There is no guarantee that this app will run without them. First, you will need to clone the repository. If you are not familiar with cloning a repository, here's a helpful guide provided by GitHub that teaches you how to do it:

* [Cloning a Repository](https://help.github.com/articles/cloning-a-repository/)

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

### How to run a .js file with node
This section assumes you have successfully downloaded node.js and necessary npm files as stated above. Navigate to the directory that you have cloned the repository to through the command line and type in the following to run the file:
```
node bamazonCustomer.js
```
This can be done with any of the 3 files.

## How it Works
This CLI uses 3 files: bamazonCustomer.js, bamazonManager.js, and bamazonSupervisor.js. Each file is made to simulate the experience of that particular role.

### Bamazon Customer
When running bamazonCustomer.js, the terminal will print out a list of items from your local database, each with an ID, name, and price. The user is then prompted to input the ID and quantity of the item they wish to purchase. Once the transaction is complete, the terminal will show how many of what item they have purcahsed and the total cost. If the user inputs an ID that is not shown or a quantity that the database doesn't have, the terminal will give the user an error message and will be prompted to input ID and quantity again.

![Bamazon Customer](https://raw.githubusercontent.com/raywhui/Bamazon/master/assets/bamazonCustomer.gif)

### Bamazon Manager
When running bamazonManager.js, the user is given 4 options to choose from: View Products for Sale, View Low Inventory, Add to Inventory, and Add New Product.

View Products for Sale:
As it states, this option will print all the products in the database and its relevant information, including ID, name, price, and quantity.

![Bamazon Manager View](https://raw.githubusercontent.com/raywhui/Bamazon/master/assets/bamazonManagerView.gif)


View Low Inventory:
View Low Inventory will print out products with a quantity of 5 or lower, and includes all the same information for each item as shown in View Products for Sale.

![Bamazon Manager Low](https://raw.githubusercontent.com/raywhui/Bamazon/master/assets/bamazonManagerLow.gif.gif)


Add to Inventory:
Adds more quantity to a particular item. The option will prompt the user to input the ID of the item they wish to add more inventory to and the amount they wish to add. The newly updated item can be seen when the user views products again.

![Bamazon Manager Add Inventory](https://raw.githubusercontent.com/raywhui/Bamazon/master/assets/bamazonManagerAddInventory.gif)


Add New Product:
Add New Product will prompt the user to input a name, department, price, and quantity of the item they wish to add. The newly updated item can be seen when the user views products again.

![Bamazon Manager Add Product](https://raw.githubusercontent.com/raywhui/Bamazon/master/assets/bamazonManagerAddProduct.gif)


### Bamazon Supervisor
When running bamazonSupervisor.js, the user is given 2 options to choose from: View Product Sales by Department and Create New Department.

View Product Sales by Department:
View Product Sales by Department will print the department ID, department name, overhead costs, product sales, and total profit of each department present in the database. Department ID, department name, overhead costs are all on a seperate table in the database from the items for sale, while product sales are stored in the items for sale table and increases as a transaction is made when using bamazonCustomer.js. Total profit is created by subtracting profit sales from overhead cost.

![Bamazon Supervisor View](https://raw.githubusercontent.com/raywhui/Bamazon/master/assets/bamazonSupervisorView.gif)


Create New Department:
Create New Department doesn't do anything. The instructions in the README file does not have anything for this particular option.

![Bamazon Supervisor New](https://raw.githubusercontent.com/raywhui/Bamazon/master/assets/bamazonSupervisorNew.gif)
