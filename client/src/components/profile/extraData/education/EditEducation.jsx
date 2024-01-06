import { useSelector } from "react-redux";
import EducationCard from "./EducationCard";

const EditEducation = () => {
  const education = useSelector(
    (state) => state.education.getEducation.education
  );
  return (
    <div className="space-y-2">
      <h3 className="text-xl mb-3  font-bold"> Edit Education</h3>
      {education?.map((item) => {
        return (
          <>
            <EducationCard education={item} key={item.id} edit={true} />
            <hr />
          </>
        );
      })}
    </div>
  );
};
export default EditEducation;
