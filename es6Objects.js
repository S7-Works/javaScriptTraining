let a = {
  x: 1,
};
let b = {
  y: 2,
};
Object.setPrototypeOf(a, b);          // 2.
console.log(a.y);

let a = { a: 1 },
  b = { a: 5, b: 2 },
  c = { c: 20 };
Object.setPrototypeOf(b, c);

let target = {};
Object.assign(target, a, b);           // { a: 5, b: 2}
console.log(target);

var title = "Mazatla/u0301n";
// console.log(title + " " + title.length);    // Mazatla/u0301n 14.

let ids = [9000, 9001, 9002];
let iter = ids[Symbol.iterator]();
iter.next(); // { value: undefined, done: true }
iter.next();
iter.next();
console.log(iter.next());

Arrays and Collections Examples.

let salaries = Array(9000);
console.log(s0alaries.length);    // 9000.

let amounts = [800, 810, 820];
let salaries = Array.from(amounts, (v) => v + 100);     // [900, 910, 920]
console.log(salaries);

let amounts = [800, 810, 820];
let salaries = Array.from(
  amounts,
  function (v) {
    return v + this.adjusetment; // [850, 860,870]
  },
  { adjusetment: 50 }
);
console.log(salaries
let salaries = [600, 700, 800];
salaries.fill(900, 1);              // [600, 900, 900]
console.log(salaries);

let ids = ["A", "B", "C"];
console.log(...ids.entries()); // [0, 'A'], [1, 'B'], [2, 'C']

let employee1 = { name: "jake" };
let employee2 = { name: "janet" };

let employees = new Map();
employees.set(employee1, "ABC");
employees.set(employee2, "123");
console.log(employees.get(employee1));     // ABC

let perks = new Set(["car", "10 weeks vacation", "jet"]); // 3
let newPerks = new Set(perks);
console.log(newPerks.size);

let perks = new Set([{ id: 800 }, { id: 800 }]); // 2
console.log(perks.size);

let perks = new Set([1, "1"]);         // 2
console.log(perks.size);

let p1 = { name: "Car" };
let p2 = { name: "Jet" }; // undefined
let perks = new WeakSet([p1, p2]);
console.log(perks.size);
s;

class Restarent {
  constructor() {
    this.id = 8000;
  }
}

let r = new Restarent();
console.log(Reflect.get(r, "id")); // 8000.
