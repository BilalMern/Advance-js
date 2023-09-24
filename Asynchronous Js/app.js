// console.log("hello there")
// console.log("hello there")
// console.lo("hello there")
// console.log("hello there")
// console.log("hello there")


// function one(){
// console.log("Step one cmplt plz call step 2")

// }

// function two(){
// console.log("Step two")
// }
// one(two())


// console.log("1")
// setTimeout(()=>{
//     console.log("0")
// },0)
// console.log("3")

// function One(foo){
//     setTimeout(function(){
//         console.log("hello there!")
//         foo()
//     },2000)
// }

// function two(){
//     console.log("how r u")
// }
// One(two)


// function foo1(calling_2){
//     setTimeout(function(){
//         calling_2()
//         console.log("hello foo1")
//     },2000)
// }
// function foo2(){
//     setTimeout(function(){
//         console.log("hello foo2")
//     },1000)
// }
// foo1(foo2);


// function foo1(){
//     setTimeout(function(){
//         console.log("hello foo1")
//     },3000)
// }
// function foo2(){
//     setTimeout(function(){
//         console.log("hello foo2")
//     },1000)
// }
// foo1(foo2());



// function foo1(calling_2){
//     console.log("hello 1")
//     calling_2()
// }
// function foo2(){
//     console.log("hello 2")
// }
// foo1(foo2)


// function order(calling_production){
//     console.log("order placed, please call productionn")
// calling_production()
// }
// function productionn(){
//     console.log("order is recieved. Starting Production")

// }
// order(productionn)


let stokes={
    Fruits: ["strawberry","grapes","banana","apple"],
    Liquid: ["water","ice"],
    Holder: ["cone","cup","stick"],
    Toppings:["chocolates","peanuts"]
};


// function order(fruit_name,calling_production){
//     setTimeout(function(){
//         console.log(`${stokes.Fruits[fruit_name]} was selected`)
//     },2000)
// calling_production()
// }
// function production(){
// setTimeout(function(){
//     console.log("production has started");
// },0);
// }
// order(0,production)


function order(fruit_name){
    setTimeout(function(){
        console.log(`${stokes.Fruits[fruit_name]} was selected`)
    },3000)
setTimeout(function(){
    console.log("ready to production!")
},4000)
}
order(0)