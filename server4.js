

// let a = 20
// console.log(a++);
// console.log(a);
// console.log(++a);
/* function variable make global using window */
// function aFirst() {
//     var a = '3'
//     window.d = a;
// }
// aFirst()
// console.log(d);

// let i = 3;
// while (i) {
//     console.log(i--);
// }

// let i = 0;
// while (++i < 5) console.log(i);

// let i = 0;
// while (i++ < 5) console.log(i);

// function myFunction() {
//     //    console.log('myFunction');
// }

// try {
//     console.log(myFunction());
// } catch (error) {
//     console.log('error', error);
// }

// function myFunction() {
//     setTimeout(() => {
//         console.log('i am here')
//     }, 1000);
// }
// console.log('before')
// console.log(myFunction())
// console.log('after')


// function first() {
//     window.age = 10
// }

// function second() {
//     console.log(15);
// }

// first()
// second()

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++); {
//     numbers.push(i + 1);
// }
// console.log(numbers); // => ???

// for (let i = 0; i < 10; i++) {
//     // console.log('i', i);
//     setTimeout(() => {
//         console.log('i--->', i);
//     }, 1000);
// }

// for (var a = 0; a < 10; a++) {
//     // console.log('a', a);
//     setTimeout(() => {
//         console.log('a-->', a); //10 times 10
//     }, 1000);
// }

// function display() {
//     var a = b = 10;
// }
// display();
// console.log('b', typeof b);
// console.log('a', typeof a);

// var car = {
//     name: 'XX',
//     rate: 200
// };
// delete car.rate;
// console.log(car);

// const salaryArray = [
//     {
//         name: "emp1", mon: "jan",
//         amount: 1100,
//     },
//     {
//         name: "emp2", mon: "ian",
//         amount: 210
//     },
//     {
//         name: "emp1", mon: "Feb",
//         amount: 3499
//     },
//     {
//         name: "emp2", mon: "Feb",
//         amount: 8999
//     }]

// salaryArray.reduce((acc, current) => {
//     console.log(acc = current.amount + current.amount);
// })

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(function () { console.log(i); }, i * 1000);
// }


// var a = ['dog', 'cat', 'hen'];
// a[100] = 'fox'
// console.log(a.length)

// const animals = ['jagguar', 'eggle'];
// animals.reverse()
// animals.pop()
// console.log(animals)
// console.log(animals);

// let rainForest = ['Amazon', "borneo", 'cerrado', 'congo']
// rainForest.splice(0, 2)
// console.log(rainForest);

// let animals = [{ type: "lion" }, "tiger"];
// let clones = animals
// //.slice();

// clones[1] = "sheep";
// clones[0].type = "bear";

// console.log(animals[0].type, clones[0].type);
// console.log(animals[1], clones[1]);

// var obj = {}
// console.log(obj)

// class Animal {
//     static belly = [];
//     eat() { Animal.belly.push("food") }
// }
// let a = new Animal();
// a.eat();
// console.log(Animal.belly[0]);

// let cat = { type: "lion" };
// cat.size = "large";

// let copyCat = { ...cat };
// console.log(copyCat);
// cat.type = "tiger";

// console.log(copyCat.type, copyCat.size);

// var flagsJSON = '{"countries":[' +
//     '{ "country": "Ireland", "flag": "irelandFlag" },' +
//     '{ "country": "serbia", "flag": "serbiaFlag" },' +
//     '{ "country": "Peru", "flag": "peruFlag" }]}'

// var flagDatabase = JSON.parse(flagsJSON);
// console.log(flagDatabase.countries[0].flag);
// const foo = {
//     bar() {
//         return "Hello, world!";
//     },
//     name: "Albert",
//     age: 26,
// }
// console.log(foo.bar())


// https://prnt.sc/HCOwpVtrWKWt

// https://prnt.sc/m3tk0l4kmPSv
// https://prnt.sc/DaLG1Ng3ycmW

// https://prnt.sc/e7uE4d6ygy95