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
    <nav className="px-5 md:px-16 py-5 flex items-center border-b justify-between">
      {/* logo and links */}

      <div className="flex items-center gap-10">
        {/* logo */}
        <div className="flex gap-2 items-center">
          <img src="/logo.svg" className="w-[50px] sm:w-[65px]" alt="" />
          <p className="text-3xl text-lighterGreen font-bold tracking-wider">
            CGN
          </p>
        </div>
        {/* nav Links */}
        <div className="md:flex items-center gap-5 text-xl hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Roadmaps</Link>
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
      {showMenu && <MobileMenu toggleMobMenu={toggleMobMenu} />}
    </nav>
  );
};

export default Navbar;
