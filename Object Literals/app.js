// let obj={
//     name: "bilal",
//     roll: 123
// }
// console.log(obj)


// let name="bilal"
// let obj={
//     name
// }
// console.log(obj)


// let n= "student"
// let obj={
//     [n + " " + "name"]: "bilal"
// }
// console.log(obj)

// let n = "student";
// let obj = {
//     [n + "name"]: "bilal",
//     course: "BA",
//     detail: function () {
// return `${this.studentname} your course is ${this.course}`
//     }
// };
// console.log(obj.detail())



// new method of declaring function in objects
// let n= "studentname";
// let obj={
//     [n]: "bilal",
//     foo(){
//       return (this.studentname)
//     }
// }
// console.log(obj[foo]())



// Returning object through function
let name="bilal";
let course="BA";
function foo(name,course){
  return {name,course}
}
console.log(foo(name,course))