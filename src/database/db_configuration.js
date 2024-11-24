import knex from "knex";
import {db} from "../config/index.js"

export const connect=knex({
    client:db.client,
    connection:{
        host:db.host,
        user:db.user,
        password:db.password,
        port:db.port,
        database:db.database
    }
})

