import { z } from "zod";
import { something } from "./actions";
/////////////////////////
// 01. Type annotation

let awesomeName: string = "shakeAndBake";
awesomeName = "text";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);
// awesomeName = 41;

let amount: number = 41;
amount = 41 + 5;
// amount = "text"
console.log(amount);

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = "text name";

// type inference
// let awesomeName2: string = "shakeAndBake";
let awesomeName2 = "shakeAndBake";

/////////////////////
// first challenge

// - Create a variable of type string and try to invoke a string method on it.
let myName: string = "milan";
myName = myName.toUpperCase();
console.log(myName);
// - Create a variable of type number and try to perform a mathematical operation on it.
let myAge: number = 41;
myAge = myAge + 100;
console.log(myAge);
// - Create a variable of type boolean and try to perform a logical operation on it.
let milan: boolean = true;
let isAdult: boolean = myAge >= 18;
console.log(isAdult);

if (milan) {
  console.log("Milan iz good gay!!!");
} else {
  console.log("Milan is bad boy!!!");
}
// - Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
// myAge = "41";
// myName = 41;
// isAdult = "yes";
// - You can use type annotation or inference

// Setup info
console.log(myName, myAge, isAdult);

// Union type
let tax: number | string = 10;
tax = 100;
tax = "$100";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
// requestStatus = "random";

// Type any
let notSure: any = 4;
notSure = "string text";
notSure = false;

let random;

// Practical example
const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1983") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log(foundBook?.length);

// Challenge Union Type
// - Create a variable orderStatus of type 'processing' | 'shipped' | 'delivered' and assign it the value 'processing'.
// Then, try to assign it the values 'shipped' and 'delivered'.
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";
orderStatus = "delivered";
// orderStatus = "cancelled";
// - Create a variable discount of type number | string and assign it the value 20.
// Then, try to assign it the value '20%'.
let discount: number | string = 20;
discount = "20%";
// discount = true;

// Arrays - Fundamentals
let prices: number[] = [100, 75, 55];
// prices.push("hello");
let fruit: string[] = ["apple", "bannana"];

//
// be careful "[]" means literally empty array
// let randomValues: [] = [1];

// be careful with inferred array types
// let names = ['peter', 'susan'];
// let names = ['peter', 'susan', 1];

let names = ["milan", "ivan", 41, 42];
let array: (string | boolean)[] = ["apple", true, "bannana"];

// Challenge Arrays
// - Create an array temperatures of type number[] and assign it some values.
let temperatures: number[] = [1, 2, 3, 4, -5, 19];
// Then, try to add a string value to it.
// temperatures.push("33");
// - Create an array colors of type string[] and assign it some values.
let colors: string[] = ["blue", "green"];
// Then, try to add a boolean value to it.
// colors.push(true);
// - Create an array mixedArray of type (number | string)[] and assign it some values.
let mixedArray: (number | string)[] = [41, 42, "milan", "ivan"];
// Then, try to add a boolean value to it.
// mixedArray.push(false);

// Object Fundamentals
let car: { brand: string; year: number } = {
  brand: "toyota",
  year: 2020
};

car.brand = "ford";
// car.color ="blue";

let car1: { brand: string; year: number } = {
  brand: "nisan",
  year: 2022
};

let book = { title: "book", cost: 150 };
let pen = { title: "pen", cost: 100 };
let notebook = { title: "notebook" };

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];
// items[0].title = "1984";

// Challenge Objects
// - Create an object bike of type { brand: string, year: number } and assign it some values.
let bike: { brand: string; year: number } = {
  brand: "trak",
  year: 2023
};
// Then, try to assign a string to the year property.
bike.year = 1999;
// bike.year = "1999";
// - Create an object laptop of type { brand: string, year: number }
// and try to assign an object with missing year property to it.
let laptop: { brand: string; year: number } = {
  brand: "hp",
  year: 2020
};
// let laptop2: { brand: string; year: number } = {
//   brand: "dell",
// };

// - Create an array products of type { title: string, price?: number }[]
// and assign it some values. Then, try to add an object with a price property of type string to it.
let product1 = { title: "lamp", price: 100 };
let product2 = { title: "t-shirt" };
let products: { title: string; price?: number }[] = [product1, product2];
// products.push({ title: "boots", price: "expensive" });

// 19.  Functions - Parameters
function seyHi(name: string) {
  console.log(`Hello ${name}!!!`);
}

seyHi("Milan");
// seyHi(3);

