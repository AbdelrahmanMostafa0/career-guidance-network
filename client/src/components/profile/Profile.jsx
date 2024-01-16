import { useEffect, useState } from "react";
import ExtraData from "./ExtraData";
import PersonalInfo from "./PersonalInfo";
import Projects from "./projects/Projects";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LeapFrog } from "@uiball/loaders";
import { getSkills } from "@/redux/features/user/SkillsSlice";
import { getProjects } from "@/redux/features/user/projectsSlice";
import { getCertification } from "@/redux/features/user/certificationSlice";
import axios from "axios";
const Profile = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData.userData);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/");
    }
    dispatch(getSkills());
    dispatch(getProjects());
    dispatch(getCertification());
  }, []);
  const [img, setImg] = useState();
  const handleImg = async (e) => {
    // e.preventDefault();

    async () => {
      // console.log("project id", projectId);
      const profileData = new FormData();
      profileData.append("profileImgUrl", img);
      try {
        const response = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/edit/`,
          profileData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json", // Specify content type as JSON
            },
          }
        );
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    };
  };
  return (
    <div className="bg-gray-100">
      <div className="md:w-[90%] max-w-[1800px] mx-[10px] md:mx-auto   min-h-[100dvh] py-5 space-y-4  gap-4  ">
        {userData ? (
          <>
            {/* </form> */}
            <PersonalInfo />
            <ExtraData />
            <Projects />
          </>
        ) : (
          <div className="grid place-content-center h-[80dvh]">
            {" "}
            <LeapFrog size={60} color="#13B194" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
