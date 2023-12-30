import Modal from "@/shared/Modal";
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
      <p>
        {project.description.slice(0, 60)}
        {project.description.length > 60 && "....."}
      </p>

      <a
        href={project.link}
        target="_blank"
        className="w-full text-center border py-1 rounded-md bg-darkGreen hover:cursor-pointer text-white font-semibold duration-150"
      >
        Visit Project
      </a>
    </div>
  );
};
export default PojectCard;
