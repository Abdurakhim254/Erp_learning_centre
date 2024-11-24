import express from "express"
import {Userobj} from "../controllers/index.js"
import {UserMiddleware} from "../middlewares/index.js"
import {authregisterchema} from "../validations/index.js"

export const userrouter=express.Router()

userrouter.get("/",Userobj.getAllusers)
userrouter.put("/:email",UserMiddleware(authregisterchema),Userobj.Updateuser)
userrouter.delete("/:email",Userobj.DeleteUser)