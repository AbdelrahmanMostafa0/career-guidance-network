import ReactTimeAgo from "react-time-ago";

const CompanyJobDetails = ({ job }) => {
  return (
    <div className="mt-3 space-y-4 relative">
      <div className="flex items-center justify-between">
        {" "}
        <h3 className="text-xl font-semibold">
          {job.title + " - " + job?.employment_type}
        </h3>
        <ReactTimeAgo date={new Date(job.createdAt)} locale="en-US" />
      </div>
      <p>
        {job?.employment_type} - {job.location_type}
      </p>
      <p>{job.about}</p>
      <div>
        <p className="text-xl font-semibold mb-1">skills: </p>
        <div className="flex flex-wrap items-center gap-1">
          {job.skills.map((skill) => {
            return (
              <p
                key={skill}
                className="px-3 rounded-md py-[1px] text-sm bg-gray-200"
              >
                {skill}
              </p>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2 md:text-base text-xs">
        <div className="w-full text-center border-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer duration-150">
          edit
        </div>
        <div className="w-full text-center border-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer duration-150">
          delete
        </div>
        <div className="w-full text-center border-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 cursor-pointer duration-150">
          deactive
        </div>
      </div>
    </div>
  );
};
export default CompanyJobDetails;
