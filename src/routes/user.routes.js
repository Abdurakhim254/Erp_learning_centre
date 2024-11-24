import express from "express"
import {Userobj} from "../controllers/index.js"
import {UserMiddleware} from "../middlewares/index.js"
import {authregisterchema} from "../validations/index.js"
import {authGuard,roleGuard} from "../utils/Guards/index.js"

export const userrouter=express.Router()

userrouter.get("/",Userobj.getAllusers)
userrouter.put("/:email",authGuard,roleGuard(['admin','superadmin']),UserMiddleware(authregisterchema),Userobj.Updateuser)
userrouter.delete("/:email",authGuard,roleGuard(['admin','superadmin']),Userobj.DeleteUser)