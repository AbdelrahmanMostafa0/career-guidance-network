import Link from "next/link";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [signedIn, setSignedIn] = useState(true);

  const toggleMobMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  return (
    <nav className="px-5  py-5  border-b ">
      {/* logo and links */}
      <div className="md:w-[90%] flex items-center justify-between mx-auto">
        <div className="flex items-center gap-10">
          {/* logo */}
          <Link href={"/"} className="flex gap-2 items-center">
            <img src="/logo.svg" className="w-[50px] sm:w-[65px]" alt="" />
            <p className="text-3xl text-lighterGreen font-bold tracking-wider">
              CGN
            </p>
          </Link>
          {/* nav Links */}
          <div className="md:flex items-end gap-10 text-xl hidden font-medium tracking-widest">
            <Link className=" hover:text-lightGreen duration-200" href={"/"}>
              Home
            </Link>
            <Link
              className=" hover:text-lightGreen duration-200"
              href={"/about"}
            >
              About
            </Link>
            <Link className=" hover:text-lightGreen duration-200" href={"/"}>
              Roadmaps
            </Link>
          </div>
        </div>
        {/* Sign up sign in */}
        <div className="flex items-center gap-3">
          <Link
            href={"/signin"}
            className="border-2 border-lighterGreen px-6 py-1 md:text-lg font-bold text-lighterGreen duration-150 hover:bg-lighterGreen hover:text-white rounded-full"
          >
            Sign in
          </Link>
          <Link
            href={"/signup"}
            className="border-2 md:block hidden border-lighterGreen px-6 py-1 text-lg font-bold hover:bg-transparent duration-150 hover:text-lighterGreen bg-lighterGreen text-white rounded-full"
          >
            Sign Up
          </Link>
          <button className="block md:hidden" onClick={toggleMobMenu}>
            <MenuOutlinedIcon />
          </button>
        </div>
      </div>
      {showMenu && <MobileMenu toggleMobMenu={toggleMobMenu} />}
    </nav>
  );
};

export default Navbar;
