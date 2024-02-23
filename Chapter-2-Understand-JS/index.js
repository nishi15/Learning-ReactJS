const person1 = {
  name: "Alex",
  printName1: function f() {
    console.log(this.name);
  },
  printName2: () => {
    console.log(this);
  },
};

const person2 = {
  name: "Bob",
};

function x() {
  console.log(this);
}

// x.call();
x.call(person2);

person1.printName1();

// because arrow functions take this from window
person1.printName2();
