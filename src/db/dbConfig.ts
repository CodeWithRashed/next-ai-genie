import mongoose, { connection } from "mongoose";

export async function connect() {
    try{
        mongoose.connect(process.env.DATABASE_URI!, {
            dbName: "ai_genie"
        })

        //On Successful Connection
        connection.on("connected", ()=>{
            console.log("Connected to Database")
        })

        //On Error Connection
        connection.on("error", (err:any)=>{
            console.log(err)
            process.exit()
        })

    }catch{
        console.log("error connecting database")
    }
}