// 20. Function -return
function calculateDiscount(price: number): number {
  const hasDisount = true;

  if (hasDisount) {
    return price;
    // return "Discount applied";
  }

  return price * 0.9;
}

const finalPrice = calculateDiscount(200);
console.log(finalPrice);

// 21. Type: Any Example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(3);
const someValue = result;
// someValue.myMethod();
console.log(someValue);

// // 22. Challenge -Functions 1
// - Create a new array of names.
const names2: string[] = ["Milan", "Ivan", "Djurica"];
// - Write a new function that checks if a name is in your array.
// This function should take a name as a parameter and return a boolean.
function isNameInList(name: string): boolean {
  return names2.includes(name);
}

// - Use this function to check if various names are in your array and log the results.
let nameToCheck = "Djurica";
if (isNameInList(nameToCheck)) {
  console.log(`${nameToCheck} is in the controled list, yeee`);
} else {
  console.log(`${nameToCheck} is not in the controled list, nooo`);
}
isNameInList(nameToCheck);

// 23. Functions - Optional Parameters
function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);
console.log(priceAfterDiscount);

// 24. Functions - Default Parameters
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}
let scoreAfterPenalty = calculateScore(100, 10);
let scoreWithoutPenalty = calculateScore(300);

// 25. Functions - Rest Parameters
function sum(message: string, ...numbers: number[]): string {
  const doubled = numbers.map((num) => num * 2);
  console.log(doubled);

  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0);
  return `${message}${total}`;
}

let result2 = sum("The total is: ", 1, 2, 3, 4, 5);
console.log(result2);

// 26. Functions - Void Keyword
function logMessege(msg: string): void {
  console.log(msg);
  // return "Hello"
}
logMessege("hello, Typescript");

// 27. Functions - Type Guards
// Your task is to create a function named processInput that accepts a parameter of a union type string | number.
// The function should behave as follows:
function processInput(input: string | number) {
  // Type Guards
  // - If the input is of type number,
  // the function should multiply the number by 2 and log the result to the console.
  if (typeof input === "number") {
    console.log(input * 2);
    // - If the input is of type string,
    // the function should convert the string to uppercase and log the result to the console.
  } else {
    console.log(input.toUpperCase());
  }
}

processInput("milandarius");
processInput(41);

// 28. Functions - Using Objects as Function Parameters
function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return {
    id,
    isActive: id % 2 === 0
  };
}

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });
console.log(first, second);

// alternetive
function createStudent(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent = {
  id: 5,
  name: "anna"
};

createStudent(newStudent);

// 29. Excess Property Checks
function createStudent2(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent2 = {
  id: 6,
  name: "micko",
  email: "micko@m.com"
};

createStudent(newStudent2);
// createStudent({id: 1, name: "bob", email: "bob@b.com"});

// Challenge

// Your task is to create a function named processData that accepts two parameters:
// - The first parameter, input, should be a union type that can be either a string or a number.
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(4));
console.log(processData("milan"));
console.log(processData("milan", { reverse: true }));
// - The second parameter, config, should be an object with a reverse property of type boolean,
// by default it "reverse" should be false

// The function should behave as follows:

// - If input is of type number, the function should return the square of the number.
// - If input is of type string, the function should return the string in uppercase.
// - If the reverse property on the config object is true, and input is a string,
// the function should return the reversed string in uppercase.

// 31. Type Alias

type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: "john",
  isActive: true
};
const susan: User = {
  id: 1,
  name: "susan",
  isActive: false
};

