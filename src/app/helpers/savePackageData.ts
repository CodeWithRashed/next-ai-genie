import axios from "axios"

export const savePackage = async (sessionData:any, packageName:any) => {
    if(!sessionData){
        return
    }
    const res = await axios.post("/api/checkout/success", {sessionId : sessionData, packageName: packageName})
}