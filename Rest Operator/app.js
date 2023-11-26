
// For In loop
// var obj={
//     name: "billa",
//     roll: 123
// }
// for(let i in obj){
//     console.log(obj[i])
// }


// function foo(){
//  let sum=0;
//  for (let i in arguments){
//   sum = sum + arguments[i]
//  }
//  console.log(sum);
// }
// foo(2,3,4,1,2)
// foo("billa",2,3)

// here above we are not able to add the values with an string so to tackle this 

// function foo(name,course,...args){
//     let sum=0;
//     for(let i in args){
//         sum+=args[i]
//     }
// console.log(`${name} you are enrolled in ${course} and your marks are ${sum}`)
// }
// foo("billa","BA",3,2,4)
// foo("john","BSCS",3,4,5,6)



// let arr = ["billa","maantu","manna"]
// console.log(...arr)



// let arr = ["billa","maantu","manna"]
// let arr2 = [...arr]
// arr.push("channo")
// console.log(arr)
// console.log(arr2)

let obj = {
    name: "billa",
    roll: 123
}
for(let i in obj){
    console.log(obj[i])
}