import Modal from "@/shared/Modal";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CompanyJobDetails from "./CompanyJobDetails";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";
const CompanyJobCard = ({ job }) => {
  return (
    <div className="border w-full p-3 pb-1 rounded-md bg-white drop-shadow-md space-y-3 flex flex-col justify-between">
      {" "}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className=" text-lg font-semibold">{job.title.name} </h3>
          {/* <p className="text-xs">{formatDate(job.createdAt)}</p> */}
          <p className="text-xs">
            {" "}
            <ReactTimeAgo date={new Date(job.createdAt)} locale="en-US" />
          </p>
        </div>
        <p>
          {job?.employment_type} - {job.location_type}
        </p>
        <p className="text-slate-600 line-clamp-2">{job.about}</p>
        <p className="text-lg">skills: </p>{" "}
        <div className="flex flex-wrap items-center gap-1">
          {job.skills.slice(0, 5).map((skill) => {
            return (
              <p
                key={skill.id}
                className="px-3 rounded-md py-[1px] text-sm bg-gray-200"
              >
                {skill.name}
              </p>
            );
          })}
        </div>
      </div>
      {/* <Modal
        className={"overflow-auto"}
        openBtn={
          <div className="w-full mx-auto text-center cursor-pointer  py-1">
            Full Details <ArrowRightAltIcon />
          </div>
        }
        trigerStyle={" w-full"}
        // title={job.title + " - " + job?.employment_type}
      >
        <CompanyJobDetails job={job} />
      </Modal> */}
      <div className="flex">
        <Link
          href={`/profile/job/${job.id}`}
          className="w-full mx-auto text-center cursor-pointer  py-1"
        >
          Full Details <ArrowRightAltIcon />
        </Link>
      </div>
    </div>
  );
};
export default CompanyJobCard;
