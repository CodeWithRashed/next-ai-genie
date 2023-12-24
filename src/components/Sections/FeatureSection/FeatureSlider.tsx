"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./FeatureSlider.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
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
        <SwiperSlide className="shadow-2xl mx-5 rounded-main">
          <div className="border-2 border-red-300"></div>
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
            Left
          </button>
          <button
            onClick={() => {
              swiperInstance.slideNext();
            }}
            className="cursor-pointer swiper-button-next swiper-button"
          >
            Left
          </button>
        </div>
      </Swiper>
    </div>
  );
}
