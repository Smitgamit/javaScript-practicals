// console.clear();
/* const products = [
    {
        id: 1,
        title: 'Samsung Galaxy S10',
        price: 251
    },
    {
        id: 2,
        title: 'Iphone 13',
        price: 499
    },
    {
        id: 3,
        title: 'MacBook Air',
        price: 699
    },
    {
        id: 4,
        title: 'Lenove Laptop',
        price: 299
    },
    {
        id: 5,
        title: 'LG Monitor',
        price: 459
    },
    {
        id: 6,
        title: 'Samsung Galaxy S10',
        price: 250
    },
]; */
// var b = 1;
// function outer() {
//     var b = 2;
//     function inner() {
//         b++;
//         // var b = 3;
//         console.log(b);
//     }
//     inner();
// }
// outer();


// for (var a = 0; a < 5; ++a) {
//     function testMe(s) {
//         setTimeout(function () {
//             console.log(s);
//         }, s * 1000);
//     }
//     testMe(a);
// }
// console.log(a)


// var ab = 1;
// function firstMe() {
//     // let ab = 2;
//     console.log(ab);
//     (function () {
//         ++ab
//         var ab = 3
//         console.log(ab);
//     })()
// }
// firstMe();


// let objFirst = {
//     1: 'abcd',
//     2: 'xyz',
//     3: { 'name': 'fsd' }
// }
// console.log(Object.keys(objFirst));
// console.log(Object.values(objFirst));
// console.log(Object.entries(objFirst)); // convert in to array

// let sourceObject = { name: "neymar", country: "brazil" }
// let shallowCopyObj = Object.assign({}, sourceObject);
// shallowCopyObj.country = "India";
// console.log('shallowCopyObj', shallowCopyObj);
// console.log('sourceObject', sourceObject);
//{ name: 'neymar', country: { name: 'India' } }
// let brazilObject = {};
// brazilObject.name = "messi";
// brazilObject.year = 2018;
// brazilObject.speak = function () {
//     return "My Name is " + this.name + " and this is year " + this.year;
// }
// console.log(brazilObject.speak());


// let argentinaObject = brazilObject;
// brazilObject.year = 2019;
// console.log(argentinaObject.year)
// // 2019
// // argentinaObject.name = "Ronaldo"
// console.log(argentinaObject.speak())
// // My Name is messi and this is year 2019
// // console.log(brazilObject.name)


// (function () {
//     console.log("TEst anonymous");
// })();
// (function () {
//     console.log('IIFE');
// })();
// (function () {
//     console.log('Immediately invoked function execution');
// })();

// (async function () {
//     console.log(1);
//     setTimeout(function () { console.log(2) }, 1000);
//     setTimeout(() => { console.log(3) }, 0);
//     (() => {
//         console.log(5);
//     })()
//     console.log(4);
// })();

// used var
// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function () { console.log(i); });
//     document.body.appendChild(btn);
// }

//used let
// for (let i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function () { console.log(i); });
//     document.body.appendChild(btn);
// }

// for (var i = 0; i < 5; i++) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     (function (i) {
//         btn.addEventListener('click', function () { console.log(i); });
//     })(i);
//     document.body.appendChild(btn);
// }


// ['a', 'b', 'c', 'd', 'e'].forEach(function (value, i) {
//     var btn = document.createElement('button');
//     btn.appendChild(document.createTextNode('Button ' + i));
//     btn.addEventListener('click', function () { console.log(i); });
//     document.body.appendChild(btn);
// });

// arr2 use reference of arr1
// var arr1 = "john".split('');
// var arr2 = arr1.reverse(); // n h o j
// var arr3 = "jones".split(''); // j o n e s
// arr2.push(arr3);
// console.log(arr2.slice(-1));
// console.log("array 1: length=" + arr1.length + " last=onh" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);
// console.log(+"1", -"1");

// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// console.log('before', x)
// var x = 21;
// var girl = function () {
//     console.log(x); // output undefined
//     var x = 20;
// };
// girl();
// console.log('after', x)


// let and var different scope
// for (let i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);
// }

// console.log(1 < 2 < 3); // true
// console.log(true < 3); // true

// console.log(1 > 2 > 3); // false
// console.log(true > 1); // false
/* ............................. */
// let a = 20
// let b = "20"
// console.log(a);
// console.log(b);
// console.log(-a + b);

