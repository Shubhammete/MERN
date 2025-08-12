import express from "express"
import dotenv from 'dotenv'
import mongoose from "moongoose"
dotenv.config({path: './.env'})
let app = express()

const PORT = process.env.PORT
const MongoURL = process.env.MONGOURL
console.log(MongoURL)

// connect MongDB
mongoose.connect(MongoURL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   tls: true, // enable TLS
//   tlsAllowInvalidCertificates: false, // set to true only for testing if you have cert issues
}
).then(
    ()=>{
        console.log("App connected to MongoDB!")
        app.listen(PORT,()=>{
            console.log("App Listening on port "+PORT)
        })
    }
).catch((e)=>{
    console.log(e)
})

app.get("/",(request, response)=>{
    console.log(request)
    return response.status(201).send("Hello World!")
})