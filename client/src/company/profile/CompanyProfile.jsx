import AsideData from "./sections/AsideData";
import CompanyAbout from "./sections/CompanyAbout";
import MainInfo from "./sections/MainInfo";
import CompanyJobs from "./sections/jobs/CompanyJobs";

const CompanyProfile = () => {
  return (
    <div className="bg-gray-100">
      <div className="md:w-[88%] max-w-[1800px] mx-[10px] md:mx-auto   min-h-[98dvh] py-5 space-y-4  gap-4  ">
        <MainInfo />
        <div className="flex md:flex-row flex-col gap-4">
          <CompanyAbout />
          <AsideData />
        </div>
        <CompanyJobs />
      </div>
    </div>
  );
};
export default CompanyProfile;
