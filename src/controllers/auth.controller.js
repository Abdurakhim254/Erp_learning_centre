import {createAccesstoken,createRefreshtoken} from "../helpers/index.js"
import {registerService,loginService,profileService,findByEmail} from "../services/index.js"
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
      delete result[0].password
      if(result=="Ro'yxatdan o'tishingiz kerak"){
        res.status(300).send(result)
      }else{
        const role=result[0].role
        const accessToken=await createAccesstoken(email,role)
        res.status(200).send({
          result,
          accessToken
        });
      }
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

  authProfileCon: async function (req, res) {
    try {
      const {email}=req.params
      const result=await findByEmail({email})
      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
};
