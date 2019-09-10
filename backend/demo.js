
//console.log("Hello MayriOdas");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded());

app.get("/",(req,res)=>{
  res.end("Hello welcome to NodeJs.");
})

app.get("/login",(req,res)=>{
    const username = req.query.username;
    const password = req.query.password;
    res.end("Hello welcome to login." + username + password);
  })

  app.post("/login",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    res.end("Hello welcome to login." + username + password);
  })
  app.post("/register",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    res.end("Hello welcome to register." + username + password);
  })


app.listen(8085,()=>{
    console.log("server is running...");
})
