import {connect} from "../database/index.js"

export const getCourses=async()=>{
    try {
        const result=await connect.select("*").table("course")
        if(result.length>=1){
            return result
        }else{
            return "Courselar topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const getCourseByid=async(id)=>{
    try {
        const result=await connect.select("*").table("course").where({id})
        if(result.length>=1){
            return result
        }else{
            return "Course topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const createCourse=async({name,desc,start_time,end_time})=>{
    try {
        await connect('course').insert({name,desc,start_time,end_time})
        return "Course yaratildi"
    } catch (error) {
        return error.message
    }
}

export const updateCourse=async({name,desc,start_time,end_time,id})=>{
    try {
        const result=await connect.select("*").table('course').where({id}).update({name,desc,start_time,end_time}).returning("*")
        if(result.length>=1){
            return result
        }else{
            return "Yangilanadigan Course topilmadi"
        }
    } catch (error) {
        return error.message
    }
}

export const deleteCourse=async(id)=>{
    try {
        const result=await connect.select("*").table("course").where({id}).del().returning("*")
        if(result.length>=1){
            return result
        }else{
            return "O'chiriladigan Course topilmadi"
        }
    } catch (error) {
        return error.message
    }
}