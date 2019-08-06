/**
 * Title: Discussion Board 1.1
 * Author: Nathaniel Liebhart
 * Date: August 6th, 2019
 * Description: This is an example of a constructor prototype.
 */

// Create an empty constructor function
function Employee() {}

// Add property name, position, hire date to the prototype property of the Employee constructor function
Employee.prototype.name = "John Doe";
Employee.prototype.position = "Software Engineer";
Employee.prototype.hireDate = "05/12/2005";
Employee.prototype.empSince = function() {
  let hYear = this.hireDate.substr(6, 9);
  let d = new Date();
  let cYear = d.getFullYear();
  let service = cYear - hYear;

  return service;
};

// Create an object using the Employee constructor function
const john = new Employee();

// Print a message to the console with the employees name, position and years of service
console.log(
  `${john.name} has been a ${john["position"]} for ${john.empSince()} years.`
);
