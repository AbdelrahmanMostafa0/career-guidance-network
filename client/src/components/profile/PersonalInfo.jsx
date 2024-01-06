import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
import { useSelector } from "react-redux";
const PersonalInfo = () => {
  const userData = useSelector((state) => state.userData.userData);
  const projects = useSelector((state) => state.projects.userProjects.projects);

  return (
    <section className="bg-white p-10 rounded-xl flex justify-center items-center flex-col relative space-y-3">
      <Link href="/settings" className="absolute top-10 right-10 ">
        <SettingsOutlinedIcon className="text-3xl" />
      </Link>
      <img
        src={userData?.profileImgUrl || "/avatar.jpg"}
        alt="user-image"
        className="max-h-[150px] rounded-full object-cover"
      />
      <h1 className="capitalize font-semibold text-2xl tracking-wide text-darkBlue text-center">
        {userData?.firstName + " " + userData?.lastName}
        {""}
      </h1>
      <p className="text-lightBlue">{userData?.title.name}</p>
      <div className="flex  justify-center items-center gap-4">
        {userData?.linkedinLink && (
          <a
            href={userData?.linkedin}
            title={userData?.linkedin}
            className="flex gap-2 items-end"
            target="_blank"
          >
            <LinkedInIcon />
            <p>LinkedIn</p>
          </a>
        )}
        {userData?.githubLink && (
          <a
            href={userData?.github}
            target="_blank"
            title={userData?.github}
            className="flex gap-2 items-end"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}
        <div className="flex items-center text-center gap-2 flex-col md:flex-row ">
          <p className="text-xl font-semibold">{projects?.length}</p>
          {/* <LightbulbOutlinedIcon /> */}

          <p> Projects</p>
        </div>
      </div>
    </section>
  );
};
export default PersonalInfo;
