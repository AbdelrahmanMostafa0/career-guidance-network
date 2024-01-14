import { getJobData } from "@/api/viewCompanyForUser";
import ViewJob from "@/components/veiwjob/ViewJob";
import { LeapFrog } from "@uiball/loaders";
// import ViewJob from "@/components/user/viewJob/ViewJob";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ViewJobPage = () => {
  const [jobData, setJobData] = useState();
  const router = useRouter();
  const query = router.query;
  //   console.log(router.query);
  useEffect(() => {
    const fetchData = async () => {
      if (query && query.job && query.company) {
        const data = await getJobData({
          job: query.job,
          company: query.company,
        });
        setJobData(data);
      }
    };
    if (query) {
      fetchData();
    }
  }, [query]);
  console.log(jobData);
  return jobData ? (
    <ViewJob jobData={jobData} />
  ) : (
    <div className="grid place-content-center h-[90dvh]">
      {" "}
      <LeapFrog size={60} color="#13B194" />
    </div>
  );
};
export default ViewJobPage;
