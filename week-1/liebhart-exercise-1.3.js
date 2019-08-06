/**
 * Title: Exercise 1.3 - Class Refresher
 * Author: Nathaniel Liebhart
 * Date: August 6th, 2019
 * Description: Create a cell phone object with properties and methods
 */

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require("../liebhart-header");
console.log(header("Nathaniel", "Liebhart", "Exercise 1.3") + "\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 -- DISPLAYING CELL PHONE DETAILS --
 Manufacturer: <manufacturer>
 Model: <model>
 Color: <color>
 Price: <price>

*/

// CellPhone constructor function
function CellPhone(manufacturer, model, color, price) {
  this.manufacturer = manufacturer;
  this.model = model;
  this.color = color;
  this.price = price;
}

// Add methods to the prototype property for inheritance

// getPrice method
CellPhone.prototype.getPrice = function() {
  return this.price;
};

// getModel method
CellPhone.prototype.getModel = function() {
  return this.model;
};

// getDetails method
CellPhone.prototype.getDetails = function() {
  let output = "-- DISPLAYING CELL PHONE DETAILS --\n";
  output += `Manufacturer: ${this.manufacturer}\n`;
  output += `Model: ${this.getModel()}\n`;
  output += `Color: ${this.color}\n`;
  output += `Price: $${this.getPrice()}\n`;

  return output;
};

// Instantiate new CellPhone
let galaxy = new CellPhone(
  "Samsung",
  "Galaxy Fold",
  "Astro Blue with Gold Hinge",
  1980
);

// Print new CellPhone Object's details to the console
console.log(galaxy.getDetails());
