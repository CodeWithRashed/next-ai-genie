"use server";
//IMPORTS
import { UploadImage } from "@/lib/uploadImage";
import axios from "axios";


//INTERFACES
enum ROLE {
  ADMIN = "Admin",
  USER = "User",
}
export async function RegisterUser(prevState: any, formData: FormData) {
  try {
    const uploadResponse = await UploadImage(formData.get("image"));
    const image = uploadResponse.data.data.url;

    // Check For Name
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password") as string;

    // Check Password

    const rawFormData = {
      name: name,
      image: image,
      email: email,
      password: password,
      role: ROLE.USER,
    };

    console.log(rawFormData);

    const response = axios.post("/api/user/register", rawFormData);

  } catch (error) {

    return "Something went wrong! Try Again!";
  }
}
