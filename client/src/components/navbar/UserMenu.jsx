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
import { useDispatch } from "react-redux";

const UserMenu = ({ openBtn, title }) => {
  const dispatch = useDispatch();
  return (
    // <Menubar>
    //   <MenubarMenu className="border-none border-transparent bg-transparent hover:bg-transparent">
    //     <MenubarTrigger className="border-none p-0 border-transparent">
    //       {openBtn}
    //     </MenubarTrigger>
    //     <MenubarContent>
    //       <MenubarItem>{title}</MenubarItem>
    //       <MenubarSeparator />

    //       <MenubarItem>
    //         {" "}
    //         <Link href={"/profile"} className="w-full">
    //           <AccountCircleIcon /> Profile
    //         </Link>
    //       </MenubarItem>

    //       <MenubarItem>
    //         {" "}
    //         <Link href={"/settings"} className="w-full">
    //           <SettingsIcon /> Settings
    //         </Link>
    //       </MenubarItem>
    //       <MenubarItem className="hover:bg-red-400">
    //         {" "}
    // <button
    //   className="w-full text-red-400 text-start"
    //   onClick={() => dispatch(logoutUser())}
    // >
    //   <LogoutIcon /> Log out
    // </button>
    //       </MenubarItem>
    //     </MenubarContent>
    //   </MenubarMenu>
    // </Menubar>
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:border-none outline-none">
        {openBtn}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
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
