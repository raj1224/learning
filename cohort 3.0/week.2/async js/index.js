// QUESTION WHAT SHOULD I ASK
/*1.WHAT IS THIS?
2.HOW TO USE IT
3.IF I DONT USE IT THAN WHAT HAPPEN
4.WHERE SHOULD I USE THIS  */

//--------------------------------------------------------------------------------------------------
// CODE:-
//-------

// const fsa = require('fs');

// const data = fsa.readFileSync('a.txt','utf-8');//synchronously
// console.log(data);

// const data2= fsa.readFileSync('b.txt','utf-8');//synchronously
// console.log(data2);
// // what is fs?

//readFile vd readFileSycn
// const fs= require('fs');

// function print(err,data){
//     if(err){
//         console.log("file is not found");
//     }else{
//         console.log(data);
//     }
// }

// fs.readFile('a.txt','utf-8',print);//asynchrnously
// fs.readFile('b.txt','utf-8',print);//asynchrnously

// console.log("done!")

setTimeout(() => {
    console.log("click the functin")
}, 1000);
console.log("hi there");
console.log("welcome to loupe");
// heavy operationaltask
let c=0;
for(let i=0;i<100000;i++){
    c+=i;
}
console.log("last line")

// ------------------------------------------------------------------------------------------
// ASSIGNMENT QUESTION
//--------------------
/** QS:-Try to create a promisified version of setTimeout fetch fs.readFile?
 * ANS:-Understanding a Promisified Version of setTimeout, fetch, and fs.readFile
We will create promise-based versions of:

setTimeout (to simulate a delay)
fetch (to get data from an API)
fs.readFile (to read files asynchronously in Node.js)
1. Promisified setTimeout
Normally, setTimeout uses a callback:

js
Copy
Edit
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);
This is callback-based, so we cannot use .then() or await. To make it promise-based, we create a wrapper function:

Promisified setTimeout
js
Copy
Edit
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
How It Works?
new Promise(resolve => setTimeout(resolve, ms))
It creates a Promise.
The resolve function is called after ms milliseconds.
Since resolve has no arguments, it just waits and then completes.
Usage
js
Copy
Edit
console.log("Start");
delay(2000).then(() => console.log("Hello after 2 seconds"));
console.log("End");
2. Promisified fetch
In modern JavaScript, fetch already returns a Promise, so we don't need to promisify it. However, let's see how it works:

js
Copy
Edit
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json()) // Convert response to JSON
    .then(data => console.log(data)) // Log data
    .catch(error => console.error("Error:", error));
How It Works?
fetch(url) makes an HTTP request.
.then(response => response.json()) converts the response into JSON.
.then(data => console.log(data)) logs the data.
.catch(error => console.error(...)) catches network errors.
3. Promisified fs.readFile (Node.js)
The fs.readFile method in Node.js is callback-based:

js
Copy
Edit
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
    } else {
        console.log("File content:", data);
    }
});
We can promisify it using new Promise():

Promisified fs.readFile
js
Copy
Edit
const fs = require("fs");

function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(data);
        });
    });
}
Usage
js
Copy
Edit
readFileAsync("example.txt")
    .then(data => console.log("File content:", data))
    .catch(err => console.error("Error reading file:", err));
Using async/await for Better Readability
We can now use async/await for better readability.

js
Copy
Edit
async function main() {
    console.log("Waiting for 2 seconds...");
    await delay(2000);
    
    console.log("Fetching data...");
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log("Fetched Data:", data);

    console.log("Reading file...");
    try {
        let fileContent = await readFileAsync("example.txt");
        console.log("File Content:", fileContent);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}

main();
Summary of How Things Work
Function	Original (Callback)	Promisified Version
setTimeout	Uses callback	delay(ms) returns a Promise
fetch	Already a Promise	No need to promisify
fs.readFile	Uses callback	readFileAsync(filePath) returns a Promise
Now you can use .then() or await for all these functions, making the code cleaner and easier to manage. 🚀

Let me know if anything is unclear! 😊
 */

//-------------------------------------------------------------------------------------------
// DOUBTS
//--------

// WEBSITE loupe for better understanding for the asynchronous function