function createUser(user: User): User {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

//
type StringOrNumber = string | number; // Type alias for string | number

let value: StringOrNumber;
value = "hello"; // This is valid
value = 123; // This is also valid

type Theme = "light" | "dark"; // Type alias for theme

let theme: Theme;
theme = "light"; // This is valid
theme = "dark"; // This is also valid

// Function that accepts the Theme type alias
function setTheme(t: Theme) {
  theme = t;
}

setTheme("dark"); // This will set the theme to 'dark'

// Challenge

// - Define the Employee type: Create a type Employee with properties id (number), name (string),
// and department (string).
type Employee = { id: number; name: string; department: string };

// - Define the Manager type: Create a type Manager with properties id (number), name (string),
// and employees (an array of Employee).
type Manager = { id: number; name: string; employees: Employee[] };

// - Create a Union Type: Define a type Staff that is a union of Employee and Manager.
type Staff = Employee | Manager;

// - Create the printStaffDetails function: This function should accept a parameter of type Staff.
// Inside the function, use a type guard to check if the 'employees' property exists in the passed object.
// If it does, print a message indicating that the person is a manager and the number of employees they manage.
// If it doesn't, print a message indicating that the person is an employee and the department they belong to.
function printStaffDetails(staff: Staff) {
  // tyoe gourd
  if ("employees" in staff) {
    console.log(
      `${staff.name} is a manager of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the ${staff.department} department.`
    );
  }
}

// - Create Employee and Manager objects: Create two Employee objects.
// One named alice and second named steve. Also create a Manager object named bob who manages alice and steve.
const milan2: Employee = { id: 1, name: "Milan", department: "FE" };
const milica: Employee = { id: 1, name: "Milica", department: "HR" };
const sredoje: Manager = {
  id: 2,
  name: "Sredoje",
  employees: [milan2, milica]
};

// - Test the function: Call the printStaffDetails function with alice and bob as arguments and verify the output.
printStaffDetails(milan2); // Outputs: Alice is an employee in the Sales department.
printStaffDetails(sredoje);

// 34. Intersection Types
type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };

const book1: Book = {
  id: 2,
  name: "LOTR",
  price: 1000
};
const book2: Book = {
  id: 3,
  name: "Moby Dick",
  price: 500
};

const discountdBook: DiscountedBook = {
  id: 5,
  name: "Don Kihote",
  price: 1500,
  discount: 0.15
};

// 35. Type Alias - Computed Properties
const propName = "age";
type Animal = {
  [propName]: number;
};

let horse: Animal = { [propName]: 5 };

////////////////////////////////
// 36. Interface - Fundamentals
interface BookInterface {
  readonly isbn: number;
  title: string;
  author: string;
  // optional
  genre?: string;
}

const deepWork1: BookInterface = {
  isbn: 123456789,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help"
};

deepWork1.title = "New title";
// deepWork.isbn = 654321; // not allowed

console.log(deepWork1.title);

//////////////////////////////
// 37. Interface - Methods
interface BookMethods {
  readonly isbn: number;
  title: string;
  author: string;
  // optional
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork2: BookMethods = {
  isbn: 123456789,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(`${this.author}`);
  },
  printTitle(message) {
    return `${this.title} ${message}}`;
  }
};

deepWork2.printAuthor();
const result3 = deepWork2.printTitle("It is awesom book");
console.log(result3);

//////////////////////////////////////////
// 38. Interface - Methods (more options)
interface BookMoreOptions {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
  // more options
  printSomething: (someValue: number) => number;
}

const deepWork38: BookMoreOptions = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // first option
  // printSomething: function (someValue) {
  //   return someValue;
  // }
  // second option
  // printSomething: (someValue) => {
  //   // "this" gotcha
  //   console.log(deepWork3.author);
  //   return someValue;
  // }
  // third option
  printSomething(someValue) {
    return someValue;
  }

  // alternative
  // printAuthor: () => {
  //   console.log(deepWork38.author);
  // }
};

console.log(deepWork38.printSomething(34));

deepWork38.printAuthor();
const result38 = deepWork38.printTitle("is an awesome book");
console.log(result38);

// 39. Challenge part 1
// Start by defining an interface Computer using the interface keyword.
// This will serve as a blueprint for objects that will be of this type.
// Inside the interface, define the properties that the object should have.
// In this case, we have id, brand, ram, and storage.

// Use the readonly keyword before the id property to indicate that it cannot be changed once it's set.
// Use the ? after the storage property to indicate that this property is optional and may not exist on all objects of this type.
// Also inside the interface, define any methods that the object should have.
// In this case, we have upgradeRam, which is a function that takes a number and returns a number.
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  upgradeRam(increse: number): number;
  storage?: number;
}
// Now that we have our interface, we can create an object that adheres to this interface.
// This object should have all the properties defined in the interface (except for optional ones, which are... optional),
// and the methods should be implemented.

const laptop39: Computer = {
  id: 123,
  brand: "HP Elitedesk",
  ram: 16,
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  }
};
// Finally, we can use our object. We can call its upgradeRam method to increase its RAM.
laptop39.storage = 256;
console.log(laptop39.upgradeRam(8));
console.log(laptop39);

//////////////////////////////////////
// 40. Interface - Merging, Extend, TypeGuard
interface PersonMET {
  name: string;
  getDetails(): string;
}

