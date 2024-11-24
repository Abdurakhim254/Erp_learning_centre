import {getStudents,getStudentByid,createStudent,updateStudent,deleteStudent} from "../services/index.js"

export const StudentObj={
    getAllStudentsCon:async function(req,res){
        try {
            const result=await getStudents()
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    getStudentByidCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await getStudentByid(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    CreateStudentCon:async function(req,res){
        try {
            const {permission,user_id}=req.body
            const result=await createStudent({permission,user_id})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    UpdateStudentCon:async function(req,res){
        try {
            const {id}=req.params
            const {permission,user_id}=req.body
            const result=await updateStudent(permission,user_id,id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    DeleteStudentByidCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await deleteStudent(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}