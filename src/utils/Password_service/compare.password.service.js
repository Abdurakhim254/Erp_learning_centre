import bcrypt from "bcrypt"


export const comparepassword=async(password,hashshedpassword)=>{
    try {
        const isequal=await bcrypt.compare(password,hashshedpassword)
        return isequal
    } catch (error) {
        return error.message
    }
}

