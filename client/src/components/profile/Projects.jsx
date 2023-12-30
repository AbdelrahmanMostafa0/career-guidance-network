import PojectCard from "./PojectCard";
const Projects = () => {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discord CLone",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
      tech: [],
      github: "https://github.com/AbdelrahmanMostafa0",
      liveDemo: "https://github.com/AbdelrahmanMostafa0",
    },
    {
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discord CLone",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
      tech: [],
      github: "https://github.com/AbdelrahmanMostafa0",
      liveDemo: "https://github.com/AbdelrahmanMostafa0",
    },
    {
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discord CLone",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
      tech: [],
      github: "https://github.com/AbdelrahmanMostafa0",
      liveDemo: "https://github.com/AbdelrahmanMostafa0",
    },
    {
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discord CLone",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
      tech: [],
      github: "https://github.com/AbdelrahmanMostafa0",
      liveDemo: "https://github.com/AbdelrahmanMostafa0",
    },
    {
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discord CLone",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
      tech: [],
      github: "https://github.com/AbdelrahmanMostafa0",
      liveDemo: "https://github.com/AbdelrahmanMostafa0",
    },
    {
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Discord CLone",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum quisquam laboriosam libero optio deserunt deleniti ducimus neque. Obcaecati, omnis aperiam.",
      tech: [],
      github: "https://github.com/AbdelrahmanMostafa0",
      liveDemo: "https://github.com/AbdelrahmanMostafa0",
    },
  ];
  return (
    <div className="p-5 bg-white w-full space-y-2 rounded-lg pb-10">
      <h3 className="font-bold text-xl text-center mb-10">Projects</h3>
      <div className="flex flex-wrap justify-center  xl:justify-between items-center justify-items-center gap-10 md:gap-x-0 gap-y-6 md:m-10  ">
        {projects.map((project, index) => (
          <PojectCard data={project} key={index} />
        ))}
        <div className="w-[350px] overflow-hidden space-y-3 rounded-2xl drop-shadow-lg  bg-white  border h-full flex flex-col justify-center items-center min-h-[435px]">
          {/* <AddProject /> */}
          {/* <div>
              <AddCircleIcon className="text-8xl text-green-500" />
              <p className="font-semibold">Add Project</p>
            </div>
          </AddProject> */}
        </div>
      </div>
    </div>
  );
};
export default Projects;
