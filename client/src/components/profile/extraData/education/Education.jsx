import { useEffect } from "react";
import ExtraDataContainer from "../ExtraDataContainer";
import { useDispatch, useSelector } from "react-redux";
import { getEducation } from "@/redux/features/user/educationSlice";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";

import AddSkillForm from "../../editForms/skills/AddSkillForm";
import Modal from "@/shared/Modal";
import AddEducation from "../../editForms/education/AddEducation";
import EducationCard from "./EducationCard";

const Education = () => {
  const dispatch = useDispatch();
  const education = useSelector(
    (state) => state.education.getEducation.education
  );
  useEffect(() => {
    dispatch(getEducation());
  }, []);

  // console.log("education", education[0]);
  return (
    <ExtraDataContainer className={"flex flex-col"}>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">Education</h3>
        {education && education.length > 0 && (
          <Modal
            title={"Add Education"}
            openBtn={<ControlPointOutlinedIcon className="w-12  text-xl" />}
          >
            <AddEducation />
          </Modal>
        )}
      </div>
      <div className="space-y-2 justify-center flex flex-col h-full">
        {education && education.length > 0 ? (
          education.map((education) => {
            return <EducationCard education={education} key={education.id} />;
          })
        ) : (
          <div className="w-full h-max flex items-center justify-center mt-5 ">
            <Modal
              title={"Add Education"}
              openBtn={<ControlPointOutlinedIcon className="w-12  text-5xl" />}
            >
              <AddEducation />
            </Modal>
          </div>
        )}
      </div>
      {/* <p className="py-1 font-semibold">
        {data.school} <span className="font-light">{data.schoolTime}</span>
        {data.grad && <CheckCircleIcon className="text-green-400 -mt-1 mx-2" />}
      </p> */}
    </ExtraDataContainer>
  );
};
export default Education;
