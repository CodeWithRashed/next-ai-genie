"use server"
//IMPORTS
import { UploadImage } from "@/lib/uploadImage"


//INTERFACES
enum ROLE {
    ADMIN = "admin",
    USER = "user"
    }
export async function RegisterUser(formData:FormData) {

    // // const uploadResponse = await UploadImage(formData.get('image'))
    // const image = uploadResponse.data.data.url

    const rawFormData = {
      name: formData.get('name'),
    //   image: image,
      email: formData.get('email'),
      password: formData.get('password'),
      role: ROLE.USER
    }

    console.log(rawFormData)
  }