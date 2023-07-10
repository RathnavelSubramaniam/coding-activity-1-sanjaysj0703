const express = require("express");
const app = express();
const port = 3001;

app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/data',(req,res)=>{
    res.send("hello universe")
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})