import jwt from "jsonwebtoken";
import {jwt_info} from "../config/index.js"

export const createAccesstoken=async(email,role)=>{
    try {
        const payload={email,role}
        const Secretkey=jwt_info.Secretkey
        const expiresIn=jwt_info.expiresIn

        const token=jwt.sign(payload,Secretkey,{expiresIn})
        return token
    } catch (error) {
        return error.message
    }
}

