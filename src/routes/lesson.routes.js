import express from 'express'
import {lessonObj} from "../controllers/index.js"
import {CheckLessonDatamiddlewareData,UpdateLessonDatamiddleware} from "../middlewares/index.js"
import {lessonDataValidationSchema} from "../validations/index.js"
import {authGuard,roleGuard} from "../utils/Guards/index.js"

export const lessonRouter=express.Router()


lessonRouter.get("/",lessonObj.getAllLessonsCon)
lessonRouter.get("/:id",lessonObj.getLessonByidCon)
lessonRouter.post("/",authGuard,roleGuard(['admin','superadmin']),CheckLessonDatamiddlewareData(lessonDataValidationSchema),lessonObj.CreateLessonCon)
lessonRouter.put("/:id",authGuard,roleGuard(['admin','superadmin']),UpdateLessonDatamiddleware(lessonDataValidationSchema),lessonObj.UpdateLessonCon)
lessonRouter.delete("/:id",authGuard,roleGuard(['admin','superadmin']),lessonObj.DeleteLessonCon)