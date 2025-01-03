// github.com/john-smilga/typescript-course/blob/main/01-typescript-tutorial/README.md#install

import { something } from "./actions";
/////////////////////////
// 01. Type annotation

let awesomeName: string = "shakeAndBake";
awesomeName = "text";
awesomeName = awesomeName.toUpperCase();
// awesomeName = 41;
// console.log(awesomeName);

let amount: number = 41;
amount = 41 + 5;
// amount = "text"
console.log(amount);

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = "text name";

// 08. type inference
// let awesomeName2: string = "shakeAndBake";
let awesomeName2 = "shakeAndBake";

/////////////////////
// 09. first challenge

// - Create a variable of type string and try to invoke a string method on it.
let myName: string = "milan";
myName = myName.toUpperCase();
// console.log(myName);
// - Create a variable of type number and try to perform a mathematical operation on it.
let myAge: number = 41;
myAge = myAge + 100;
// console.log(myAge);
// - Create a variable of type boolean and try to perform a logical operation on it.
let milan: boolean = true;
let isAdult: boolean = myAge >= 18;
// console.log(isAdult);

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
// console.log(myName, myAge, isAdult);

/////////////////////////
// 11. Union type
let tax: number | string = 10;
tax = 100;
tax = "100RSD";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
requestStatus = "error";
requestStatus = "pending";
// requestStatus = "random";
console.log("Union type", requestStatus);

/////////////////////////
// 12. Type any
let notSure: any = 4;
notSure = "string text";
notSure = false;

/////////////////////////
// 13.  Practical example
const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1984") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}

console.log("13. Practical example", foundBook?.length);

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

// 15. Arrays - Fundamentals
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
let array: (string | boolean | number)[] = ["apple", true, "bannana", 41];

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

// 17. Object Fundamentals
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

/////////////////////////
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
// products.push({ title: "boots", price: 150 });
// products.push({ title: "boots", price: "expensive" });

/////////////////////////
// 19.  Functions - Parameters
function seyHi(name: string) {
  console.log(`Hello ${name}!!!`);
}

seyHi("Milan");
// seyHi(3);

/////////////////////////
// 20. Function - return
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

/////////////////////////
// 21. Type: Any Example
function addThree(number: any) {
  let anotherNumber: number = 3;
  return number + anotherNumber;
}

const result = addThree(5);
const someValue = result;
// someValue.myMethod();
console.log(someValue);

/////////////////////////
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

/////////////////////////
// 23. Functions - Optional Parameters
function calculatePrice(price: number, discount?: number) {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 50);
// let priceAfterDiscount = calculatePrice(100);
console.log(priceAfterDiscount);

/////////////////////////
// 24. Functions - Default Parameters
function calculateScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}
let scoreAfterPenalty = calculateScore(100, 10);
let scoreWithoutPenalty = calculateScore(300);

/////////////////////////
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

/////////////////////////
// 26. Functions - Void Keyword
function logMessege(msg: string): void {
  console.log(msg);
  // return "Hello"
}
logMessege("hello, Typescript");

/////////////////////////
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

/////////////////////////
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

/////////////////////////
// 29. Excess Property Checks
function createStudent2(student: { id: number; name: string }): void {
  console.log(`Welcome to the course ${student.name.toUpperCase()}`);
}

const newStudent2 = {
  id: 6,
  name: "micko",
  email: "micko@m.com"
};

createStudent2(newStudent2);
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

/////////////////////////
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
  console.log(`${user.id} - Hello there ${user.name.toUpperCase()} !!!`);
  return user;
}

createUser(susan);

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

//////////////////////////
// Challenge type alias

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
  // type gourd
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

/////////////////////////
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

/////////////////////////
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
const result3 = deepWork2.printTitle("It is an awesome book");
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
interface DogOwner41 extends Person41 {
  dogName: string;
}

// Define the Manager interface Then, define a Manager interface that extends Person and adds two methods:
// managePeople and delegateTasks.
// Both methods should have a return type of void.
interface Maneger41 extends Person41 {
  managePeople(): void;
  delegateTasks(): void;
}

// Define the getEmployee function Now, define a function called getEmployee that returns a Person, DogOwner, or Manager.
// Inside this function, generate a random number and use it to decide which type of object to return. If the number is less than 0.33,
// return a Person. If it's less than 0.66, return a DogOwner. Otherwise, return a Manager.
function getEmployee(): Person41 | DogOwner41 | Maneger41 {
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
const employee4: Person41 | DogOwner41 | Maneger41 = getEmployee();
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
// A type alias is a way to give a name to a type. It can represent primitive types, union types, intersection types, tuples,
// and any other types. Once defined, the alias can be used anywhere in place of the actual type.
type Person43 = {
  name: string;
  age: number;
};

let milan43: Person43 = { name: "Milan", age: 41 };

// Key Differences

// Type aliases can represent primitive types, union types, intersection types, tuples, etc.,
// while interfaces are primarily used to represent the shape of an object.
// Type alias for a primitive type
type Score = number;
type NumberOrString = number | string;
// Type alias for literal types
type Direction = "up" | "down" | "left" | "right";

// Using the type aliases
let gameScore: Score = 100;
let move: Direction = "up";

// Interfaces can be merged using declaration merging. If you define an interface with the same name more than once,
// TypeScript will merge their definitions.
// Type aliases can't be merged in this way.

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
// Enums in TypeScript allow us to define a set of named constants.
// Using enums can make it easier to document intent, or create a set of distinct cases.

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
enum ServerResponseStatus46 {
  Success2 = "Success2",
  Error2 = "Error2"
}

Object.values(ServerResponseStatus46).forEach((value) => console.log(value));

enum ServerResponseStatus46 {
  Success3 = 200,
  Error3 = 500
}

Object.values(ServerResponseStatus46).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

enum NumericEnum {
  Member = 1
}

enum StringEnum {
  Member = "Value"
}

let numericEnumValue: NumericEnum = 1; // This is allowed
console.log(numericEnumValue); // 1

// let stringEnumValue: StringEnum = "Value"; // This is not allowed

enum ServerResponseStatus46 {
  Success = "Success",
  Error = "Error"
}

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

// let birdObjectTest = JSON.stringify(birdObject48);
// console.log(birdObjectTest);

console.log(bird48);
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

const user48: User48 = {
  name: "Milan48",
  status: statusValue48 as Status48
};
console.log(user48.status);

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

function checkTheme50(theme: Theme50): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }
  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
  // theme is of the type never, because it can never have a value that is not "light" od "dark"
  theme;
}

checkTheme50("dark");

//
enum Color50 {
  Red,
  Blue,
  Green
}
console.log(Color50);

function getColorName(color: Color50) {
  switch (color) {
    case Color50.Red:
      return "Red";
    case Color50.Blue:
      return "Blue";
    case Color50.Green:
      return "Green";

    default:
      // at build time
      let unexpoctedColor50: never = color;
      // at runtime
      throw new Error(`Unexpected color value ${unexpoctedColor50}`);
  }
}

console.log(getColorName(Color50.Red));
console.log(getColorName(Color50.Blue));
console.log(getColorName(Color50.Green));

///////////////////////////////
// 51. Modules - intro
// import { something } from "./actions";
let name51 = "ShakeAndBake51";
const susan51 = "susan 51";

console.log(something);

///////////////////////////////
// 52. Modules - Imports/Exports (including types)
import newStudent52, { sayHello52, person52, type Student52 } from "./actions";
// import { someValue as exampleValue } from "./example";
// console.log(exampleValue);

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
