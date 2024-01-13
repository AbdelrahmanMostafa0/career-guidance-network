import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCompanyJobs } from "@/api/viewCompanyForUser";
import SectionContainer from "@/shared/SectionContainer";
import CompanyJobCard from "@/components/company/profile/sections/jobs/CompanyJobCard";
import CompanyProfileJobCard from "./CompanyProfileJobCard";

const CompanyJobs = () => {
  const router = useRouter();
  const id = router.query.id;

  const [jobs, setJobs] = useState();

  useEffect(() => {
    const fetchCompanyJobs = async () => {
      const data = await getCompanyJobs(id);
      setJobs(data);
    };
    if (id) {
      fetchCompanyJobs();
    }
  }, [id]);
  return (
    <SectionContainer>
      {" "}
      <h3 className="text-xl font-bold">Jobs</h3>
      {jobs && jobs?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-8 pb-3 ">
          {jobs.map((job) => (
            // <CompanyJobCard job={job} key={job.id} />
            <CompanyProfileJobCard jobData={job} key={job.id} />
          ))}
          {/* <CompanyJobCard />
          <CompanyJobCard />
          <CompanyJobCard />
          <CompanyJobCard /> */}
        </div>
      ) : (
        <div className="w-full min-h-[200px] grid place-content-center">
          <p>no jobs</p>
        </div>
      )}
      {/* */}
    </SectionContainer>
  );
};
export default CompanyJobs;
