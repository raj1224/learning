// Also tell the user if they are legal to vote or not

function legalAge(user){
    for(let i=0;i<user.length;i++){
        if((user[i].age)>18){
            console.log("can vote")
            
        }else{
            console.log("can't vote");
        }
    }

}
const user=[{
        name:"raj",
        age:20,
    },{
        name:"chhavi",
        age:1
    }];

legalAge(user)
