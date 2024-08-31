const fs = require("fs");
const { clearScreenDown } = require("readline");
// fs.writeFileSync("./demo.js"," const demo = 'This is demo which we write in other which is  transfer  to this file'; " , (err) => {
//     if (err) console.log(err);
//     console.log("file created");
// });
// console.log("end");


const data = fs.readFileSync("./demo.js","utf-8" , (err , mydata) => {
    if (err) console.log(err);
    console.log("file readed");
    console.log(mydata);

});

console.log("start");
console.log(data);
console.log("end");

fs.appendFile("./demo.js","append file", (err) => {
    if (err) throw err ;
    console.log("file appended");
})






