import express from 'express'
import {HomeworkObj} from "../controllers/index.js"
import {CheckHomeworkDatamiddlewareData,UpdateHomeworkDatamiddleware} from "../middlewares/index.js"
import {homeworkDataValidationSchema} from "../validations/index.js"
import {authGuard,roleGuard} from "../utils/Guards/index.js"

export const homeworkRouter=express.Router()

homeworkRouter.get("/",HomeworkObj.getAllHomeworkCon)
homeworkRouter.get("/:id",HomeworkObj.getHomeworkByidCon)
homeworkRouter.post("/",authGuard,roleGuard(['admin','superadmin']),CheckHomeworkDatamiddlewareData(homeworkDataValidationSchema),HomeworkObj.CreateHomeworkCon)
homeworkRouter.put("/:id",authGuard,roleGuard(['admin','superadmin']),UpdateHomeworkDatamiddleware(homeworkDataValidationSchema),HomeworkObj.UpdateHomeworkCon)
homeworkRouter.delete("/:id",authGuard,roleGuard(['admin','superadmin']),HomeworkObj.DeleteHomeworkCon)