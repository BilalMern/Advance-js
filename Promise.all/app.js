let p1= new Promise((resolve,reject)=>{
    console.log("promise one has resolved")
    resolve(10)
})

let p2= new Promise((resolve,reject)=>{
    console.log("promise two has resolved")
    resolve(20)
})
Promise.all([p1,p2]).then((result)=>{
    console.log(`result: ${result}`)
}).catch((error)=>{
    console.log(error)
})


