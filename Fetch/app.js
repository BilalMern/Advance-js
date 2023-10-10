// fetch("context/readme.txt").then( response => {return response.text()}) 
// .then(function(data){
//     console.log(data)
// })
// fetch("context/readme.txt") .then(function(result){return result.text()}) 
// // OR
fetch ("https://jsonplaceholder.typicode.com/users") .then( result => result.json())
.then((data)=>{console.log(data)})

