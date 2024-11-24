import express   from "express";
import {TeacherObj} from "../controllers/index.js"
import {checkTeacherDataMiddleware,updateTeacherDataMiddleware} from "../middlewares/index.js"
import {CheckteacherValidationSchema} from "../validations/index.js"

export const teacherrouter=express.Router()

teacherrouter.get("/",TeacherObj.getAllteachers)
teacherrouter.get("/:id",TeacherObj.getteacherByidCon)
teacherrouter.post("/",checkTeacherDataMiddleware(CheckteacherValidationSchema),TeacherObj.CreateteacherCon)
teacherrouter.put("/:id",updateTeacherDataMiddleware(CheckteacherValidationSchema),TeacherObj.UpdateteacherCon)
teacherrouter.delete("/:id",TeacherObj.DeleteteacherCon)