import {connect} from "../database/index.js"

export const registerService=async({name,email,password,date_created,last_login,account_id,role})=>{
    try {
        if(role){
            var data={name,email,password,date_created,last_login,account_id,role}
        }else{
            var data={name,email,password,date_created,last_login,account_id}
        }
        const result=await connect.select("*").table('user').where({email})
        if(result.length>=1){
            return "Bu foydalanuvchi allaqachon ro'yxatdan o'tgan"
        }else{
            await connect('user').insert(data)
            return "Ro'yxatdan muvaffaqiyatli o'tdingiz"
        }
    } catch (error) {
        return error.message
    }
}

export const loginService=async({email,password})=>{
    try {
        const result=await connect.select("*").table('user').where({email,password}).returning("*")
        if(result.length>=1){
            return result
        }else{
            return "Ro'yxatdan o'tishingiz kerak"
        }
    } catch (error) {
        return error.message
    }
}

export const profileService=async()=>{
    try {
        
    } catch (error) {
        return error.message
    }
}