import { DialogClose } from "@/components/ui/dialog";
import {
  deleteCertification,
  getCertification,
} from "@/redux/features/user/certificationSlice";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const DeleteCertification = ({ certification }) => {
  const [deleted, setdeleted] = useState(false);
  const status = useSelector((state) => state.projects.deleteProject.status);

  const dispatch = useDispatch();
  const onDelete = async () => {
    try {
      await dispatch(deleteCertification(certification.id));

      dispatch(getCertification());
      if (status === "succeeded") {
        setdeleted(true);
      }
    } catch (error) {}
  };
  return !deleted ? (
    <div className="mt-2 space-y-5">
      <p className="text-lg">
        are you sure u want to delete the Certification{" "}
        <span className="font-bold"> {certification.name}</span>
      </p>
      <div className="flex items-center gap-3 justify-end">
        <DialogClose>
          <button className="px-3 rounded-lg  bg-gray-300 hover:bg-gray-200 duration-150 py-1">
            Cancel
          </button>
        </DialogClose>
        <button
          onClick={onDelete}
          className="px-3 rounded-lg  bg-red-500 hover:bg-red-400 duration-150 py-1"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="min-h-[200px] grid place-content-center">
      <CheckCircleIcon className=" text-5xl text-darkBlue" />
    </div>
  );
};
export default DeleteCertification;
