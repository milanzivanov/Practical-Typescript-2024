///////////////////////////////
// 54. Type - "typeof" Guards
type ValueType54 = string | number | boolean;
let value54: ValueType54;
const random54 = Math.random();

if (random54 < 0.33) {
  value54 = "Hello";
} else if (random54 < 0.66) {
  value54 = 123.456;
} else {
  value54 = true;
}

// value54 = random54 < 0.33 ? "Hello" : random54 < 0.66 ? 123.456 : true;

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

console.log("Type - 'typeof' Guards is:", value54);

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

const myDog55: Dog55 = {
  type: "dog",
  name: "Leo",
  bark: () => {
    console.log("Woof woof!");
  }
};
const myCat55: Cat55 = {
  type: "cat",
  name: "Cicana",
  meow: () => {
    console.log("Meow meow!");
  }
};

makeSound55(myDog55);
makeSound55(myCat55);

// Check for properties
function makeSound(animal: Animal55) {
  if ("bark" in animal) {
    // TypeScript knows that `animal` is a Dog in this block
    animal.bark();
    console.log(animal.name);
  } else {
    // TypeScript knows that `animal` is a Cat in this block
    animal.meow();
  }
}

const myCat: Cat55 = {
  type: "cat",
  name: "Cicana",
  meow: () => {
    console.log("Meow 123!");
  }
};

makeSound(myCat);
makeSound(myDog55);

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
printLength56("hello");
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
    console.log("Unknown error");
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
  console.log(person58);
}

///////////////////////////////////////////
// 60. Type Guards - Discriminated Unions
type IncrementAction60 = {
  type: "increment";
  user: string;
  amount: number;
  timestamp: number;
};

type DecrementAction60 = {
  type: "decrement";
  user: string;
  amount: number;
  timestamp: number;
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