//console.log('Ca' > 'Cb'); //check from right to left
// let a = 0;
// let b = "0";
// console.log(a == false);
// console.log(b == false);
// console.log(Boolean(0));
// console.log(Boolean("0"));

/* --- while loop ---- */
// let i = 0;
// while (i < 3) { // shows 0, then 1, then 2
//     console.log(i);
//     i++;
// }

/* The prefix form++i: */
// let i = 0;
// while (++i < 5) console.log(i);

/* The postfix form d++ */
// let d = 0;
// while (d++ < 5) { console.log(d); }

// let a = 0;
// do {
//     console.log(a);
//     a++;
// } while (a < 3);

// for loop
// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     alert(i);
// }

// for (let i = 0; i < 3; ++i) { // shows 0, then 1, then 2
//     alert(i);
// }

/* find the even/odd value find from 1 to 10 */
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

/* -------- Functions ------ */

//nextLabel: 
// for (let a = 0; a < 15; a++) {
//     if (a === 3) break // or continue // nextLabel;
//     console.log("The number is ", a)
// }

// single function

// for (let a = 0; a < 10; a++) {
//     // console.log('*'.repeat(a));
//     for (let b = 0; b < a; b++) {
//         console.log('*'.repeat(a));
//     }
// }

// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) continue nextPrime;
//         }
//         console.log(i); // a prime
//     }
// }
// showPrimes(10)

// split function 
// function displayPrimes(n) {
//     for (let i = 2; i < n; i++) {
//         if (!isPrime(i)) continue;
//         console.log(i);
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         if (n % i == 0) return false;
//     }
//     return true;
// }
// displayPrimes(30)

// Simple Invocation
// function simpleInvocation() {
//     console.log(this);
// }
// simpleInvocation(); // logs global object //return Window

// // Method Invocation
// const methodInvocation = {
//     method() {
//         console.log(this);
//     }
// };
// methodInvocation.method(); // logs methodInvocation object //this.return object this


// Indirect Invocation
// const context = { value1: 'A', value2: 'B' };
// function indirectInvocation() {
//     console.log(this);
//     // console.log(arguments[0])
// }
// indirectInvocation.call(context);  // logs { value1: 'A' } this return object value 
// indirectInvocation.apply(context); // logs { value1: 'A' }this return object value 
// indirectInvocation(context) // normal function call this return Windows object

// let indirectInvocation = () => {
// console.log(this);  //An arrow function doesn’t have its own this value and the arguments object
// console.log(arguments[0]) //arrow function doesn't have arguments object
// }

// indirectInvocation(context); // normal function call this return Windows object

// var variable = "Global Level Variable";
// let myObject = {
//     variable: "Object Level Variable",
//     arrowFunction: () => {
//         console.log(this.variable);
//     },
//     regularFunction() {
//         console.log(this.variable);
//     }
// };
// myObject.arrowFunction?.();
// myObject.regularFunction();

// function exampleFunction(a, b, c) {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(a, b, c);
// }

// exampleFunction(1, 2, 3)

// printArguments = (...args) => {
//     console.log(...args);
// }
// printArguments(1, 2, 3);



/* --- callback  function --- */
// function myDisplayer(some) {
//     console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 45, myDisplayer);

// const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// // Call removeNeg with a callback
// const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// // Keep only positive numbers
// function removeNeg(numbers, callback) {
//     const myArray = [];
//     for (const x of numbers) {
//         if (callback(x)) {
//             myArray.push(x);
//         }
//     }
//     return myArray;
// }
// console.log(posNumbers);


/* ---------- Playing with Object -------- */

/* const user = {
    name: 'Frank',
    age: 19,
}
console.log("keys", Object.keys(user));
console.log("value", Object.values(user));
user.mobile = 987878998;
console.log(user);
user.mobile = 09898989898;
console.log(user);

let adminUser = { ...user };
console.log('adminUser--->', adminUser);
adminUser.city = 'New York'
delete adminUser.mobile
console.log('user--->', user);
console.log('adminUser--->', adminUser);
 */

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
// };

// for (let key in user) {
//     // keys
//     console.log(key);  // name, age, isAdmin
//     // values for the keys
//     console.log(user[key]); // John, 30, true
// }


// let codes = {
//     "+49": "Germany",
//     "+41": "Switzerland",
//     "+44": "Great Britain",
//     // ..,
//     "+1": "USA"
// };

// for (let code in codes) {
//     console.log(+code); // 1, 41, 44, 49
// }


