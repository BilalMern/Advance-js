// fetch("context/readme.txt").then( response => {return response.text()}) 
// .then(function(data){
//     console.log(data)
// })
// fetch("context/readme.txt") .then(function(result){return result.text()}) 
// // OR
// fetch ("https://jsonplaceholder.typicode.com/users") .then( result => result.json())
// .then((data)=>{
//     console.log(data)
//     for(let x in data){
//         document.write(`${data[x].name}-${data[x].email} <br> `)
//     }
// })
// var obj = {

//     obj1: {
//         name: "bilal",
//         age: 18,
//         city: "karachi"
//     },
//     obj2: {
//         name: "qaiser",
//         age: 17,
//         city: "islamabad"
//     },

//     obj3: {
//         name: "talha",
//         age: 20,
//         city: "lahore"
//     }

// }
// for(let i in obj){
//     console.log(obj[i])
// }

let obj = {

obj1:{
    name:"bilal",
    age: 18
},
obj2:{
    name: "qaiser",
    age:20
}

}
for(let i in obj){
    console.log(obj[i].name)
}


