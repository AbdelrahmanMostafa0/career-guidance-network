import PojectCard from "./PojectCard";
import ExtraDataContainer from "../extraData/ExtraDataContainer";
import ProjectCardSkelaton from "./ProjectCardSkelaton";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Modal from "@/shared/Modal";
import AddSkillForm from "../editForms/skills/AddSkillForm";
import AddProjectForm from "../editForms/pojects/AddProjectForm";
import { useSelector } from "react-redux";
const Projects = () => {
  const projects = useSelector((state) => state.projects.userProjects.projects);

  return (
    <ExtraDataContainer>
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-xl  ">Projects</h3>
        {projects && projects.length > 0 && (
          <Modal
            className={"overflow-auto"}
            title={"Add Project "}
            openBtn={<AddCircleOutlineIcon className="text-2xl" />}
          >
            <AddProjectForm />
          </Modal>
        )}
      </div>{" "}
      {projects && projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-8 pb-3    ">
          {projects.map((project, index) => (
            <PojectCard project={project} key={index} />
            // <ProjectCardSkelaton key={index} />
          ))}
        </div>
      ) : (
        <div className="min-h-[200px] grid place-content-center">
          <Modal
            className={"overflow-auto"}
            title={"Add Project "}
            openBtn={<AddCircleOutlineIcon className="text-5xl" />}
          >
            <AddProjectForm />
          </Modal>
        </div>
      )}
    </ExtraDataContainer>
  );
};
export default Projects;
