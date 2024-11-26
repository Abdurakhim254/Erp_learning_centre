import {getHomeworks,getHomeworkByid,createHomework,updateHomework,deleteHomework} from "../services/index.js"
import {paginate_function} from "../helpers/index.js"

export const HomeworkObj={
    getAllHomeworkCon:async function(req,res){
        try {
            const {PAGE,LIMIT}=req.query
            const result=await getHomeworks()
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

    getHomeworkByidCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await getHomeworkByid(id)
            res.status(200).send(result)            
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    CreateHomeworkCon:async function(req,res){
        try {
            const {student_id,description,title}=req.body
            const result=await createHomework({student_id,description,title})
            res.status(200).send(result)            
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
    
    ,

    UpdateHomeworkCon:async function(req,res){
        try {
            const {id}=req.params
            const {student_id,description,title}=req.body
            const result=await updateHomework({student_id,description,title,id})
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }

    ,

    DeleteHomeworkCon:async function(req,res){
        try {
            const {id}=req.params
            const result=await deleteHomework(id)
            res.status(200).send(result)
        } catch (error) {
            res.status(400).send(error.message)
        }
    }
}