// let userAdmin = {
//     admin() {
//         console.log("I am admin");
//     }
// };

// let userGuest = { name: "Alex" };

// userAdmin.admin?.(); // I am admin

// userGuest.admin?.(); // nothing happens (no such method)
// console.log(userGuest.name)
// console.log(userGuest.name)


/* ------------------  Array Start ------------------ */
// let arr = ['Apple', { name: 'John' }, true, function () { alert('hello') }];
// console.log(arr.length);

// arr.forEach((data) => {
//     // console.log(data);
// })

// for (const key in arr) {
//     // console.log(arr[key])
// }

// for (const iteratorData of arr) {
//     // console.log(iteratorData);
// }

// (async () => {
// for await (const num of arr) {
//     console.log(num);
// }
// }
// )
// let fruits = ["Apple", "Orange", "Plum"];
// console.log(fruits[fruits.length - 1]);
// console.log(fruits.at(-1));
// console.log(fruits["0"]);
// console.log(fruits[0]);
// fruits.push("Banana") // add at last position in array
// fruits.push("Banana") // add at last position in array
// console.log(fruits);
// fruits.pop("Banana") // remove from last position in array
// console.log(fruits);
// fruits.unshift("Mango") //add element at the first position
// console.log(fruits);
// fruits.shift() //  remove 1 element from the start // Remove the element with the index 0.
// console.log(fruits);
// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // truncate to 2 elements
// console.log(arr); // [1, 2]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// iterates over array elements
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// Technically, because arrays are objects, it is also possible to use for..in.
// But that’s actually a bad idea. There are potential problems with it.

// for (let key in fruits) {
//     console.log(fruits[key]);
// }

/* ------------------  Array End ------------------ */


/* ------------- Task Start------------- */

// const myArray = [0, 1, 1, -2, 3, -4, 5, 6, -7, -7, 8, 9, -9, -9, -9, 8, 8, 8, 8, 8]
// let positiveArray = []
// const negativeArray = []
// myArray.map((data, index) => {
//     if (data >= 0) {
//         positiveArray.push(data)
//     } else {
//         negativeArray.push(data)
//     }
// })
// console.log(positiveArray);
// console.log([...new Set(positiveArray)])
// console.log([...new Set(negativeArray)])
// console.log(negativeArray)
// function count_duplicate(a) {
//     let counts = {}

// for (let i = 0; i < a.length; i++) {
// console.log('counts[a[i]]--->', a[i]);
// if (counts[a[i]]) {
//     counts[a[i]] += 1
// } else {
//     counts[a[i]] = 1
// }
// }
// for (let prop in counts) {
//     if (counts[prop] >= 2) {
//         console.log(prop + " counted: " + counts[prop] + " times.")
//     }
// }
// console.log(counts)
// }

// count_duplicate(negativeArray)

// let uniquePositive2 = positiveArray.filter((v, i, a) => a.indexOf(v) === i);
// // let uniqueNegative = negativeArray.filter((neg, index, a) => {
// //     console.log(neg, index);
// // })

// console.log('uniquePositive----2---->', uniquePositive2);
// let uniquePositive = [...new Set(positiveArray)]
// let uniqueNegative = [...new Set(negativeArray)];

// console.log('positiveArray-->', uniquePositive);
// console.log('negativeArray--->', uniqueNegative);

/* ------------- Task End------------- */

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // visits, some users come multiple times
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // for (let user of set) {
// //     console.log(user.name); // John (then Pete and Mary)
// // }
// // set.forEach((data, index) => {
// //     console.log(data.name);
// // })

// const user = [1, 2, 3, 4, 5,]
// console.log(user);
// const arr = [...user, ...user]
// console.log(arr);

// function mul(x) {
//     return function (y) {
//         return function (z) {
//             return x * y * z
//         }
//     }
// }

/* ----------------------------------------- */

// function mul(a) {
//     return (b) => {
//         return (c) => {
//             return a * b * c
//         }
//     }
// }
// console.log("anonymous--->", mul(2)(3)(4)); // output : 24
// console.log("anonymous--->", mul(2)(2)(10)); // output : 40

/* ----------------------------------------- */

// const heroes = [
//     { name: 'Wolverine', family: 'Marvel', isEvil: false },
//     { name: 'Deadpool', family: 'Marvel', isEvil: false },
//     { name: 'Magneto', family: 'Marvel', isEvil: true },
//     { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
//     { name: 'Batman', family: 'DC Comics', isEvil: false },
//     { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
//     { name: 'Legolas', family: 'Tolkien', isEvil: false },
//     { name: 'Gandalf', family: 'Tolkien', isEvil: false },
//     { name: 'Saruman', family: 'Tolkien', isEvil: true },
// ]

