import PojectCard from "./PojectCard";
import ExtraDataContainer from "../extraData/ExtraDataContainer";
import ProjectCardSkelaton from "./ProjectCardSkelaton";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import Modal from "@/shared/Modal";
import AddSkillForm from "../editForms/skills/AddSkillForm";
import AddProjectForm from "../editForms/pojects/AddProjectForm";
import { useSelector } from "react-redux";
const Projects = () => {
  // const projects = [
  //   {
  //     img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Discord CLone",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
  //     tech: [],
  //     github: "https://github.com/AbdelrahmanMostafa0",
  //     liveDemo: "https://github.com/AbdelrahmanMostafa0",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Discord CLone",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
  //     tech: [],
  //     github: "https://github.com/AbdelrahmanMostafa0",
  //     liveDemo: "https://github.com/AbdelrahmanMostafa0",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Discord CLone",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
  //     tech: [],
  //     github: "https://github.com/AbdelrahmanMostafa0",
  //     liveDemo: "https://github.com/AbdelrahmanMostafa0",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Discord CLone",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
  //     tech: [],
  //     github: "https://github.com/AbdelrahmanMostafa0",
  //     liveDemo: "https://github.com/AbdelrahmanMostafa0",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Discord CLone",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
  //     tech: [],
  //     github: "https://github.com/AbdelrahmanMostafa0",
  //     liveDemo: "https://github.com/AbdelrahmanMostafa0",
  //   },
  //   {
  //     img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Discord CLone",
  //     description:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
  //     tech: [],
  //     github: "https://github.com/AbdelrahmanMostafa0",
  //     liveDemo: "https://github.com/AbdelrahmanMostafa0",
  //   },
  // ];
  const projects = useSelector((state) => state.projects.userProjects.projects);
  console.log(projects);
  return (
    <ExtraDataContainer>
      <div>
        <h3 className="font-bold text-xl  mb-10">Projects</h3>
        <Modal
          title={"Add Project "}
          openBtn={
            <button className="absolute top-2  right-3">
              <BorderColorOutlinedIcon className="text-base" />
            </button>
          }
        >
          <AddProjectForm />
        </Modal>
      </div>{" "}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-10 pb-3    ">
        {projects.map((project, index) => (
          <PojectCard project={project} key={index} />
          // <ProjectCardSkelaton key={index} />
        ))}
      </div>
    </ExtraDataContainer>
  );
};
export default Projects;
