import {createRefreshtoken} from "../helpers/index.js"
import {registerService,loginService,profileService} from "../services/index.js"
export const authOBject = {
  authRegisterCon: async function (req, res) {
    try {
      const {name,email,password,date_created,last_login,account_id,role}=req.body
      const result=await registerService({name,email,password,date_created,last_login,account_id,role})
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  ,

  authLoginCon: async function (req, res) {
    try {
      const {email,password}=req.body
      const result=await loginService({email,password})
      res.status(200).send(result)
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  ,
  authRefreshtokenCon:async function(req,res){
    try {
      const {email,password}=req.body
      const result=await findByEmail({email})
      if(result=="Ro'yxatdan o'tishingiz kerak"){
        res.status(300).send(result)
      }else{
        const role=result[0].role
        const refreshToken=await createRefreshtoken(email,role)
        res.status(200).send({refreshToken});
      }
      } catch (error) {
      res.status(400).send(error.message);
    }
  }
  ,

  VerifyOtp:async function(req,res){
    try {
      const {email,otp}=req.body
      
      res.status(200).send("ok")
    } catch (error) {
      res.status(400).send(error.message)
    }


  }

  ,

  authProfileCon: async function (req, res) {
    try {
      const {email}=req.params
      const result=await profileService(email)
      delete result[0].password
      res.status(200).send({result});
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
};
