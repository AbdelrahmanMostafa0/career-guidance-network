import { useEffect } from "react";
import ExtraData from "./ExtraData";
import PersonalInfo from "./PersonalInfo";
import Projects from "./projects/Projects";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ChaoticOrbit } from "@uiball/loaders";
import { getSkills } from "@/redux/features/user/SkillsSlice";
import { getProjects } from "@/redux/features/user/projectsSlice";

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
    dispatch(getProjects());
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="md:w-[90%] max-w-[1800px] mx-[10px] md:mx-auto   min-h-[100dvh] py-5 space-y-4  gap-4  ">
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
