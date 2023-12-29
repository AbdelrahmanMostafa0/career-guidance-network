import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Modal from "@/shared/Modal";
import AddSkillForm from "@/components/profile/editForms/AddSkillForm";
import { useSelector } from "react-redux";
const Skills = () => {
  const userData = useSelector((state) => state.userData.userData);
  return (
    <div className="bg-white p-5 rounded-lg w-full relative">
      <h3 className="font-bold text-xl ">Skills</h3>
      <Modal
        title={"Edit Skill"}
        openBtn={
          <button className="absolute top-1  right-3">
            <BorderColorOutlinedIcon className="text-sm" />
          </button>
        }
      >
        {" "}
        <AddSkillForm />
      </Modal>
      <div className="flex flex-wrap justify-start items-center -mt-2 gap-2">
        {userData.skills.length > 0 ? (
          userData.skills.map((skill, index) => {
            return (
              <div
                key={skill}
                className="bg-gray-100 py-1 px-3 rounded-lg font-semibold"
              >
                {skill}
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
    </div>
  );
};
export default Skills;
