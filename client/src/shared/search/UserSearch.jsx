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
  const [searchJobs, setSearchJobs] = useState();
  const router = useRouter();
  useEffect(() => {
    console.log(router.query);
    const query = router.query;
    const fetchSearchData = async () => {
      const data = await getSearch(query);
      setSearchJobs(data);
    };
    if (query) {
      fetchSearchData();
    }
  }, [router]);
  console.log(searchJobs);

  const [employmentType, setEmploymentType] = useState({
    name: null,
    value: null,
  });
  const [locationType, setLocationType] = useState({
    name: null,
    value: null,
  });
  const [title, setTitle] = useState({
    name: null,
    value: null,
  });
  return (
    <main className="bg-gray-100 min-h-[88dvh]">
      <div className="md:w-[88%] max-w-[1800px] mx-[10px] md:mx-auto py-5 space-y-4">
        <div className="flex items-center gap-3 w-full">
          <input
            type="text"
            className="w-full px-4 py-3 focus:outline-darkBlue rounded-md"
            placeholder="Search By Job Title"
          />
          <div className="relative">
            {/* <button ref={menuBtnRef} onClick={handleMenuOpen}>
              <TuneIcon className="text-darkBlue" />
            </button> */}
            <SidePopUp
              openBtn={
                <div>
                  <TuneIcon className="text-darkBlue" />
                </div>
              }
              title={<span className="text-3xl">Search Filters</span>}
            >
              <div className="space-y-3">
                <div>
                  <p className="text-start">Title</p>
                  {/* <input
                    type="text"
                    className="w-full focus:outline-none border-2 p-2 rounded-md focus:border-darkBlue"
                  /> */}
                  <TitleSearch />
                </div>
                <div className="space-y-1">
                  <p className="text-start"> Employment type</p>
                  <select
                    name=""
                    id=""
                    className="border-2 p-2 rounded-md focus:outline-none w-full text-sm"
                  >
                    <option value="" className="" selected disabled>
                      Employment type
                    </option>
                    {EMPLOYMENT_TYPE_CHOICES.map((type) => {
                      return <option value={type.value}>{type.name}</option>;
                    })}
                  </select>
                </div>
                <div className="space-y-1">
                  <p className="text-start"> Location type</p>

                  <select
                    name=""
                    id=""
                    className="border-2 p-2 rounded-md focus:outline-none w-full text-sm"
                  >
                    <option value="" className="" selected disabled>
                      Location type
                    </option>
                    {LOCATION_TYPE_CHOICES.map((type) => {
                      return <option value={type.value}>{type.name}</option>;
                    })}
                  </select>
                </div>
                <button className="w-full bg-darkBlue py-2 rounded-md text-white">
                  Applay
                </button>
                <button className="w-full bg-gray-200 py-2 rounded-md hover:bg-gray-300 duration-100">
                  Clear
                </button>
              </div>
            </SidePopUp>
          </div>
          <button
            onClick={() => {
              router.push("/search");
            }}
          >
            Clear
          </button>
        </div>
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
    </main>
  );
};

export default UserSearch;
