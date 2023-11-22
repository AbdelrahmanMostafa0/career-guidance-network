import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Link from "next/link";
const MobileMenu = ({ toggleMobMenu }) => {
  return (
    <div className="h-screen absolute top-0 px-10 right-0 w-[80vw] bg-darkBlue z-50">
      <button
        onClick={() => {
          toggleMobMenu();
        }}
        className="-mx-3 mt-2 text-white"
      >
        <ClearOutlinedIcon />
      </button>
      <div className="flex justify-center items-center mt-10 gap-5 flex-col">
        <Link
          href={"/profile"}
          className="bg-white text-center p-2 rounded-full w-full text-darkBlue font-bold"
        >
          Home
        </Link>
        <Link
          href={"/profile"}
          className="bg-white text-center p-2 rounded-full w-full text-darkBlue font-bold"
        >
          Profile
        </Link>
        <Link
          href={"/"}
          className="bg-white text-center p-2 rounded-full w-full text-darkBlue font-bold"
        >
          Home
        </Link>
        <Link
          href={"/about"}
          className="bg-white text-center p-2 rounded-full w-full text-darkBlue font-bold"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="bg-white text-center p-2 rounded-full w-full text-darkBlue font-bold"
        >
          Roadmaps
        </Link>
      </div>
    </div>
  );
};
export default MobileMenu;
