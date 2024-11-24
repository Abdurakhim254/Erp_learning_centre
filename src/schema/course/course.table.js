import { connect } from "../../database/index.js";

export const createCoursetable=async()=>{
    try {
        if(!(await connect.schema.hasTable('course'))){
            await connect.schema.createTable('course',(table)=>{
                table.increments('id').primary,
                table.string('name'),
                table.string('desc'),
                table.date('start_time'),
                table.date('end_time')
            })
            console.log("Table yaratildi")
        }else{
            console.log("Table allaqachon yaratilgan")
        }
    } catch (error) {
        return error.message
    }
}