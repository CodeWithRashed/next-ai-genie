import { getServerSession } from "next-auth";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession()
  return (
   <div className="w-full h-[80vh] flex justify-center items-center bg-gray-200 rounded-main">

    <div className="card bg-white p-8 rounded-main">

    <div className="header flex gap-2 items-center">
      <div className="h-12 w-12 rounded-full overflow-hidden">
        <Image width={48} height={48} src={session?.user.image} alt={session?.user.name} className="cover"/>
      </div>
      <div>
        <h1 className="font-bold">{session?.user.name}</h1>
        <h1 className="text-sm text-color-subtitle">{session?.user.email}</h1>
      </div>
    </div>

    <div className="footer border-t border-t-gray-300 mt-4 pt-4">
    <div className="cta flex justify-center items-center gap-5">
      <div className="view-details text-color-primary">
        <p>View Details</p>
      </div>
      <div className="edit-profile text-color-primary">
        <p>Edit Profile</p>
      </div>
    </div>
    </div>
    </div>
   </div>
  )
};

export default Profile;
