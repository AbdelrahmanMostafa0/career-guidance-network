import Modal from "@/shared/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditEducationForm from "../../editForms/education/EditEducationForm";
import DeleteEducation from "../../editForms/education/DeleteEducation";
const EducationCard = ({ education, edit }) => {
  return (
    <div className="space-y-2 ">
      <p className="py-1 font-semibold">
        {education?.description}
        {" - "} {education?.university?.name}
        <span className="font-light px-1">
          {education.start_date.split("-")[0]}
          {" - "}
          {education.end_date.split("-")[0]}
        </span>
        {education.graduated && (
          <CheckCircleIcon className="text-green-400 -mt-1 mx-2" />
        )}
      </p>
      {edit && (
        <div className="flex items-center justify-end gap-3 w-full">
          <Modal
            className={"overflow-auto"}
            title={"Edit Form"}
            openBtn={
              <div className="w-full py-1 rounded-md bg-gray-300 hover:bg-gray-200 duration-150 flex items-center gap-1 justify-center border">
                <EditNoteIcon className="text-blue-500 hover:text-blue-400" />
                Edit
              </div>
            }
            trigerStyle={"w-full"}
          >
            {" "}
            <EditEducationForm education={education} />
          </Modal>
          <Modal
            className={"overflow-auto"}
            title={"delete certificat"}
            openBtn={
              <div className="w-full py-1 rounded-md bg-gray-300 hover:bg-gray-200 duration-150 flex items-center gap-1 justify-center border ">
                <DeleteIcon className="text-red-500 hover:text-red-400" />
                delete
              </div>
            }
            trigerStyle={"w-full"}
          >
            {" "}
            <DeleteEducation education={education} />
          </Modal>
        </div>
      )}
    </div>
  );
};
export default EducationCard;
