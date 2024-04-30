const susan51 = "susan 51";
export let something = "something actions.ts";

// 52. Modules - Imports/Exports (including types)
export function sayHello52(name: string): void {
  console.log(`Hello ${name}`);
}

export let person52 = "Susan 52";

export type Student52 = {
  name: string;
  age: number;
};

const newStudent52: Student52 = {
  name: "Milano 52",
  age: 150
};

export default newStudent52;
