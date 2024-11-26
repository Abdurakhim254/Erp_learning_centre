import { connect } from "../../database/index.js";

export const CreateLessonTable=async()=>{
    try {
        if(!(await connect.schema.hasTable('lesson'))){
            await connect.schema.createTable('lesson',(table)=>{
                table.increments('id').primary,
                table.integer('course_id').references('id').inTable('course'),
                table.string('description'),
                table.string('title')
            })
            console.log("Table yaratildi")
        }else{
            console.log("Table Allaqachon yaratilgan")
        }
    } catch (error) {
        console.log(error.message)
    }
}
