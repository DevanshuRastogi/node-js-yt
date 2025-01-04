const http = require("http");
//sbse pehle hum http fucntion ko import krenge ,, and uska object jo return hoga usko save krlenge

// fir  http ke createServer method ko call krenge ye ek HOF hai , iske paramter hote hai req , response jo ki callback fucntion hoga ,, ye jo object reyrn krega usko hum server m store krliye hai

// jo callback ke andr likhenge , jub jub request hit hogi vo show hua krega ya call hojayega
const server = http.createServer((request, response) => {
  response.end("hello from server");
  console.log(request);
});

// abb server ko run krne k liye , server k saath listen ka use krenge , listen ke paraeters hote hai  : ek toh port number , another ip address ; another ek callback fucntion jo server shuru hone pr show hoga

server.listen(8000, "127.0.0.1", () => {
  console.log("server up and running");
});
