import { DialogClose } from "@/components/ui/dialog";
import {
  deleteProject,
  getProjects,
} from "@/redux/features/user/projectsSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const DeleteProject = ({ project }) => {
  const [deleted, setdeleted] = useState(false);
  const status = useSelector((state) => state.projects.deleteProject.status);

  const dispatch = useDispatch();
  const onDelete = async () => {
    try {
      await dispatch(deleteProject(project.id));

      dispatch(getProjects());
      if (status === "succeeded") {
        setdeleted(true);
      }
    } catch (error) {}
  };
  return !deleted ? (
    <div className="mt-2 space-y-5">
      <p className="text-lg">
        are you sure u want to delete project{" "}
        <span className="font-bold"> {project.name}</span>
      </p>
      <div className="flex items-center gap-3 justify-end">
        <button className="px-3 rounded-lg  bg-gray-300 hover:bg-gray-200 duration-150 py-1">
          <DialogClose>Cancel</DialogClose>
        </button>
        <button
          onClick={onDelete}
          className="px-3 rounded-lg  bg-red-500 hover:bg-red-400 duration-150 py-1"
        >
          Delete
        </button>
      </div>
    </div>
  ) : (
    <div className="min-h-[250px] grid place-content-center">Deleted</div>
  );
};
export default DeleteProject;
