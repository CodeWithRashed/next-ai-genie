// import React from "react";
// import { IoMenu } from "react-icons/io5";
// import {
//   Drawer
// } from "@material-tailwind/react";
 
// export function MenuDrawer({menuItems}) {
//   const [open, setOpen] = React.useState(false);
 
//   const openDrawer = () => setOpen(true);
//   const closeDrawer = () => setOpen(false);
 
//   return (
//     <React.Fragment>
//       <button  className="text-2xl hover:bg-gray-100 p-2 rounded-full" onClick={openDrawer}>
//       <IoMenu ></IoMenu>
//       </button>
//       <Drawer open={open} onClose={closeDrawer} className="p-4">
         
//         {menuItems}
//       </Drawer>
//     </React.Fragment>
//   );
// }