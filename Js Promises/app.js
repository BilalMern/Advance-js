// let prom= new Promise(function(resolve,reject){
//   var age=+prompt("Enter your age")
//   if(age>=18){
// resolve("You are elegible")

// }  
//   else{
//     reject("not eligible");
   
//   }
// });



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
// let prome= new Promise(function(resolve,reject){
//   if(complete){
//     resolve("Success");
//   }
//   else{
//     reject("Failure");
//   }
// });
// let onresolve=(result)=>{
//   console.log(result);
// }
// let onreject=(error)=>{
//   console.log(error);
// }
// prome.then(onresolve);
// prome.catch(onreject);


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




// let prom=(complete)=>{
  
//   return new Promise(function(resolve,reject){
//     console.log("Fetching data please wait")
// setTimeout(()=>{
//   if(complete){
//     resolve("Successful")
//   }
//   else{
//     reject("Failed")
//   }
// },3000)
//   })
// }
// let onfulfil=(res)=>{
//   console.log(res)
// }
// let onreject=(rej)=>{
//   console.log(rej)
// }
// prom(true).then(onfulfil).catch(onreject)


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

let condition=true;
let prome=new Promise(function(resolve,reject){
  console.log("We are fetching your data plz wait..")
  setTimeout(function(){
if(condition){
  resolve("you are passed congratulations!")
}
else{
  reject("Better luck next time")
}
  },3000)
})
let onres=(res)=>{
  console.log(res)
}
let onrej=(rej)=>{
  console.log(rej)
}
prome.then(onres).catch(onrej)