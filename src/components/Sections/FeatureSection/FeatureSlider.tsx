"use client";
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./FeatureSlider.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { ButtonPrimary } from "@/components/ui/Button";
let swiperInstance:any;


export default function FeatureSlider() {

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any): any {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div >
      <Swiper
        
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1.5,
        }}
        pagination={pagination}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className="shadow-2xl mx-5 rounded-main p-8">
          <div className="card-container flex flex-col justify-between">
            {/* card image */}
            <div className="image h-20 w-20 mx-auto">
              <Image
              width={80}
              height={80}
              src="https://i.ibb.co/JBvC62X/feature-icon.png"
              alt="feature icon"
              className="object-cover"
              />

            </div>

            {/* card content */}
            <div className="content my-8 space-y-3">

              <h1 className="text-2xl text-color-title font-bold">Create Content</h1>
              <p className="text-sm text-color-subtitle">Create human like articles with AI Genie. Create human like articles with AI Genie.  </p>
            </div>

            {/* card cta */}
            <div className="cta">
              <ButtonPrimary>Get Started</ButtonPrimary>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl mx-5 rounded-main">
          <div className="shadow-lg"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="shadow-lg"></div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl mx-5 rounded-main">
          <div className="shadow-lg"></div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl mx-5 rounded-main">
          <div className="shadow-lg"></div>
        </SwiperSlide>
        <div className="control-btn relative z-30 hidden lg:flex justify-between items-center">
          <button
            onClick={() => {
              swiperInstance.slidePrev();
            }}
            className="cursor-pointer swiper-button-prev swiper-button"
          >
            <FaRegArrowAltCircleLeft/>
          </button>
          <button
            onClick={() => {
              swiperInstance.slideNext();
            }}
            className="cursor-pointer swiper-button-next swiper-button"
          >
            <FaRegArrowAltCircleRight/>
          </button>
        </div>
      </Swiper>
    </div>
  );
}
