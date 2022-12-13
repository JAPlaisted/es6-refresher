import Teacher, { promote } from "./teacher";
import { Person } from "./person";

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();
// Classes
console.log("CLASSES =>");
const person = {
  name: "Jon",
  walk() {
    console.log(this);
  },
  talk() {},
};

person.talk();
person.name = "";

const targetMember = "name";
person[targetMember.valueOf] = "Mosh";

// Functions are objects
console.log("FUNCTIONS ARE OBJECTS =>");

person.walk();

const walk = person.walk.bind(person);

console.log(walk);
walk();

// Arrow functions
console.log("ARROW FUNCTIONS =>");

const square = function (number) {
  return number * number;
};

const newSquare = (number) => {
  return number * number;
};

console.log(square(2));
console.log(newSquare(2));

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);
console.log("Active Jobs: ", activeJobs);

// ARROW FUNCTIONS AND THIS
console.log("ARROW FUNCTIONS AND THIS ==>");
const man = {
  talk() {
    console.log("this", this);
  },
  talkSlow() {
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  },
};

man.talkSlow();

// Array.map
console.log("ARRAY.MAP ==>");

const colors = ["red", "green", "blue"];
const items = colors.map((color) => `<li>${color}</li>`);
console.log(items);

// OBJECT DESTRUCTURING
console.log("OBJECT DESTRUCTURING ==>");

const address = {
  street: "",
  city: "",
  country: "",
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

const { street, city, country } = address;

// THE SPREAD OPERATOR
console.log("THE SPREAD OPERATOR");

const first = [1, 2, 3];
const second = [4, 5, 6];

// const combined = first.concat(second);
const combined = [...first, ...second];

// MORE CLASSES
console.log("MORE CLASSES =>");

const person2 = {
  name: "Mosh",
};

const bob = new Person("Bob");

bob.walk();

// INHERITANCE
console.log("INHERITANCE =>");

const teacher = new Teacher("Jim", "MSc");
teacher.teach();

// MODULES
console.log("MODULES =>");

teacher.teach();

// NAMED AND DEFAULT EXPORTS
console.log("NAMED AND DEFAULT EXPORTS =>");
