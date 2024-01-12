import { getCompany } from "@/api/viewCompanyForUser";
import { LeapFrog } from "@uiball/loaders";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainInfo from "./MainInfo";
import CompanyDescription from "./CompanyDescription";
import CompanyIndo from "./CompanyIndo";
import CompanyJobs from "./companyJobs/CompanyJobs";

const ViewCompany = () => {
  const [companyData, setCompanyData] = useState();
  const router = useRouter();
  const id = router.query.id;
  useEffect(() => {
    const fetchCompany = async () => {
      const data = await getCompany(id);
      setCompanyData(data);
    };
    if (id) {
      fetchCompany();
    }
  }, [id]);
  console.log(companyData);
  return (
    <div className="bg-gray-100">
      {companyData ? (
        <div className="md:w-[90%] max-w-[1800px] mx-[10px] md:mx-auto   min-h-[100dvh] py-5 space-y-4  gap-4  ">
          <MainInfo companyData={companyData} />
          <div className="flex md:flex-row flex-col gap-4">
            <CompanyDescription companyData={companyData} />
            <CompanyIndo companyData={companyData} />
          </div>
          <CompanyJobs />
        </div>
      ) : (
        <div className="grid place-content-center h-[90dvh]">
          {" "}
          <LeapFrog size={60} color="#13B194" />
        </div>
      )}
    </div>
  );
};
export default ViewCompany;
