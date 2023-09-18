let prom= new Promise(function(resolve,reject){
  var age=+prompt("Enter your age")
  if(age>=18){
resolve("You are elegible")

}  
  else{
    reject("not eligible");
   
  }
});
let onresolve=(res)=>{
    console.log(res)
}
let onrejection=(rej)=>{
    console.log(rej)
}
prom.then(onresolve)
prom.catch(onrejection)