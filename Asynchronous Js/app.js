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
//     },3000)
// }
// function foo2(){
//     setTimeout(function(){
//         console.log("hello foo2")
//     },1000)
// }
// foo1(foo2);


function foo1(){
    setTimeout(function(){
        console.log("hello foo1")
    },3000)
}
function foo2(){
    setTimeout(function(){
        console.log("hello foo2")
    },1000)
}
foo1(foo2());
