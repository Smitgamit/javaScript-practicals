
// console.log(a)
// let a = 10;
// var b = 20;
// console.log(b)
/* var x = 1;
a();
b();
console.log(x)
function a() {
    var x = 10;
    console.log(x);
}
function b() {
    var x = 100;
    console.log(x);
} */

// var a = 01;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// function getName() {
//     console.log(a)
// }
// getName()

// function myFunction(a) {
//     let count = 0;
//     for (let key in a) {
//         if (a[key] < 0) {
//             count++
//         }
//     }
//     console.log("count-->", count);
// }
// function myFunction(a) {
//     return console.log("data", a.filter((el) => el < 0).length)
// }
// function myFunction(arr) {
//     return console.log(arr.reduce((a, b) => a.length <= b.length ? b : a))

// }
// myFunction(['1aa', '3a', '2ada'])

// function myFunction(arr) {
//     return console.log(arr.reduce((prev, curr) => prev = prev + curr) / 3)
// }
//myFunction([10, 100, 40])
// myFunction([10, 100, 1000])
// function myFunction(a, b, c, d, e, f) {
//     return console.log(Math.pow((((a + b) - c) * d) / e), f)
// }
// myFunction(6, 5, 4, 3, 2, 1)
// myFunction(6, 2, 1, 4, 2, 3)
// myFunction(2, 3, 6, 4, 2, 3)

// function myFunction(a, b) {
//     console.log(a + b.toString());
// }
// myFunction('cheese', 'cake')
// const arr = ['one', 'two', 'one', 'two', 'three', 'two', 'two'];

// const unique = arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
// });

// console.log(unique);
// console.log([...new Set(arr)]);
// const uniq = []
// arr.forEach(element => {
//     if (!uniq.includes(element)) {
//         uniq.push(element)
//     }
// });
// console.log('unique--->', uniq);


// function getPercentage(a) {
//     console.log((a * 25) / 100);
// }

// getPercentage(200)
// const str = "engineerings"
// const obj = {};
// for (let i = 0; i < str.length; i++) {
//     const word = str.charAt(i)
//     if (!obj[word]) {
//         obj[word] = 0;
//     }
//     obj[word]++
// }
// console.log(obj);

//let myText = "Hello planet earth, you are a great planet.";
// console.log(myText.charAt(0))
// console.log(myText.endsWith('planet.'))
// console.log(myText.includes('Hello'))
// console.log(myText.indexOf('earth'))
// console.log(myText.lastIndexOf('earth,'))
// console.log(myText.slice(0, 12))
// console.log(myText.split(" ")) 
//console.log(myText.substring(myText.length - 8))
//console.log(myText.slice(-8))


// const str = [1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 7]

// const obj = {}

// for (let i = 0; i < str.length; i++) {
//     let word = str[i]
//     if (!obj[word]) {
//         obj[word] = 0;
//     }
//     obj[word]++
// }
// console.log(obj);

// const a = [1, 2, 3, 4, 5];
// const b = [6, 2, 3, 4, 7, 2, 2];

// let c = [];
// for (let item of a) {
//     if (!b.includes(item)) {
//         c.push(item);
//     }
// }
// console.log(c);

// function myFunction(arr) {
//     return console.log(new Set(arr).size === 1) // arr.every((val, index) => val === arr[0])
// }
// myFunction(['true', true, true, true])
// myFunction(['test', 'test', 'test'])
// myFunction([1, 1, 1, 2])
// myFunction(['10', 10, 10, 10])


// function myFunction(...arrays) {
//     return console.log(arrays.flat());
// }

// myFunction([1, 2, 3], [4, 5, 6])
// myFunction(['a', 'b', 'c'], [4, 5, 6])
// myFunction([true, true], [1, 2], ['a', 'b'])
/* function myFunction(a, b) {
    // return console.log(Array.from(new Set([...a, ...b])).sort(function (a, b) { return a - b })) // console.log([...a, ...b].sort())
    return console.log([...new Set([...a, ...b])].sort((x, y) => x - y));
}
// myFunction([1, 2, 3], [3, 4, 5])
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) */

// function
//     myFunction
//     (
//         arr
//     ) {

//     return console.log(arr.sort((a, b) => a.a - b.b))

// }
// myFunction([{ a: 2, b: 10 }, { a: 5, b: 4 }])
// function
//     myFunction
//     (
//         a, b
//     ) {

//     return console.log(a.filter((data) => data !== b))
// }
// myFunction([1, 2, 3], 2)

// function
//     myFunction
//     (
//         a
//     ) {

//     return a.reduce((acc, curr) => console.log(acc, curr));
// }
// myFunction([1, -2, 2, -4])

// function myFunction(a, b) {
//     return console.log(b in a); // console.log(Object.keys(a).includes(b)); 
// }
// myFunction({ a: 1, b: 2, c: 3 }, 'b')
// myFunction({ x: 'a', y: 'b', z: 'c' }, 'a')

// function myFunction(a, b) {
//     return console.log({ [a]: b })
// }
// myFunction('a', 'b')

// function myFunction(a, b) {
//     const obj = {}
//     for (const key in a) {
//         obj[key] = a[key] * b
//         // console.log(key, a[key]);
//         // obj[key]
//         // console.log(obj);
//         // console.log(a[key] * b);
//     }
//     console.log(obj);
// }

// myFunction({ a: 1, b: 2, c: 3 }, 3)

// function
//     myFunction
//     (
//         a
//     ) {

//     return console.log(Object.values(a).reduce((acc, curr) => acc = acc + curr))
// }
// myFunction({ a: 1, b: 2, c: 3 })

// function
//     myFunction
//     (
//         obj
//     ) {

//     return console.log(obj['prop-2']);
// }
// myFunction({ one: 1, 'prop-2': 2 })


// function myFunction(a, b) {
//     const obj = {}
//     a.forEach((element, index) => {
//         obj[element] = b[index]
//     });
//     return console.log(obj)
// }

// myFunction(['a', 'b', 'c'], [1, 2, 3])


// function myFunction(x, y) {
//     let { b: d, ...rest } = y;
//     y = { ...rest, d }
//     //console.log("object---->", y)
//     return console.log({ ...x, ...y })
// }

// myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
// what is different between state and props 
// arrow function
// DOM and Virtual Dom 
// State-full component and stateless
// life cycle methods 
// preference 
// type of middleware 
// routing // router 
// apache web server 
// control component and un-control component 
// key props 
// create element and clone element 
// lazy loading in react
// why we are using className 
// redux
// session storage
// filter 
// promise 
// generator function
// how to set role in react-js