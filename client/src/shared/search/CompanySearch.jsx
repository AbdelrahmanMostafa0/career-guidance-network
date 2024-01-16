import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { getCompanySearch, getSearch } from "@/api/userApis";
import Link from "next/link";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useForm } from "react-hook-form";

const EMPLOYMENT_TYPE_CHOICES = [
  { value: "full_time", name: "Full-time" },
  { value: "part_time", name: "Part-time" },
  { value: "contract", name: "Contract" },
  { value: "self_employed", name: "Self-Employed" },
  { value: "internship", name: "Internship" },
  { value: "freelance", name: "Freelance" },
  { value: "apprenticeship", name: "Apprenticeship" },
  { value: "seasonal", name: "Seasonal" },
];
const LOCATION_TYPE_CHOICES = [
  { value: "on_site", name: "On-site" },
  { value: "remote", name: "Remote" },
  { value: "hybrid", name: "Hybrid" },
];

const CompanySearch = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      title: "",
      gender: "",
      min_age: "",
      max_age: "",
      city: "",
    },
  });
  const { register, handleSubmit, formState, setValue, watch, reset, control } =
    form;

  const [users, setUsers] = useState("");
  // const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    // console.log(router.query);
    const query = router.query;
    const fetchSearchData = async () => {
      const data = await getCompanySearch(query);
      setUsers(data);
    };
    if (query) {
      fetchSearchData();
    }
    // setTitle(router.query.title);
    // setInputValue(router.query.title);
  }, [router]);
  // console.log(searchJobs);
  // console.log(employmentType);
  // console.log(locationType);
  const onSubmit = (data) => {
    console.log(data);
    router.push(
      `/search?title=${data.title}&city=${data.city}&gender=${data.gender}&min_age=${data.min_age}&max_age=${data.max_age}`
    );
  };
  return (
    <main className="bg-gray-100 min-h-[88dvh]">
      <div className="md:w-[88%] max-w-[1800px] mx-[10px] md:mx-auto py-5 space-y-4">
        <div className="flex items-center gap-3 w-full">
          <form
            className="flex  flex-col r gap-3 w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="relative w-full flex items-center">
              <input
                type="text"
                className="w-full px-4 py-3 focus:outline-darkBlue rounded-full"
                placeholder="Search By Job Title"
                {...register("title")}
              />
              <button
                type=""
                className="bg-darkBlue rounded-full -mx-10 h-8 w-8 grid place-content-center"
              >
                <SearchOutlinedIcon className="text-white" />
              </button>
            </div>
            <div className="relative ">
              {/* <PopOver openBtn={<TuneIcon className="text-darkBlue" />}> */}
              <div className="flex md:flex-row flex-col gap-2 items-center justify-center  ">
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-3 focus:outline-darkBlue rounded-full"
                    placeholder="minimum age"
                    {...register("min_age")}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-3 focus:outline-darkBlue rounded-full"
                    placeholder="maximum age"
                    {...register("max_age")}
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    className="w-full px-4 py-3 focus:outline-darkBlue rounded-full"
                    placeholder="city"
                    {...register("city")}
                  />
                </div>
                <div className="w-full">
                  {/* <p className="text-start"> location type</p> */}
                  <select
                    name="location"
                    {...register("gender", {})}
                    className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md text-xs md:text-sm"
                  >
                    <option
                      className="text-xs md:text-sm"
                      value=""
                      disabled
                      selected
                    >
                      choose gender
                    </option>
                    <option value="male">Male</option>
                    <option value="f">Female</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    router.push("/search");
                  }}
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-8    ">
          {users &&
            users.map((user) => {
              return (
                <Link
                  href={`/u/${user.id}`}
                  key={user.id}
                  className="bg-white w-full border drop-shadow-md p-5 rounded-md space-y-2 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={user.profileImgUrl || "/avatar.jpg"}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <p>{user.firstName + " " + user.lastName}</p>
                  </div>
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
                  <div href={`/u/${user.id}`} className="w-full flex ">
                    <Link
                      href={`/u/${user.id}`}
                      className="w-full border py-2 text-center rounded-full border-darkBlue hover:bg-darkBlue hover:text-white duration-300"
                    >
                      {" "}
                      View User Profile
                    </Link>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      {/* <DevTool control={control} /> */}
    </main>
  );
};

export default CompanySearch;
