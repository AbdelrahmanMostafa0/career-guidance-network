import Modal from "@/shared/Modal";
import EditProject from "../editForms/pojects/EditProject";
import DeleteProject from "../editForms/pojects/DeleteProject";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
const PojectCard = ({ project }) => {
  return (
    <div className=" overflow-hidden h-ull  rounded-2xl drop-shadow-lg bg-white relative border space-y-3 flex flex-col justify-between items-start w-full p-4">
      <Modal
        className={"text-start"}
        openBtn={
          <h4 className="text-md font-semibold underline">{project.name}</h4>
        }
      >
        <div className="space-y-4">
          <h4 className="text-2xl font-bold ">{project.name}</h4>
          <article>
            <h5 className="text-lg font-semibold">Descrition</h5>
            <p>{project.description}</p>
          </article>
          <div className="flex">
            <a
              href={project.link}
              target="_blank"
              className="w-full text-center border py-1 rounded-md bg-darkGreen hover:cursor-pointer text-white font-semibold duration-150"
            >
              Visit Project
            </a>
          </div>
        </div>
      </Modal>
      <p className="line-clamp-2">{project.description}</p>

      <a
        href={project.link}
        target="_blank"
        className="w-full text-center border py-1 rounded-md bg-darkGreen hover:cursor-pointer text-white font-semibold duration-150"
      >
        Visit Project
      </a>
      <div className="flex items-center justify-end gap-3 w-full">
        <Modal
          className={"overflow-auto"}
          openBtn={
            <div className="w-full py-1 rounded-md bg-gray-300 hover:bg-gray-200 duration-150 flex items-center gap-1 justify-center border">
              <EditNoteIcon className="text-blue-500 hover:text-blue-400" />
              Edit
            </div>
          }
          trigerStyle={"w-full"}
          title={"Edit Project"}
        >
          <EditProject project={project} />
        </Modal>
        <Modal
          openBtn={
            <div className="w-full py-1 rounded-md bg-gray-300 hover:bg-gray-200 duration-150 flex items-center gap-1 justify-center border ">
              <DeleteIcon className="text-red-500 hover:text-red-400" />
              delete
            </div>
          }
          trigerStyle={"w-full"}
          title={"delete Project"}
        >
          <DeleteProject project={project} />
        </Modal>
      </div>
    </div>
  );
};
export default PojectCard;
