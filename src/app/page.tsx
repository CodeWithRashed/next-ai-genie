import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Navbar from "@/components/Navbar/Navbar";
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
    </main>
  );
}
