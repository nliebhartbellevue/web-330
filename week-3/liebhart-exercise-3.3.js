/**
 * Title: Exercise 3.3 - Singleton Pattern
 * Author: Nathaniel Liebhart
 * Date: August 13th, 2019
 * Description: Singleton Pattern
 */

/**
 * Params: firstName, lastName, assignment
 * Response: output
 * Description: Returns formatted header string
 */
const header = require("../liebhart-header");
console.log(header("Nathaniel", "Liebhart", "Exercise 3.3") + "\n");

/*
 Expected output:

 FirstName LastName
 <AssignmentName>
 <Today's Date>

 Same database instance? true

*/

// start program
var DatabaseSingleton = (function() {
  let instance;

  const createInstance = () => {
    let postgresDatabase = new Object("Database instance initialized!");
    return postgresDatabase;
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const databaseSingletonTest = () => {
  const oracle = DatabaseSingleton.getInstance();
  let postgres = DatabaseSingleton.getInstance();
  console.log(`Same database instance? ${oracle === postgres}`);
};

databaseSingletonTest();
// end program