interface DogOwnerMET {
  dogName: string;
  getDogDetails(): string;
}

interface PersonMET {
  age: number;
}

const person: PersonMET = {
  name: "Milan",
  age: 5,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
};

// Extending the interface
interface EmployeeExtending extends PersonMET {
  employeeId: number;
}

const employee: EmployeeExtending = {
  name: "Cira",
  age: 30,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
  }
};

// Interface multiple inheritance
interface ManagerMI extends PersonMET, DogOwnerMET {
  menagePeople(): void;
}

const manegerMI: ManagerMI = {
  name: "Bob",
  age: 35,
  dogName: "Rex",
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  menagePeople() {
    console.log("Managing people...");
  }
};

manegerMI.menagePeople();

console.log(person.getDetails());
console.log(employee.getDetails());

// 41. Challenge - Part 2
// Define the Person interface Start by defining a Person interface with a name property of type string.
interface Person41 {
  name: string;
}

// Define the DogOwner interface Next, define a DogOwner interface that extends Person and adds a dogName property of type string.
interface DogOwner4 extends Person41 {
  dogName: string;
}

// Define the Manager interface Then, define a Manager interface that extends Person and adds two methods:
// managePeople and delegateTasks.
// Both methods should have a return type of void.
interface Maneger4 extends Person41 {
  managePeople(): void;
  delegateTasks(): void;
}

// Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager.
// Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33,
// return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
function getEmployee(): Person41 | DogOwner4 | Maneger4 {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "Milan"
    };
  } else if (random < 0.66) {
    return {
      name: "Milica",
      dogName: "Svrcka"
    };
  } else {
    return {
      name: "Micko",
      managePeople: () => console.log("Managing people..."),
      delegateTasks: () => console.log("Delegating tasks...")
    };
  }
}

// Finally, create a variable called employee that can be a Person, DogOwner, or Manager, and assign it the return value of getEmployee.
// Then, log employee to the console.
const employee4: Person41 | DogOwner4 | Maneger4 = getEmployee();
console.log(employee4);

console.log(employee4);

/////////////////////////////
// 41. Challenge - Part 2 & 42. Type Predicate
interface PersonPart41 {
  name: string;
}

interface DogOwner41 extends PersonPart41 {
  dogName: string;
}

interface Manager41 extends PersonPart41 {
  managePeople(): void;
  delegateTasks(): void;
}

const employee41: Person41 | DogOwner41 | Manager41 = getEmployee();
console.log(employee41);

// function isManager(obj: Person | DogOwner | Manager): boolean {
//   return 'managePeople' in obj;
// }

// Type Predicate part with challenge 2
function isManager(obj: Person41 | DogOwner41 | Manager41): obj is Manager41 {
  return "managePeople" in obj;
}

if (isManager(employee41)) {
  employee41.delegateTasks();
}

// 43. Interface vs Type Alias
// A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples, and any other types. Once defined, the alias can be used anywhere in place of the actual type.
type Person43 = {
  name: string;
  age: number;
};

let milan43: Person43 = { name: "Milan", age: 41 };

// Key Differences

// Type aliases can represent primitive types, union types, intersection types, tuples, etc., while interfaces are primarily used to represent the shape of an object.
// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = "up" | "down" | "left" | "right";

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = "up";

// Interfaces can be merged using declaration merging. If you define an interface with the same name more than once, TypeScript will merge their definitions. Type aliases can't be merged in this way.

// Interfaces can be implemented by classes, while type aliases cannot.

// Type aliases can use computed properties, while interfaces cannot.

interface PersonInterface43 {
  name: string;
  greet(): void;
}

class Employee43 implements PersonInterface43 {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let anja = new Employee43("Anjoslava");
anja.greet(); // Outputs: Hello, my name is Anjoslava

/////////////////////////
// 44. Tuples
let person44: [string, number] = ["milan", 41];
console.log(person44[0]);
console.log(person44[1]);

let milan44: [string, number?] = ["Micko"];

function getPerson44(): [string, number] {
  return ["Mica", 29];
}

let randomPerson44 = getPerson44();
console.log(randomPerson44[0]);
console.log(randomPerson44[1]);

// let susan44: [string, number] = ["susan", 25];
// susan44[0] = "New Bobo";
// susan44.push("some random value");
// console.log(susan44);

let susan44: readonly [string, number] = ["susan", 25];
// susan44[0] = "New Bobo";
// susan44.push("some random value");
console.log(susan44);

/////////////////////
// 45. Enums
// Enums in TypeScript allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases.

enum ServerResponseStatus {
  Success = 200,
  Error = "Error"
}
console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"]
  };
}

