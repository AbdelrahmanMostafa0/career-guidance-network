import UserInfo from "./profileCompnents/UserInfo";
import UserLinks from "./profileCompnents/UserLinks";

const Profile = () => {
  return (
    <div className="container mx-auto md:grid md:grid-cols-3 min-h-[95dvh] py-10 space-y-4 md:space-y-0 gap-4">
      <UserInfo className="col-span-1" />
      <UserLinks className="col-span-2" />
    </div>
  );
};
export default Profile;
