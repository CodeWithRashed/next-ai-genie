// import { Link, NavLink} from "react-router-dom";
// import LogoDark from "../../assets/logo.png";
// import { useState } from "react";
// import { MenuDrawer } from "./MenuDrawer";
// import { ProfileMenu } from "./ProfileMenu";

// const Navbar = () => {
//   //Handle Active Route UnderLine
//   const [isActive, setIsActive] = useState();


//   //Menu Items
//   const menuItems = (
//     <ul className="flex lg:flex-row flex-col w-full justify-center items-center gap-4 text-color-subtitle  font-bold">
//       <li className="flex flex-col">
//         <NavLink
//           onClick={() => setIsActive("/")}
//           to="/"
//            className={`${ isActive == "/" ? "text-color-primary border-b-2 border-color-primary" : ""} `}
//         >
//           Home
//         </NavLink>
//       </li>
//       <li className="flex flex-col items-center justify-center">
//         <a
//           onClick={() => setIsActive("#Pricing")}
//           href="#Pricing"
//           className={`${ isActive == "#Pricing" ? "text-color-primary border-b-2 border-color-primary" : ""} `}
          
//         >
//           Pricing
//         </a>
//       </li>

//       <li className="flex flex-col items-center justify-center">
//         <a
//           onClick={() => setIsActive("#Reviews")}
//           href="#Reviews"
//            className={`${ isActive == "#Reviews" ? "text-color-primary border-b-2 border-color-primary" : ""} `}
//         >
//           Testimonials
//         </a>
//       </li>
//       <li className="flex flex-col">
//         <a
//           onClick={() => setIsActive("#Contact")}
//           href="#Contact"
//            className={`${ isActive == "#Contact" ? "text-color-primary border-b-2 border-color-primary" : ""} `}
//         >
//           Contact
//         </a>
//       </li>
//       <li className="flex flex-col">
//         <NavLink
//           onClick={() => setIsActive("#Login")}
//           to="/login"
//            className={`${ isActive == "#Login" ? "text-color-primary border-b-2 border-color-primary" : ""} `}
//         >
//           Login
//         </NavLink>
//       </li>
//     </ul>
//   );

//   return (
//     <div className="sticky grid grid-cols-12 w-full justify-center items-center my-3 bg-transparent">
//       {/* Nav Start */}
//       <div className="col-span-8 lg:col-span-4 ">
//         <Link to="/">
//           <img className="h-12  object-contain" src={LogoDark} alt="" />
//         </Link>
//       </div>

//       {/* Nav Center */}
//       <div className="hidden lg:flex col-span-4 ">{menuItems}</div>

//       {/* Nav End */}
//       <div className="col-span-4 flex justify-end items-center gap-3">
//         <div className="lg:hidden">
//           <MenuDrawer menuItems={menuItems}></MenuDrawer>
//         </div>
//         <button className="lg:block hidden bg-color-primary px-3 py-2 rounded-main text-white">
//           Free Trial
//         </button>
//         <div className="">
//           <ProfileMenu></ProfileMenu>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
