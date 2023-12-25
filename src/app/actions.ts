"use server";
//IMPORTS
import { UploadImage } from "@/lib/uploadImage";

//INTERFACES
enum ROLE {
  ADMIN = "admin",
  USER = "user",
}
export async function RegisterUser(prevState: any, formData: FormData) {
  try {
    const uploadResponse = await UploadImage(formData.get("image"));
    const image = uploadResponse.data.data.url;

    //Check For Name
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password") as string;

    //Check Password
    if (!password) {
      return "Password is required!";
    } else if (password?.length < 8) {
      return "Password must be 8 characters long";
    }
    let rawFormData = {
      image: image,
      email: formData.get("email"),
      password: formData.get("password"),
      role: ROLE.USER,
    };

    console.log(rawFormData);
  } catch (error) {
    return "Something went wrong! Try Again!";
  }
}
