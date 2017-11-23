// Currying
// const addFun =
//   firstNum =>
//     secondNum =>
//       thirdNum => firstNum + secondNum + thirdNum
// console.log(addFun(1)(2)(3))

// proto2factory
// const Animal = (name) => {
//   let walk = () => {
//     return console.log(name + 'walks')
//   }
//   return {
//     walk: () => console.log(name + ' bounces!')
//   }
// }

// let animal = Animal('pig')
// animal.walk()
// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.walk = function() {
//   console.log(this.name + ' walks');
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = Animal.prototype;

// Rabbit.prototype.walk = function() {
//   console.log(this.name + " bounces!");
// };

// let animal = new Animal("pig");
// animal.walk(); // pig bounces!

// factory ex
// const User = (name, birthday) => {
//   let calcAge = () => {
//     return new Date().getFullYear() - birthday.getFullYear()
//   }
//     return {
//       sayHi() {
//         console.log(name + ', age' + calcAge())
//       }
//     }
// }
// let user = User('HELLO', new Date(2000,0,1))
// user.sayHi()

// prototype ex
// function User(name, birthday) {
//   this._name = name;
//   this._birthday = birthday;
// }

// User.prototype._calcAge = function() {
//   return new Date().getFullYear() - this._birthday.getFullYear();
// };

// User.prototype.sayHi = function() {
//   console.log(this._name + ', age:' + this._calcAge());
// };

// let user = new User("John", new Date(2000,0,1));
// user.sayHi(); // John