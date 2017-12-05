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

// function HEY() {
//   var section = "HELLO"
//   console.log(section)
// }
// HEY()
// console.log(section)

// if (true) {
//   var test = true
// }

// console.log(test)

// for(var i = 10 ; i >4; i--) {

// }
// console.log(i)

// function Yo () {
//   if (false) {
//     var text = 'Yo'
//   }
//   console.log(text)
// }
// text()
// console.log(text)

// function Help() {
//   console.log(text)

//   var text = "hello"
// }
// Help()

// JS.INFO 6.5 EX
// var section = "HEY"
// function test () {
//   console.log(section)
// }

// console.log(window.section)
// console.log(window.test)

// let user= 'test'
// console.log(user)
// console.log(window.user) //undeifind
// console.log('user' in window) //false

// var user = 'Global'
// function fn() {
//   var user = 'Local'
//   alert(window.user) // Global
// }
// fn()

// console.log( this === window )

// let testFun = () => {
//   console.log(this)
// }

// testFun()

// JS.INFO 6.6 EX
// let HiFun = () => {
//   console.log('Hi')

//   HiFun.counter ++
// }
// HiFun.counter = 0
// HiFun()
// HiFun()
//  console.log(`Call ${HiFun.counter} times`)

// let HiFun = () => {
//   console.log('hi')
// }
// console.log(HiFun.name)

// let user = {
//   HiFun() {

//   },
//   ByeFun: function() {

//   }
// }
// console.log(user.HiFun.name)
// console.log(user.ByeFun.name)

// function makeCount() {
//   function counter () {
//     return counter.count ++
//   }
//   counter.count = 0
//   return counter
// }
// let counter = makeCount()
// console.log( counter())
// console.log( counter())

// JS.INFO 6.7 'new Function'

// function getFun () {
//   let value = 'test'
//   let func = new Function('console.log(value)')
//   return func
// }
// getFun()() //value is not defined
// function getFun () {
//   let value = 'test'
//   let func = function(){
//     'console.log(value)'
//   }
//   return func
// }
// getFun()() //

// JS.INFO 6.8 'setTimeout & setIterval'
// function test () {
//   console.log('hello')
// }
// setTimeout(test, 1000)

// function fFuN(section, who) {
//  console.log(section + ',' + who)
// }
// setTimeout(fFuN, 1000, 'Hey', 'world')

// test defaultOptions
// let dOpt = {
//   img: 4,
//   index: 4,
//   padding: 5
// }

// const slide = () => {
//   let index = dOpt.index
//   console.log(index)
// }

// const gPage = (i) => {
//   return Math.floor(dOpt.index / dOpt.img)
// }

// console.log(gPage())

// JS.INFO 7.6 'Methods for prototypes'

// let animal = {
//   eat: true
// }

// let pig = Object.create(animal, {
//   drink : {
//     value: 'Yap'
//   }
// })
// console.log(pig.drink)
// 'Very plain' object EX1
// let obj = Object.create(null)
// console.log(obj)
// 'Very plain' object EX2 & Object.keys(obj)
// let chDic = Object.create(null)
// chDic.hello = '你好'
// chDic.bye  = '88'

// console.log(Object.entries(chDic))
// All properties
// let animal = {
//   eats: 'eat somthing!'
// }

// let doggy = {
//   talk: 'woof',
//   __proto__: animal
// }
// console.log(Object.keys(doggy))
// for(let prop in doggy) console.log(prop)
// JS.INFO 7.7 'Class patterns'
// let User= (name) => {
//   return {
//     sayHi: ()=> {
//       console.log(name)
//     }
//   }
// }
// let user = User('Hey')
// user.sayHi()

// var greeting = function () {

// }

// closeTerminal(greeting)
// function closeTerminal () {
//   message()
// }

console.log('a' + 'b')