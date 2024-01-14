import { useSelector } from "react-redux";
import ExtraDataContainer from "./ExtraDataContainer";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
const ContactInfo = () => {
  const userData = useSelector((state) => state.userData.userData);

  return (
    <ExtraDataContainer className={"md:w-5/12 flex flex-col"}>
      <h3 className="font-bold text-xl">Contact info</h3>
      <div className="space-y-5 h-full flex flex-col justify-center">
        <p className=" flex items-center gap-2 text-xl">
          <LocalPhoneIcon className="text-3xl text-lightBlue" /> <span>-</span>{" "}
          <span>{userData?.phoneNumber}</span>
        </p>
        <p className="flex items-center gap-2 text-xl">
          <EmailIcon className="text-3xl text-lightBlue" />
          <span>-</span>{" "}
          <span className="break-words break-all	"> {userData?.email}</span>
        </p>
      </div>
    </ExtraDataContainer>
  );
};
export default ContactInfo;
