import {getLessons,getLessonByid,createLesson,updateLesson,deleteLesson} from "../services/index.js"
import {paginate_function} from "../helpers/index.js"


export const lessonObj={
    getAllLessonsCon:async function(req,res){
        try {
            const {PAGE,LIMIT}=req.query
            const result=await getLessons()
            if(PAGE>0 || LIMIT>0){
                const data=await paginate_function(result,PAGE,LIMIT)
                return res.status(200).send(data)
            }
            return res.status(200).send(result)            
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    getLessonByidCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await getLessonByid(id)
            res.status(200).send(result)            
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    CreateLessonCon:async function(req,res){
        try {
            const {course_id,description,title}=req.body
            const result=await createLesson({course_id,description,title})
            res.status(200).send(result)            
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    
    ,

    UpdateLessonCon:async function(req,res){
        try {
            const {id}=req.params
            const {course_id,description,title}=req.body
            const result=await updateLesson({course_id,description,title,id})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    DeleteLessonCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await deleteLesson(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}