// heroes.map((data, index) => {
//     console.log(data.name.toLocaleUpperCase());
// })

// let welcomeArray = "Welcome to this Javascript Guide!";
// const data = reverseBySeparator(welcomeArray, "")
// console.log(data);

// function reverseBySeparator(string, separator) {
//     return string.split(separator).reverse().join(separator);
// }

// const numArray = [3, 4, 3, 6, -1, 6, -1, 0]
// const toFindDuplicates = numArray.filter((item, index) => numArray.indexOf(item) !== index)
// const repeatedItemsOnly = numArray.filter((item, index) => numArray.indexOf(item) !== index)

// console.log('repeatedItemsOnly', repeatedItemsOnly);
// console.log('toFindDuplicates--->', toFindDuplicates);



// numArray.filter((num, index, arr) => console.log(num, arr))

/* ----------------- Array Function Start ---------------- */

// const fruitsArray = [
//     { item: "Apple", price: "50" },
//     { item: "Orange", price: "30" },
//     { item: "Grapes", price: "40" },
//     { item: "Orange", price: "80" }
// ]
// const carArray = ["Nexon", "Safari", "Venue", "Altroz", "Toyoto",]

// let findData = carArray.find((car, index) => {
//     return car === "Nexon"
// })
// console.log(findData);

// let carData = fruitsArray.filter((fruit, index) => {
//     return fruit.price >= 50;
// })
// console.log(carData);

// let res = carArray.entries()
// carArray.forEach((arr, index) => {
//     console.log(res.next().value);
// })
// const removed = carArray.splice(2, 0, "Tiago")
// console.log(removed);
// console.log('carArray--->', carArray);

/* ----------------- Array Function End ---------------- */



/* -------- Object methods and this -------- */
// let user = {
//     name: 'John',
//     age: '28',
//     great: function () {
//         let surname = 'Carter'
//         return 'Hello ' + this.name + surname;
//     }
// }
// console.log(user.great())

// constructor function
// function Person() {
//     this.name = 'John',
//         this.age = 23
// }

// // creating objects
// // You can also add properties and methods to a constructor function using a prototype.For example,

// let person1 = new Person();
// let person2 = new Person();

// // adding new property to constructor function
// // Person.prototype.gender = 'Male';
// person1.prototype.gender = 'Male';

// console.log(person1.gender); // Male
// console.log(person2.gender); // Male


/* ----- constructor function start------ */
// function Person() {
//     this.name = 'John',
//         this.age = 23
// }
// const person = new Person();
// checking the prototype value
// console.log('Person--->', Person.prototype); // { ... }
/* ----- constructor function end ------ */

/* ----------- class constructor start----------  */
// class User {
//     constructor() {
//         this.name = "Eric",
//             this.age = 26
//     }
// }
// const user = new User();
// console.log('user----->', User.prototype);
/* ----------- class constructor end----------  */

/*  ------ 1. Finding The Intersection of Arrays  ------ */

// let arr1 = ["a", "b", "e", "f"]
// let arr2 = ["a", "b", "c", "d"]

// let interSectElement = arr1.filter((firstArrayItem) => arr2.includes(firstArrayItem))
// console.log('interSectElement-->', interSectElement);

/* 2. Finding The Difference of Arrays */
// let deference = arr1.filter((firstArrayItem) => !arr2.includes(firstArrayItem))
// let deference2 = arr2.filter((secondArrayItem) => !arr1.includes(secondArrayItem))
// console.log('deference-->', deference);
// console.log('deference--2-->', deference2);

/* 3. Finding The Symmetric Difference of Arrays 123 */
// const symmetric = arr2.filter((item) => !arr1.includes(item)).concat(arr1.filter((element) => arr2.includes(element)))
// console.log('symmetric--->', symmetric)


/* ----------   4. Finding the Max or Min Value in the Array ------------- */

// const maxPrice = Math.max(...products.map((product) => product.price))
// const minPrice = Math.min(...products.map((product) => product.price))
// console.log(maxPrice)
// console.log(minPrice)

