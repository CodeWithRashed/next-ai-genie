import Link from "next/link";
import logo from "../../assets/logo.png";
import user from "../../assets/user1.jpg";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiMenu3Fill } from "react-icons/ri";
const Navbar = () => {
  const isActive = false;
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
          href="#Pricing"
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
          href="#Contact"
          className={`text-color-primary text-lg font-normal`}
        >
          Contact
        </Link>
      </li>
      <li className="flex flex-col">
        <Link
          href="/login"
          className={`text-color-primary text-lg font-normal`}
        >
          Login
        </Link>
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
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full hover:text-color-primary focus:text-color-primary p-2">
             <RiMenu3Fill className="text-xl"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex bg-white mt-5 mr-2 w-52 lg:flex-row flex-col justify-center items-center gap-4 text-color-subtitle  font-bold">
              <DropdownMenuItem className="hover:bg-color-primary-light w-full">
                <Link
                  href="/"
                  className={`text-color-primary text-lg font-normal `}
                >
                  Home
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-color-primary-light w-full">
                <Link
                  href="#Pricing"
                  className={`text-color-primary text-lg font-normal`}
                >
                  Pricing
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="hover:bg-color-primary-light w-full">
                <Link
                  href="#testimonials"
                  className={`text-color-primary text-lg font-normal`}
                >
                  Testimonials
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-color-primary-light w-full">
                <Link
                  href="#Contact"
                  className={`text-color-primary text-lg font-normal`}
                >
                  Contact
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-color-primary-light w-full">
                <Link
                  href="/login"
                  className={`text-color-primary text-lg font-normal`}
                >
                  Login
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Mobile Nav End */}

        {/* CTA BUTTONS */}
        <div className="cta-buttons flex gap-2">
          <button className="lg:block hidden hover:bg-color-primary-light text-color-title  border-2  border-color-primary px-5 py-2 rounded-main transition-all ease-in-out">
            Sign In
          </button>
          <button className="lg:block hidden bg-color-primary hover:bg-color-primary-dark px-5 py-2 rounded-main text-white">
            Free Trial
          </button>
        </div>

        <div className="active-user flex justify-center items-center">
          <DropdownMenu>
            <DropdownMenuTrigger className="rounded-full overflow-hidden border-2 border-color-primary">
              <div>
                <Image
                  height={40}
                  width={40}
                  className="object-cover"
                  src={user}
                  alt="ai genie logo"
                />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-2 mt-5">
              <DropdownMenuItem className="hover:bg-color-primary-light">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-color-primary-light">
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-color-primary-light">
                Team
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-color-primary-light">
                Subscription
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
