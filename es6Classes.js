class Task {}
console.log(typeof Task); // function.

class Task {}

let task = new Task();
console.log(typeof task); // This is Object.

let newClass = class task {
  constructor() {
    console.log("constructing Task"); // constucting Task.
  }
};
new newClass();

let newClass = class task {
  constructor() {
    console.log("constructing Task");
  }
};
new newClass();

let newClass = class task {
  constructor() {
    console.log("constructing Task");
  }
};
new newClass();

class Task {
  constructor() {
    console.log("constructing Task"); //Class constructor Task cannot be invoked with out 'new keyword'
  }
}
let task = {};
Task.call(task);

class Task {}
console.log(window.Task === Task); // false

class project {
  static getDefaultId() {
    return 0;
  }
}
console.log(Project.getDefaultId()); // project is not defined.

class project {
  static getDefaultId() {
    return 0;
  }
}
var p = new project();
console.log(p.getDefaultId()); // Error: Object doesn't support property or method

class project {
  constructor() {
    console.log(typeof new.target); // function
  }
}
var p = new project();

class project {
  constructor() {
    console.log(new.target); // mainly use of 'new.target' constructor()
  }
}

var p = new project();
