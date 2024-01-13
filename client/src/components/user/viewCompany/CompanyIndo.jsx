import SectionContainer from "@/shared/SectionContainer";

const CompanyIndo = ({ companyData }) => {
  return (
    <SectionContainer className={"md:w-3/12 flex flex-col"}>
      <h3 className="text-xl font-bold md:text-center">Info</h3>
      <div className="flex flex-col  h-full justify-between  md:items-center">
        <div className="md:text-center mb-2">
          <h4 className="text-lg font-semibold ">Website</h4>
          {companyData && companyData?.websiteLink ? (
            <a
              className="text-blue-600 hover:underline duration-150"
              href={companyData?.websiteLink}
              target="_blank"
            >
              {companyData.name}
            </a>
          ) : (
            <p className="text-sm text-slate-400">no website</p>
          )}
        </div>
        <div className="md:text-center mb-2">
          <h4 className="text-lg font-semibold ">Location</h4>
          <p className="text-sm">{companyData && companyData?.city.name}</p>
        </div>
        <div className="md:text-center mb-2">
          <h4 className="text-lg font-semibold ">Company size</h4>
          <p className="text-sm">
            {companyData && companyData?.numberOfEmployes}
          </p>
        </div>
        <div className="md:text-center mb-2">
          <h4 className="text-lg font-semibold ">Founded at</h4>
          <p>{companyData && companyData?.foundedAt.split("-")[0]}</p>
        </div>
      </div>
    </SectionContainer>
  );
};
export default CompanyIndo;
