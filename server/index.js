import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/user.route.js"
import productRoute from "./routes/product.route.js"
import cors from 'cors'

dotenv.config()

const app = express()
app.use(cors({
    origin:"*"
}))

app.use(express.json())



app.use("/auth",authRoute)
app.use("/product",productRoute)

app.listen(9000,()=>{
    console.log("Server started")
})

app.use(cors({
    origin:'http://localhost:5173/',
    credentials:true,
}))

mongoose.connect(process.env.MONGO)
.then(()=>console.log("DB connected"))
.catch((err)=> console.log(err))