import ExtraData from "./ExtraData";
import PersonalInfo from "./PersonalInfo";
import UserInfo from "./profileCompnents/UserInfo";
import UserLinks from "./profileCompnents/UserLinks";

const Profile = () => {
  return (
    <div className="bg-gray-100">
      <div className="  mx-[50px] md:mx-[100px] min-h-[100dvh] py-10 space-y-4  gap-4  ">
        {/* <UserInfo className="col-span-1" />
      <UserLinks className="col-span-2" /> */}
        <PersonalInfo />
        <ExtraData />
      </div>
    </div>
  );
};
export default Profile;
