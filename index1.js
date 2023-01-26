// let user = 'Smit Gamit'
// let data = user.slice(3)

// const data = [];
// for (let item of users) {
//     if (item.id == 10) {
//         const d = { id: item.id, name: "ABC" };
//         data.push(d);
//     } else {
//         data.push(item);
//     }
// }
// console.log(data);
// console.log(data.split('').reverse().join(''))

// console.log(userArray);
// let date = new Date()

// date.setMonth(5 - 1)
// date.setDate(23)
// console.log(date);

// const userArray = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8]
// console.log([...new Set(userArray)]);
// const users = [
//     {
//         id: 10,
//         name: "Amit"
//     },
//     {
//         id: 22,
//         name: "Devang"
//     },
//     {
//         id: 45,
//         name: "Krunal"
//     },
//     {
//         id: 5,
//         name: "Niraj"
//     }
// ];

// users[0].name = "Rajesh"
// console.log('users--->', users);
// for (const iterator of users) {
//     if (iterator.id === 10) {
//         iterator.name = "Rahul"
//     }
// }

// console.log(users);

// if (Math.random() > 0.5) {
//     var x = 1;
// } else {
//     var x = 2;
// }
// console.log(x);

// const str1 = 'Smit Gamit';
// const str2 = 'Smit';
// console.log(str1.slice(3).split(''));
// const str = 'Smit Gamit';
// console.log(str.length);
// const str = ["a", "c", "b", "d", "d", "a", "a"]
// const obj = {}
// for (let i = 0; i < str.length; i++) {
//     const word = str[i]
//     if (!obj[word]) {
//         obj[word] = 0
//     }
//     obj[word]++
// }
// const obj = {}
// str.filter((item, index) => {
//     const word = str[index]
//     if (!obj[word]) {
//         obj[word] = 0;
//     }
//     obj[word]++
// })
// console.log(obj);
// const numberArray = [1, 2, -3, 4, 5, 6, 7, 8, 9, -1, -11,]


// console.log(numberArray.sort((a, b) => b - a));
// const filterData = numberArray.filter((item) => item > 0)
// console.log(filterData);

// for (let i = 0; i < array.numberArray; i++) {
//     if (numberArray[i] > 0) {
//     } else {
//     }
// }

// sihT sI
// const strArray = str2.split(" ")
// const strData = []
// strArray.map((data, index) => {
//     strData.push(data.split('').reverse().join(''))
//     // console.log(.join(''));
// })

// console.log(strData.join(' '));

// const str2 = "This Is Javascript Codes";
// const strCount = {}
// for (let i = 0; i < str2.length; i++) {
//     const word = str2[i]
//     if (!strCount[word]) {
//         strCount[word] = 0;
//     }
//     strCount[word]++
// }
// console.log(strCount);
// const data2 = str2.split('')
// console.log(data2);
// const reduceData = data2.reduce((acc, current) => {
//     // return acc[current] = acc[current] + 1 || 1, acc
//     return acc[current] = acc[current] ? acc[current] + 1 : acc[current] = 1, acc
// }, {})
// console.log(reduceData);
// 
// const birds = ["dove", "parrot", "peacock", "finch", "owl", "cuckoos"];
// const data = birds.slice(0, 2)
// console.table(data);

// birds.splice(birds.length, 0, 'smile');
// console.table(birds);

// const object1 = {
//     a: 'someString',
//     b: 42,
//     c: false
// };
// console.table(object1);

// const myArr = [6, - 3, -10, 0, 2]

// console.time();
// const itemFilter = myArr.reduce((acc, current) => {
//     return acc = current >= 0 ? [current, ...acc] : [...acc, current]
// }, [])
// console.log(itemFilter);
// console.timeEnd();

// console.time("test1");
// for (let i = 0; i < 100000; i++) {
//     // some code
// }
// console.timeEnd("test1");

// var pos_count = neg_count = i = 0;
// console.log(pos_count);
// console.log(neg_count);
// console.log(i);

// const date = new Date()
// const updatedDate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate() + 2)

// console.log(date.getDate() + 1);
// date.setDate(18)
// date.setMonth(1)
// console.log('date--->', date);
// console.log(updatedDate);
// const one = 2;
// const two = 3;
// console.log(one ** two);
// console.log(document.getElementById('wrapper').childNodes);
// const myArr = [6, - 3, -10, 0, 2, 2, 2, 1, 1]
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

// function removeDuplicates(array) {
//     return array.filter((item, index) => array.indexOf(item) === index)
// };

// console.log(removeDuplicates(beasts))

const str1 = 'Hello';
const str2 = 'World';
str1.concat(' ', str2);
console.log(str1);
