//! Nullish Coalescing // 

//*The Nullish Coalescing operaotor (??) is a javascript operator that is usedn to provide a default value for a vriable that may be null or undefined.Coalescing.//

//* In javascript, the following values are considered falsy: false, 0, " "(an empty string), null, undefined and NAN. but nullish coalescing operator gives default value only for variables which are nll or undefined.//



// For Example //

let variable = 0;
console.log(variable ?? 10)
//* The above code give us a output: 0 (because variable is not undefined or null)


// Example # 02 //

let variable2 = null;
console.log(variable2 ?? 10)
//* The above code give us a output: 10(which is default value because our variable is null) //


// Example # 03 //

let variable3 = false;
console.log(variable3 ?? 20)
//* The above code give us a output: false.

//! Basically this operator comes due to || operator issue, the issue is when we using || operator it will always give us a default value for all the falsy values //

let variable4 = false;
console.log(variable4 || 10)
//* The above code give us a output: 10.

let variable5 = 0;
console.log(variable5 || 10)
//* The above code give us a output: 10.

let variable6 = undefined
console.log(variable6 || 10)
//* The above code give us a output: 10.
