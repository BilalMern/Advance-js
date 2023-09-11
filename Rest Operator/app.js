
// For In loop
// var obj={
//     name: "billa",
//     roll: 123
// }
// for(let i in obj){
//     console.log(obj[i])
// }

function foo(){
    let sum=0;
    for(let i in arguments){
    sum+=arguments[i]
}
console.log(sum)
}
foo(3,4,5)