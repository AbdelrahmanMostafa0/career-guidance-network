import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Modal from "@/shared/Modal";
import AddSkillForm from "@/components/profile/editForms/skills/AddSkillForm";
import { useSelector } from "react-redux";
import ExtraDataContainer from "./ExtraDataContainer";
const Skills = () => {
  const userData = useSelector((state) => state.userData.userData);
  return (
    <ExtraDataContainer>
      <div className="flex items-start justify-between mb-5">
        <h3 className="font-bold text-xl ">Skills</h3>

        {!!userData?.skills.length > 0 && (
          <Modal
            title={"Edit Skill"}
            openBtn={<BorderColorOutlinedIcon className="text-lg" />}
          >
            {" "}
            <AddSkillForm />
          </Modal>
        )}
      </div>
      <div className="flex flex-wrap justify-start items-center -mt-2 gap-2">
        {userData?.skills.length > 0 ? (
          userData?.skills.map((skill, index) => {
            return (
              <div
                key={skill.id}
                className="bg-gray-100 py-1 px-3 rounded-lg font-semibold"
              >
                {skill.name}
              </div>
            );
          })
        ) : (
          <div className="w-full h-max flex items-center justify-center ">
            <Modal
              title={"Add Skill"}
              openBtn={<ControlPointOutlinedIcon className="w-12  text-5xl" />}
            >
              <AddSkillForm />
            </Modal>
          </div>
        )}
      </div>
    </ExtraDataContainer>
  );
};
export default Skills;
