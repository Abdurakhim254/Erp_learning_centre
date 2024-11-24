import {app} from "./src/app.js"
import dotenv from 'dotenv'
import { application } from "./src/config/index.js"
dotenv.config()



process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception', err)
    process.exit(1)
})

process.on("unhandledRejection", (reason, promise) => {
    logger.error('Unhandled Rejection at', promise, 'reason', reason)
    process.exit(1)
})

const bootstart=async()=>{
    try {
        app.listen(application.PORT,()=>{
            console.log(`Server is running on port ${application.PORT}`)
        })
    } catch (error) {
        console.error(error.message)
    }
}


bootstart()