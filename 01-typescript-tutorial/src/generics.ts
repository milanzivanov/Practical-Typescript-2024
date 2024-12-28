///////////////////////////////
// 61. Generics - Intro

// in Typescript, you can declare an array using two sytaxes

// let array1: string[] = ["apple", "bannana", "mango"];
// let array2: number[] = [1,2,3];
// let array3: boolean[] = [true, false, false];

let array1: Array<string> = ["apple", "bannana", "mango"];
let array2: Array<number> = [1, 2, 3];
let array3: Array<boolean> = [true, false, false];
let array4: Array<string | number | boolean> = ["apple", 1, true];

console.log(array4);

///////////////////////////////
// 62. Generics - Create Generic Function and Interface
function createString(name: string): void {
  console.log(`Hello from String ${name}`);
}
createString("Milan");

function createNumber(value: number): number {
  return value;
}

// Define a generic function
function genericFunction<T>(arg: T): T {
  return arg;
}

console.log(genericFunction<string>("Hello string"));
console.log(genericFunction<string>("Hello string"));

const someStringValue = genericFunction<string>("Hello generics");
const someStringNumber = genericFunction<number>(62);

console.log(someStringValue);
console.log(someStringNumber);

// Define a generic interface
interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "Zdravo svete",
  getValue() {
    return this.value;
  }
};

console.log(genericString);

///////////////////////////////
// 63. Generics - Promise Example
// A Promise in JavaScript (and thus TypeScript) is an object representing the eventual completion
// or failure of an asynchronous operation.

async function someFunction(): Promise<string> {
  return "Hello Promise";
}

const result63 = someFunction();
console.log(result63);

///////////////////////////////
// 64. Generics - Generate Array

// generate an arrays of strings
function generateStringArray(length: number, value: string): string[] {
  let result: string[] = [];
  result = Array(length).fill(value);
  return result;
}

console.log(generateStringArray(5, "Milan"));

function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  result = Array(length).fill(value);
  return result;
}

let arrayStrings = createArray<string>(3, "hello generics");
let arrayNumber = createArray<number>(3, 7);

console.log(arrayStrings);
console.log(arrayNumber);

///////////////////////////////
// 65. Generics - Multiple Types
function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

// usage
let result = pair<number, string>(19, "Milan string 41");
console.log(result);

///////////////////////////////
// 66. Generics - Inferred Type and Type Constraints example 1

//  const [name,setName] = useState('')
// const [products, setProducts] = useState<Product[]>([])

// type constraint on the generic type T,
// generic type can be either a number or a string.
function processValue<T extends string | number>(value: T) {
  console.log(value);
}

processValue("Milandarius");
processValue(1919);
// processValue66(true)

///////////////////////////////
// 67. Generics - Type Constraints example 2
type Car = {
  brand: string;
  model: string;
};
type Product = {
  name: string;
  price: number;
};
type Student = {
  name: string;
  age: number;
};

const car: Car = {
  brand: "zastava",
  model: "1100"
};

const product: Product = {
  name: "dolomite",
  price: 2000
};

const student: Student = {
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

printName(student);
printName(product);

///////////////////////////////
// 68. Generics - Default Type
interface StoreData<T = any> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4]
};

const random68: StoreData = {
  data: [1, "random string", 68, 4]
};

console.log(storeNumbers, random68);
