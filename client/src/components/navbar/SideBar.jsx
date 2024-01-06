import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { useSelector } from "react-redux";

const SideBar = ({ openBtn }) => {
  const userData = useSelector((state) => state.userData.userData);

  return (
    <Sheet>
      <SheetTrigger>{openBtn}</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          {userData && (
            <SheetTitle className="text-start ">
              <div className="text-2xl flex  gap-2">
                <Link href={"/profile"}>
                  {" "}
                  <img
                    src={userData.profileImgUrl || "/avatar.jpg"}
                    className="w-12 rounded-full h-12 object-cover"
                    alt=""
                  />
                </Link>

                <div className="mt-2">
                  <Link href={"/profile"}>
                    <p className="text-2xl capitalize">
                      {" "}
                      {userData?.firstName + " " + userData?.lastName}
                    </p>
                  </Link>
                  <p className="text-sm text-slate-500">
                    {userData?.title?.name}
                  </p>
                </div>
              </div>
            </SheetTitle>
          )}
        </SheetHeader>
        <div className="space-y-4 my-5 grid text-center">
          <Link href={"/"} className="w-full py-2 border rounded-full text-xl">
            Home
          </Link>
          <Link href={"/"} className="w-full py-2 border rounded-full text-xl">
            Roadmaps
          </Link>
          <Link href={"/"} className="w-full py-2 border rounded-full text-xl">
            About
          </Link>
          <Link href={"/"} className="w-full py-2 border rounded-full text-xl">
            Contact Us
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default SideBar;
