import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PersonIcon from "@mui/icons-material/Person";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Link from "next/link";
const PersonalInfo = () => {
  const userData = {
    name: "abdelrahman mostafa",
    title: "Fornt End Developer",
    linkedin: "https://www.linkedin.com/in/abdelrahmanmostafa0/",
    github: "https://github.com/abdelrahmanmostafa0",
    followerCount: 250,
    badgesCount: 50,
    projrctsCount: 8,
  };
  return (
    <section className="bg-white p-10 rounded-xl flex justify-center items-center flex-col relative space-y-3">
      <Link href="/settings" className="absolute top-10 right-10 ">
        <SettingsOutlinedIcon className="text-3xl" />
      </Link>
      <img
        src="/user.jpg"
        alt="user-image"
        className="max-h-[150px] rounded-full object-cover"
      />
      <h1 className="capitalize font-semibold text-2xl tracking-wide text-darkBlue">
        {userData.name}
      </h1>
      <p className="text-lightBlue">{userData.title}</p>
      <div className="flex justify-center items-center gap-4">
        <a
          href={userData.linkedin}
          title={userData.linkedin}
          className="flex gap-2 items-end"
        >
          <LinkedInIcon />
          <p>LinkedIn</p>
        </a>
        <a
          href={userData.github}
          target="_blank"
          title={userData.github}
          className="flex gap-2 items-end"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
      <div className="flex justify-center items-center font-medium gap-4">
        <div className="flex items-start ">
          <PersonIcon />
          <p>{userData.followerCount} Follower</p>
        </div>
        <div className="flex items-start ">
          <MilitaryTechIcon />
          <p>{userData.badgesCount} Badges</p>
        </div>
        <div className="flex items-start ">
          <LightbulbOutlinedIcon />
          <p>{userData.projrctsCount} Projects</p>
        </div>
      </div>
    </section>
  );
};
export default PersonalInfo;
