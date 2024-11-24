import express from 'express'
import {AssignObj} from "../controllers/index.js"
import {authGuard,roleGuard} from "../utils/Guards/index.js"


export const assignrouter=express.Router()


assignrouter.get("/",AssignObj.getAllAsignCon)
assignrouter.get("/:id",AssignObj.getAsignByidCon)
assignrouter.post("/",authGuard,roleGuard(['admin','superadmin']),AssignObj.CreateAsignCon)
assignrouter.put("/:id",authGuard,roleGuard(['admin','superadmin']),AssignObj.UpdateAsignCon)
assignrouter.delete("/:id",authGuard,roleGuard(['admin','superadmin']),AssignObj.DeleteAsignCon)