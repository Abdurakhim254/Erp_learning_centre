import {connect} from "../../database/index.js"

export const createTeachertable=async()=>{
    try {
        if(!(await connect.schema.hasTable('teacher'))){
            await connect.schema.createTable('teacher',(table)=>{
                table.increments('id').primary,
                table.integer('user_id').references('id').inTable('user')
            })
            console.log("Table yaratildi")
        }else{
            console.log("Table allaqachon yaratilgan")
        }
    } catch (error) {
        console.log(error.message)
    }
}

await createTeachertable()