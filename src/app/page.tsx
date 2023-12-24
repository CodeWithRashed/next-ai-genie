import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Sections/Contact/Contact";
import FeatureSlider from "@/components/Sections/FeatureSection/FeatureSlider";
import PricingSection from "@/components/Sections/PricingSection/PricingSection";
import FeedbackSection from "@/components/Sections/ReviewSection/FeedbackSection";
import WhyChooseUs from "@/components/Sections/WhyChooseUs/WhyChooseUs";
import SectionTitle from "@/components/Shared/SectionTitle";

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
    <h3 className="text-lg text-color-subtitle text-center">Why AI Genie</h3>
      <SectionTitle title="Why Choose Us" subtitle=""></SectionTitle>
     
      <WhyChooseUs></WhyChooseUs>
    </section>

    <section id="features" className="my-20 bg-[#F9FDFF] py-20">
    <div  className=" max-w-[1240px] px-5 mx-auto">
      <SectionTitle title="Features" subtitle="Get all features in one place"></SectionTitle>
      <FeatureSlider></FeatureSlider>

    </div>
    </section>

    <section id="testimonials" className="my-20 bg-[#FFF] py-20">
    <div  className=" max-w-[1240px] px-5 mx-auto">
      <SectionTitle title="Feedback" subtitle="See what other people say"></SectionTitle>
      <FeedbackSection></FeedbackSection>
    </div>
    </section>

    <section id="pricing" className="my-20 bg-[#FFF] py-20">
    <div  className=" max-w-[1240px] px-5 mx-auto">
      <SectionTitle title="Pricing" subtitle="Choose the best package for you"></SectionTitle>
      <PricingSection></PricingSection>
    </div>
    </section>

    <section id="contact" className="my-20 bg-[#F9FDFF] py-20">
    <div  className=" max-w-[1240px] px-5 mx-auto">
      <Contact/>
    </div>
    </section>
    </main>
  );
}
