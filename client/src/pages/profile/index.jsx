import CompanyProfile from "@/company/profile/CompanyProfile";
import Profile from "@/components/profile/Profile";
import { useSelector } from "react-redux";

const index = () => {
  const userData = useSelector((state) => state.userData.userData);

  return (
    <div className="min-h-[95dvh]">
      {userData && userData?.isCompany ? <CompanyProfile /> : <Profile />}
    </div>
  );
};
export default index;
