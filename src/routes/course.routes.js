import express from "express"
import {CourseObj} from "../controllers/index.js"
import {CheckCourseDatamiddleware,updateCourseDatamiddleware} from "../middlewares/index.js"
import {courseValidationSchema} from "../validations/index.js"
import {authGuard,roleGuard} from "../utils/Guards/index.js"


export const courserouter=express.Router()

courserouter.get("/",CourseObj.getAllCourseCon)
courserouter.get("/:id",CourseObj.getCourseByidCon)
courserouter.post("/",authGuard,roleGuard(['admin','superadmin']),CheckCourseDatamiddleware(courseValidationSchema),CourseObj.CreateCourseCon)
courserouter.put("/:id",authGuard,roleGuard(['admin','superadmin']),updateCourseDatamiddleware(courseValidationSchema),CourseObj.UpdateCourseCon)
courserouter.delete("/:id",authGuard,roleGuard(['admin','superadmin']),CourseObj.DeleteCourseCon)