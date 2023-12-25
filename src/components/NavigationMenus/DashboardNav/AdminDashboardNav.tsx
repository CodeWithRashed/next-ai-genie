"use client"

//React Icons
import { MdInbox } from "react-icons/md";
import { PiDatabaseFill } from "react-icons/pi";
import { CiShop } from "react-icons/ci";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";

//Functions Components
export default function AdminDashboardNav() {
  const routes = usePathname()
  return (
    <div className="flex flex-col gap-1 transition-all ease-in-out">
            {/* Manage Users */}
      <Link href="/dashboard/manage-users" className={`${routes === "/dashboard/manage-users" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <PiDatabaseFill className="h-5 w-5" />
       Manage Users
      </Link>

      {/* Manage Products */}
      <Link href="/dashboard/manage-products" className={`${routes === "/dashboard/manage-products" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <PiDatabaseFill className="h-5 w-5" />
        Manage Products
      </Link>

      {/* Orders */}
      <Link href="/dashboard/orders" className={`${routes === "/dashboard/orders" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <CiShop className="h-5 w-5" />
       Orders
      </Link>
   

      <hr className="my-3" />

      {/* //Support Inbox// */}
      <Link href="/dashboard/support" className={`${routes === "/dashboard/support" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <MdInbox className="h-5 w-5" />
        Support Request
      </Link>

      {/* //Profile// */}
      <Link href="/dashboard/profile" className={`${routes === "/dashboard/profile" ? "text-color-primary w-full flex gap-2 items-center bg-color-primary-light p-3 rounded-main" : "w-full flex gap-2 items-center hover:bg-color-primary-light p-3 rounded-main"}`}>
        <FaRegUserCircle className="h-5 w-5" />
        Profile
      </Link>

    </div>
  );
}


// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// //Material Tailwind Components
// import {
//   Card,
//   Typography,
//   List,
//   ListItem,
//   ListItemPrefix,
//   ListItemSuffix,
//   Chip,
//   Dialog,
//   DialogFooter,
//   Button,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

// //React Icons
// import {
//   FaRegUserCircle,
//   FaAngleDown,
//   FaAngleRight,
//   FaShoppingCart,
// } from "react-icons/fa";

// import { MdOutlineDashboard, MdDashboard, MdInbox } from "react-icons/md";
// import { IoCodeWorking } from "react-icons/io5";
// import { IoChatboxEllipsesSharp } from "react-icons/io5";
// import { BiSolidNoEntry } from "react-icons/bi";
// import { PiDatabaseFill } from "react-icons/pi";
// import { CiShop } from "react-icons/ci";

// //Shared Components
// import ProTag from "../../Shared/ProTag";

// //Functions Components
// export function AdminNav() {
//   const [open, setOpen] = useState(0);

//   const handleOpenAccordion = (value) => {
//     setOpen(open === value ? 0 : value);
//   };
//   const navigator = useNavigate();
//   const [isPro, setIsPro] = useState(true);
//   const [size, setSize] = useState(null);
//   const handleOpen = (value) => setSize(value);

//   //Handle PRO user navigation
//   const navigatePros = (location) => {
//     if (isPro) {
//       navigator(location);
//     } else {
//       console.log("You are not pro");
//       handleOpen("sm");
//     }
//   };

//   return (
//     <div className="flex justify-center items-start p-2 h-full">
//       <Card className=" w-full h-full  shadow-xl shadow-blue-gray-900/5">
//         <List>
//           {/* //Dashboard// */}
//           <button
//             onClick={() => {
//               let location = "/dashboard";
//               navigatePros(location);
//             }}
//           >
//             <ListItem>
//               <ListItemPrefix>
//                 <MdDashboard className="h-5 w-5" />
//               </ListItemPrefix>
//               Dashboard
//             </ListItem>
//           </button>
//           <hr className="mb-3" />
//           <Accordion
//             open={open === 1}
//             icon={
//               <FaAngleDown
//                 strokeWidth={2.5}
//                 className={`mx-auto  h-4 w-4 transition-transform ${
//                   open === 1 ? "rotate-180" : ""
//                 }`}
//               />
//             }
//           >
//             <ListItem className="p-0" selected={open === 1}>
//               <AccordionHeader
//                 onClick={() => handleOpenAccordion(1)}
//                 className="border-b-0 p-3"
//               >
//                 <ListItemPrefix>
//                   <PiDatabaseFill className="h-5 w-5" />
//                 </ListItemPrefix>
//                 <Typography color="blue-gray" className="mr-auto font-normal">
//                   User Data
//                 </Typography>
//               </AccordionHeader>
//             </ListItem>
//             <AccordionBody className="py-1">
//               <List className="p-0">
//                 <button
//                   onClick={() => {
//                     let location = "/dashboard/customers";
//                     navigatePros(location);
//                   }}
//                 >
//                   <ListItem>
//                     <ListItemPrefix>
//                       <FaAngleRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Customers
//                   </ListItem>
//                 </button>
//                 <button
//                   onClick={() => {
//                     let location = "/dashboard/representatives";
//                     navigatePros(location);
//                   }}
//                 >
//                   <ListItem>
//                     <ListItemPrefix>
//                       <FaAngleRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Representatives
//                   </ListItem>
//                 </button>
//                 <button
//                   onClick={() => {
//                     let location = "/dashboard/admins";
//                     navigatePros(location);
//                   }}
//                 >
//                   <ListItem>
//                     <ListItemPrefix>
//                       <FaAngleRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Admins
//                   </ListItem>
//                 </button>
//               </List>
//             </AccordionBody>
//           </Accordion>
//           <Accordion
//             open={open === 2}
//             icon={
//               <FaAngleDown
//                 strokeWidth={2.5}
//                 className={`mx-auto h-4 w-4 transition-transform ${
//                   open === 2 ? "rotate-180" : ""
//                 }`}
//               />
//             }
//           >
//             <ListItem className="p-0" selected={open === 2}>
//               <AccordionHeader
//                 onClick={() => handleOpenAccordion(2)}
//                 className="border-b-0 p-3"
//               >
//                 <ListItemPrefix>
//                   <CiShop className="h-5 w-5" />
//                 </ListItemPrefix>
//                 <Typography color="blue-gray" className="mr-auto font-normal">
//                   Shop
//                 </Typography>
//               </AccordionHeader>
//             </ListItem>
//             <AccordionBody className="py-1">
//               <List className="p-0">
//                 <button
//                   onClick={() => {
//                     let location = "/dashboard/orders";
//                     navigatePros(location);
//                   }}
//                 >
//                   <ListItem>
//                     <ListItemPrefix>
//                       <FaAngleRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Orders
//                   </ListItem>
//                 </button>
//               </List>
//             </AccordionBody>
//           </Accordion>

//           {/* //Support Inbox// */}
//           <button
//             onClick={() => {
//               let location = "/dashboard/inbox-support";
//               navigatePros(location);
//             }}
//           >
//             <ListItem>
//               <ListItemPrefix>
//                 <MdInbox className="h-5 w-5" />
//               </ListItemPrefix>
//               Support Inbox
//               {!isPro && (
//                 <ListItemSuffix>
//                   <ProTag></ProTag>
//                 </ListItemSuffix>
//               )}
//               {isPro && (
//                 <ListItemSuffix>
//                   <Chip
//                     value="0"
//                     size="sm"
//                     variant="ghost"
//                     color="blue-gray"
//                     className="rounded-full"
//                   />
//                 </ListItemSuffix>
//               )}
//             </ListItem>
//           </button>

//           {/* //Profile// */}
//           <button
//             onClick={() => {
//               let location = "/dashboard/profile";
//               navigatePros(location);
//             }}
//           >
//             <ListItem>
//               <ListItemPrefix>
//                 <FaRegUserCircle className="h-5 w-5" />
//               </ListItemPrefix>
//               Profile
//             </ListItem>
//           </button>
//         </List>
//       </Card>
//     </div>
//   );
// }
