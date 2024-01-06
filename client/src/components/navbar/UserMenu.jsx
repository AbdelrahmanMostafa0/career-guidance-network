import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Link from "next/link";
import { logoutUser } from "@/redux/features/user/userProfileSlice";
import { useDispatch, useSelector } from "react-redux";

const UserMenu = ({ openBtn, title }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userData);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:border-none outline-none">
        {openBtn}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {userData.isCompany
            ? userData.name
            : userData.firstName + " " + userData.lastName}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/profile"} className="w-full">
            <AccountCircleIcon /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={"/settings"} className="w-full">
            <SettingsIcon /> Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button
            className="w-full text-red-400 text-start"
            onClick={() => dispatch(logoutUser())}
          >
            <LogoutIcon /> Log out
          </button>
        </DropdownMenuItem>
        {/* <DropdownMenuItem>Subscription</DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserMenu;
