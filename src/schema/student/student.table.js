import { connect } from "../../database/index.js";

export const CreateStudentTable=async()=>{
    try {
        if(!(await connect.schema.hasTable('student'))){
            await connect.schema.createTable('student',(table)=>{
                table.increments('id').primary,
                table.boolean('permission').defaultTo('false'),
                table.integer('user_id').references('id').inTable('user')
            })
            console.log("Table yaratildi")
        }else{
            console.log("Table Allaqachon yaratilgan")
        }
    } catch (error) {
        console.log(error.message)
    }
}

