// import SectionTitle from "../../Shared/SectionTitle";
// import ReviewBg from "../../../assets/review-bg.png";
// import user1 from "../../../assets/user1.jpg";
// import user2 from "../../../assets/user2.jpg";
// import user3 from "../../../assets/user3.jpg";
// import user4 from "../../../assets/user4.jpg";
// import user5 from "../../../assets/user5.jpg";
// import user6 from "../../../assets/user6.jpg";

// const ReviewSection = () => {
//   return (
//     <div>
//       <div>
//         <SectionTitle
//           title="Reviews"
//           subtitle="What People Say About Us"
//         ></SectionTitle>
//       </div>

//       <div
//         className="my-3 relative h-[80vh] !w-full"
//         style={{
//           backgroundImage: `url('${ReviewBg}')`,
//           backgroundPosition: "bottom",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//         }}
//       >
//         {/* Review 1 */}
//         <div className="absolute group top-[12%] left-[10%]  w-12 h-12">
//           <div className="relative rounded-full w-12 h-12 transition-all ease-in-out">
//             <div className="overflow-hidden rounded-full border-2 border-color-primary w-12 h-12 transition-all ease-in-out">
//               <img
//                 src={user1}
//                 alt="Avatar 1"
//                 className="w-12 h-12 rounded-full object-cover group-hover:scale-105 transition-all ease-in-out"
//               />
//             </div>

//             <div className="absolute text-white h-0 w-0 group-hover:h-28 group-hover:w-52 bg-color-primary -top-[70%] left-[120%] z-20 rounded-main group-hover:p-2 transition-all ease-in-out">
//               <div className="hidden group-hover:flex flex-col justify-center items-center gap-2">
//                 <h1>John</h1>
//                 <p className="text-sm text-center text-gray-100">
//                   Great product! Easy to use and provides excellent results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Review 2 */}
//         <div className="absolute group bottom-[15%] left-[20%]  w-12 h-12">
//           <div className="relative rounded-full w-12 h-12 transition-all ease-in-out">
//             <div className="overflow-hidden rounded-full border-2 border-color-primary w-12 h-12 transition-all ease-in-out">
//               <img
//                 src={user2}
//                 alt="Avatar 2"
//                 className="w-12 h-12 rounded-full object-cover group-hover:scale-105 transition-all ease-in-out"
//               />
//             </div>

//             <div className="absolute text-white h-0 w-0 group-hover:h-28 group-hover:w-52 bg-color-primary z-20 -top-[250%] left-[60%] lg:-top-[70%] lg:left-[120%] rounded-main group-hover:p-2 transition-all ease-in-out">
//               <div className="hidden group-hover:flex flex-col justify-center items-center gap-2">
//                 <h1>Myles</h1>
//                 <p className="text-sm text-center text-gray-100">
//                   Great product! Easy to use and provides excellent results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Avatar 3 */}
//         <div className="absolute group top-[30%] right-[14%]  w-12 h-12">
//           <div className="relative rounded-full w-12 h-12 transition-all ease-in-out">
//             <div className="overflow-hidden rounded-full border-2 border-color-primary w-12 h-12 transition-all ease-in-out">
//               <img
//                 src={user3}
//                 alt="Avatar 3"
//                 className="w-12 h-12 rounded-full object-cover group-hover:scale-105 transition-all ease-in-out"
//               />
//             </div>

//             <div className=" absolute text-white h-0 w-0 group-hover:h-28 group-hover:w-52 bg-color-primary z-20 right-[-20%] lg:-top-[70%] lg:right-[120%] rounded-main group-hover:p-2 transition-all ease-in-out">
//               <div className="hidden group-hover:flex flex-col justify-center items-center gap-2">
//                 <h1>Bennett</h1>
//                 <p className="text-sm text-center text-gray-100 ">
//                   Great product! Easy to use and provides excellent results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Avatar 4 */}
//         <div className="absolute group bottom-[28%] right-[10%]  w-12 h-12">
//           <div className="relative rounded-full w-12 h-12 transition-all ease-in-out">
//             <div className="overflow-hidden rounded-full border-2 border-color-primary w-12 h-12 transition-all ease-in-out">
//               <img
//                 src={user4}
//                 alt="Avatar 4"
//                 className="w-12 h-12 rounded-full object-cover group-hover:scale-105 transition-all ease-in-out"
//               />
//             </div>

//             <div className=" absolute text-white h-0 w-0 group-hover:h-28 group-hover:w-52 bg-color-primary right-0 lg:-top-[70%] lg:right-[120%] rounded-main group-hover:p-2 transition-all ease-in-out">
//               <div className="hidden group-hover:flex flex-col justify-center items-center gap-2">
//                 <h1>Cody</h1>
//                 <p className="text-sm text-center text-gray-100 ">
//                   Great product! Easy to use and provides excellent results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Avatar 5 */}
//         <div className="absolute bottom-[45%] left-[35%] group w-12 h-12">
//           <div className="relative rounded-full w-12 h-12 transition-all ease-in-out">
//             <div className="overflow-hidden rounded-full border-2 border-color-primary w-12 h-12 transition-all ease-in-out">
//               <img
//                 src={user5}
//                 alt="Avatar 5"
//                 className="w-12 h-12 rounded-full object-cover group-hover:scale-105 transition-all ease-in-out"
//               />
//             </div>

//             <div className=" absolute text-white h-0 w-0 group-hover:h-28 group-hover:w-52 bg-color-primary left-[-150%] lg:-top-[70%] lg:right-[120%] rounded-main group-hover:p-2 transition-all ease-in-out">
//               <div className="hidden group-hover:flex flex-col justify-center items-center gap-2">
//                 <h1>Miller</h1>
//                 <p className="text-sm text-center text-gray-100 ">
//                   Great product! Easy to use and provides excellent results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Avatar 6 */}
//         <div className="absolute top-[20%] right-[40%] group w-12 h-12">
//           <div className="relative rounded-full w-12 h-12 transition-all ease-in-out">
//             <div className="overflow-hidden rounded-full border-2 border-color-primary w-12 h-12 transition-all ease-in-out">
//               <img
//                 src={user6}
//                 alt="Avatar 6"
//                 className="w-12 h-12 rounded-full object-cover group-hover:scale-105 transition-all ease-in-out"
//               />
//             </div>

//             <div className=" absolute text-white h-0 w-0 group-hover:h-28 group-hover:w-52 bg-color-primary left-[-150%] lg:-top-[70%] lg:left-[120%] rounded-main group-hover:p-2 transition-all ease-in-out">
//               <div className="hidden group-hover:flex flex-col justify-center items-center gap-2">
//                 <h1>Drake</h1>
//                 <p className="text-sm text-center text-gray-100 ">
//                   Great product! Easy to use and provides excellent results.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReviewSection;
