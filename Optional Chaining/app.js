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
//* Above code give us a output Kararchi.

//* But if we log the property which is not present in object then it will throw us a error which stops our execution.//
//console.log(user.address.roadNumber.houseNumber) //To avoid the error we use optional chaining by which it wont throw an error it just send us undefined rather then error.

console.log(user.address.roadNumber ?. houseNumber) // This means if roadNumber exists and its value is not null or undefined then and then only give the houseNumber value else not.

// Optional chaining can also be used to access elements of an array in javaScript. It works in a simila way to accessing properties of an object.

const user2=[
    {name:"bilal", age: 25},
    {name: "shazil", age: 20},
    {name: "ayan", age: 30}
]
console.log(user2[3] ?. name)
// it will give us undefined as we dont have 3 index.