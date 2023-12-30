const ProjectCardSkelaton = () => {
  return (
    <div className="animate-in p-4 w-full  overflow-hidden space-y-3 rounded-2xl drop-shadow-lg bg-white relative border">
      <div className="h-3 w-20 animate-pulse bg-gray-300 rounded-full"></div>
      <div className="h-4 w-full bg-gray-300 rounded-full animate-pulse"></div>
      <div className="h-4 w-[70%] bg-gray-300 rounded-full animate-pulse"></div>
      <div className="w- h-8 text-center border py-1 rounded-md bg-gray-300 animate-pulse"></div>
    </div>
  );
};
export default ProjectCardSkelaton;
