import dotenv from 'dotenv'

dotenv.config()

export const jwt_info={
    Secretkey:process.env.SECRETKEY,
    expiresIn:process.env.EXPIRESIN,
}
