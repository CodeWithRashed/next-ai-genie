import Link from "next/link";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import { MobileDropdownMenu, ProfileDropdownMenu } from "../../ui/DropdownMenu";
// import { useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);
  console.log("session data", session);
  //Menu Items Desktop
  const menuItems = (
    <ul className="flex lg:flex-row flex-col w-full justify-center items-center gap-4 text-color-subtitle  font-bold">
      <li className="flex flex-col">
        <Link href="/" className={`text-color-primary text-lg font-normal`}>
          Home
        </Link>
      </li>
      <li className="flex flex-col items-center justify-center">
        <Link
          href="#pricing"
          className={`text-color-primary text-lg font-normal`}
        >
          Pricing
        </Link>
      </li>

      <li className="flex flex-col items-center justify-center">
        <Link
          href="#testimonials"
          className={`text-color-primary text-lg font-normal`}
        >
          Testimonials
        </Link>
      </li>
      <li className="flex flex-col">
        <Link
          href="#contact"
          className={`text-color-primary text-lg font-normal`}
        >
          Contact
        </Link>
      </li>
      <li className="flex flex-col">
        {!session?.user && (
          <Link
            href="/login"
            className={`text-color-primary text-lg font-normal`}
          >
            Login
          </Link>
        )}
      </li>
    </ul>
  );

  return (
    <div className="sticky grid grid-cols-12 w-full justify-center items-center py-3 bg-transparent">
      {/* Nav Start */}
      <div className="col-span-8 lg:col-span-4 ">
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
      <div className="hidden lg:flex col-span-4 ">{menuItems}</div>

      {/* Nav End */}

      <div className="col-span-4 flex justify-end items-center gap-3">
        {/* Mobile Nav Start */}
        <div className="lg:hidden">
          <MobileDropdownMenu user={session?.user}/>
        </div>
        {/* Mobile Nav End */}

        {/* CTA BUTTONS */}
        {!session?.user && (
          <div className="cta-buttons flex gap-2">
            <button className="lg:block hidden hover:bg-color-primary-light text-color-title  border-2  border-color-primary px-5 py-2 rounded-main transition-all ease-in-out">
              Sign In
            </button>
            <button className="lg:block hidden bg-color-primary hover:bg-color-primary-dark px-5 py-2 rounded-main text-white">
              Free Trial
            </button>
          </div>
        )}

        <div className="active-user flex justify-center items-center">
          {session?.user && <ProfileDropdownMenu user={session?.user} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
