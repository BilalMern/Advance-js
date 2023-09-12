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

let n = "student";
let obj = {
    [n + "name"]: "bilal",
    course: "BA",
    detail: function () {
return `${this.studentname} your course is ${this.course}`
    }
};
console.log(obj.detail())