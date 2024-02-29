import User from "@/models/userModels";

export const getAllUsers = async () => {
  const userData = await User.find().select("_id image role email name").lean();
  return userData;
};
