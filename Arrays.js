// const emp = [
//     { name: "Test", salary: 1500 }, { name: "Smit", salary: 1000 }, { name: "Smit", salary: 1500 },
//     { name: "Alex", salary: 1500 }, { name: "Paul", salary: 1000 }, { name: "Dom", salary: 1500 }
// ]


// const data = emp.reduce((accu,current) => { 
//     return accu = current.salary >= 1500 ? [...accu,current]:accu;
// }, [])

// console.log(data);

// const filterData = emp.filter((item, index) => item.salary >= 1500)
// console.log('filterData--->',filterData);

// console.log("1" - "1");
// console.log("test");

const data = {
    USD: {
        symbol: "$",
        name: "US Dollar",
        code: "USD",
        name_plural: "US dollars",
    },
    CAD: {
        symbol: "CA$",
        name: "Canadian Dollar",
        code: "CAD",
        name_plural: "Canadian dollars",
    },
    EUR: {
        symbol: "€",
        name: "Euro",
        code: "EUR",
        name_plural: "euros",
    },
};

const array = [3, 5, 3, 2, 5, 2, 7, 1];
let filterData = array.filter((value, index, newArray) => array.indexOf(value) !== index);
let removeDuplicate = array.filter((item) => !filterData.includes(item))
console.log(filterData);
console.log(removeDuplicate);
console.log([...filterData, ...removeDuplicate]);
// console.log([...new Set(array)]);
// let unique = []
// for (let i = 0; i < array.length; i++) {
//     if (!unique.includes(array[i])) {
//         unique.push(array[i])
//     }
// }
// console.log(unique);
// for (const key in data) {
//     console.log('symbol' + ":" + data[key].symbol)
//     console.log('name' + ":" + data[key].name)
// }

// Object.keys(data).map((item, index) => {
//     console.log("Name --->", data[item].name);
//     console.log("Symbol --->", data[item].symbol);
// })

// Object.values(data).map((item, i) => {
//     console.log(item.name);
//     console.log(item.symbol);
// })
// console.log(Object.values(data));
// Object.values(data).forEach(element => {
//     console.log(element.name);
// });


// let str = '<h1>test</h1>';

// dangerouslySetInnerHTML = {{__html:str } }


