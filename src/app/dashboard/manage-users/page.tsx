import { getAllUsers } from "@/helpers/getAllUsers";
import Image from "next/image";

const ManageUsers = async () => {
  const users = await getAllUsers()
  return (
    <div>
      <div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-main">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Details
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any) => (
              <tr key={user?._id} className="bg-white border-b   hover:bg-gray-50 ">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <Image
                    className="w-10 h-10 rounded-full"
                    width={40}
                    height={40}
                    src={user?.image}
                    alt={user?.name}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {user?.name}
                    </div>
                    <div className="font-normal text-gray-500">
                      {user?.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    
                    {user?.role}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button
                    type="button"
                    className="font-medium text-blue-600  hover:underline"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
