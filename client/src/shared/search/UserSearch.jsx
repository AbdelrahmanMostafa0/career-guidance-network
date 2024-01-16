import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SidePopUp from "../Sheet";
import TitleSearch from "./TitleSearch";
import { getSearch } from "@/api/userApis";
import styles from "../../styles/newsfeed.module.css";
// import { Link } from "lucide-react";
import ReactTimeAgo from "react-time-ago";
import Link from "next/link";
import PopOver from "../PopOver";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

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

const UserSearch = () => {
  const router = useRouter();
  const form = useForm({
    // title: router.query.title ? router.query.title : "",
    // location: router.query.location ? router.query.location : "",
    // type: router.query.type ? router.query.type : "",
  });
  const { register, handleSubmit, formState, setValue, watch, reset, control } =
    form;

  const [searchJobs, setSearchJobs] = useState("");
  // const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    // console.log(router.query);
    const query = router.query;
    const fetchSearchData = async () => {
      const data = await getSearch(query);
      setSearchJobs(data);
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
      `/search?title=${data.title}&location=${data.location}&type=${data.type}`
    );
  };
  return (
    <main className="bg-gray-100 min-h-[88dvh]">
      <div className="md:w-[88%] max-w-[1800px] mx-[10px] md:mx-auto py-5 space-y-4">
        <div className="flex items-center gap-3 w-full">
          <form
            className="flex md:flex-row flex-col items-center gap-3 w-full"
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
            <div className="relative md:w-3/4">
              {/* <PopOver openBtn={<TuneIcon className="text-darkBlue" />}> */}
              <div className="flex gap-1 items-center justify-center  ">
                <div>
                  {/* <input
                    type="text"
                    className="w-full focus:outline-none border-2 p-2 rounded-md focus:border-darkBlue"
                  /> */}
                </div>
                <div className="w-full">
                  {/* <p className="text-start"> location type</p> */}
                  <select
                    name="location"
                    {...register("location", {})}
                    className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md text-xs md:text-sm"
                  >
                    <option
                      className="text-xs md:text-sm"
                      value=""
                      disabled
                      selected
                    >
                      choose location type
                    </option>
                    {LOCATION_TYPE_CHOICES.map((type) => {
                      return (
                        <option key={type.value} value={type.value}>
                          {type.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="w-full">
                  {/* <p className="text-start"> employment type</p> */}
                  <select
                    name="employment_type"
                    {...register("type", {})}
                    className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md text-xs md:text-sm"
                  >
                    <option
                      className="text-xs md:text-sm"
                      value=""
                      disabled
                      selected
                    >
                      employment type
                    </option>
                    {EMPLOYMENT_TYPE_CHOICES.map((type) => {
                      return (
                        <option key={type.value} value={type.value}>
                          {type.name}
                        </option>
                      );
                    })}
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
              {/* </PopOver> */}

              {/* <SidePopUp
              openBtn={
                <div>
                  <TuneIcon className="text-darkBlue" />
                </div>
              }
              title={<span className="text-3xl">Search Filters</span>}
            >
              
            </SidePopUp> */}
            </div>
          </form>
        </div>
        {/* <div>
          {title} {employmentType} {employmentType}
        </div> */}
        <div>
          {searchJobs &&
            searchJobs.map((post) => {
              return (
                <div className={styles.newsfeedContainer}>
                  <div className={`${styles.feed} ${styles.flow}`}>
                    <div className={styles.companyInfo}>
                      <Link href={`/co/${post.company.id}`}>
                        <div className={styles.InnerCompanyInfo}>
                          <p className={styles.companyName}>
                            {post.company.name}
                          </p>
                        </div>
                      </Link>
                      <p className={styles.time}>
                        <ReactTimeAgo
                          date={new Date(post.createdAt)}
                          locale="en-US"
                        />
                      </p>
                    </div>
                    <h3 className={styles.jobTitle}>{post.title.name}</h3>
                    <p className={styles.jobInfo}>
                      {post.employment_type} - <span>{post.location_type}</span>
                    </p>
                    <p className={"line-clamp-5 leading-relaxed"}>
                      {post.about}
                    </p>
                    <div className={styles.btnsContainer}>
                      <Link
                        href={`/job?job=${post.id}&company=${post.company.id}`}
                        className={`${styles.btn} ${styles.detailsBtn}`}
                      >
                        Details
                      </Link>
                      <Link
                        href={`/job?job=${post.id}&company=${post.company.id}`}
                        className={`${styles.btn} ${styles.applyBtn}`}
                      >
                        Apply
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* <DevTool control={control} /> */}
    </main>
  );
};

export default UserSearch;
