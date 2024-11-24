import express from 'express'
import {StudentObj} from "../controllers/index.js"
import {checkStudentDatamiddleware,UpdateStudentDatamiddleware} from "../middlewares/index.js"
import {studentValidationSchema} from "../validations/index.js"

export const studentrouter=express.Router()

studentrouter.get("/",StudentObj.getAllStudentsCon)
studentrouter.get("/:id",StudentObj.getStudentByidCon)
studentrouter.post("/",checkStudentDatamiddleware(studentValidationSchema),StudentObj.CreateStudentCon)
studentrouter.put("/:id",UpdateStudentDatamiddleware(studentValidationSchema),StudentObj.UpdateStudentCon)
studentrouter.delete("/:id",StudentObj.DeleteStudentByidCon)