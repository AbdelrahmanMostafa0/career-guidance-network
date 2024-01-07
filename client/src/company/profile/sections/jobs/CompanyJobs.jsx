import Modal from "@/shared/Modal";
import SectionContainer from "../../SectionContainer";
import CompanyJobCard from "./CompanyJobCard";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getJobs } from "@/redux/features/company/companyJobsSlice";
import AddJobForm from "./AddJobForm";

const CompanyJobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.companyJobs.getJobs.jobs);
  console.log(jobs);
  useEffect(() => {
    if (!jobs) {
      dispatch(getJobs());
    }
  });
  return (
    <SectionContainer>
      <div className="flex justify-between items-center mb-4">
        {" "}
        <h3 className="text-xl font-bold">Jobs</h3>
        <Modal
          className={"overflow-auto"}
          title={"Add Job "}
          openBtn={
            <div className="  right-3">
              <AddCircleOutlineIcon className="text-2xl" />
            </div>
          }
        >
          <AddJobForm />
        </Modal>
      </div>
      {jobs && jobs?.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-8 pb-3 ">
          {jobs.map((job) => (
            <CompanyJobCard job={job} key={job.id} />
          ))}
          {/* <CompanyJobCard />
          <CompanyJobCard />
          <CompanyJobCard />
          <CompanyJobCard /> */}
        </div>
      ) : (
        <div className="w-full min-h-[200px] grid place-content-center">
          <Modal
            className={"overflow-auto"}
            title={"Add Job "}
            openBtn={
              <div className="  right-3">
                <AddCircleOutlineIcon className="text-5xl" />
              </div>
            }
          >
            <AddJobForm />
          </Modal>
        </div>
      )}

      {/* */}
    </SectionContainer>
  );
};
export default CompanyJobs;
