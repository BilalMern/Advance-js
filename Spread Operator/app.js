// function foo(name,...args){
//     let sum=0;
//     for(let i in args){
//         sum+=args[i]
//     }
//     console.log(`hello ${name} Your sum is ${sum}`)
// }
// let arr=[2,4,3]
// foo("billa",...arr)

// function foo(name,...args){
//     let sum=0;
//     for(let i in args){
//         sum+=args[i]
//     }
//     console.log(`${name} Your marks are ${sum}`)
// }
// foo("billa",2,3,4)



// function foo1(name,...args1){
//     let sum1=0;
//     for (let i in args1){
//         sum1+=args1[i]
//     }
// console.log(`${name} Your marks are ${sum1}`)
// }
// let arr1=[3,5,4]
// foo1("billa",...arr1)



// =======printing the array values
// let arr=[2,3,4,5,6]
// console.log(...arr)


// ========Making copy of Array;
// let arr1=[1,2,3,4,5]
// let arr2=[...arr1]
// arr1.push(6)
// console.log(arr1)
// console.log(arr2)


// ========Combining two arrays by spread method.
// let arr1=[2,3,4,5,6,7]
// let arr2=[8,9]
// let arr3=[...arr1,...arr2]
// console.log(arr3)

// var arr=[2,3,4,5]
// console.log(...arr,6)


// =======Merging objects with spread operator
let obj1={
    name: "billa"
}
let obj2 ={
    roll: 123
}
let obj3={
    ...obj1,...obj2
}
console.log(obj3)