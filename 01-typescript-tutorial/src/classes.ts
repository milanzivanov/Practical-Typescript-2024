///////////////////////////////
// 75. Classes - Intro
class Book {
  title: string;
  author: string;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const deepWork = new Book("Deep Work", "Cal Newport");
console.log(deepWork);

///////////////////////////////
// 76. Classes - Default Property
class Book1984 {
  title: string;
  author: string;
  // checkedOut: boolean = false;
  checkedOut = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
}

const book1984 = new Book1984("1984", "George Orwell");
book1984.checkedOut = true;
// book1984.checkedOut = "some text";
console.log(book1984);

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

//////////////////////////////////
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

const mobyDick = new Book78("Moby Dick", "Herman Melville");

mobyDick.checkOut();
mobyDick.checkOut();
console.log(mobyDick.isCheckedOut());
// mobyDick.toggleCheckedOutStatus();

////////////////////////////////
// 79. Classes - Constructor Shortcut
class Book79 {
  private checkedOut: boolean = true;
  constructor(
    public readonly title: string,
    public author: string,
    private someNumber: number
  ) {}

  public getSomeNumber() {
    return this.someNumber;
  }

  checkedIn() {
    return this.checkedOut;
  }
}
const deepWork79 = new Book79("Deep Work 79", "Cal Newport 79", 555);
console.log(deepWork79.checkedIn());
console.log(deepWork79.getSomeNumber());

//////////////////////////////////////////
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

const littlePrince = new Book80(
  "The Little Prince",
  "Antoine de Saint-Exupéry"
);
console.log(littlePrince);
console.log(littlePrince.info);
// deepWork80.checkOut = false;
console.log(littlePrince.checkOut);
console.log(littlePrince.someInfo);

///////////////////////////////////////
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
