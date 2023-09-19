// let prom= new Promise(function(resolve,reject){
//   var age=+prompt("Enter your age")
//   if(age>=18){
// resolve("You are elegible")

// }  
//   else{
//     reject("not eligible");
   
//   }
// });
 

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

// prome(true).then(onresolve);
// prome(false).catch(onreject);





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


