import express  from "express";

const app = express()
const port:number = 3000

// get route
app.get("/",(req,res)=>{
    res.send("Hello World!!")
});

// server starting
app.listen(port,()=>{
    console.log("server is listening on port "+ port)
})