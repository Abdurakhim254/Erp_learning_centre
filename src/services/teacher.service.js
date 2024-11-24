import {connect} from "../database/index.js"


export const getTeachers=async()=>{
    try {
        const result=await connect.select("*").table("teacher")
        if(result.length>=1){
            return result
        }else{
            return "Teacherlar topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const getTeacherByid=async(id)=>{
    try {
        const result=await connect.select("*").table("teacher").where({id})
        if(result.length>=1){
            return result
        }else{
            return "Teacher topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const createTeacher=async(user_id)=>{
    try {
        await connect('teacher').insert({user_id})
        return "Teacher yaratildi"
    } catch (error) {
        return error.message
    }
}

export const updateTeacher=async(user_id,id)=>{
    try {
        const result=await connect.select("*").table('teacher').where({id}).update({user_id}).returning("*")
        if(result.length>=1){
            return result
        }else{
            return "Yangilanadigan Teacher topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteTeacher=async(id)=>{
    try {
        const result=await connect.select("*").table("teacher").where({id}).del().returning("*")
        if(result.length>=1){
            return result
        }else{
            return "O'chiriladigan Teacher topilmadi"
        }
    } catch (error) {
        return error.message
    }
}
