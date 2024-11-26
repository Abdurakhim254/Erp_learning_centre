import {connect} from "../database/index.js"


export const getHomeworks=async()=>{
    try {
        const result=await connect.select("*").table("homework")
        if(result.length>=1){
            return result
        }else{
            return "Homeworklar topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const getHomeworkByid=async(id)=>{
    try {
        const result=await connect.select("*").table("homework").where({id})
        if(result.length>=1){
            return result
        }else{
            return "Homework topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const createHomework=async({student_id,description,title})=>{
    try {
        await connect('homework').insert({student_id,description,title})
        return "Student yaratildi"
    } catch (error) {
        return error.message
    }
}

export const updateHomework=async({student_id,description,title,id})=>{
    try {
        const result=await connect.select("*").table('homework').where({id}).update({student_id,description,title}).returning("*")
        if(result.length>=1){
            return result
        }else{
            return "Yangilanadigan homework topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteHomework=async(id)=>{
    try {
        const result=await connect.select("*").table("homework").where({id}).del().returning("*")
        if(result.length>=1){
            return result
        }else{
            return "O'chiriladigan homework topilmadi"
        }
    } catch (error) {
        return error.message
    }
}
