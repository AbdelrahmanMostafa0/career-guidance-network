import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { getTitlesList } from "@/redux/features/getData/globalDataSlice";
const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [filterdTitles, setFilterdTitles] = useState(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const titles = useSelector((state) => state.globalData.titles.titlesList);
  useEffect(() => {
    if (!titles) {
      dispatch(getTitlesList());
    }
  }, []);
  const handleSkillsSearch = (e) => {
    setSearchBarValue(e.target.value);
    const filteredArray = titles.filter((item) => {
      const title = item.name || "";
      return title.toLowerCase().includes(searchBarValue.toLowerCase());
    });
    setFilterdTitles(filteredArray);
    if (!e.target.value) {
      setFilterdTitles(null);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchBarValue) {
      router.push("/search");
    }
  };
  const onTitleSelect = (title) => {
    router.push(`/search?title=${title.id}&titlename=${title.name}`);
    setFilterdTitles(null);
    setSearchBarValue("");
  };
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-100 rounded-full pl-2 flex items-center relative"
    >
      <SearchOutlinedIcon className="text-gray-400" />
      <div className="relative w-full">
        <input
          value={searchBarValue}
          onChange={handleSkillsSearch}
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-1 pr-3 bg-transparent focus:outline-none"
        />
        {/* <div className="absolute flex items-center gap-2 top-[6px] rounded-md text-sm left-1 bg-darkBlue text-white py-1 px-3">
          frontend developer{" "}
          <button type="button" className="hover:text-red-500 duration-100">
            <CloseIcon className="text-sm" />
          </button>
        </div> */}
      </div>
      {filterdTitles && (
        <div className="w-[98%] mx-auto bg-white drop-shadow-md max-h-[250px] overflow-auto absolute top-[42px] rounded-md border ">
          {filterdTitles &&
            filterdTitles.length > 0 &&
            filterdTitles.map((title) => {
              return (
                <div
                  onClick={() => onTitleSelect(title)}
                  key={title.id}
                  className="w-full px-3 py-2 hover:bg-slate-200 duration-150 cursor-pointer"
                >
                  {title.name}
                </div>
              );
            })}
          {filterdTitles.length === 0 && (
            <div className="w-full px-3 py-2 text-slate-700">
              {" "}
              no Titles like that
            </div>
          )}
        </div>
      )}
    </form>
  );
};
export default SearchBar;