// const highestPrice = products.reduce((preValue, currentValue) => {
//     return currentValue.price > preValue.price ? currentValue : preValue
// })
// const lowestPrice = products.reduce((preValue, currentValue) => {
//     return currentValue.price < preValue.price ? currentValue : preValue
// })
// console.log('highestPrice--->', highestPrice);
// console.log('lowestPrice--->', lowestPrice);

// console.log(Object.values(products));
// console.log(Object.keys(products));
// const totalPrice = products.reduce((previous, current) => {
//     return;
// })
// console.log("totalPrice--------->", totalPrice)
// console.log("highestPrice--->", highestPrice);

// const array1 = [1, 2, 3, 4, 5];

// let totalOfArray = array1.reduce((prev, current) => {
//     return prev + current;
// })
// console.log('totalOfArray-->', totalOfArray);

/* --------- 6. Finding the Frequency of Elements in the Array -------------- */
// lets count the how many times repeated the element
/* let letters = ["a", "b", "a", "d", "c", "b", "a"]

const countRepeatedElements = (pArray) => {
    return pArray.reduce((prev, current) => {
        prev[current] = prev[current] ? prev[current] + 1 : 1
        return prev
    }, {})
}
console.log(countRepeatedElements(letters)) */

// let languages = countries.map((country) => country.languages).flat()
// console.log('languages---->', countries);

// let setOfLanguages = new Set(languages)
// console.log(setOfLanguages)


// async function fetchCountries() {
//     fetch('./countries.json')
//         .then(response => response.json())
//         .then(json => console.log(json))
// }
// fetchCountries()

// function getAxiosCountries() {
//     axios.get('/countries.json')
//         .then(function (response) {
//             // handle success
//             // console.log(response.data);
//             const languages = response.data.map((country) => country.languages).flat()
//             console.log('languages--->', languages);
//             let setOfLanguages = new Set(languages)
//             console.log("setOfLanguages", setOfLanguages)
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
// }

// getAxiosCountries()


/* ------------  useLayoutEffect vs useEffect start --------------- */
// https://javascript.plainenglish.io/react-hooks-when-to-use-uselayouteffect-instead-of-useeffect-3271a96d881a
// Lifecycle of a React component
// The user interacts with the app and state or props of the component change.
// React updates the Document Object Model(DOM).
// The useLayoutEffect hook fires.
// The browser paints => visual changes are displayed to the user.
// The useEffect hook fires.

/* ------------  useLayoutEffect vs useEffect stop--------------- */

/* It’s 2022, Please Don’t Just Use “console.log” Anymore */
// https://javascript.plainenglish.io/its-2022-please-don-t-just-use-console-log-anymore-217638337c7d
// console.warn()
// console.error()
// .catch ((err) => {
//     console.error(err)
// })
// console.time()
// console.table(products)
// console.timeEnd()

// let count = 0
// console.time()
// for (let i = 0; i < 10000; i++) {
//     count++
// }
// console.timeEnd()
// const finalProducts = []
// products.map((data, index, productArray) => {
//     console.log(productArray[index].title);
//     if (data.title === productArray[index].title) {
//         // console.log('Product', data)
//     }
// })

/* -------------  when use map,filter,reduce -----30-Nov-2022 ------ */

// const numAccounts = [0, 1, 2, 3, 4, 5];

// function makeDouble(x) {
//     return x * 2;
// }

// function findBinary(x) {
//     return x.toString(2);
// }

// const arrayOutput = numAccounts.map(makeDouble)
// console.log('arrayOutput--->', arrayOutput);


// var n = 2;
// function square(num) {
//     var ans = num * num;
//     return ans;
// }
// var square2 = square(n);
// var square4 = square(4);


// Welcome to JavaScript World -30-Nov-2020



// aFunction()
// getGreetings()

// var fruitsCount = 10;

// function getGreetings() {
//     console.log("Hello Welcome to JsWorld")
// }
// var aFunction = () => {
//     console.log('<---aFunction--->')
// }
// const myArrowFunction = () => {
//     console.log("Hello Welcome to JsWorld Arrow Function")
// }
// myArrowFunction()
// aFunction()

// Input:
// S = "geeksforgeeks"
// Output: g
// // Explanation: g, e, k and s are the repeating
// // characters.Out of these, g occurs first.
// const repeatedCharacter = (str) => {
//     for (let i = 0; i < str.length - 1; i++) {
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] === str[j]) {
//                 return str[i];
//             }
//         }
//     }
//     return -1
// };
// console.log(repeatedCharacter("geeksforgeeks"));