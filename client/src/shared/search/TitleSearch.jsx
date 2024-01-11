import { cn } from "@/lib/utils";
import { getTitlesList } from "@/redux/features/getData/globalDataSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const TitleSearch = ({ value, name, setTitle, onChange }) => {
  const dispatch = useDispatch();
  const titles = useSelector((state) => state.globalData.titles.titlesList);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [filterdTitles, setFilterdTitles] = useState(null);

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

  useEffect(() => {
    if (!titles) {
      dispatch(getTitlesList());
    }
  }, []);
  return (
    <div className="relative">
      {" "}
      <input
        value={searchBarValue}
        type="text"
        onChange={handleSkillsSearch}
        className="w-full focus:outline-none border-2 p-2 rounded-md focus:border-darkBlue"
      />
      {filterdTitles && (
        <div className="absolute bg-white w-full drop-shadow-lg rounded-md border max-h-[150px] overflow-auto">
          {filterdTitles.map((title) => {
            return (
              <p className="p-1 hover:bg-slate-200 duration-100 cursor-pointer">
                {title.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default TitleSearch;
