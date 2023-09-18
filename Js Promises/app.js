let prom= new Promise(function(resolve,reject){
  var age=+prompt("Enter your age")
  if(age>=18){
resolve()

}  
  else{
    reject();
   
  }
});
let onresolve=()=>{
    console.log("you are eligiblel")
}
let onrejection=()=>{
    console.log("not eligible")
}
prom.then(onresolve)
prom.catch(onrejection)