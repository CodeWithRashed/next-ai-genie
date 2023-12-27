"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";
import { signOut } from "next-auth/react";
export const MobileDropdownMenu = ({ user }: any) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div id="mobile-menu">
      <button
        onClick={toggleMobileMenu}
        className={`border border-color-subtitle text-color-title p-2 rounded-full active:scale-105`}
      >
        <CiMenuFries />
      </button>
      {isMobileMenuOpen && (
        <div
          onClick={toggleMobileMenu}
          className="absolute right-0 bg-white p-5"
        >
          <ul className="flex flex-col w-full justify-center items-center gap-4 text-color-subtitle font-bold">
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <Link
                href="/"
                className={`text-color-primary text-lg font-normal `}
              >
                Home
              </Link>
            </li>
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <Link
                href="#pricing"
                className={`text-color-primary text-lg font-normal`}
              >
                Pricing
              </Link>
            </li>
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <Link
                href="#testimonials"
                className={`text-color-primary text-lg font-normal`}
              >
                Testimonials
              </Link>
            </li>
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <Link
                href="#contact"
                className={`text-color-primary text-lg font-normal`}
              >
                Contact
              </Link>
            </li>
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              {!user && (
                <Link
                  href="/login"
                  className={`text-color-primary text-lg font-normal`}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const ProfileDropdownMenu = () => {
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
          src="https://i.ibb.co/sRJYQrx/profile-pic-2.png"
          alt="user image"
          className="rounded-full object-cover"
        />
      </button>
      {isProfileMenuOpen && (
        <div
          onClick={toggleProfileMenu}
          className="absolute right-0 bg-white p-5 mr-5 mt-5"
        >
          <ul className="flex flex-col w-full justify-center items-center gap-4 text-color-subtitle font-bold">
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <Link
                href="/"
                className={`text-color-primary text-lg font-normal `}
              >
                Home
              </Link>
            </li>
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <Link
                href="#pricing"
                className={`text-color-primary text-lg font-normal`}
              >
                Pricing
              </Link>
            </li>
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <Link
                href="#testimonials"
                className={`text-color-primary text-lg font-normal`}
              >
                Testimonials
              </Link>
            </li>
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <Link
                href="#Contact"
                className={`text-color-primary text-lg font-normal`}
              >
                Contact
              </Link>
            </li>
            <li className="flex flex-col hover:bg-color-primary-light w-full p-2">
              <button
                onClick={() => {
                  signOut();
                }}
                className={`text-color-primary text-lg font-normal`}
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
