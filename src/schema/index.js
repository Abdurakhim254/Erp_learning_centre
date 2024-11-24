import  {createUsertable} from "./user/user.table.js"
import {createCoursetable} from "./course/course.table.js"
import { createTeachertable } from "./teacher/teacher.table.js"
import {CreateStudentTable} from "./student/student.table.js"

export const createAlltables=async()=>{
    try {
        await createUsertable()
        await createCoursetable()
        await createTeachertable()
        await CreateStudentTable()
    } catch (error) {
        return error.message
    }
}