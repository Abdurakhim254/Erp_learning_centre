import {getAllAsigns,getAssignByid,createAssign,updateAssign,deleteAssign} from "../services/index.js"
import {paginate_function} from "../helpers/index.js"

export const AssignObj={
    getAllAsignCon:async function(req,res){
        try {
            const {PAGE,LIMIT}=req.query
            const result=await getAllAsigns()
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