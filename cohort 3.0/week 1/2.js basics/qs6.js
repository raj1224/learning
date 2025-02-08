// Write a function that takes a user as an input and greets them with their name and age

function greets(user){
    return "hello "+user.name+" your age is"+user.age;
}
const user={
    name:"raj",
    age:20
}
console.log(greets(user));