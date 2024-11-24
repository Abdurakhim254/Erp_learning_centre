import express from "express"
import {CourseObj} from "../controllers/index.js"
import {CheckCourseDatamiddleware,updateCourseDatamiddleware} from "../middlewares/index.js"
import {courseValidationSchema} from "../validations/index.js"

export const courserouter=express.Router()

courserouter.get("/",CourseObj.getAllCourseCon)
courserouter.get("/:id",CourseObj.getCourseByidCon)
courserouter.post("/",CheckCourseDatamiddleware(courseValidationSchema),CourseObj.CreateCourseCon)
courserouter.put("/:id",updateCourseDatamiddleware(courseValidationSchema),CourseObj.UpdateCourseCon)
courserouter.delete("/:id",CourseObj.DeleteCourseCon)