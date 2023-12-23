import HomeBanner from "@/components/HomeBanner/HomeBanner";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <header className="header bg-[#F9FDFF]">
      <div className="max-w-[1240px] px-5 mx-auto">

      <Navbar></Navbar>
      <HomeBanner></HomeBanner>
      </div>
    </header>
  );
}
