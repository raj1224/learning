// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function numCheck(num){
    if(num%2==0){
        return "num is even";
    }
    return "num is odd";
}
console.log(numCheck(13))
console.log(numCheck(2))