import express from 'express'
import {AssignObj} from "../controllers/index.js"


export const assignrouter=express.Router()


assignrouter.get("/",AssignObj.getAllAsignCon)
assignrouter.get("/:id",AssignObj.getAsignByidCon)
assignrouter.post("/",AssignObj.CreateAsignCon)
assignrouter.put("/:id",AssignObj.UpdateAsignCon)
assignrouter.delete("/:id",AssignObj.DeleteAsignCon)