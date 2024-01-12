import Link from "next/link";
import ReactTimeAgo from "react-time-ago";

const CompanyProfileJobCard = ({ jobData }) => {
  return (
    <div className="flex flex-col gap-2 w-full rounded-md justify-between p-5 border ">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{jobData.title.name}</h3>
        <p className="text-xs">
          {" "}
          <ReactTimeAgo date={new Date(jobData.createdAt)} locale="en-US" />
        </p>
      </div>
      <p>
        {jobData?.employment_type} - {jobData.location_type}
      </p>
      <p className="text-slate-600 line-clamp-2">{jobData.about}</p>
      <p>Skills: {jobData.skills.length}</p>

      <Link></Link>
    </div>
  );
};
export default CompanyProfileJobCard;
