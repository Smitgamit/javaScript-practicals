const companies = [
    {
        parentId: 1,
        id: 1,
        name: "TCS"
    },
    {
        parentId: 1,
        id: 1,
        name: "Infosys"
    },
    {
        parentId: 1,
        id: 1,
        name: "HCL"
    },
    {
        parentId: 2,
        id: 1,
        name: "Wipro"
    },
    {
        parentId: 2,
        id: 1,
        name: "Oracle"
    },
]

// console.log(companies.length);
// var filterObjects = {}
// for (let i = 0; i < companies.length; i++) {
//     const id = companies[i].parentId
//     if (!filterObjects[id]) {
//         filterObjects[id] = [companies[i].name]
//     } else {
//         filterObjects[id].push(companies[i].name)
//     }
// }
// console.log(filterObjects);
// const data = {
//     '1': ["TCS", "HCL"],
//     '2': ["Infosys", "ABCD"]
// }
// const uniqueData = companies.reduce((acc, current) => {
//     if (!acc[current.parentId]) {
//         acc[current.parentId] = [current.name]
//     } else {
//         acc[current.parentId].push(current.name)
//     }
//     return acc
//     // return acc[current.parentId] = acc[current.parentId] ? acc[current.parentId].push([current.name]) : acc[current.parentId] = [current.name], acc
// }, {})
// console.log(uniqueData);
// let data = {}
// for (let i = 0; i < companies.length; i++) {
//     const id = companies[i].parentId
//     if (!data[id]) {
//         data[id] = [companies[i].name]
//     } else {
//         data[id].push(companies[i].name)
//     }
// }
// console.log('data--->', data);
// function revFunction(name) {
//     var rWord = ""
//     for (let index = name.length - 1; index >= 0; index--) {
//         rWord += name[index]
//     }
//     return rWord;
// }
// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// console.log(revFunction(myArray));
var i = {}
i = { id: 1 };
i = { ...i, name: 'test' };
console.log(i);