

// fs function import krna hota hai for file related operation and usko assign krlenge ek variable mein
const fs = require('fs');




// readFileSync file ko syncronously read krta hai , means jub tk puri read nhi hojayegi  ye aage nhi bdhega code mein 
// 2 argument hote hai pehla filePath to read , 2nd format of file

//`${__dirname}/../../ ka role hai ki __dirname bydefault current path laake dedetta , for uske saath jo mrzi aage piche kro  
const rd = fs.readFileSync(`${__dirname}/Files/input.txt`,'utf-8');

// uska jo object return hoga usko variable mein store krlo and u can log it out 

// console.log(rd);




//-----------Write ----------------// 


const contentToWrite = `from input.txt : ${rd} .\n given  is created on ${new Date()}`


// fs.writeFileSync ke 2 argument hai one is path To write , if file exist to write , it will write , if not exist , it will create first then write  ,
// 2nd argument is contentToWrite
const wt = fs.writeFileSync(`${__dirname}/Files/output.txt` , contentToWrite);