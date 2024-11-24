import express from 'express'
import {StudentObj} from "../controllers/index.js"
import {checkStudentDatamiddleware,UpdateStudentDatamiddleware} from "../middlewares/index.js"
import {studentValidationSchema} from "../validations/index.js"
import {authGuard,roleGuard} from "../utils/Guards/index.js"


export const studentrouter=express.Router()

studentrouter.get("/",StudentObj.getAllStudentsCon)
studentrouter.get("/:id",StudentObj.getStudentByidCon)
studentrouter.post("/",authGuard,roleGuard(['admin','superadmin']),checkStudentDatamiddleware(studentValidationSchema),StudentObj.CreateStudentCon)
studentrouter.put("/:id",authGuard,roleGuard(['admin','superadmin']),UpdateStudentDatamiddleware(studentValidationSchema),StudentObj.UpdateStudentCon)
studentrouter.delete("/:id",authGuard,roleGuard(['admin','superadmin']),StudentObj.DeleteStudentByidCon)