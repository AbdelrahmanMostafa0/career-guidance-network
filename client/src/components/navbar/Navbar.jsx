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
      {/* <button
        className="absolute top-0 left-0 text-xs "
        onClick={() => toggleState(setSignedIn)}
      >
        signin
      </button>
      <button
        className="absolute top-3 left-0 text-xs text-red-500"
        onClick={() => dispatch(logoutUser())}
      >
        logout
      </button> */}
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
                <button onClick={toggleUserMenu}>
                  <img
                    src={userData.profileImgUrl || "/avatar.jpg"}
                    className="w-12 rounded-full h-12 object-cover"
                    alt=""
                  />
                  {showUserMenu && (
                    <div className="bg-white drop-shadow-md fade-in rounded-lg w-52 border absolute -right-10 my-1 p-3 z-50">
                      <h3 className="font-bold text-start text-xl capitalize">
                        {userData.firstName + " " + userData.lastName}
                      </h3>
                      <Link
                        href={"/profile"}
                        className="p-1 rounded-lg bg-slate-200 my-1 line-clamp-1 "
                      >
                        <AccountCircleIcon /> Profile
                      </Link>
                      <Link
                        href={"/settings"}
                        className="p-1 rounded-lg bg-slate-200 my-1 line-clamp-1 "
                      >
                        <SettingsIcon /> Settings
                      </Link>
                      <button
                        onClick={() => dispatch(logoutUser())}
                        className="p-1 w-full rounded-lg bg-red-400 text-white my-1 line-clamp-1 "
                      >
                        <LogoutIcon /> Log out
                      </button>
                    </div>
                  )}
                </button>
              </div>
            </>
          )}

          <button
            className="block md:hidden"
            onClick={() => toggleState(setShowMenu)}
          >
            <MenuOutlinedIcon />
          </button>
        </div>
      </div>
      {showMenu && <MobileMenu toggleMobMenu={toggleMobMenu} />}
    </nav>
  );
};

export default Navbar;
