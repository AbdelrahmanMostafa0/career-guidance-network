import { useDispatch } from "react-redux";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { useEffect } from "react";
import {
  getCompanyData,
  getUserData,
} from "@/redux/features/user/userProfileSlice";
import ScrollToTopButton from "./ScrollToTopButton";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data and dispatch action
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      const tokenParts = token.split(".");

      // Decode the base64-encoded payload (second part)
      const decodedPayload = JSON.parse(atob(tokenParts[1]));

      if (!decodedPayload.company_id) {
        dispatch(getUserData());
      } else {
        dispatch(getCompanyData());
      }
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTopButton />
      <Footer />
    </>
  );
};
export default Layout;
