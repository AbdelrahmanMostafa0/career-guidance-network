import { gatjobsHome, getCompanyhome } from "@/api/companyApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import CompanyJobCard from "../profile/sections/jobs/CompanyJobCard";

const CompanyHomePage = () => {
  const [users, setUsers] = useState();
  const [jobs, setJobs] = useState();
  useEffect(() => {
    // console.log(router.query);

    const fetchSearchData = async () => {
      const data = await getCompanyhome();
      setUsers(data);
    };
    const fetchJobs = async () => {
      const data = await gatjobsHome();
      setJobs(data);
    };

    fetchSearchData();
    fetchJobs();
  }, []);
  return (
    <div className="bg-gray-100 min-h-[98dvh] py-5">
      <div className="md:w-[88%] max-w-[1800px] mx-[10px] md:mx-auto space-y-5 ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-8    ">
          {users &&
            users.slice(0, 7).map((user) => {
              return (
                <div
                  href={`/u/${user.id}`}
                  key={user.id}
                  className="bg-white w-full border drop-shadow-md p-5 rounded-md space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <Link
                      href={`/u/${user.id}`}
                      className="flex items-center gap-2"
                    >
                      <img
                        src={user.profileImgUrl || "/avatar.jpg"}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <p>{user.firstName + " " + user.lastName}</p>
                    </Link>
                    <p className="line-clamp-3 text-slate-600">
                      {user.about ||
                        "aksdbalsgdsgd sdg sag gwdg asgd;s gd gad; gasdgs;aas;ft'a;fd ig;ia dg "}
                    </p>

                    {user.skills && (
                      <div>
                        {user.skills.length > 0 && <p>skills:</p>}
                        <div className="flex flex-wrap gap-1 items-center">
                          {user.skills.slice(0.4).map((skill) => (
                            <p
                              key={skill.id}
                              className="px-3 rounded-lg bg-gray-100 p-1"
                            >
                              {skill.name}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div href={`/u/${user.id}`} className="w-full flex ">
                    <Link
                      href={`/u/${user.id}`}
                      className="w-full border py-2 text-center rounded-full border-darkBlue hover:bg-darkBlue hover:text-white duration-300"
                    >
                      {" "}
                      View User Profile
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="space-y-4">
          <h3 className="font-bold text-2xl">Jobs</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-8  ">
            {jobs && jobs.length > 0
              ? jobs.map((job) => <CompanyJobCard job={job} key={job.id} />)
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyHomePage;
