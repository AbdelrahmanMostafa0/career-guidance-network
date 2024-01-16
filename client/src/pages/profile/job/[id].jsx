import { getApplicants, getJobForCompany } from "@/api/companyApi";
import ViewJob from "@/components/veiwjob/ViewJob";
import SectionContainer from "@/shared/SectionContainer";
// import ViewJob from "@/components/company/viewJob/ViewJob";
import { LeapFrog } from "@uiball/loaders";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Link from "next/link";
const Index = () => {
  const router = useRouter();
  const [jobData, setJobData] = useState();
  const [appData, setAppData] = useState();
  const id = router.query.id;

  useEffect(() => {
    const fetchJobData = async () => {
      if (id) {
        try {
          const data = await getJobForCompany(id);
          setJobData(data);
        } catch (error) {
          console.error("Error fetching job data:", error);
          // Handle the error gracefully, show an error message, etc.
        }
      }
    };
    const fetchApplicants = async () => {
      if (id) {
        try {
          const data = await getApplicants(id);
          setAppData(data);
        } catch (error) {
          console.error("Error fetching job data:", error);
          // Handle the error gracefully, show an error message, etc.
        }
      }
    };
    fetchJobData();
    fetchApplicants();
  }, [id]);
  console.log(jobData);
  console.log(appData);
  return jobData ? (
    <div className="mb-10">
      <ViewJob jobData={jobData} apply={false} />
      <div className="bg-gray-100">
        <div className="md:w-[90%] max-w-[1800px] mx-[10px] md:mx-auto -mb-10 py-5 space-y-4  gap-4  ">
          {appData && (
            <SectionContainer>
              {" "}
              <h3 className="text-xl font-bold">applicants</h3>
              {appData.length > 0 ? (
                <div className="space-y-3">
                  {appData.map((app) => {
                    return (
                      <div className="border p-3 break-all flex items-center justify-between rounded-md drop-shadow-md bg-white">
                        <Link
                          href={`/u/${app.user.id}`}
                          className="flex items-center gap-2"
                        >
                          <img
                            src={app.user.profileImgUrl || "/avatar.jpg"}
                            alt=""
                            className="w-14 h-14 rounded-full object-cover"
                          />
                          <p className="text-sm font-bold">
                            {app.user.firstName + " " + app.user.lastName}
                          </p>
                        </Link>
                        <div></div>
                        <div className="hover:underline cursor-pointer">
                          download cv
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="min-h-[200px] grid place-content-center">
                  {" "}
                  no applicants
                </div>
              )}
            </SectionContainer>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="grid place-content-center h-[80dvh]">
      <LeapFrog size={60} color="#13B194" />
    </div>
  );
};

export default Index;
