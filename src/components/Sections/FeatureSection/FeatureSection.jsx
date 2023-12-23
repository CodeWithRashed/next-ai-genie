// import SectionTitle from "../../Shared/SectionTitle";
// import FeatureCardBg from "../../../assets/feature-card-bg.png";
// import { MdDocumentScanner, MdSummarize } from "react-icons/md";
// import { BiImages } from "react-icons/bi";
// import { FaCode } from "react-icons/fa";

// const FeatureSection = () => {
//   return (
//     <div>
//       <SectionTitle
//         title="Features"
//         subtitle="Get All Features in One Place"
//       ></SectionTitle>
//       {/* Container */}
//       <div className="grid lg:grid-cols-4 mt-10 gap-5 justify-between ">

//         {/* card start */}
//         <div className="rounded-main bg-white drop-shadow-xl border-2 border-t-color-primary hover:border-color-primary  px-2 py-8 flex flex-col gap-10 relative group overflow-hidden transition-all ease-in-out hover:scale-105">
//           {/* ICon */}
//           <div className=" flex justify-center items-center">
//             <div className="relative icon text-3xl group-hover:text-4xl group-hover:text-white bg-color-primary-light h-20 w-20 p-5 rounded-full  flex justify-center items-center transition-all ease-in-out">
//               <MdDocumentScanner className="z-10 transition-all ease-in-out"></MdDocumentScanner>
//               <div className="absolute w-0 h-0 group-hover:w-full group-hover:h-full bg-color-primary rounded-full top-0 transition-all ease-in-out"></div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-3 text-center z-10 group-hover:text-white transition-all ease-in-out">
//             <h1 className="text-center text-2xl">Creating Content</h1>
//             <p className="text-center text-color-subtitle text-sm group-hover:text-white transition-all ease-in-out">
//               Create human like articles with the AI genie.
//             </p>
//             <button className="px-3 py-2 bg-color-primary text-white rounded-main">
//               Learn More
//             </button>
//           </div>

//           {/* bg svg */}
//           <div className="absolute !w-full left-0 bottom-0 h-0 group-hover:h-[190px] transition-all ease-in-out">
//             <img className="!w-full" src={FeatureCardBg} alt="" />
//           </div>
//         </div>
//         {/* card start */}
//          {/* card start */}
//          <div className="rounded-main bg-white drop-shadow-xl border-2 border-t-color-primary hover:border-color-primary  px-2 py-8 flex flex-col gap-10 relative group overflow-hidden hover:scale-105 transition-all ease-in-out">
//           {/* ICon */}
//           <div className=" flex justify-center items-center">
//           <div className="relative group-hover:text-4xl group-hover:text-white icon text-3xl bg-color-primary-light h-20 w-20 p-5 rounded-full  flex justify-center items-center transition-all ease-in-out">
//               <BiImages className="z-10"></BiImages>
//               <div className="absolute w-0 h-0 group-hover:w-full group-hover:h-full bg-color-primary rounded-full top-0 transition-all ease-in-out"></div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-3 text-center z-10 group-hover:text-white transition-all ease-in-out">
//             <h1 className="text-center text-2xl">Generate Image</h1>
//             <p className="text-center text-color-subtitle text-sm group-hover:text-white transition-all ease-in-out">
//             Generate stunning Images with the DALL-E AI model!
//             </p>
//             <button className="px-3 py-2 bg-color-primary text-white rounded-main">
//               Learn More
//             </button>
//           </div>

//           {/* bg svg */}
//           <div className="absolute !w-full left-0 bottom-0 h-0 group-hover:h-[190px] transition-all ease-in-out">
//             <img className="!w-full" src={FeatureCardBg} alt="" />
//           </div>
//         </div>
//         {/* card start */}
//          {/* card start */}
//          <div className="rounded-main bg-white drop-shadow-xl border-2 border-t-color-primary hover:border-color-primary  px-2 py-8 flex flex-col gap-10 relative group overflow-hidden hover:scale-105 transition-all ease-in-out">
//           {/* ICon */}
//           <div className=" flex justify-center items-center">
//           <div className="relative icon text-3xl group-hover:text-4xl  group-hover:text-white bg-color-primary-light h-20 w-20 p-5 rounded-full  flex justify-center items-center transition-all ease-in-out">
//               <FaCode className="z-10"></FaCode>
//               <div className="absolute w-0 h-0 group-hover:w-full group-hover:h-full bg-color-primary rounded-full top-0 transition-all ease-in-out"></div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-3 text-center z-10 group-hover:text-white transition-all ease-in-out">
//             <h1 className="text-center text-2xl">Coding Assistant</h1>
//             <p className="text-center text-color-subtitle text-sm group-hover:text-white transition-all ease-in-out">
//               Get help when coding, Never stuck while code!
//             </p>
//             <button className="px-3 py-2 bg-color-primary text-white rounded-main">
//               Learn More
//             </button>
//           </div>

//           {/* bg svg */}
//           <div className="absolute !w-full left-0 bottom-0 h-0 group-hover:h-[190px] transition-all ease-in-out">
//             <img className="!w-full" src={FeatureCardBg} alt="" />
//           </div>
//         </div>
//         {/* card start */}
//          {/* card start */}
//          <div className="rounded-main bg-white drop-shadow-xl border-2 border-t-color-primary hover:border-color-primary  px-2 py-8 flex flex-col gap-10 relative group overflow-hidden hover:scale-105 transition-all ease-in-out">
//           {/* ICon */}
//           <div className=" flex justify-center items-center">
//           <div className="relative group-hover:text-4xl group-hover:text-white icon text-3xl bg-color-primary-light h-20 w-20 p-5 rounded-full  flex justify-center items-center transition-all ease-in-out">
//               <MdSummarize className="z-10"></MdSummarize>
//               <div className="absolute w-0 h-0 group-hover:w-full group-hover:h-full bg-color-primary rounded-full top-0 transition-all ease-in-out"></div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="space-y-3 text-center z-10 group-hover:text-white transition-all ease-in-out">
//             <h1 className="text-center text-2xl">Summarization</h1>
//             <p className="text-center text-color-subtitle text-sm group-hover:text-white transition-all ease-in-out">
//               You don&apos;t have to read the whole article again!
//             </p>
//             <button className="px-3 py-2 bg-color-primary text-white rounded-main">
//               Learn More
//             </button>
//           </div>

//           {/* bg svg */}
//           <div className="absolute !w-full left-0 bottom-0 h-0 group-hover:h-[190px] transition-all ease-in-out">
//             <img className="!w-full" src={FeatureCardBg} alt="" />
//           </div>
//         </div>
//         {/* card start */}
//       </div>
//     </div>
//   );
// };

// export default FeatureSection;