const response: ServerResponse = getServerResponse();
console.log(response);

///////////////////////////////
// 46. Enums - Gotcha: reverse mapping
// enum ServerResponseStatus46 {
//   Success = "Success",
//   Error = "Error"
// }

// Object.values(ServerResponseStatus46).forEach((value) => console.log(value));

//
// enum ServerResponseStatus46 {
//   Success = 200,
//   Error = 500
// }

// Object.values(ServerResponseStatus46).forEach((value) => {
//   if (typeof value === "number") {
//     console.log(value);
//   }
// });

//
// enum NumericEnum {
//   Member = 1
// }

// enum StringEnum {
//   Member = "Value"
// }

// let numericEnumValue: NumericEnum = 1; // This is allowed
// console.log(numericEnumValue); // 1

// // let stringEnumValue: StringEnum = "Value"; // This is not allowed

//
// enum ServerResponseStatus46 {
//   Success = "Success",
//   Error = "Error"
// }

// function getServerResponse46(): ServerResponse {
//   return {
//     // result: ServerResponseStatus.Success,
//     // this will not fly with string enum but ok with number
//     result: "Success",
//     data: ["first item", "second item"]
//   };
// }

///////////////////////////////
// 47. Challenge - Tuple & Enum
// Define an enum named UserRole with members Admin, Manager, and Employee.
enum UserRole47 {
  Admin47,
  Manager47,
  Employee47
  // Admin47 = "admin 1",
  // Manager47 = "manager 1",
  // Employee47 = "employee 1"
}
console.log(UserRole47);

// Define a type alias named User with properties id (number), name (string), role (UserRole), and contact (a tuple with two elements: email as string and phone as string).
type User47 = {
  id: number;
  name: string;
  role: UserRole47;
  contact: [string, string];
};

// Define a function named createUser that takes a User object as its parameter and returns a User object.
function createUser47(user: User47): User47 {
  return user;
}

// Call the createUser function with an object that matches the User type, store the result in a variable, and log the variable to the console.
const user47: User47 = {
  id: 47,
  name: "Milan Micko",
  role: UserRole47.Employee47,
  contact: ["m@m.com", "124567"]
};
console.log(user47);

///////////////////////////////
// 48. Type Assertion (as)
let someValue48: any = "This is a string";

// Using type assertion to treth "someValue48" as string
let stringLength: number = (someValue48 as string).length;

type Bird48 = {
  name: string;
};

// Assume we have a JSON string from an API or local file
let birdString48 = `{"name": "Eagle"}`;
let dogString48 = `{"name": "Poodle"}`;

// Parse the JSON string into an object
let birdObject48 = JSON.parse(birdString48);
let dogObject48 = JSON.parse(dogString48);

// We are sure that the jsonObject is actually a Bird
let bird48 = birdObject48 as Bird48;
let dog48 = dogObject48 as Bird48;

console.log(bird48.name);
console.log(dog48.name);

//
enum Status48 {
  Panding = "pending",
  Declined = "declined"
}

type User48 = {
  name: string;
  status: Status48;
};

// save Status.Pending in the DB as a string
// retrieve string from the DB
const statusValue48 = "pending";

const user48: User48 = { name: "Milan48", status: statusValue48 as Status48 };
console.log(user48);

///////////////////////////////
// 49. Type unknown
let unknownValue49: unknown;

// Assign different types of values to unknownValue49
unknownValue49 = "Hello World";
unknownValue49 = [1, 2, 3];
unknownValue49 = 41.2468;

// unknownValue49.toFixed(); // Error: Object is of type 'unknown'

// Now, let try to use unknownValue
if (typeof unknownValue49 === "number") {
  // Typescript knows that unknowValue49 is a string in this block
  console.log(unknownValue49.toFixed(1));
}

//
function runSomeCode() {
  const random = Math.random();

  if (random < 0.5) {
    throw new Error("Something went wrong");
  } else {
    throw "some error";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
    console.log("There was an error");
  }
}

///////////////////////////////
// 50. Type never
// let someValue50: never = 0;

type Theme50 = "light" | "dark";

function checkTheme50(theme: Theme50) {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  // theme is of the type never, because it can never havea value that is not "light" od "dark"
  theme;
}

checkTheme50("dark");

