import expres from 'express'
import {authOBject} from "../controllers/index.js"
import {authRegisterMiddleware,authLoginMiddleware} from "../middlewares/index.js"
import {authregisterchema,authloginSchema} from "../validations/index.js"

export const authrouter=expres.Router()

authrouter.post("/register",authRegisterMiddleware(authregisterchema),authOBject.authRegisterCon)
authrouter.post("/login",authLoginMiddleware(authloginSchema),authOBject.authLoginCon)
authrouter.post("/refreshToken",authOBject.authRefreshtokenCon)
authrouter.post("/verify-otp",authOBject.VerifyOtp)
authrouter.get("/profile/:email",authOBject.authProfileCon)