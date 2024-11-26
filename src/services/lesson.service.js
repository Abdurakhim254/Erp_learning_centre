import {connect} from "../database/index.js"


export const getLessons=async()=>{
    try {
        const result=await connect.select("*").table("lesson")
        if(result.length>=1){
            return result
        }else{
            return "Lessonlar topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const getLessonByid=async(id)=>{
    try {
        const result=await connect.select("*").table("lesson").where({id})
        if(result.length>=1){
            return result
        }else{
            return "Lesson topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const createLesson=async({course_id,description,title})=>{
    try {
        await connect('lesson').insert({course_id,description,title})
        return "Lesson yaratildi"
    } catch (error) {
        return error.message
    }
}

export const updateLesson=async({course_id,description,title,id})=>{
    try {
        const result=await connect.select("*").table('lesson').where({id}).update({course_id,description,title}).returning("*")
        if(result.length>=1){
            return result
        }else{
            return "Yangilanadigan lesson topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteLesson=async(id)=>{
    try {
        const result=await connect.select("*").table("lesson").where({id}).del().returning("*")
        if(result.length>=1){
            return result
        }else{
            return "O'chiriladigan lesson topilmadi"
        }
    } catch (error) {
        return error.message
    }
}