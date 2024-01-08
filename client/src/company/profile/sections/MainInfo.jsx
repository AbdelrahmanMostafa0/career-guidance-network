import { useSelector } from "react-redux";
import SectionContainer from "../SectionContainer";
import Link from "next/link";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const MainInfo = () => {
  const userData = useSelector((state) => state.userData.userData);

  return (
    <SectionContainer
      className={"flex flex-col py-10 gap-2 items-center justify-center"}
    >
      <Link href="/settings" className="absolute top-10 right-10 ">
        <SettingsOutlinedIcon className="text-3xl" />
      </Link>
      <img
        src={userData.imgUrl || "/avatar.jpg"}
        alt="user-image"
        className="max-h-[150px] rounded-full object-cover"
      />
      <h1 className="capitalize font-semibold text-2xl tracking-wide text-darkBlue text-center">
        {userData.name}
        {""}
      </h1>
    </SectionContainer>
  );
};
export default MainInfo;
