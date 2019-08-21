/**
 * Title: Exercise 2.2 - Prototypes
 * Author: Nathaniel Liebhart
 * Date: August 13th, 2019
 * Description: Demonstrate an understanding of JavaScript Prototypes
 */

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require("../liebhart-header");
console.log(header("Nathaniel", "Liebhart", "Exercise 2.2") + "\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 The person's full name is '<fullname>.'
 The person's age is '<age>.'

*/

// start program

// Create person object
let person = {
  getAge: function() {
    return this.age;
  }
};

// Create john object
let john = Object.create(person, {
  age: {
    value: 42
  },
  fullname: {
    value: "John Doe"
  }
});

// Log results to console
console.log(`The person's full name is ${john.fullname}`);
console.log(`The person's age is ${john.getAge()}`);

// end program
