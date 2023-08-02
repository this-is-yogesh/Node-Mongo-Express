//1.)
// const fs = require('fs');
//require is taking modules like fs is a 'module', baiscally external files are called modules

//  fs.readFile('demo.txt','utf-8',(err,txt)=>{
//         console.log(txt);
//  })
// console.log('hello')
//readFile is async operation hence op is first hello then the text content

//2.)dependencies
// we are installing express which is a dependency but installing nodemon is a dev dependency

// const express = require('express');
// //express is function
// console.log('hello')
// express().listen(8080);

//3.)
// const http = require("http");
// const data = { age: "28" };
// const server = http.createServer((req, res) => {
//   // res.setHeader('Content-type','application/json')//setting the header
//   //if we set header to
//   res.setHeader("Content-type", "text/html");
//   res.end(JSON.stringify(data)); // the data will be shown in html format on the page
//  console.log('hello')
// });
// server.listen(8080);

//4.) server side dynamic rendering

const http = require("http");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
let index = fs.readFileSync("index.html", "utf-8");


const server = http.createServer((req, res) => {
  if (req.url.startsWith("/products")) {
    const id = req.url.split("/")[2];
    const product = data.products.find((p) => p.id === (+id));
    let mindex = index
    .replace("**url**", product.thumbnail)
    .replace("**title**", product.title)
    .replace("**price**", product.price)
    .replace("**rating**", product.rating);
    res.setHeader("Content-type", "text/html");
    res.end(mindex);
    console.log('server')
  }
});

// server.listen(8080);

