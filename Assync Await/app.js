// async function foo(){
// return "Hello";
// }
// foo().then((result)=>{
//     console.log(result)
// })

// async function test() {
//     console.log(2)
//     console.log(3)
//     await console.log(4)
//     console.log(5)
// }
// console.log(1)
// test()
// console.log(6)

// async function test(){
//     console.log("2: Message")
//     const response = await fetch("json/student_data.json");
//     // const students = await response.json();
//     console.log("3: Message")
//     return await response.json()
// }
// console.log("1: Message");
// test();
// console.log("4: Message");
// console.log(test())

// async function test() {

//     const response = await fetch("json/student_data.json");
//     // const students = await response.json();
//     // return students;
//     console.log(response.json())
// }
// test().then((res) => {
//     for (let i in res) {
//         document.write(res[i].city)
//     }
// }).catch((error) => {
//     console.log(error)
// })

// async function foo(){

// await fetch("json/student_data.json").then((response)=>{
//     // console.log(response.json())
//     return response.json()
// }).then((res)=>{
//         for(let i in res){
//             document.write(res[i].city)
//         }
// console.log(res)
//       })
// }
// foo()

// function test() {

//      fetch("json/student_data.json").then((response)=>{
//         return response.json()
//     }).then((res) => {
//         for (let i in res) {
//             document.write(res[i].city)
//         }
//     }).catch((error) => {
//         console.log(error)
//     })

// const students = await response.json();
// return students;

// }
// test()

// Async function will always return promise. either we return a promise from this function then it will totally fine but if we return some string or other than promise then this function will wrap that thing in promise and return us a promise.
// async function getData() {
//   return "hello there!";
// }
// let data = getData();
// data.then( res => console.log(res))

// let p= new Promise((resolve,reject)=>{
//     resolve("Promise resolved!!")
// })

// async function getData() {
//     return p;
//   }
//   let data = getData();
//   data.then( res => console.log(res))

// before async await

// let p = new Promise((resolve,reject)=>{
//     resolve("promise resloved!")
// })

// function getData(){
//     return p.then((res)=>{console.log(res)})
// }
// getData()

//After async await
// let p = new Promise((resolve,reject)=> {
//     resolve("promise resolved!")
// })
// async function getData(){
//     const data = await p;
//     console.log(data)
// }
// getData()

// let p = new Promise((resolve,reject)=>{
//     setTimeout(function(){
//         resolve("promise resolved")
//         console.log("hello there!")
//     },3000)

// });
// async function getData(){
//  await p.then(res=> console.log(res))
// console.log("hey there!")
// }
// getData()

// let p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved")
//     },4000)
// })
// async function getData(){
//     await p.then(res=> console.log(res))
//     console.log("hey there!")
// }

// getData()

// let p= new Promise((resolve,reject)=>{
//     resolve("promise is resolved")
// })
// async function getData(){
//     let val = await p;
//     console.log(val)
// }
// getData()

// let p= new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         resolve("Promise is resolved")

//     },5000)
// })
// function getData(){
//     p.then(res=>console.log(res))
//     console.log("hello there!")
// }
// getData()

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise is resolved");
//   }, 3000);
// });
//  function getData() {
//   let val = p;
//   val.then((res)=>{
//     console.log(res)
//   })

// }
// getData();

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise is resolved");
//   }, 3000);
// });
//  async function getData() {
//    await p;
//   p.then((res)=>{
//     console.log(res)
//   })

// }
// getData();

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise is resolved");
//   }, 20000);
// });
// async function getData() {
//    let val = await p;
//   console.log(val)

// }
// getData();

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("promise has been resolved");
//   }, 3000);
// });
// async function getData(){

//     console.log (await p)
// }
// getData()

// let p = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("promise has been resolved");
//       }, 3000);
//     });
//     async function getData(){

//         console.log (await p)
//     }
//     getData()

//     async function getData(){
//         console.log(await p)
//     }
//     getData()






// Two Promises having different time for resolve in one function 

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("The promise1 has been resolved!");
//     }, 5000);
//   });
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("The promise2 has been resolved!");
//     }, 3000);
//   });
// async function getData(){
//     let data1= await p1;
//     console.log(data1)

//     let data2 = await p2;
//     console.log(data2)
// }
// getData()



// let p1 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("The promise1 has been resolved!");
//         }, 3000);
//       });
//       let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve("The promise2 has been resolved!");
//         }, 5000);
//       });
//     async function getData(){
//         let data1= await p1;
//         console.log(data1)
    
//         let data2 = await p2;
//         console.log(data2)
//     }
//     getData()




    
    
    