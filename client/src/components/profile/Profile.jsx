import { useEffect } from "react";
import ExtraData from "./ExtraData";
import PersonalInfo from "./PersonalInfo";
import Projects from "./Projects";
import UserInfo from "./profileCompnents/UserInfo";
import UserLinks from "./profileCompnents/UserLinks";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { DotWave } from "@uiball/loaders";
import { LeapFrog } from "@uiball/loaders";
import { ThreeBody } from "@uiball/loaders";
import { ChaoticOrbit } from "@uiball/loaders";
import { getSkills } from "@/redux/features/user/SkillsSlice";

const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userData);
  // console;
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
    dispatch(getSkills());
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="md:w-[90%]  mx-[10px] md:mx-auto   min-h-[100dvh] py-5 space-y-4  gap-4  ">
        {/* <UserInfo className="col-span-1" />
      <UserLinks className="col-span-2" /> */}
        {userData ? (
          <>
            <PersonalInfo />
            <ExtraData />
            <Projects />
          </>
        ) : (
          <div className="grid place-content-center h-[80dvh]">
            {" "}
            <ChaoticOrbit size={60} color="#13B194" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
