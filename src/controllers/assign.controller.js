import {getAllAsigns,getAssignByid,createAssign,updateAssign,deleteAssign} from "../services/index.js"

export const AssignObj={
    getAllAsignCon:async function(req,res){
        try {
            const result=await getAllAsigns()
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    getAsignByidCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await getAssignByid(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    CreateAsignCon:async function(req,res){
        try {
            const {course_id,teacher_id,student_id}=req.body
            const result=await createAssign({course_id,teacher_id,student_id})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    UpdateAsignCon:async function(req,res){
        try {
            const {id}=req.params
            const {course_id,teacher_id,student_id}=req.body
            const result=await updateAssign({course_id,teacher_id,student_id,id})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    DeleteAsignCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await deleteAssign(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}