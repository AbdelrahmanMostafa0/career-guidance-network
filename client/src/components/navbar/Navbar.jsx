import Link from "next/link";
import { useSelector } from "react-redux";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import UserMenu from "./UserMenu";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const userData = useSelector((state) => state.userData.userData);
  return (
    <nav className="px-5 py-3 sm:py-5  border-b  bg-white z-50 sticky top-0">
      {/* logo and links */}
      <div className="md:w-[90%] max-w-[1800px] flex gap-3 items-center justify-between mx-auto">
        <div className="flex items-center gap-10">
          {/* logo */}
          <Link href={"/"} className="flex gap-2 items-center">
            <img src="/logo.svg" className="w-[40px] sm:w-[65px]" alt="" />
            <p className="text-3xl text-darkBlue font-bold tracking-wider">
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
            <Link className=" hover:text-lightGreen duration-200" href={"/roadmaps"}>
              Roadmaps
            </Link>
          </div>
        </div>
        {/* Sign up sign in */}
        {userData && (
          <div className="hidden sm:block w-7/12 md:w-5/12">
            <SearchBar />
          </div>
        )}
        <div className="flex items-center gap-3">
          {!userData ? (
            <>
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
            </>
          ) : (
            <>
              <div className="relative w-fit">
                <UserMenu
                  title={userData.firstName + " " + userData.lastName}
                  openBtn={
                    <img
                      src={userData.profileImgUrl || "/avatar.jpg"}
                      className="w-12 rounded-full h-12 object-cover"
                      alt=""
                    />
                  }
                />
              </div>
            </>
          )}

          <SideBar
            openBtn={<MenuOutlinedIcon className="text-3xl md:hidden" />}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
