import {connect} from "../../database/index.js"

export const createAssignTable=async()=>{
    try {
        if(!(await connect.schema.hasTable('assignment'))){
            await connect.schema.createTable('assignment',(table)=>{
                table.increments('id').primary,
                table.integer('course_id').references('id').inTable('course'),
                table.integer('student_id').references('id').inTable('student'),
                table.integer('teacher_id').references('id').inTable('teacher')
            })
            console.log("Table yaratildi")
        }else{
            console.log("Table Allaqachon yaratilgan")
        }
    } catch (error) {
        console.log(error.message)
    }
}

