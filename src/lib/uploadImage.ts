import axios from "axios";

export const UploadImage = async (image:any) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await axios.post(`https://api.imgbb.com/1/upload?key=dce06e87278d83ebc9f94693cdfbdb19`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response
};
