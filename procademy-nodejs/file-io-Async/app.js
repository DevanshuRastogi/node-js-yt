// fs function import krna hota hai for file related operation and usko assign krlenge ek variable mein
const fs = require("fs");

// readFileSync file ko syncronously read krta hai , means jub tk puri read nhi hojayegi  ye aage nhi bdhega code mein
// 2 argument hote hai pehla filePath to read , 2nd format of file

//`${__dirname}/../../ ka role hai ki __dirname bydefault current path laake dedetta , for uske saath jo mrzi aage piche kro
const rd = fs.readFile(`${__dirname}/Files/input.txt`, "utf-8", (err, data) => {
  console.log(data);

  fs.readFile(`${__dirname}/Files/${data}.txt`, "utf-8", (err, data1) => {
    console.log(data1);

    let content = `${data}.txt \n data1 \n
     appended on date : ${Date()}`;
    fs.writeFile(`${__dirname}/Files/appendingFile.txt`, content, () => {
      console.log("data written successfully see -: ");

      fs.readFile(
        `${__dirname}/Files/appendingFile.txt`,
        "utf-8",
        (err, data4) => {
          console.log(data4);
        }
      );
    });
  });
});

// uska jo object return hoga usko variable mein store krlo and u can log it out

// console.log(rd);

//-----------Write ----------------//

// const contentToWrite = `from input.txt : ${rd} .\n given  is created on ${new Date()}`

// // fs.writeFileSync ke 2 argument hai one is path To write , if file exist to write , it will write , if not exist , it will create first then write  ,
// // 2nd argument is contentToWrite
// const wt = fs.writeFileSync(`${__dirname}/Files/output.txt` , contentToWrite);
