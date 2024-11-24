import {connect} from "../database/index.js"


export const getStudents=async()=>{
    try {
        const result=await connect.select("*").table("student")
        if(result.length>=1){
            return result
        }else{
            return "Studentlar topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const getStudentByid=async(id)=>{
    try {
        const result=await connect.select("*").table("student").where({id})
        if(result.length>=1){
            return result
        }else{
            return "Student topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const createStudent=async({permission,user_id})=>{
    try {
        await connect('student').insert({permission,user_id})
        return "Student yaratildi"
    } catch (error) {
        return error.message
    }
}

export const updateStudent=async(permission,user_id,id)=>{
    try {
        const result=await connect.select("*").table('student').where({id}).update({user_id,permission}).returning("*")
        if(result.length>=1){
            return result
        }else{
            return "Yangilanadigan Student topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteStudent=async(id)=>{
    try {
        const result=await connect.select("*").table("student").where({id}).del().returning("*")
        if(result.length>=1){
            return result
        }else{
            return "O'chiriladigan student topilmadi"
        }
    } catch (error) {
        return error.message
    }
}
