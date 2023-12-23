import { useDispatch } from "react-redux";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";
import { useEffect } from "react";
import { getUserData } from "@/redux/features/user/userDataSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch user data and dispatch action
    if (localStorage.getItem("token")) {
      dispatch(getUserData());
    }
  }, [dispatch]);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