//
enum Color50 {
  Red,
  Blue
}
console.log(Color50);

function getColorName(color: Color50) {
  switch (color) {
    case Color50.Red:
      return "Red";
    case Color50.Blue:
      return "Blue";

    default:
      // at build time
      let unexpoctedColor50: never = color;
      // at build time
      throw new Error(`Unexpected color value ${unexpoctedColor50}`);
  }
}

console.log(getColorName(Color50.Red));
console.log(getColorName(Color50.Blue));
// console.log(getColorName(Color50.Green));

///////////////////////////////
// 51. Modules - intro
// import { something } from "./actions";
let name51 = "ShakeAndBake51";
const susan51 = "susan 51";

console.log(something);

///////////////////////////////
// 52. Modules - Imports/Exports (including types)
import newStudent52, { sayHello52, person52, type Student52 } from "./actions";

sayHello52("Typescript 52");
console.log(person52);
console.log(newStudent52);

const anotherStudent52: Student52 = {
  name: "Micko 52",
  age: 90
};

console.log(anotherStudent52);

///////////////////////////////
// 53. Modules - Javascript Files
// When you set "allowJs": true in your tsconfig.json, TypeScript will process JavaScript files and can infer types to a certain extent based on the structure and usage of your JavaScript code.

// However, TypeScript's ability to infer types from JavaScript is not as robust as when working with TypeScript files. For example, it might not be able to infer complex types or types that depend on runtime behavior.

///////////////////////////////
// 54. Type - "typeof" Guards
type ValueType54 = string | number | boolean;
let value54: ValueType54;
const random54 = Math.random();

value54 = random54 < 0.33 ? "Hello" : random54 < 0.66 ? 123.456 : true;
console.log(value54);

function checkValue54(value: ValueType54) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
    return;
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
    return;
  }
  console.log(`boolean: ${value}`);
}

checkValue54(value);

///////////////////////////////
// 55. Type Guards - Equality Narrowing
type Dog55 = { type: "dog"; name: string; bark: () => void };
type Cat55 = { type: "cat"; name: string; meow: () => void };
type Animal55 = Dog55 | Cat55;

