import express from 'express'
import {mainRouter} from "./routes/main.js"
import {createAlltables} from "../src/schema/index.js"
import helmet from 'helmet'
import { rateLimit } from 'express-rate-limit'

export const app=express()


const limitter=rateLimit({
    windowMs:15*60*1000,
    limit:20,

})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(helmet())
app.use(limitter)

app.get("/api/v1/setup",async(req,res)=>{
    try {
        await createAlltables()
        res.status(200).send("Table yaratildi")
    } catch (error) {
        res.status(400).send("Table yaratishda xatolik")
    }
})

app.use("/api/v1",mainRouter)
