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
var d = function xyz(param1, param2) {
    return console.log('xyz');
}

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myArray)

// What is Callback Function in JavaScript
// Btocking the main thread
// poer of Cateacks ?
//  11 beep avout EERERISEETERY
// Closures veso with EEREILESERRES
// Scope veso witn EVGREINASEERGTS
// Garbage Coltection & resoveEventListeners
// 3mvascript 13 8 synchronous and single - thresded I

// Things learned:
// 1. Function that is passed on as argument to another function is called callback function.
// 2. setTimeout helps turn JS which is sinhlethreaded and synchronous into asynchronous.
// 3. Event listeners can also invoke closures with scope.
// 4. Event listeners consume a lot of memory which can potentially slow down the website therefore it is good practice to remove if it is not used