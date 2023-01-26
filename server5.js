// var a = 10;

// function aFun() {
//     var a = 100;
//     console.log(a);
// }
// function bFun() {
//     var a = 200
// }

// aFun()
// bFun()

/* function a() {
    let b = 2;
    console.log(b);
    c();
    function c() {
        console.log(b);
    }
}
// var b = 10;
a() */

// var a = 20;
// {
//     const a = 10;
//     {
//         console.log(a);
//     }
// }

// for (var i = 1; i <= 5; i++) {
//     function b(i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000)
//     }
//     b(i);
// }
// var b = 10;
// function x() {
//     var a = 6;
//     function y() {
//         console.log(a);
//     }
//     y()
// }
// x()

// for (var index = 0; index < 10; index++) {
//     // function x(index) {
//     setTimeout(() => {
//         console.log(index);
//     }, 0);
//     // }
//     // x(index)
// }


// function makeFunc() {
//     const name = 'Mozilla';
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function x() {
// }
// console.log(x());


// // function statement
// function a() {
//     console.log('called a');
// }

// // function expression
// var b = function () {
//     console.log('called a');
// }

// a()
// b()
// hoisting difference between function expression and function statement

//function declaration
// function a() {
//     console.log('called a');
// }

// function anonymous

// function () {

// }

//named function expression
// var d = function xyz(param1, param2) {
//     return console.log('xyz');
// }

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// What is Callback Function in JavaScript
// Blocking the main thread
// poer of Cateacks ?
//  11 beep avout EERERISEETERY
// Closures veso with EEREILESERRES
// Scope veso witn EVGREINASEERGTS
// Garbage Collection & resoveEventListeners
// 3mvascript 13 8 synchronous and single - thresded I

// Things learned:
// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used

// let myArray = [1, 2, 2, 3, 4, 55];

// let maxValue = myArray.reduce((accu, current) => {
//     return accu = accu > current ? accu : current;
// })
// console.log(maxValue);

// const returnValue = myArray.forEach((element) => {
//     return element * element;
// });
// console.log(returnValue);
// let uniqueValue = []
// for (let i = 0; i < myArray.length; i++) {
//     if (!uniqueValue.includes(myArray[i])) {
//         uniqueValue.push(myArray[i])
//     }
// }
// console.log(uniqueValue);

// var maxValue = myArray.reduce(function (acc, curr) {
//     if (!acc.includes(curr))
//         acc.push(curr);
//     return acc;
// }, []);
// console.log(maxValue);


// function myFun() {
//     var myName = "my name";
//     console.log(myName);
//     if (true) {
//         let data = 'abcd';
//         gData = data
//     }
// }
// myFun();
// console.log(gData);

// var a = 10;
// function fun1() {
//     a = 20;
// }
// console.log(a);
// console.log(fun1());//undefined because of fun1 have not return statement

// const str = ["a", "c", "b", "d", "d", "a", "a"]
// const obj = {}
// for (let i = 0; i < str.length; i++) {
//     const word = str[i]
//     if (!obj[word]) {
//         obj[word] = 0
//     }
//     obj[word]++
// }

// console.log(obj);

// const myArray = [9, 1, 2, 3, 2, 4, 4, 2, 5, 6, 7, 8, 9]

// let unique = [...new Set(myArray)].sort((a, b) => a - b)

// console.log(unique);

// const filtered = myArray.filter((element, index) => myArray.indexOf(element) === index)

// console.log(filtered);

// let reduceFiltered = myArray.reduce((accu, current) => {
//     if (!accu.includes(current))
//         accu.push(current)
//     return accu;
// }, [])

// console.log('reduceFiltered', reduceFiltered);

function sortArray(array) {
    let reverseArray = []
    for (let i = array.length - 1; i >= 0; i--) {
        reverseArray.push(array[i])
    }
    return reverseArray;
}

// const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]
// console.log(sortArray(numbers))
// console.log([...new Set(numbers)].sort((a, b) => a - b))
// const numbers = [33, 2, 8];
// numbers.sort();
//console.log(numbers)
console.log(false == '0');
// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());//banana

