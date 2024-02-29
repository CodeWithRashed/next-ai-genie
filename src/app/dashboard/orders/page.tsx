import { getOrdersData } from "@/helpers/getOrdersData";
const OrdersPage = async () => {
  const orders = await getOrdersData();
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
                Package Name
              </th>
              <th scope="col" className="px-6 py-3">
                Package Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item: any) => (
              <tr
                key={item?._id}
                className="bg-white border-b   hover:bg-gray-50 "
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                >
                  <div className="ps-3">
                    <div className="text-base font-semibold">Customer</div>
                    <div className="font-normal text-gray-500">
                      {item?.packageFor}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div className="flex items-center">{item?.packageName}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {item?.packagePrice}.00$
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

export default OrdersPage;
