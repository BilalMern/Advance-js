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

async function test(){
    console.log("2: Message")
    const response = await fetch("json/student_data.json");
    // const students = await response.json();
    console.log("3: Message")
    return await response.json()
}
console.log("1: Message");
test();
console.log("4: Message");
console.log(test())

