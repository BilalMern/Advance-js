//! Optional Chaining //

// Optional Chaining is a feature in javaScript that allows us to access properties of an object
// or elements of an array without having to check whether the object or array is null or undefined first.
// It is represented by the ?. operator and can be used to concisely access deeply nested properties 
// without having to write a long chain of if statements to check for null or undefined values.

const user = {
    name: "bilal",
    age: 25,
    address: {
        street: "Main Street",
        city: "Karachi",
        zip: 12345
    }
}
console.log(user.address.city)