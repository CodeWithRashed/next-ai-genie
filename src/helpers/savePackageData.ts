import axios from "axios";

export const savePackage = async (packageData: any) => {
  const res = await axios.post("http://localhost:3000/api/checkout/success", {packageData});
  return res.data;
};
