import { IoLogoFacebook, IoLogoGithub, IoLogoYoutube } from "react-icons/io5";
import Logo from "../../assets/logo-dark-bg.png";
import Image from "next/image";
import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="w-full p-8">
      {/* Footer Container */}
      <div className="footer-container flex flex-col">
        {/* Footer Top */}
        <div className="footer-top flex justify-between">
          <div className="flex lg:justify-start justify-center">
            <Image
              width={160}
              height={100}
              src={Logo}
              alt="logo-ct"
              className="w-48"
            />
          </div>
          <ul className="flex justify-center gap-5 text-xl text-color-title ">
            <li className="bg-white p-2 rounded-main h-fit  hover:text-color-primary group transition-all ease-in-out">
              <IoLogoGithub className="group-hover:scale-105"></IoLogoGithub>
            </li>
            <li className="bg-white p-2 rounded-main h-fit  hover:text-color-primary">
              <IoLogoYoutube className="group-hover:scale-105"></IoLogoYoutube>
            </li>
            <li className="bg-white p-2 rounded-main h-fit  hover:text-color-primary">
              <IoLogoFacebook className="group-hover:scale-105"></IoLogoFacebook>
            </li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom flex justify-between text-white mt-8">
          <nav>
            <ul className="flex gap-4 text-white">
              <li className="flex flex-col">
                <Link href="/">Home</Link>
              </li>
              <li className="flex flex-col items-center justify-center">
                <Link href="#pricing">Pricing</Link>
              </li>

              <li className="flex flex-col items-center justify-center">
                <Link href="#testimonials">Testimonials</Link>
              </li>
              <li className="flex flex-col">
                <Link href="#contact">Contact</Link>
              </li>
              <li className="flex flex-col">
                <Link href="/login">Login</Link>
              </li>
            </ul>
          </nav>
          {/* Copyright */}
          <p> &copy; 2024 AI Genie</p>
        </div>
      </div>
    </footer>
  );
}
