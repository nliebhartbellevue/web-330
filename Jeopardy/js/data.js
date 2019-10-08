/**
 * Title: data.js
 * Authors: Group Black Beard (Nathaniel Liebhart, Justin Singleton, Rita DeBraal)
 * Date: October 7, 2019
 * Description: This file is used to pull data from (categories & clues)
 */

const data = {
  categories: {
    "Lexical Structure": 1,
    Objects: 2,
    Arrays: 3,
    Functions: 4
    // "Handling Events": 5
  },
  clues: [
    {
      question:
        "The lexical structure is the ____-____ syntax of a language; it specifies such things as what variable names look like, the delimiter characters for comments, and how one program statement is separated from the next",
      pointValue: 100,
      answer: "What is lowest-level",
      categoryId: 1,
      hints: [
        "What is high-level",
        "What is mid-level",
        "What is lowest-level",
        "What is entry-level"
      ]
    },
    {
      question: "JavaScript is a ____-sensitive language.",
      pointValue: 200,
      answer: "What is case",
      categoryId: 1,
      hints: ["What is very", "What is case", "What is light", "What is hyper"]
    },
    {
      question:
        "JavaScript ignores spaces that appear between _____ in programs.",
      pointValue: 500,
      answer: "What are tokens",
      categoryId: 1,
      hints: [
        "What are tokens",
        "What are line separators",
        "What are tabs",
        "What are coffee breaks"
      ]
    },
    {
      question:
        "In JavaScript any text between the characters __ and __ is treated as a comment.",
      pointValue: 1000,
      answer: "What are /* amd */",
      categoryId: 1,
      hints: [
        "What are /* and */",
        "What are / and /",
        "What are <- and ->",
        "What are <* and *>"
      ]
    },
    {
      question:
        "In JavaScript strict mode imposes restrictions on the use of the following identifiers. They are not fully reserved, but they are not allowed as variable, function, or parameter names:",
      pointValue: 2000,
      answer: "What are arguments and eval",
      categoryId: 1,
      hints: [
        "What are class and const",
        "What is debugger and null",
        "What are arguments and eval",
        "What are false and true"
      ]
    },
    {
      question:
        "In JavaScript an object is an ______ collection of properties, each of which has a name and a value.",
      pointValue: 100,
      answer: "What is unordered",
      categoryId: 2,
      hints: [
        "What is ordered",
        "What is a small",
        "What is unordered",
        "What is random"
      ]
    },
    {
      question:
        "This JavaScript object property attribute specifies whether the value of the property can be set.",
      pointValue: 200,
      answer: "What is writable",
      categoryId: 2,
      hints: [
        "What is configurable",
        "What is setter",
        "What is POST",
        "What is writable"
      ]
    },
    {
      question:
        "An object literal is a ___-separated list of colon-separated name:value pairs, enclosed within curly braces.",
      pointValue: 500,
      answer: "What is comma",
      categoryId: 2,
      hints: [
        "What is backslash",
        "What is dollar sign",
        "What is comma",
        "What are brackets"
      ]
    },
    {
      question:
        "Object.______ is one of the rare objects that has no prototype: it does not inherit any properties.",
      pointValue: 1000,
      answer: "What is prototype",
      categoryId: 2,
      hints: [
        "What is prototype",
        "What is create",
        "What is delete",
        "What is search"
      ]
    },
    {
      question:
        "Accessor properties do not have a writable attribute as data properties do. If a property has both a getter and a setter method, it is a ____/____ property.",
      pointValue: 2000,
      answer: "What is read/write",
      categoryId: 2,
      hints: [
        "What is get/set",
        "What is high/low",
        "what is name/value",
        "What is read/write"
      ]
    },
    {
      question:
        "JavaScript arrays are a specialized form of JavaScript object, and array _____ are little more than property names that happen to be integers.",
      pointValue: 100,
      answer: "What are indexes",
      categoryId: 3,
      hints: [
        "What are values",
        "What are tokens",
        "What are indexes",
        "What are prototypes"
      ]
    },
    {
      question:
        "JavaScript arrays are _____-based and use 32-bit indexes: the index of the first element is 0, and the highest possible index is 4294967294 (232-2), for a maximum array size of 4,294,967,295 elements.",
      pointValue: 200,
      answer: "What is zero",
      categoryId: 3,
      hints: ["What is one", "What is zero", "What is number", "What is string"]
    },
    {
      question:
        "When an array is _____, the length property is greater than the number of elements, and all we can say about it is that length is guaranteed to be larger than the index of every element in the array.",
      pointValue: 500,
      answer: "What is sparse",
      categoryId: 3,
      hints: [
        "What is sparse",
        "What is short",
        "What is dense",
        "What is small"
      ]
    },
    {
      question:
        "The array.splice() method alters the _____ property and shifts array elements to higher or lower indexes as needed.",
      pointValue: 1000,
      answer: "What is length",
      categoryId: 3,
      hints: [
        "What is size",
        "What is length",
        "What is height",
        "What is width"
      ]
    },
    {
      question:
        "JavaScript does not support true multidimensional arrays, but you can approximate them with arrays of _____.",
      pointValue: 2000,
      answer: "What are arrays",
      categoryId: 3,
      hints: [
        "What are objects",
        "What are strings",
        "What are numbers",
        "What are arrays"
      ]
    },
    {
      question:
        "If a function is assigned to the property of an object, it is known as a ______ of that object.",
      pointValue: 100,
      answer: "What is method",
      categoryId: 4,
      hints: [
        "What is method",
        "What is an array",
        "What is an argument",
        "What is an example"
      ]
    },
    {
      question:
        "JavaScript function definitions can be nested within other functions, and they have access to any variables that are in scope where they are defined. This means that JavaScript functions are ______, and it enables important and powerful programming techniques.",
      pointValue: 200,
      answer: "What are closures",
      categoryId: 4,
      hints: [
        "What are constructors",
        "What are closures",
        "What are methods",
        "What are objects"
      ]
    },
    {
      question:
        "Functions defined as an expression are only useful if it is part of a larger expression, such as an assignment or _______, that does something with the newly defined function.",
      pointValue: 500,
      answer: "What is an invocation",
      categoryId: 4,
      hints: [
        "What is an argument",
        "What is a closure",
        "What is an invocation",
        "What is a statement"
      ]
    },
    {
      question: "Any legal JavaScript ______ can be a function name.",
      pointValue: 1000,
      answer: "What is a identifer",
      categoryId: 4,
      hints: [
        "What is a method",
        "What is a reserved word",
        "What is a statement",
        "What is a identifier"
      ]
    },
    {
      question:
        "When methods return objects, you can use the return value of one method invocation as part of a subsequent invocation. This results in a series of method invocations as a single expression, known as _____ or ______.",
      pointValue: 2000,
      answer: "What is chain or cascade",
      categoryId: 4,
      hints: [
        "What is chain or cascade",
        "What is link or combined",
        "What is break or return",
        "What is fight or flight"
      ]
    }
    // {
    //   question:
    //     "The event ______ is a string that specifies what kind of event occurred.",
    //   pointValue: 100,
    //   answer: "What is type",
    //   categoryId: 5,
    //   hints: [
    //     "What is handler",
    //     "What is type",
    //     "What is keyword",
    //     "What is sequence"
    //   ]
    // },
    // {
    //   question:
    //     "The event target is the _____ on which the event occurred or with which the event is associated.",
    //   pointValue: 200,
    //   answer: "What is object",
    //   categoryId: 5,
    //   hints: [
    //     "What is array",
    //     "What is variable",
    //     "What is element",
    //     "What is object"
    //   ]
    // },
    // {
    //   question:
    //     "The advent of _____-_____ and JavaScript-enabled mobile devices, such as the iPhone, have required the definition of new touch and geture event types.",
    //   pointValue: 500,
    //   answer: "What is touch-based",
    //   categoryId: 5,
    //   hints: [
    //     "What is touch-based",
    //     "What is mobile-based",
    //     "What is iOS-based",
    //     "What is tablet-sized"
    //   ]
    // },
    // {
    //   question:
    //     "The ____ event is fired when a document and all of its external resources are fully loaded and displayed to the user.",
    //   pointValue: 1000,
    //   answer: "What is done",
    //   categoryId: 5,
    //   hints: [
    //     "What is start",
    //     "What is finished",
    //     "What is load",
    //     "What is done"
    //   ]
    // },
    // {
    //   question:
    //     "The HTML5 drag-and-drop API allows JavaScript applications to participate in OS-based drag-and-drop operations, transferring data between web applications and native applications. This API defines ____ event types.",
    //   pointValue: 2000,
    //   answer: "What is seven",
    //   categoryId: 5,
    //   hints: [
    //     "What is five",
    //     "What is twenty",
    //     "What is three",
    //     "What is seven"
    //   ]
    // }
  ]
};

if (typeof module !== "undefined") {
  module.exports = data;
}
