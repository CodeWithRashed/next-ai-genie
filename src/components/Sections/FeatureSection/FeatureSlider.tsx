"use client";
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";

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
import Link from "next/link";
let swiperInstance: any;

export default function FeatureSlider() {
  const servicesData = {
    services: [
      {
        name: "Image Generation",
        description: "Converts textual descriptions or prompts into images.",
        icon: "https://i.ibb.co/cXwCXTr/feature-icon5.png",
      },
      {
        name: "Text-to-Audio",
        description: "Converts text into spoken audio files in ease.",
        icon: "https://i.ibb.co/bKQRT5W/feature-icon4.png",
      },
      {
        name: "AI Assistant",
        description:
          "Provides assistance and performs tasks based on user input.",
        icon: "https://i.ibb.co/JBvC62X/feature-icon.png",
      },
      {
        name: "Code Assistant",
        description: "Assists developers in writing and understanding code.",
        icon: "https://i.ibb.co/f9dF9cs/feature-icon3.png",
      },
      {
        name: "English Helper",
        description:
          "Assists in language learning, grammar, and Translation",
        icon: "https://i.ibb.co/GPnhdrF/feature-icon2.png",
      },
      {
        name: "Article Summarizer",
        description:
          "Summarizes lengthy articles or documents into concise versions.",
        icon: "https://i.ibb.co/xmchZ4t/feature-icon1.png",
      },
    ],
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any): any {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="py-10">
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
        {servicesData.services.map((service, index) => (
          <SwiperSlide key={index} className="shadow-2xl mx-5 rounded-main p-8">
            <div className="card-container flex flex-col justify-between">
              {/* card image */}
              <div className="image h-20 w-20 mx-auto">
                <Image
                  width={80}
                  height={80}
                  src={service.icon}
                  alt="feature icon"
                  className="object-cover"
                />
              </div>

              {/* card content */}
              <div className="content my-8 space-y-3">
                <h1 className="text-2xl text-color-title font-bold">
                  {service.name}
                </h1>
                <p className="text-sm text-color-subtitle">
                  {service.description}{" "}
                </p>
              </div>

              {/* card cta */}
              <div className="cta">
                <Link
                  href="/dashboard"
                  className="bg-color-primary hover:bg-color-primary-dark px-5 py-2 rounded-main text-white"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="control-btn relative z-30 hidden lg:flex justify-between items-center">
          <button
            onClick={() => {
              swiperInstance.slidePrev();
            }}
            className="cursor-pointer swiper-button-prev swiper-button"
          >
            <FaRegArrowAltCircleLeft />
          </button>
          <button
            onClick={() => {
              swiperInstance.slideNext();
            }}
            className="cursor-pointer swiper-button-next swiper-button"
          >
            <FaRegArrowAltCircleRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
}
