// let p1= new Promise((resolve,reject)=>{
//     console.log("promise one has resolved")
//     resolve(10)
// })

// let p2= new Promise((resolve,reject)=>{
//     console.log("promise two has resolved")
//     resolve(20)
// })
// let p3=new Promise((resolve,reject)=>{
//     console.log("promise has rejected")
//     reject("We are sorry");
// })
// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(`result: ${result}`)
// }).catch((error)=>{
//     console.log(error)
// })


// let promiseCall = (function (data, message) {
//     return function (resolve, reject) {
// setTimeout(function(){
//     console.log(`the ${message} promise has resolved`)
//     resolve(data)
//     reject("we are sorry")
// },data*100)
//     }
// })

// let prome1= new Promise(promiseCall(10,"first"))
// let prome2= new Promise(promiseCall(20,"second"))
// let prome3= new Promise(promiseCall(30,"third"))

// Promise.all([prome1,prome2,prome3]).then((res)=>{
// console.log(`Result:${res}`)
// }).catch((error)=>{
//     console.log(error)
// })



// let prom1=new Promise((resolve,reject)=>{
// console.log("the first promise has resolved")
// resolve(10)
// })

// let prom2= new Promise((resolve,reject)=>{
//     console.log("the seconde promise has resolved")
//     resolve(20)
// })

// let prom3 = new Promise((resolve,reject)=>{
//     console.log("the third promise has resolved")
//     resolve(30)
// })
// Promise.all([prom1,prom2,prom3]).then((res)=>{
//     console.log(...res)
// })


let promiseCall=function(data,message){
    return function(resolve,reject){
        setTimeout(function(){
console.log(`The ${message} has been resolved`)
resolve(data)
        },data*100)
    }
}
let promise1=new Promise(promiseCall(10,"first"))
let promise2=new Promise(promiseCall(20,"second"))

Promise.all([promise1,promise2]).then((res)=>{
    console.log(res)
})