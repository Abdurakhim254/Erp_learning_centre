import { connect } from "../../database/index.js";

export const CreateHomeworkTable=async()=>{
    try {
        if(!(await connect.schema.hasTable('homework'))){
            await connect.schema.createTable('homework',(table)=>{
                table.increments('id').primary,
                table.integer('student_id').references('id').inTable('student'),
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

