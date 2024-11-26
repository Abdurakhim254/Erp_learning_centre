import  {createUsertable} from "./user/user.table.js"
import {createCoursetable} from "./course/course.table.js"
import { createTeachertable } from "./teacher/teacher.table.js"
import {CreateStudentTable} from "./student/student.table.js"
import {createAssignTable} from "./assign/assign.table.js"
import {CreateHomeworkTable} from "./homework/homework.table.js"
import {CreateLessonTable} from "./lesson/lesson.table.js"

export const createAlltables=async()=>{
    try {
        await createUsertable()
        await createCoursetable()
        await createTeachertable()
        await CreateStudentTable()
        await createAssignTable()
        await CreateHomeworkTable()
        await CreateLessonTable()
    } catch (error) {
        return error.message
    }
}