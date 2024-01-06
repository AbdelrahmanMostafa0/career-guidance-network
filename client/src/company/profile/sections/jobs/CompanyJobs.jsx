import SectionContainer from "../../SectionContainer";
import CompanyJobCard from "./CompanyJobCard";

const CompanyJobs = () => {
  return (
    <SectionContainer>
      <h3 className="text-xl font-bold">Jobs</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-8 pb-3 ">
        <CompanyJobCard />
        <CompanyJobCard />
        <CompanyJobCard />
        <CompanyJobCard />
      </div>
    </SectionContainer>
  );
};
export default CompanyJobs;
