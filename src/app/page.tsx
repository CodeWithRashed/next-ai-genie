import { FooterSection } from "@/components/Footer/Footer";
import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Navbar from "@/components/NavigationMenus/DefaultNavbar/Navbar";
import Contact from "@/components/Sections/Contact/Contact";
import FeatureSlider from "@/components/Sections/FeatureSection/FeatureSlider";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import FeedbackSection from "@/components/Sections/ReviewSection/FeedbackSection";
import Subscribe from "@/components/Sections/Subscribe/Subscribe";
import WhyChooseUs from "@/components/Sections/WhyChooseUs/WhyChooseUs";
import SectionTitle from "@/components/Shared/SectionTitle";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
         <header className="header bg-[#F9FDFF] mb-20" id="home">
        <div className="max-w-[1240px] px-5 mx-auto">
          <Navbar></Navbar>
          <HomeBanner></HomeBanner>
        </div>
      </header>
      <section id="whyChooseUs" className="my-20 max-w-[1240px] px-5 mx-auto">
        <div className="py-10">
          <h3 className="text-lg text-color-subtitle text-center">
            Why AI Genie
          </h3>
          <SectionTitle title="Why Us" subtitle=""></SectionTitle>
          <WhyChooseUs></WhyChooseUs>
        </div>
      </section>

      <section id="features" className="my-20 bg-[#F9FDFF]">
        <div className=" max-w-[1240px] px-5 mx-auto">
          <div className="py-10">
            <SectionTitle
              title="Features"
              subtitle="Get all features in one place"
            ></SectionTitle>
            <FeatureSlider></FeatureSlider>
          </div>
        </div>
      </section>

      <section id="testimonials" className="my-20 bg-[#FFF]">
        <div className=" max-w-[1240px] px-5 mx-auto">
          <div className="py-10">
            <SectionTitle
              title="Feedback"
              subtitle="See what other people say"
            ></SectionTitle>
            <FeedbackSection></FeedbackSection>
          </div>
        </div>
      </section>

      <section id="pricing" className="my-20 bg-[#FFF]">
        <div className=" max-w-[1240px] px-5 mx-auto">
          <div className="py-10">
            <SectionTitle
              title="Pricing"
              subtitle="Best package for you"
            ></SectionTitle>
            <PricingSection></PricingSection>
          </div>
        </div>
      </section>

      <section id="contact" className="my-20 bg-[#F9FDFF]">
        <div className=" max-w-[1240px] px-5 mx-auto">
          <div className="py-10">
            <Contact />
          </div>
        </div>
      </section>

      <section id="newsletter" className="my-20 bg-[#FFF]">
        <div className=" max-w-[1240px] px-5 mx-auto">
          <div className="py-10">
            <Subscribe />
          </div>
        </div>
      </section>

      <section id="footer" className="py-20 bg-color-primary">
        <div className=" max-w-[1240px] px-5 mx-auto">
          <FooterSection />
        </div>
      </section>
    </main>
  );
}
