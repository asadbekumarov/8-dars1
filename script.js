// // 3-topshiriq
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   say() {
//     console.log(`${this.name} is making noise`);
//   }
// }
// class Cat extends Animal {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }
//   say() {
//     console.log(`${this.name} is meowing`);
//   }
// }
// let cat1 = new Cat("bagira", 2, "red");
// cat1.say();
// ////////////////
// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   say() {
//     console.log(`${this.name} is making noise`);
//   }
// }
// class Dog extends Animal {
//   constructor(name, age, breed) {
//     super(name, age);
//     this.breed = breed;
//   }
//   say() {
//     console.log(`${this.name} is Vov-vov`);
//   }
// }
// let dog1 = new Dog("Rex", 3, "German");
// dog1.say();
///////////////////////////////
// class Avtomabil {
//   constructor(model, price) {
//     this.model = model;
//     this.price = price;
//   }
//   say() {
//     console.log(`${this.model} the price is cheap`);
//   }
// }
// class Cobalt extends Avtomabil {
//   constructor(model, price, color) {
//     super(model, price);
//     this.color = color;
//   }
//   say() {
//     console.log(`${this.model} is fast`);
//   }
// }
// let cob1 = new Cobalt("Cobalt", 14000, "red");
// cob1.say();
////////////////////////
// 2-topshiriq
// class Mathcalculator {
//   static add(a, b) {
//     return a + b;
//   }
//   static subtract(a, b) {
//     return a - b;
//   }
//   static multiply(a, b) {
//     return a * b;
//   }
//   static divide(a, b) {
//     if (b === 0) {
//       return "Cannot divide by zero";
//     }
//     return a / b;
//   }
//   static length(obj) {
//     return Object.keys(obj).length;
//   }
//   static max(arr) {
//     return Math.max(...arr);
//   }
//   static reverse(str) {
//     return str.split("").reverse().join("");
//   }
//   static sort(arr) {
//     return [...arr].sort((a, b) => a - b);
//   }
//   static Even(num) {
//     if (num % 2 === 0) {
//       console.log("juft");
//     } else {
//       console.log("toq");
//     }
//   }
//   static toUpperCase(str) {
//     return str.toUpperCase();
//   }
// }
// console.log(Mathcalculator.divide(2, 5));

// 3-topshiriq
// let Elstart = document.querySelector(".start");
// let Elmove = document.querySelector(".move");
// let Elstop = document.querySelector(".stop");
// let Elgas = document.querySelector(".gas");
// let Elfield = document.querySelector(".field");

// class Car {
//   constructor() {
//     Elstart.addEventListener("click", this.startCar.bind(this));
//     Elmove.addEventListener("click", this.moveCar.bind(this));
//     Elstop.addEventListener("click", this.stopCar.bind(this));
//     Elgas.addEventListener("click", this.speedCar.bind(this));

//     this.count = 0;
//     this.fiel = 0;
//   }

//   startCar() {
//     console.log("Car started");
//     Elfield.textContent = "Moshina zavat qilindi";
//   }

//   moveCar() {
//     console.log("Car is moving");
//     Elfield.textContent = "Moshina yurdi";
//   }

//   speedCar() {
//     console.log("Car speed is increased");
//     this.count += 20;
//     this.fiel += 5;
//     Elfield.textContent = `Tezlik ${this.count} ga teng, benzin sarfi ${this.fiel} ga teng`;
//   }

//   stopCar() {
//     console.log("Car stopped");
//     this.count = 0;
//     this.fiel = 0;
//     Elfield.textContent = "Moshina to'xtadi";
//   }
// }
document.addEventListener("DOMContentLoaded", () => {
  let Elstart = document.querySelector(".start");
  let Elmove = document.querySelector(".move");
  let Elstop = document.querySelector(".stop");
  let Elgas = document.querySelector(".gas");
  let Elfield = document.querySelector(".field");

  class Car {
    constructor() {
      Elstart.addEventListener("click", this.startCar.bind(this));
      Elmove.addEventListener("click", this.moveCar.bind(this));
      Elstop.addEventListener("click", this.stopCar.bind(this));
      Elgas.addEventListener("click", this.speedCar.bind(this));

      this.count = 0;
      this.fiel = 0;
    }

    startCar() {
      console.log("Car started");
      Elfield.textContent = "Moshina zavat qilindi";
    }

    moveCar() {
      console.log("Car is moving");
      Elfield.textContent = "Moshina yurdi";
    }

    speedCar() {
      console.log("Car speed is increased");
      this.count += 20;
      this.fiel += 5;
      Elfield.textContent = `Tezlik ${this.count} ga teng, benzin sarfi ${this.fiel} ga teng`;
    }

    stopCar() {
      console.log("Car stopped");
      this.count = 0;
      this.fiel = 0;
      Elfield.textContent = "Moshina to'xtadi";
    }
  }

  new Car();
});
