const http = require("http");
const fs = require("fs");
const url = require("url");
// Read HTML templates
const rd = fs.readFileSync(`${__dirname}/Template/home.html`, "utf8");
const rd2 = fs.readFileSync(`${__dirname}/Template/product-list.html`, "utf8");

// Read and parse products.json
const products = JSON.parse(
  fs.readFileSync(`${__dirname}/products.json`, "utf8")
);

// Correct mapping of product data into HTML
const productHtml = products
  .map((product) => {
    const {
      id,
      name,
      color,
      modeName,
      modelNumber,
      size,
      camera,
      price,
      description,
      productImage,
    } = product;

    let output = rd2
      .replace("{{%IMAGE%}}", productImage)
      .replace("{{%NAME%}}", name)
      .replace("{{%MODELNO%}}", modelNumber)
      .replace("{{%MODELNAME%}}", modeName)
      .replace("{{%SIZE%}}", size)
      .replace("{{%CAMERA%}}", camera)
      .replace("{{%PRICE%}}", price)
      .replace("{{%COLOR%}}", color)
      .replace("{{%ID%}}", id)
      .replace("{{%DESCRIPTION%}}", description);
    return output;
  })
  .join(""); // Convert array to a string

const server = http.createServer((req, res) => {
  let { query, pathname: path } = url.parse(req.url, true);
  // console.log(urlParse);
  console.log(query);
  // let path = req.url.toLowerCase(); // Convert path to lowercase

  if (path === "/" || path === "/home") {
    res.writeHead(200, {
      "Content-Type": "text/html",
      "Custom-header": "hello Bakayaro",
    });
    res.end(rd);
  } else if (path === "/about") {
    if (!query.id) {
      let finalResp = rd.replace("{{%CONTENT%}}", productHtml); // Insert products into template
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(finalResp);
    } else {
      res.end(`this is page with id: ${query.id}`);
    }
  } else if (path === "/contact") {
    res.writeHead(200);
    res.end("Welcome to the contact page");
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is running on port 8000");
});
