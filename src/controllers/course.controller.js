import {getCourses,getCourseByid,createCourse,updateCourse,deleteCourse} from "../services/index.js"

export const CourseObj={
    getAllCourseCon:async function(req,res){
        try {
            const result=await getCourses()
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    getCourseByidCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await getCourseByid(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    
    ,

    CreateCourseCon:async function(req,res){
        try {
            const {name,desc,start_time,end_time}=req.body
            const result=await createCourse({name,desc,start_time,end_time})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    UpdateCourseCon:async function(req,res){
        try {
            const {id}=req.params
            const {name,desc,start_time,end_time}=req.body
            const result=await updateCourse({name,desc,start_time,end_time,id})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    DeleteCourseCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await deleteCourse(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}