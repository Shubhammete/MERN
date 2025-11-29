import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import Product from "./models/product.model.js";
import mongoose from "mongoose";

import productRouter from "./routes/product.route.js"
dotenv.config()
const app = express();
app.use(express.json())
const PORT = 3000
app.use("/api/products",productRouter)

// connectionURL = "mongodb+srv://<dbUser>:<dbPassword>@book-store-mern-app.2nnx3uu.mongodb.net/<dbName>?appName=Book-Store-MERN-App"
app.listen(PORT, ()=>{
    connectDB()
    console.log(`Server started at port ${PORT}`)
})