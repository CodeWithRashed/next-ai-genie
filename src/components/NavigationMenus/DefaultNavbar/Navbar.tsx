"use client";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { MobileDropdownMenu, ProfileDropdownMenu } from "../../ui/DropdownMenu";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("home");
  const { data: session } = useSession();
  console.log("session data", session);
  //Menu Items Desktop
  const menuItems = (
    <ul className="flex lg:flex-row flex-col w-full justify-center items-center gap-4 text-color-subtitle  font-bold transition-all ease-in-out">
      <li className="flex flex-col">
        <Link
          onClick={() => {
            setActiveMenu("home");
          }}
          href="/"
          className={`${
            activeMenu === "home"
              ? "text-color-primary text-lg font-normal"
              : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary"
          }`}
        >
          Home
        </Link>
      </li>
      <li className="flex flex-col items-center justify-center">
        <Link
          onClick={() => {
            setActiveMenu("features");
          }}
          className={`${
            activeMenu === "features"
              ? "text-color-primary text-lg font-normal"
              : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary transition-all ease-in-out"
          }`}
          href="#features"
        >
          Features
        </Link>
      </li>
      <li className="flex flex-col items-center justify-center">
        <Link
          onClick={() => {
            setActiveMenu("testimonials");
          }}
          className={`${
            activeMenu === "testimonials"
              ? "text-color-primary text-lg font-normal"
              : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary transition-all ease-in-out"
          }`}
          href="#testimonials"
        >
          Testimonials
        </Link>
      </li>
      <li className="flex flex-col items-center justify-center">
        <Link
          href="#pricing"
          onClick={() => {
            setActiveMenu("pricing");
          }}
          className={`${
            activeMenu === "pricing"
              ? "text-color-primary text-lg font-normal"
              : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary transition-all ease-in-out"
          }`}
        >
          Pricing
        </Link>
      </li>

      <li className="flex flex-col items-center justify-center">
        <Link
          onClick={() => {
            setActiveMenu("contact");
          }}
          className={`${
            activeMenu === "contact"
              ? "text-color-primary text-lg font-normal"
              : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary transition-all ease-in-out"
          }`}
          href="#contact"
        >
          Contact
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="bg-[#FFF] mx-auto shadow">
      <div className="fixed w-[90%] md:w-[95%] lg:w-[1200px] flex justify-between items-center py-3 backdrop-blur-3xl z-[500]">
        {/* Nav Start */}
        <div className="logo">
          <Link href="/">
            <Image
              height={100}
              width={150}
              className="object-cover"
              src={logo}
              alt="ai genie logo"
            />
          </Link>
        </div>

        {/* Nav Center */}
        <div className="hidden lg:flex">{menuItems}</div>

        {/* Nav End */}

        <div className="flex justify-end items-center gap-3">
          {/* Mobile Nav Start */}
          <div className="lg:hidden z-[500]">
            <MobileDropdownMenu />
          </div>
          {/* Mobile Nav End */}

          {/* CTA BUTTONS */}
          <div>
            {!session?.user && (
              <div className="cta-buttons flex gap-2">
                <button
                  onClick={() => {
                    router.push("/login");
                  }}
                  className="lg:block hidden hover:bg-color-primary-light text-color-title  border-2  border-color-primary px-5 py-2 rounded-main transition-all ease-in-out"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    router.push("/register");
                  }}
                  className="lg:block hidden bg-color-primary hover:bg-color-primary-dark px-5 py-2 rounded-main text-white"
                >
                  Free Trial
                </button>
              </div>
            )}
          </div>

          <div className="active-user flex justify-center items-center">
            {session?.user && <ProfileDropdownMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
