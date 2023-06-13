import express from "express"
import dotenv from 'dotenv'
import ErrerMiddleware from "./middleware/errer.js";
const app = express()
dotenv.config({path:"./config/.env"})

import cors from 'cors'
app.use(cors({
    origin: process.env.Frontend_url ,
   
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT",]

}))

app.use(ErrerMiddleware);
app.use(express.json())
import todoRoute from './Routes/TodoRoutes.js'
app.use("/api/v1",todoRoute);
export default app;