// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greets(username){
    console.log(`hello mr ${username.name} your age is ${username.age} and your gendr is ${username.gender}`)
}
const username={
    name:"raj",
    age:20,
    gender:"male"
};
greets(username)