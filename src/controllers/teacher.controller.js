import {getTeachers,getTeacherByid,createTeacher,updateTeacher,deleteTeacher} from "../services/index.js"
import {paginate_function} from "../helpers/index.js"

export const TeacherObj={
    getAllteachers:async function(req,res){
        try {
            const {PAGE,LIMIT}=req.query
            const result=await getTeachers()
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

    getteacherByidCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await getTeacherByid(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    CreateteacherCon:async function(req,res){
        try {
            const {user_id}=req.body
            const result=await createTeacher(user_id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    UpdateteacherCon:async function(req,res){
        try {
            const {id}=req.params
            const {user_id}=req.body
            const result=await updateTeacher(user_id,id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    DeleteteacherCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await deleteTeacher(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}