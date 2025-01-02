
const fs = require("fs");


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

