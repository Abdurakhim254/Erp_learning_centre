import {connect} from "../../database/index.js"

export const createUsertable=async()=>{
    try {
        if(!(await connect.schema.hasTable('user'))){
            await connect.schema.createTable('user',(table)=>{
                table.increments('id').primary,
                table.string('name'),
                table.string('email').unique().notNullable(),
                table.string('password').notNullable(),
                table.enu('role',['user','admin','superadmin']).notNullable().defaultTo('user'),
                table.string('avatar')
                table.date('date_created'),
                table.date('last_login'),
                table.string('account_id').notNullable()
            })
            console.log("Table yaratildi")
        }else{
            console.log("Table allaqachon yaratilgan")
        }
    } catch (error) {
        return error.message
    }
}