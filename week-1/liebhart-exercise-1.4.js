/**
 * Title: Exercise 1.4 - Duck Typing, A.K.A. "Interfaces"
 * Author: Nathaniel Liebhart
 * Date: August 6th, 2019
 * Description: Replicate the duck typing example, but with vehicle types.
 */

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require("../liebhart-header");
console.log(header("Nathaniel", "Liebhart", "Exercise 1.4") + "\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Car added to the racetrack!
 Truck added to the racetrack!
 Jeep added to the racetrack!

 -- The following vehicles have been added to the racetrack --
 Truck: <Model>
 Car: <Model>
 Jeep: <Model>

*/

// function constructor classes
function Car(model) {
  this.model = model;
}

// prototype methods
Car.prototype.start = function() {
  console.log("Car added to the racetrack!");
};

// function constructor classes
function Truck(model, year) {
  this.model = model;
  this.year = year;
}

// prototype methods
Truck.prototype.start = function() {
  console.log("Truck added to the racetrack!");
};

// function constructor classes
function Jeep(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
}

// prototype methods
Jeep.prototype.start = function() {
  console.log("Jeep added to the racetrack!");
};

// init array
let racetrack = [];

// driveIt function
const driveIt = vehicle => {
  try {
    vehicle.start();
    racetrack.push(vehicle);
  } catch (e) {
    return console.error(e);
  }
};

// Create 3 vehicle classes
let maxima = new Car("Maxima"),
  tundra = new Truck("Tundra", 2019),
  gladiator = new Jeep("Gladiator", 2020, "Black");

// Pass vehicles through the driveIt method
driveIt(maxima);
driveIt(tundra);
driveIt(gladiator);

// Display all vehicles on the racetrack
console.log("\n-- The following vehicles have been added to the racetrack --");
for (let i = 0; i < racetrack.length; i++) {
  console.log(racetrack[i].constructor.name + ": " + racetrack[i].model);
}
