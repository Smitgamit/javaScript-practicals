// const str = 'this is JavaScript J'
// const revStr = str.split('').reverse().join('')

// console.log(revStr);
// const wordCount = {}
// for (let i = 0; i < str.length; i++) {
//     const word = str[i]
//     if (!wordCount[word]) {
//         wordCount[word] = 1;
//     } else {
//         wordCount[word]++;
//     }
// }
// console.log(wordCount);
// for (var index = 0; index < 3; index++) {
//     setTimeout(() => {
//         console.log(index);
//     }, index * 1000);
// }

// const str = 'time fun&!! lime turk';
// let removePunctuation = str.replace(/[^a-zA-Z ]/g, "").split(" ")
// const longStr = removePunctuation.reduce((acc, current) => {
//     return acc = (acc.length > current.length || acc.length === current.length) ? acc : current
// })
// console.log(longStr);

// var arr = str.match(/[a-z]+/gi);
// console.log(arr);
// var sorted = arr.sort(function (a, b) {
//     return b.length - a.length;
// });

// console.log(sorted[0]);

// (function () {
//     console.log(1);
//     setTimeout(function () { console.log(2) }, 1060);
//     setTimeout(function () { console.log(3) }, 0);
//     console.log(4);
// })();

// (() => {
//     console.log("TEst");
// })();


// function f(a, b, c) {
//     // a = 20;
//     m = ["1", "2", "3"];
//     a = 3;
//     b = "X";
//     c.first = false;
//     // console.log(a);
// }
// const x = 4;
// const y = ["A", "B", "C"];
// const z = { first: true };

// f(x, y, z);

// console.log(x, y, z);

// var myStr = 'Namaste JavaScript';
// myStr.split('').map((data) => {
//     console.log(data);
// })
// for (let i = 0; i < myStr.length; i++) {
//     console.log(myStr[i])
// }


// let x = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
// console.log(x.flat(2))
// const abc = x.flatMap((item) => {
//     return item
// })
// console.log(abc);
// let y = x.map(function (num) {
//     return num * 2;
// })
// console.log(y);

// let y = x;
// y.reverse();
// console.log(x, y);

// console.log(2 ** 3)
// console.log(0 == '0') // true
// console.log(0 == []); // true
// console.log('0' == []); // true


// Curry currying functions
// function a(x) {
//     return function b(y) {
//         return function c(z) {
//             return x + y + z
//         }
//     }
// }
// console.log(a(1)(2)(3))

// const sum = a = (x) => b = (y) => c = (z) => x + y + z;
// const sum = a => b => c => a + b + c;
// console.log(sum(1)(2)(3));


// function Person() {
//     this.name = 'John',
//         this.age = 23
// }

// const person = new Person();

// checking the prototype value
// console.log(Person.prototype); // { ... }
// Person.prototype.gender = 'male';
// console.log(Person.prototype);
// console.log(person);
// const x = { name: 'alex' }
// const y = JSON.parse(JSON.stringify(x))
// const z = x;
// console.log(y);
// console.log(x === y);
// let a = '20';
// let b = 'str';
// console.log(a + +b)

// const p = [3, 1, 2]
// const q = p.sort();
// console.log(p, q);


// const x = { name: 'smit' }
// const y = { name: 'smit' }
// console.log(x === y);
// const a = []
// const b = []
// console.log(0 === []);
// const a = '1'
// const b = '1'
// console.log(a === b);
// const date = new Date()
// const newdate = new Date()
// console.log(date === newdate);

// var a = 2;
// function square(n) {

// }

// var clothes = ['t-shirt'];
// clothes.length = 0;
// console.log(clothes[0]);

// How many subscriber do you have ?
//     What to do  i post ?
//         at  my location.
// my 

const isCheck = true;
const myObj = {
    name: 'Alex',
    ...(isCheck && { test: true })
}
console.log(myObj)