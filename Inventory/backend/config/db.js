import mongoose from "mongoose"

export const connectDB = async () =>{
try{
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected to the host: ${conn.connection.host}`)
}catch(e){
    console.error(`Error Occured ${e}`)
    process.exit(1)
}
}