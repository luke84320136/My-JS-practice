const starwars = [
  { name: 'Luke', age: 28, gender: 'male'},
  { name: 'Solo', age: 26, gender: 'male'},
  { name: 'Lia', age: 28, gender: 'female'}
]

// map  
const names = starwars.map((character) => character.name)
console.log(names)

const age = starwars.map((character) => character.age)
console.log(age)

const isBoys = starwars.filter((character) => character.gender === 'male')
console.log(isBoys)

const ageOver28 = starwars.map((character) => character.age > 26)
console.log(ageOver28)

const youngOrOld = starwars.map((character) => (character.age > 26)? 'Old' : 'Young')
console.log(youngOrOld)

// for loop
// const female = []
// for (var i = 0; i < starwars.length; i ++) {
//   if (starwars[i].gender === 'female')
//     female.push(starwars[i])
// }
// console.log(female)

//filter
const female = starwars.filter((female) => female.gender === 'female')
console.log(female)


// reduce Ex1
const orders = [
  { amount: 450 },
  { amount: 500 },
  { amount: 250 },
  { amount: 300 },
  { amount: 125 },
]

const totalAmount = orders
  .reduce((sum, order) => sum + order.amount, 0)

console.log(totalAmount)

//reduce Ex2
const  someOrder = {
  items: [
    { name: 'Dog food', price: 10,  quantity: 5},
    { name: 'Dog cage', price: 500, quantity: 3 }
  ]
}

const orderTotal = order => order.items
  .reduce((prev, cur) => prev + (cur.price * cur.quantity), 0)

  result = orderTotal(someOrder)
  result

 
//Recursion ->when a function call itself, until it doesn't
let countDownForm = (num) => {
  if (num === 0) return
  console.log(num) //mini的數字到0
  countDownForm(num - 1)
}

countDownForm(10)

// Iterative FNub
const FNum = (n) => {
  if( n === 1 ) {
    return 1
  } else {
    return n * FNum( n-1 )
  }
} 
 
console.log(FNum(3))

// n! = n * (n-1) * n(-2) * .... * 1
// iter (3,1)
// iter (2,3)
// iter (1,6)
// Answer : 6
const IterNum = (num) => {
  const iter = (counter, acc) => { //acc -> accumulator累加器
    if ( counter === 1 ) {
      return acc
    }
    return iter( counter-1, counter*acc )
  }
  return iter(num, 1)
}

console.log(IterNum(3))

let categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs'},
  { id: 'persian', 'parent': 'cats'}
]


let makeTree = (categories, parent) => {
  let node = {}
  //use filter catch id:animals
  categories
    .filter(c => c.parent === parent)
    .forEach(c =>
       node[c.id] = makeTree(categories, c.id))
  return node 
}

console.log(
  JSON.stringify(
    makeTree(categories, null)
    , null, 2)
)
/*
{
  animals: {
    mammals: {
      dogs: {
        chihuahua: null
      },
      cats: {
        persian: null
      }
    }
  }
}*/

const myObj = {
  ary : [1,3,5],
  firstAdd : (a, b) =>  a + b,
  secondAdd : (c) => myObj.ary[0] + c,
}

console.log(myObj.ary[0])
console.log(myObj.ary[1])
console.log(myObj.ary[2])
myObj.ary.forEach((element) => {console.log(element)})
console.log(myObj.firstAdd(1,5))
console.log(myObj.secondAdd(9))



//8/17 Example1 bind
let talk = () => {
  console.log(boromir.sound)
}

let boromir = {
  blabber: talk,
  sound: 'One does not simpoly walk into Modor !'
}
boromir.speak = talk.bind(boromir)
let blabber = boromir.speak
blabber() 


// Example2 bind
let talkMe = () => {
  console.log(me.sound)
}

let me = {
  sound: 'HAHAHA',
  speak: talkMe
}

me.speak()


// this Example
const objA = {
  test () {
    console.log(this)
    console.log(this === objA)
    console.log(objA)
  }
}

objA.test()

// Prototype Example
function talking () {
  console.log(this.sound)
}

let animal = {
  talking
}

let dog = {
  sound: 'WOOOF'
}

let GGDog = {
  barbar: function () {
    console.log(this.sound.toUpperCase())
  }
}

// 連結到Prototype

Object.setPrototypeOf(dog, animal)
animal.talking = function () {
  console.log('Hey I"m Here')
}
dog.talking()
Object.setPrototypeOf(GGDog, dog)
GGDog.barbar()


// 8/18 'new'

// function Person (saying) {
//   this.saying = saying
// }

// Person.prototype.talk = function () {
//   console.log('我說：', this.saying)
// }

// var Luke = new Person ('我好帥')
// Luke.talk()

// rebuild new function

function Person (saying) {
  this.saying = saying
}

Person.prototype.talk = function () {
  console.log('我說：', this.saying)
}
// 1. rebuild a new function
function NEW (constructor) {
  var obj = {}
  Object.setPrototypeOf(obj, constructor.prototype) // 2.set the prototype
  var argsAraay = Array.prototype.slice.apply(arguments) // 把 arguments 轉成 array, 才能許用slice
  constructor.apply(obj, argsAraay.slice(1)) // 3.execute constructor with 'this'
  return obj // 4. return created object
}

var Luke = NEW (Person, '我好帥')
Luke.talk()


// 8/26 JSON clone
let firstObj = {a:1, b:2}
let secondObj = JSON.parse(JSON.stringify(firstObj))
let thirdObj = {c: 5}

console.log(firstObj, secondObj)
secondObj.b = 3
console.log(firstObj, secondObj)

// 8/26 JSON merge 合併
Object.assign(firstObj,thirdObj)
console.log(firstObj)

// Javascript sort
const arys= [52,125,4,7,235,1221,8,1,12,32,89]

const sortAsc = arys.sort((a,b) => a-b)
console.log(sortAsc)

const sortDesc = arys.sort((a,b) => b-a)
console.log(sortDesc)

// 8/29 splice
let arr = ['a', 'b', 'c', 'd', 'e']
arr.splice(1, 2, 'haha')
console.log(arr)

// 9/4 TwoSum function 
let twoSum = (numArray, sum) => {
  let pairs = []
  let hashtable = []

  for (let i = numArray.length; i--;) { // let i = 0 ,len = numArray.length;i<len;i++
    let currNum = numArray[i]
    let counterpart = sum - currNum
    if (hashtable.indexOf(counterpart) !== -1) { //-1 是找不到字串的number
      pairs.push([currNum, counterpart])
    }
    hashtable.push(currNum)
  }
  return pairs
}
console.log(twoSum([1, 6, 4, 5, 3, 3], 7))

// Closure
const myName = 'Luke Lan'
let greetMe = () => {
  console.log('Hello, ' + myName + '!' )
}
greetMe()

// Fizz Buzz
let fizzBuzz = (num) => {
  for(let i = 1; i<num ;i++ ) { 
    if (i % 15 === 0) console.log('C')
    else if (i % 3 === 0) console.log('a')
    else if (i % 5 ===0) console.log('b')
    else console.log(i)
  }
}
fizzBuzz(5)