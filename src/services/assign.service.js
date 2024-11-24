import {connect} from "../database/index.js"


export const getAllAsigns=async()=>{
    try {
        const result=await connect.select("*").table("assignment")
        if(result.length>=1){
            return result
        }else{
            return "Assignmentlar topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const getAssignByid=async(id)=>{
    try {
        const result=await connect.select("*").table("assignment").where({id})
        if(result.length>=1){
            return result
        }else{
            return "Assignment topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const createAssign=async({course_id,teacher_id,student_id})=>{
    try {
        await connect('assignment').insert({course_id,teacher_id,student_id})
        return "Student yaratildi"
    } catch (error) {
        return error.message
    }
}

export const updateAssign=async({course_id,teacher_id,student_id,id})=>{
    try {
        const result=await connect.select("*").table('assignment').where({id}).update({course_id,teacher_id,student_id}).returning("*")
        if(result.length>=1){
            return result
        }else{
            return "Yangilanadigan Assignment topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteAssign=async(id)=>{
    try {
        const result=await connect.select("*").table("assignment").where({id}).del().returning("*")
        if(result.length>=1){
            return result
        }else{
            return "O'chiriladigan Assignment topilmadi"
        }
    } catch (error) {
        return error.message
    }
}
