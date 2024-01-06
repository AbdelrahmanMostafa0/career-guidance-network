import Modal from "@/shared/Modal";

import AddCertification from "../../editForms/certification/AddCertification";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import EditCertificationForm from "../../editForms/certification/EditCertificationForm";
import DeleteCertification from "../../editForms/certification/DeleteCertification";
const CertificationsCard = ({ certification, edit }) => {
  return (
    <div className="space-y-">
      <div className="flex items-center gap-2 ">
        <h4 className="font-bold">{certification.name}</h4>
      </div>
      <p className="font-medium text-xs bg-gray-200 px-2 py-[2px] rounded-lg w-fit">
        {certification.orgnizationName}
      </p>
      <p className=""> {certification.description}</p>
      <p className="text-sm text-slate-400">{certification.date}</p>
      {edit && (
        <div className="flex items-center justify-end gap-3 w-full">
          <Modal
            className={"overflow-auto"}
            title={"Edit certificat"}
            openBtn={
              <button className="w-full py-1 rounded-md bg-gray-300 hover:bg-gray-200 duration-150 flex items-center gap-1 justify-center border">
                <EditNoteIcon className="text-blue-500 hover:text-blue-400" />
                Edit
              </button>
            }
            trigerStyle={"w-full"}
          >
            {" "}
            <EditCertificationForm certification={certification} />
          </Modal>
          <Modal
            className={"overflow-auto"}
            title={"delete certificat"}
            openBtn={
              <button className="w-full py-1 rounded-md bg-gray-300 hover:bg-gray-200 duration-150 flex items-center gap-1 justify-center border ">
                <DeleteIcon className="text-red-500 hover:text-red-400" />
                delete
              </button>
            }
            trigerStyle={"w-full"}
          >
            {" "}
            <DeleteCertification certification={certification} />
          </Modal>
        </div>
      )}
    </div>
  );
};
export default CertificationsCard;
