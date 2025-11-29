import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
dotenv.config()
const app = express();
const PORT = 3000

// connectionURL = "mongodb+srv://<dbUser>:<dbPassword>@book-store-mern-app.2nnx3uu.mongodb.net/<dbName>?appName=Book-Store-MERN-App"

app.get("/",(req, res)=>{
    res.send("Hello!")
})

app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server started at port ${PORT}`)
})