const fs = require("fs");
const http = require("http");

////////////////////////////////////////////////////
////// FILES

//1) BLOCKING SYNCHRONOUS WAY

// const textIn = fs.readFileSync("./txt/append.txt", "utf-8");
// console.log(textIn);

// const textOut = `This is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
//console.log("File written!");

// 2) NON-BLOCKING ASYNCHRONOUS WAY

//This is callback hell
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Error! 💥");

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("your file has been written 😌");
//       });
//     });
//   });
// });

// console.log("will read file");

////////////////////////////////////////////////////
////// SERVER

const server = http.createServer((req, res) => {
  res.end("Hello from the server!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000 ");
});
