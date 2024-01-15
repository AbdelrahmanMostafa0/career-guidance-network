import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { getTitlesList } from "@/redux/features/getData/globalDataSlice";
const SearchBar = () => {
  const [searchBarValue, setSearchBarValue] = useState("");
  const router = useRouter();
  const onSubmit = (e) => {
    e.preventDefault();

    router.push(`/search?title=${searchBarValue}`);
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
          onChange={(e) => {
            setSearchBarValue(e.target.value);
          }}
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
    </form>
  );
};
export default SearchBar;