function makeSound55(animal: Animal55) {
  if (animal.type === "dog") {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}

const myDog: Dog55 = {
  type: "dog",
  name: "Buddy",
  bark: () => {
    console.log("Woof woof!");
  }
};

makeSound55(myDog);

// Check for properties
function makeSound(animal: Animal55) {
  if ("bark" in animal) {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}

const myCat: Cat55 = {
  type: "cat",
  name: "Whiskers",
  meow: () => {
    console.log("Meow!");
  }
};

makeSound(myCat);

///////////////////////////////
// 56. Type Guards - "Truthy"/"Falsy" guard
function printLength56(str: string | null | undefined) {
  if (str) {
    // In this block, TypeScript knows that `str` is a string
    // because `null` and `undefined` are falsy values.
    console.log(str.length);
  } else {
    console.log("No string provided!!!");
  }
}
printLength56("hello string");
printLength56(null);
printLength56(undefined);

///////////////////////////////
// 57. Type Guards - instanceof
try {
  // Some code that may throw an error
  throw new Error("This is an error");
} catch (error) {
  if (error instanceof Error) {
    console.log("Caught an Error object: " + error.message);
  } else {
    console.log("Caught an unknown error");
  }
}

//
function checkInput57(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year57 = checkInput57(new Date());
const random57 = checkValue54("2020-05-05");
console.log(year57);
console.log(random57);

///////////////////////////////
// 58. Type Guards - Type Predicate
type Student58 = {
  name: string;
  study: () => void;
};

type User58 = {
  name: string;
  login: () => void;
};

type Person58 = Student58 | User58;

const randomPerson58 = (): Person58 => {
  return Math.random() > 0.5
    ? { name: "milojko", study: () => console.log("Studying") }
    : { name: "mica", study: () => console.log("Logging in") };
};

const person58 = randomPerson58();

//
function isStudent58(person: Person58): person is Student58 {
  // return 'study' in person;
  return (person as Student58).study !== undefined;
}

// Usage
if (isStudent58(person58)) {
  person58.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  person58.login();
}

console.log(person58.name);

///////////////////////////////
// 59. Type Guards - "never" Gotcha
type Student59 = {
  name: string;
  study: () => void;
};

type User59 = {
  name: string;
  login: () => void;
};

type Person59 = Student59 | User59;

const person59: Person59 = {
  name: "anna",
  study: () => console.log("Sleeping")
  // login: () => console.log('Logging in'),
};
// person;
function isStudent59(person: Person59): person is Student59 {
  // return 'study' in person;
  return (person as Student59).study !== undefined;
}

// Usage
if (isStudent59(person59)) {
  person59.study(); // This is safe because TypeScript knows that 'person' is a Student.
} else {
  // in this case person is type "never"
  console.log(person);
}

///////////////////////////////////////////
// 60. Type Guards - Discriminated Unions
type IncrementAction60 = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction60 = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action60 = IncrementAction60 | DecrementAction60;

function reducer60(state: number, action: Action60): number {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;

    default:
      const unexpectedAction60: never = action;
      throw new Error(`Unexpected action: ${unexpectedAction60}`);
  }
}

const newState60 = reducer60(15, {
  user: "john",
  type: "increment",
  amount: 5,
  timestamp: 123456
});

console.log(newState60);

///////////////////////////////
// 61. Generics - Intro

// in Typescript, you can declare an array using two sytaxes

// let array1: string[] = ["apple", "bannana", "mango"];
// let array2: number[] = [1,2,3];
// let array3: boolean[] = [true, false, false];

let array1: Array<string> = ["apple", "bannana", "mango"];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, false];

///////////////////////////////
// 62. Generics - Create Generic Function and Interface
function createString62(arg: string): string {
  return arg;
}
function createNumber62(arg: number): number {
  return arg;
}

// Define a generic function
function genericFuction62<T>(arg: T): T {
  return arg;
}

const someStringValue62 = genericFuction62<string>("Hello generics");
const someStringNumber62 = genericFuction62<number>(62);

console.log(someStringValue62);
console.log(someStringNumber62);

// Define a generic interface
interface GenericInteface62<T> {
  value: T;
  getValue: () => T;
}

const genericString62: GenericInteface62<string> = {
  value: "Zdravo svete",
  getValue() {
    return this.value;
  }
};

console.log(genericString62);

///////////////////////////////
// 63. Generics - Promise Example
// A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion
// or failure of an asynchronous operation.

async function someFunc63(): Promise<string> {
  return "Hello Promise";
}

const result63 = someFunc63();
console.log(result63);

///////////////////////////////
// 64. Generics - Generate Array

// generate an arrays of strings
function generateStringArray(length: number, value: string): string[] {
  let result64: string[] = [];
  result64 = Array(length).fill(value);
  return result64;
}

console.log(generateStringArray(5, "Milan"));

function createArray64<T>(length: number, value: T): Array<T> {
  let result64: T[] = [];
  result64 = Array(length).fill(value);
  return result64;
}

let arrayStrings = createArray64<string>(3, "hello generics");
let arrayNumber = createArray64<number>(3, 7);

console.log(arrayStrings);
console.log(arrayNumber);

///////////////////////////////
// 65. Generics - Multiple Types
function pair65<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// usage
let result65 = pair65<number, string>(19, "Milan string 41");
console.log(result65);

///////////////////////////////
// 66. Generics - Inferred Type and Type Constraints example 1
function pair66<T, U>(param1: T, param2: U) {
  return [param1, param2];
}

// usage
let result66 = pair66("Micko", 123);
console.log(result66);

//  const [name,setName] = useState('')
// const [products, setProducts] = useState<Product[]>([])

// type constraint on the generic type T,
// generic type can be either a number or a string.
function processValue66<T extends number | string>(value: T) {
  console.log(value);
}

processValue66("Milandarius");
processValue66(1919);
// processValue66(true)

///////////////////////////////
// 67. Generics - Type Constraints example 2
type Car67 = {
  brand: string;
  model: string;
};

const car67: Car67 = {
  brand: "zeler",
  model: "blue rocket"
};

type Product67 = {
  name: string;
  price: number;
};

const product67: Product67 = {
  name: "dolomite",
  price: 2000
};

type Student67 = {
  name: string;
  age: number;
};

const student67: Student67 = {
  name: "Milano 41",
  age: 41
};

// T extends Student is a type constraint on the generic type T.
// It means that the type T can be any type, but it must be a subtype of Student or Student itself.
// In other words, T must have at least the same properties and methods that Student has.

// function printName<T extends Student67>(input: T): void {
//   console.log(input);
//   console.log(input.name);
// }

// printName(student67);

// function printName<T extends Student67 | Product67>(input: T): void {
//   console.log(input.name);
// }

// printName(product67);

// The extends { name: string } part is a type constraint on T. It means that T can be any type, but it must be an object that has at least a name property of type string.
// In other words, T must have at least the same properties and methods that { name: string } has.
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

printName(student67);
printName(product67);

///////////////////////////////
// 68. Generics - Default Type
interface StoreData68<T = any> {
  data: T[];
}

const storeNumbers68: StoreData68<number> = {
  data: [1, 2, 3, 4]
};

const random68: StoreData68 = {
  data: [1, "random string", 68, 4]
};

console.log(storeNumbers68, random68);

///////////////////////////////
// 69. Fetch Data - Basic
// const url = "https://www.course-api.com/react-tours-project";

// async function fetchData(url: string) {
//   try {
//     const response = await fetch(url);
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "There was a error...";
//     console.error(errMsg);
//     // Throw error
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour: any) => console.log(tour.name));

