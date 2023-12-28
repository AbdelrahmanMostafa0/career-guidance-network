import { useEffect, useState } from "react";
import CompanySignUp from "./CompanySignUp";
import UserSignUpForm from "./UserSignUpForm";
import { getCities, getTitles } from "@/api/userApis";
import { useDispatch, useSelector } from "react-redux";

const SignUp = () => {
  const [userType, setUserType] = useState("student");
  const ChangeUserType = (type) => {
    setUserType(type);
  };
  const [titles, setTitles] = useState();
  const [cities, setCities] = useState();
  const dispatch = useDispatch();
  const getAllCities = async () => {
    const cities = await getCities();
    setCities(cities);
  };
  const getAllTitles = async () => {
    const titles = await getTitles();
    setTitles(titles);
  };
  useEffect(() => {
    getAllCities();
    getAllTitles();
  }, []);
  console.log("titles", titles);
  console.log("cities", cities);

  return (
    <div className="my-10 container px-2 mx-auto space-y-4">
      {/* <h1 className="text-center text-4xl font-semibold text-darkBlue tracking-wider  ">
        Join us Right Now
      </h1>
      <p className="text-xl leading-relaxed   max-w-[700px] mx-auto text-center">
        Welcome to CGN, where we empower students to forge their path to
        success! 🚀 Join our growing community of ambitious individuals and
        unlock a world of opportunities
      </p> */}
      <div className="flex justify-center mx-auto gap-3 px-2 md:px-0 items-center max-w-[700px]">
        <button
          onClick={() => ChangeUserType("student")}
          className={`px-5 w-full py-2 text-xl border-2 text-lightGreen border-lightGreen font-semibold duration-150 rounded-md ${
            userType === "student" && "bg-lightGreen text-white"
          }`}
        >
          student
        </button>
        <button
          onClick={() => ChangeUserType("company")}
          className={`px-5 w-full py-2 text-xl border-2 text-lightGreen border-lightGreen font-semibold duration-150 rounded-md ${
            userType === "company" && "bg-lightGreen text-white"
          }`}
        >
          Company
        </button>
      </div>
      {userType === "student" ? (
        <UserSignUpForm titles={titles} cities={cities} />
      ) : (
        <CompanySignUp />
      )}
    </div>
  );
};
export default SignUp;
