/* Merge two arrays with duplicate values
Write a function that takes two arrays as arguments.Merge both arrays and remove duplicate values.Sort the merge result in ascending order.Return the resulting array */
// function myFunction(a, b) {
//     return console.log([...new Set([...a, ...b].sort((a, b) => a - b))]);
// }
// myFunction([1, 2, 3], [3, 4, 5])
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])

/* Sort array by object property
Write a function that takes an array of objects as argument.Sort the array by property b in ascending order.Return the sorted array */

// function myFunction(arr) {
//     return console.log(arr.sort((x, y) => x.a - y.b));
// }

// myFunction([{ a: 2, b: 10 }, { a: 5, b: 4 }])


/* Remove a specific array element
Write a function that takes an array(a) and a value(b) as argument.The function should remove all elements equal to 'b' from the array.Return the filtered array. */

// function myFunction(a, b) {

//     return console.log(a.filter((arr) => arr !== b));
// }
// myFunction([1, 2, 3], 2)


/* Count number of negative values in array
Write a function that takes an array of numbers as argument.Return the number of negative values in the array. */

// function myFunction(a) {
//     return console.log(a.reduce((accu, current) => accu += current < 0, 0));
// }
// myFunction([1, -2, 2, -4])
// myFunction([0, 9, 1])
// Another Solution: https://prnt.sc/Nylx-WYY1z_Y


/* Return the average of an array of numbers
Write a function that takes an array of numbers as argument.It should return the average of the numbers. */
// function myFunction(arr) {
//     return console.log((arr.reduce((accu, current) => accu = accu + current)) / arr.length);
// }
// myFunction([10, 100, 40])


/* Return the longest string from an array of strings
Write a function that takes an array of strings as argument.Return the longest string. */
// function myFunction(arr) {
//     console.log(arr.reduce((accum, current) => accum = accum.length < current.length ? current : accum));
// }
// myFunction(['help', 'me'])
// myFunction(['I', 'need', 'candy'])


/* Check if all array elements are equal
Write a function that takes an array as argument.It should return true if all elements in the array are equal.It should return false otherwise. */

// function myFunction(arr) {
//     // console.log(new Set(arr).size === 1);
//     return console.log(arr.every((value, index) => value === arr[0]));
// }

// myFunction([true, true, true, true])
// myFunction(['test', 'test', 'test'])
// myFunction([1, 1, 1, 2])
// myFunction(['10', 10, 10, 10])


/* Merge an arbitrary number of arrays
Write a function that takes arguments an arbitrary number of arrays.It should return an array containing the values of all arrays. */
// function myFunction(...arrays) {

//     return console.log(arrays.flat());
// }
// myFunction([1, 2, 3], [4, 5, 6])
// myFunction(['a', 'b', 'c'], [4, 5, 6])
// myFunction([true, true], [1, 2], ['a', 'b'])

// function myFunction(a, b) {
//     return console.log([...new Set([...a, ...b])])
// }
// myFunction([1, 2, 3], [3, 4, 5])
// myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])

/* Check if property exists in object
Write a function that takes an object(a) and a string(b) as argument.Return true if the object has a property with key 'b'.Return false otherwise.Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined.But the property itself exists. */
// function
//     myFunction
//     (
//         a, b
//     ) {

//     return console.log(Object.keys(a).includes(b));
// }
// myFunction({ a: 1, b: 2, c: 3 }, 'b')
// myFunction({ x: 'a', y: null, z: 'c' }, 'y')
// let str = 'abcd';
// let revStr=''
// for (let i = str.length-1; i >= 0; i--) {
//     revStr += str[i]
// }
// console.log(revStr);

// const array1 = [1, 2, 3, 4]
// const array2 = [4, 5, 6, 7]

// console.log(array1.includes(array2));

// const data = array1.filter((arr) => array2.includes(arr))
// console.log(data);


/*--------  actual use of HOC(Higher order function/component)  ---------*/

/* map */
// transform array value you can use map like value x value

/* filter */
// filter data odd or even /filter based on few condition

/* reduce */
// come of with single value // ex . largest number form array
// array.reduce((accu,current)=> accu = accu > current )


// let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8]

// let sum = array1.map((data, index) => {
//     if (data > 5) {
//         return data
//     }
// })

// let sumFilter = array1.filter((data, index) => {
//     if (data > 5) {
//         return data
//     }
// })

// console.log(sum);
// console.log(sumFilter);

// let str = '1'
// console.log(str = +str + 2);

// let data = [{ key: 2, b: 10 }, { key: 5, b: 4 }, { key: 1, b: 10 }, { key: 6, b: 4 }]
// console.table(data.sort((a, b) => a.key - b.key))