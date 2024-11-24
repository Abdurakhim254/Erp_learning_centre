import bcrypt from "bcrypt"


export const hashpassword=async(password)=>{
    try {
        const salt=await bcrypt.genSalt(10)
        const hashshedpassword=await bcrypt.hash(password,salt)
        return hashshedpassword
    } catch (error) {
        return error.message
    }
}

