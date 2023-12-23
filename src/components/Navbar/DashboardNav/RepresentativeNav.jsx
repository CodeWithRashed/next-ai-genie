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
// import { AiOutlineInfoCircle } from "react-icons/ai";
// import { CiShop } from "react-icons/ci";

// //Shared Components
// import ProTag from "../../Shared/ProTag";

// //Functions Components
// export function RepresentativeNav() {
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
//           {/* //Account Information// */}
//           <button
//             onClick={() => {
//               let location = "/dashboard/account-info";
//               navigatePros(location);
//             }}
//           >
//             <ListItem>
//               <ListItemPrefix>
//                 <AiOutlineInfoCircle className="h-5 w-5" />
//               </ListItemPrefix>
//               Account Information
//             </ListItem>
//           </button>
//           {/* //Support Inbox// */}
//           <button
//             onClick={() => {
//               let location = "/dashboard/support-request";
//               navigatePros(location);
//             }}
//           >
//             <ListItem>
//               <ListItemPrefix>
//                 <MdInbox className="h-5 w-5" />
//               </ListItemPrefix>
//               Support Request
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
