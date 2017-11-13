// HomeWork1
const idOfStudent = []
let nameOfStudent = []
const birthOfStudent = []
let addressOfStudent = []
let phoneOfStudent =[]
let parentOfStudent = []


// HomeWork2
const idOfGames = []
const nameOfGames = []
const companyOfGames = []
const dateOfGames = []
let languageOfGames = []
let platformOfGames = []
let typesOfGames = []
const isOver18 = []
const isNeededInternet = []


/*資料類型(值) Start*/

// parseInt(string, radix)
//8進位
// const octalNumber = parseInt('071', 8)
//
// //2進位
// const binaryNumber = parseInt('0111', 2)
//
// //16進位
// const hexNumber = parseInt('0xFF', 16)
//
// // Number()
// const binaryNumber = Number('0b11') // 3
// const octalNumber = Number('0o11') // 9
// const hexNumber = Number('0x11')  // 17

//toString([radix])
const decimalNumber = 125
// console.log(decimalNumber.toString()) //'125'
// console.log(decimalNumber.toString(2)) //'1111101'
// console.log(decimalNumber.toString(8)) //'175'
// console.log(decimalNumber.toString(16)) //'7d'

/*資料類型(值) End*/



/*浮點數的轉換 Start*/

// 字串轉浮點數 parseFloat(string)
// const eNumber = parseFloat("40 years") //40
// const fNumber = parseFloat("He was 40")  //NaN
//
// // Math
// const intValueOne = Math.floor( floatValue ) //地板值 10
// const intValueTwo = Math.ceil( floatValue ) //天花板值 11
// const intValueThree = Math.round( floatValue ) //四捨五入值 11
//
// // toFixed([digits])
// const myString = (3).toFixed(2) //string, 3.00
//
// const numObj = 12345.6789
// const numObjString = numObj.toFixed() //string, 12346
// 

//// HomeWork1 Math.random()
//function getRandomAwards (min, max) {
//  min = Math.ceil(1)
//  max = Math.floor(10000)
//  return Math.floor(Math.random()* (max-min+1))+ min
//}
//  console.log("50吋液晶電視 1台:" + Math.floor(Math.random()* (max-min+1))+ min)

/*浮點數的轉換 End*/
  
//控制流程作業一

//公司交給你一個案子，要撰寫一支對網站上線上填寫表單進行檢查欄位的程式，以下是這個表單的欄位與要檢查的規則:+
//
//姓名(fullname): 最多4個字元，必填
//手機號碼(mobile): 手機號碼必需是10個數字
//出生年月日(birthday): 年1970-2000，月份1-12，日期1-31
//住址(address): 最少8個字元，最多50個字元，必填
//Email(email): 最少10個字元，最多50個字元，必填

  
let userFullname = '藍阿千'
switch(true) {
    case (userFullname.length>4):
        console.log('你的名字好長喔～～～')
        break
    case (userFullname.length>1):
        console.log(`${userFullname}您好！`)
        break
        default:
        console.log('請重新輸入您的姓名！')
        break
}




/*迴圈 Start*/

//遞增表達式(incrementExpression)
//for (let count = 0 ; count < 10 ;){
//    console.log(count)
//    count++
//}

//
//for (let count = 0, total = 20 ; count < 10 && total<=20; count++,total --){
//    console.log(count, total)
//}


//let count = 0
//
//while (count < 10) {
//    console.log(count)
//    count++
//}

/*for...of語句*/

//用於陣列
//let aArray = [1, 2, 3]

//for (let value of aArray) {
//  console.log(value)
//}

//用於字串
//let aString = "abcd";

//for (let value of aString) {
//  console.log(value);
//}

/*迴圈 End*/
