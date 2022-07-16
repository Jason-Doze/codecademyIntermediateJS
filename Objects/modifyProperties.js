// const cat = {
//   age: 2,
//   name: "Bailey",
//   meow: function () {
//     console.log("Meow!");
//   },
//   greet: function (name) {
//     console.log(`Hello ${name}`);
//   },
// };

// cat.age += 1;
// cat.age;
// // 3
// cat.name = 'Bambi';
// cat.name;
// // 'Bambi'

// // console.log(cat);
// cat.greet(cat.name);
// cat.meow();

// const printer = {};
// printer.on = 'true';
// printer.mode = 'black and white';
// printer['remaining sheets'] = 186;
// // console.log(printer);

// printer.print = function () {
//     console.log('The printer is printing!');
// };

// console.log(printer);

// delete printer.mode;

// printer.print();

// let string = 'orange';

// function changeToApple(string) {
//     string = 'apple';
// }

// console.log(changeToApple(string));
// console.log(string);

// const myArray = [
//   function alerter() {
//     alert("Hello!");
//   },
// ];
// // call the function
// myArray[0]();

// Create an object called `chameleon` with two properties:

// 1. `color`, whose value is initially set to 'green' or 'pink'
// 2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
//     if it is 'green', or to 'green' if it is 'pink'

// const chameleon = {
//     color: 'green',
//     changeColor: function () {
//         if (this.color === 'green') {
//             this.color = 'pink';
//             return this.color;
//         } else {
//             this.color = 'green';
//             return this.color;
//         }
//     }
// }
// console.log(chameleon.changeColor());

const triangle = {
  type: "polygon",
  sides: 3,
  sumOfAngles: 180,
  equilateral: true,
  equiangular: true,
};

console.log(Object.keys(triangle));