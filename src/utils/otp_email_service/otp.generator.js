import {generate} from 'otp-generator'

export const otp=generate(10,{upperCaseAlphabets:true,lowerCaseAlphabets:true,specialChars:false})

