import express   from "express";
import {TeacherObj} from "../controllers/index.js"
import {checkTeacherDataMiddleware,updateTeacherDataMiddleware} from "../middlewares/index.js"
import {CheckteacherValidationSchema} from "../validations/index.js"
import {authGuard,roleGuard} from "../utils/Guards/index.js"

export const teacherrouter=express.Router()

teacherrouter.get("/",TeacherObj.getAllteachers)
teacherrouter.get("/:id",TeacherObj.getteacherByidCon)
teacherrouter.post("/",authGuard,roleGuard(['admin','superadmin']),checkTeacherDataMiddleware(CheckteacherValidationSchema),TeacherObj.CreateteacherCon)
teacherrouter.put("/:id",authGuard,roleGuard(['admin','superadmin']),updateTeacherDataMiddleware(CheckteacherValidationSchema),TeacherObj.UpdateteacherCon)
teacherrouter.delete("/:id",authGuard,roleGuard(['admin','superadmin']),TeacherObj.DeleteteacherCon)