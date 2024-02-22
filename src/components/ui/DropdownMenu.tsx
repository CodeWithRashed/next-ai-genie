"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
export const MobileDropdownMenu = () => {
  const { data: session } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("home");
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const closeMobileMenu = (e: any) => {
      // Check if the click is outside the profile menu
      if (!e.target.closest("#mobile-menu")) {
        setIsMobileMenuOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", closeMobileMenu);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeMobileMenu);
    };
  }, []);

  return (
    <div id="mobile-menu" className="z-[500]">
      <button
        onClick={toggleMobileMenu}
        className={`border border-color-subtitle text-color-title p-2 rounded-full active:scale-105`}
      >
        <CiMenuFries />
      </button>
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="absolute right-0 bg-white p-5 mr-5 mt-5 shadow-lg "
        >
          <ul className="flex lg:flex-row flex-col w-full justify-center items-center gap-4 text-color-subtitle  font-bold">
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
                    : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary"
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
                    : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary"
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
                    : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary"
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
                    : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary"
                }`}
                href="#contact"
              >
                Contact
              </Link>
            </li>
            {!session?.user && (
              <li className="flex flex-col items-center justify-center">
                <Link
                  onClick={() => {
                    setActiveMenu("login");
                  }}
                  className={`${
                    activeMenu === "login"
                      ? "text-color-primary text-lg font-normal"
                      : "text-color-title text-lg font-normal hover:scale-105 hover:text-color-primary"
                  }`}
                  href="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export const ProfileDropdownMenu = () => {
  const { data: session } = useSession();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };
  useEffect(() => {
    const closeProfileMenu = (e: any) => {
      // Check if the click is outside the profile menu
      if (!e.target.closest("#profile-menu")) {
        setIsProfileMenuOpen(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("click", closeProfileMenu);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeProfileMenu);
    };
  }, []);

  return (
    <div id="profile-menu">
      <button
        onClick={toggleProfileMenu}
        className={`border-2 h-10 w-10 border-color-subtitle text-color-title rounded-full overflow-hidden flex justify-center items-center active:scale-105`}
      >
        <Image
          width={40}
          height={40}
          src={session?.user?.image}
          alt="user image"
          className="rounded-full object-cover"
        />
      </button>
      {isProfileMenuOpen && (
        <div
          onClick={toggleProfileMenu}
          className="absolute right-0 bg-white p-5 mr-5 mt-5"
        >
          <ul className="flex flex-col w-full justify-center items-center gap-2 text-color-subtitle font-bold ">
            <li className="flex">
              <Link
                href="/dashboard"
                className={`text-color-primary hover:bg-color-primary-light w-full p-2 rounded-main`}
              >
                Dashboard
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/dashboard/profile"
                className={`text-color-primary hover:bg-color-primary-light w-full p-2 rounded-main`}
              >
                Profile
              </Link>
            </li>
            <li className="flex">
              <Link
                href="/dashboard/support"
                className={`text-color-primary hover:bg-color-primary-light w-full p-2 rounded-main`}
              >
                Support
              </Link>
            </li>

            <li className="flex  justify-center items-center  w-full p-2">
              <button
                onClick={() => {
                  toast.success('Logout Successfully!');
                  signOut();
                }}
                className="bg-color-primary text-white hover:bg-color-primary-dark p-2 rounded-main"
              >
                SignOut
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
