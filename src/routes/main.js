import {authrouter,assignrouter,userrouter,courserouter,teacherrouter,studentrouter, homeworkRouter, lessonRouter} from "./index.js"

import express from 'express'

export const mainRouter=express.Router()

mainRouter.use("/auth",authrouter)
mainRouter.use("/assign",assignrouter)
mainRouter.use("/user",userrouter)
mainRouter.use("/course",courserouter)
mainRouter.use("/teacher",teacherrouter)
mainRouter.use("/student",studentrouter)
mainRouter.use("/homework",homeworkRouter)
mainRouter.use("/lesson",lessonRouter)