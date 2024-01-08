import Link from "next/link";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MobileMenu from "./MobileMenu";
import { Notifications } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/redux/features/user/userProfileSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import UserMenu from "./UserMenu";
import SideBar from "./SideBar";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const toggleMobMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const toggleState = (setState) => {
    setState((prevState) => !prevState);
  };
  const toggleUserMenu = () => {
    setShowUserMenu((prevState) => !prevState);
  };
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     dispatch(getUserData());
  //   }
  // }, []);
  const userData = useSelector((state) => state.userData.userData);
  return (
    <nav className="px-5  py-5  border-b  bg-white z-50 sticky top-0">
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
              <div className="relative">
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
            openBtn={
              <span
                className="block md:hidden"
                onClick={() => {
                  // toggleState(setShowMenu)
                }}
              >
                <MenuOutlinedIcon className="text-3xl" />
              </span>
            }
          />
        </div>
      </div>
      {showMenu && <MobileMenu toggleMobMenu={toggleMobMenu} />}
    </nav>
  );
};

export default Navbar;
