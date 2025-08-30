import express from 'express'
import connectDatabase from './connectDb.js';
import cors from "cors"
import userRouter from './routes/user.routes.js';
import bodyParser from "body-parser";
const app =express()

app.use(express.json());
app.use(cors({
    origin : "*",
}))
app.use(bodyParser.json());

connectDatabase();

app.use("/api/user",userRouter)


app.listen(8080,()=>{
    console.log("sever is runing on port 8080");
})

