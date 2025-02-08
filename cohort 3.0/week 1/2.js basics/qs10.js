// Write a function that takes an array of users as inputs and
//  returns only the users who are more than 18 years old

function olderUsers(user){
    for(let i=0;i<user.length;i++){
        if(user[i].age>18){
            console.log(user[i].name+" ")
        }

    }
}
const user=[{
    name:"raj",
    age:20
},{
    name:"pinky",
    age:28
},{
    name:"chhavi",
    age:1
}]
olderUsers(user)