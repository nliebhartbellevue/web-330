/**
 * Title: Exercise 3.2 - Factory Pattern
 * Author: Nathaniel Liebhart
 * Date: August 21, 2019
 * Description: Factory Pattern
 */

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require("../liebhart-header");
console.log(header("Nathaniel", "Liebhart", "Exercise 3.2") + "\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Oracle {
    username: '<username>',
    password: '<password>',
    server: '<server>',
    version: '<version>'
 }

 Informix {
    username: '<username>',
    password: '<password>',
    server: '<server>'
 }

*/

// start program
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

// Create Oracle Database class with 4 properties
function Oracle(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "o-s3cret";
  this.server = properties.server || "localhost:5454";
  this.version = properties.version || "10g";
}

// Create Infomix Database class with 3 properties
function Informix(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "in-s3cret";
  this.server = properties.server || "localhose:3030";
}

function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  // Check for databaseType and set databaseClass
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

// Create oracleFactory
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "admin",
  password: "admin"
});

// Create informixFactory
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "admin",
  password: "password"
});

// Print output in excepted format
console.log(`Oracle {
    username: ${oracle.username},
    password: ${oracle.password},
    server: ${oracle.server},
    version: ${oracle.version}
}`);

console.log(`\n Infomix {
    username: ${informix.username},
    password: ${informix.password},
    server: ${informix.server},
}`);
// end program
