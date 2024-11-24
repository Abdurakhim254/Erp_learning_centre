import express from 'express'
import {authrouter,userrouter,courserouter,teacherrouter,studentrouter,assignrouter} from "./routes/index.js"
import {createAlltables} from "../src/schema/index.js"

export const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.get("/api/v1/setup",async(req,res)=>{
    try {
        await createAlltables()
        res.status(200).send("Table yaratildi")
    } catch (error) {
        res.status(400).send("Table yaratishda xatolik")
    }
})

app.use("/auth",authrouter)
app.use("/user",userrouter)
app.use("/course",courserouter)
app.use("/teacher",teacherrouter)
app.use("/student",studentrouter)
app.use("/assignment",assignrouter)