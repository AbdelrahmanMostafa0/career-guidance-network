import CompanySearch from "@/shared/search/CompanySearch";
import UserSearch from "@/shared/search/UserSearch";
import { useSelector } from "react-redux";

const SearchPage = () => {
  const userData = useSelector((state) => state.userData.userData);
  return userData ? (
    userData.isCompany ? (
      <CompanySearch />
    ) : (
      <UserSearch />
    )
  ) : (
    ""
  );
};
export default SearchPage;
