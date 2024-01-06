import { useEffect } from "react";
import ExtraDataContainer from "../ExtraDataContainer";
import { useDispatch, useSelector } from "react-redux";
import { getEducation } from "@/redux/features/user/educationSlice";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import Modal from "@/shared/Modal";
import AddEducation from "../../editForms/education/AddEducation";
import EducationCard from "./EducationCard";
import EditEducation from "./EditEducation";

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
          <div className="flex gap-2 items-center">
            <Modal
              title={"Add Education"}
              openBtn={<ControlPointOutlinedIcon className="w-12  text-xl" />}
            >
              <AddEducation />
            </Modal>

            <Modal
              className={"overflow-auto"}
              openBtn={
                <button className=" right-3">
                  <BorderColorOutlinedIcon className="text-lg" />
                </button>
              }
            >
              {" "}
              <EditEducation />
              {/* <EditCertifications /> */}
            </Modal>
          </div>
        )}
      </div>
      <div className="space-y-2 justify-center flex flex-col h-full">
        {education && education.length > 0 ? (
          <EducationCard education={education[0]} key={education[0].id} />
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
        {education && education.length > 1 && (
          <Modal
            openBtn={
              <button className="text-lightGreen text-center w-fit underline">
                show more
              </button>
            }
          >
            <div className="space-y-3">
              <h3 className="text-xl font-bold ">Educations</h3>
              {education.map((education) => {
                return (
                  <div>
                    <EducationCard education={education} key={education.id} />
                    <hr />
                  </div>
                );
              })}
            </div>
          </Modal>
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
