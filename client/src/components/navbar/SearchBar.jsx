import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const SearchBar = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-100 rounded-full pl-2 flex items-center"
    >
      <SearchOutlinedIcon className="text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full py-2 pl-1 pr-3 bg-transparent focus:outline-none"
      />
    </form>
  );
};
export default SearchBar;
