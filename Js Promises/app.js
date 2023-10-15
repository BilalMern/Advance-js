// let prom=new Promise(function(resolve,reject){
//   var age=prompt("Enter your age")
//   if(age>=18){
//     resolve("You are eligible")
//   }
//   else{
//     reject("not eligible")
//   }
// })
// console.log(prom)

// let prom = new Promise(function(resolve,reject){
//   let age = prompt ("Enter your age")
// if(age>=18){
//   resolve("You are eligible")
// }
// else{
//   reject("you are not allowed")
// }
// }).then((res)=>{
//   console.log(res)
// }).catch((error)=>{
//   console.log(error)
// })

// let prom=new Promise(function (resolve,reject){
// let age=prompt ("enter you age")
// if(age>=18){
//   resolve("you are fit")
// }
// else{
//   reject("not fit")
// }
// })
// let onres=(res)=>{
//   console.log(res)
// }
// let onrej=(rej)=>{
//   console.log(rej)
// }
// prom.then(onres).catch(onrej)

// let prom=new Promise((resolve,reject)=>{
//   let age=prompt("Enter your age")
//   if(age>=18){
//     resolve()
//   }
//   else{
//     reject()
//   }
// })
// let onres=()=>{
// console.log("you are passed")
// }
// let onrej=()=>{
//   console.log("you are failed")
// }
// prom.then(onres)
// prom.catch(onrej)

// let prom=new Promise(function(resolve,reject){
//     let age=prompt("Enter your age")
//     if(age>=18){
//       resolve("you are passed")
//     }
//     else{
//       reject("you are rejected")
//     }
//   })
//   let onres=(res)=>{
// console.log(res)
//   }
//   let onrej=(rej)=>{
//     console.log(rej)
//   }
//   prom.then(onres)
//   prom.catch(onrej)

// let onresolve=(res)=>{
//     console.log(res)
// }
// let onrejection=(rej)=>{
//     console.log(rej)
// }
// prom.then(onresolve)
// prom.catch(onrejection)

// let complete=true;
// let prom= new Promise (function(resolve,reject){
//     if(complete){
//         resolve("I am successful")
//     }
//     else{
//         reject("I am failed")
//     }
// });
// console.log(prom)

// let complete=true;
// let prom= new Promise(function(resolve,reject){
//   if(complete){
//     resolve("success")
//   }
//   else{
//     reject("failed")
//   }
// });
// let onres=(res)=>{
//   console.log(res)
// }
// let onrej=(rej)=>{
// console.log(rej)
// }
// prom.then(onres)
// prom.catch(onrej)

// let prome= new Promise(function(resolve,reject){
//   let age=prompt("Enter Your age")
//   if(age>=18){
//     resolve("you are eligible")
//   }
//   else{
//     reject("you are not eligible")
//   }
// })

// let onresolve=(result)=> {
// console.log(result)
// }
// let onreject=(error)=> {
//   console.log(error)
// }
// prome.then(onresolve)
// prome.catch(onreject)

// let prom = (complete) => {
//   return new Promise(function (resolve, reject) {
//     console.log("Fetching data please wait");
//     setTimeout(() => {
//       if (complete) {
//         resolve("Successful");
//       } else {
//         reject("Failed");
//       }
//     }, 3000);
//   });
// };
// let onfulfil = (res) => {
//   console.log(res);
// };
// let onreject = (rej) => {
//   console.log(rej);
// };
// prom(true).then(onfulfil).catch(onreject);




// let prom=(complete)=>{
//   return new Promise(function(resolve,reject){
//  console.log("fetching data please wait")
// setTimeout(()=>{
//   if(complete){
// resolve("Successful")
//   }
//   else{
//     console.log("not successful")
//   }
// },3000)
// }
//   )}

//   let onres=(result)=>{
// console.log(result)
//   }
//   let onrej=(reject)=>{
//     console.log(reject)
//   }
// prom(false).then(onres).catch(onrej)

//   let prom=(complete)=>{
//    return new Promise(function(resolve,reject){
//     console.log("Plz wait till we Fetch your data")
//     setTimeout(function(){
// if(complete){
//   resolve("your data fetch successfully")
// }
// else{
//   reject("fetching failed!")
// }
//     },3000)
//    })
//   }
//   let onres=(res)=>{
//     console.log(res)
//   }
//   let onrej=(rej)=>{
//     console.log(rej)
// }
// prom(true).then(onres).catch(onrej)

// let prome= new Promise(function(resolve,reject){
//   let age=prompt("enter your age")
//   if(age>=18){
//     resolve("you are older")
//   }
//   else{
//     reject("you are not!")
//   }
// })
// let onres=(res)=>{
// console.log(res)
// }
// let onrej=(rej)=>{
//   console.log(rej)
// }
// prome.then(onres).catch(onrej)

// let condition=true;
// let prome=new Promise(function(resolve,reject){
//   console.log("We are fetching your data plz wait..")
//   setTimeout(function(){
// if(condition){
//   resolve("you are passed congratulations!")
// }
// else{
//   reject("Better luck next time")
// }
//   },3000)
// })
// let onres=(res)=>{
//   console.log(res)
// }
// let onrej=(rej)=>{
//   console.log(rej)
// }
// prome.then(onres).catch(onrej)

// promiseone

// Method One
// let condition=true;
// const promiseOne=new Promise(function(resolve,reject){

//   setTimeout(function(){
//     console.log("Assync task is completed")
//     if(condition){
//     resolve("hey there")}
//     else{
//       reject("not here!")
//     }
// },2000)

// })
// let onres=(res)=>{
//   console.log(res)
// }
// let onrej=(rej)=>{
//   console.log(rej)
// }
// promiseOne.then(onres)
// promiseOne.catch(onrej)

// Method Two
// let condition=true;
// const promiseOne=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Assync task is completed")
//     if(condition){
//     resolve()}
//     else{
//       reject()
//     }
// },2000)

// })
// promiseOne.then(function(){
//   console.log("Promise consumed")
// })

// promiseOne.catch(function(){
//   console.log("We are sorry")
// })

// // Method Three
// let condition=true;
// const promiseOne=new Promise(function(resolve,reject){
//   setTimeout(function(){
//     console.log("Assync task is completed")
//     if(condition){
//     resolve()}
//     else{
//       reject()
//     }
// },2000)

// })
// let onres=()=>{
//   console.log("hello there!")
// }
// let onrej=()=>{
//   console.log("not there!")
// }
// promiseOne.then(onres)
// promiseOne.catch(onrej)

// Method Four
// let condition=true;
// let prome=new Promise(function(resolve,reject){
//   console.log("plz wait we are fetching data")
//   setTimeout(function(){
//     if(condition){
//     resolve("hey your data is here")
//     }
//     else{
//       reject("not found!")
//     }
//   },3000)
// })
// prome.then(function(res){
//   console.log(res)
// })
// prome.catch(function(rej){
//   console.log(rej)
// })

// new Promise(function(resolve,reject){
//   setTimeout(function(){
// resolve("hello there")
// reject("hey you")
//   },2000)
// }).then(function(res){
//   console.log(res)
// })