// return empty array
// throw error in catch block
// we are not setting state values in this function

///////////////////////////////
// 70. Fetch Data - Setup Type & 71. Fetch Data - Gotcha
// const url = "https://www.course-api.com/react-tours-project";

// // Define a Type for the data you are fetching
// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
//   // Add more fields as necessary.
//   // something: boolean;
// };

// async function fetchData(url: string): Promise<Tour[]> {
//   try {
//     const response = await fetch(url);
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data: Tour[] = await response.json();
//     console.log(data);

//     return data;
//   } catch (error) {
//     const errMsg =
//       error instanceof Error ? error.message : "There was a error...";
//     console.error(errMsg);
//     // Throw error
//     return [];
//   }
// }

// const tours = await fetchData(url);
// tours.map((tour) => console.log(tour.name));

///////////////////////////////
// 72. Zod Library
const url = "https://www.course-api.com/react-tours-project";

const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string()
});

// Define a Type for the data you are fetching
type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const rowData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rowData);

    if (!result.success) {
      throw new Error(`Invalid data: ${result.error}`);
    }

    return result.data;
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "There was a error...";
    console.error(errMsg);
    // Throw error
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => console.log(tour.name));

///////////////////////////////
// 75. Classes - Intro
class Book75 {
  title: string;
  author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork75 = new Book75("Deep Work", "Cal Newport");
console.log(deepWork75);

///////////////////////////////
// 76. Classes - Default Property
class Book76 {
  title: string;
  author: string;
  // checkedOut: boolean = false;
  checkedOut = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork76 = new Book76("Deep Work 76", "Cal Newport 76");
deepWork76.checkedOut = true;
// deepWork76.checkedOut = "some text";
console.log(deepWork76);

///////////////////////////////
// 77. Classes - Readonly Modifier
class Book77 {
  readonly title: string;
  author: string;
  checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork77 = new Book77("deep work 77", "cal newport 77");
// deepWork77.title = "something else";
console.log(deepWork77.title);

// 78. Classes - Public and Private
class Book78 {
  readonly title: string;
  public author: string;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut() {
    this.checkedOut = this.toggleCheckedOutStatus();
  }
  public isCheckedOut() {
    return this.checkedOut;
  }

  private toggleCheckedOutStatus() {
    return !this.checkedOut;
  }
}

const deepWork78 = new Book78("Deep Work 78", "Cal Newport 78");
deepWork78.checkOut();
console.log(deepWork78.isCheckedOut());
// deepWork78.toggleCheckedOutStatus();

// 79. Classes - Constructor Shortcut
class Book79 {
  private checkedOut: boolean = true;
  constructor(public readonly title: string, public author: string) {}

  checkedIn() {
    return this.checkedOut;
  }
}
const deepWork79 = new Book79("Deep Work 79", "Cal Newport 79");
console.log(deepWork79.checkedIn());

// 80. Classes - Getters an Setters
class Book80 {
  private checkedOut: boolean = false;
  constructor(public readonly title: string, public author: string) {}
  get info() {
    return `${this.title} by ${this.author}.`;
  }

  set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }

  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author} and it is ${this.checkOut} story.`;
  }
}

const deepWork80 = new Book80("Deep Work 80", "Cal Newport 80");
console.log(deepWork80.info);
// deepWork80.checkOut = false;
console.log(deepWork80.checkOut);
console.log(deepWork80.someInfo);

// 81. Classes - Implement Interface
interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person81 implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const hipster = new Person81("Milan", 41);
hipster.greet();
