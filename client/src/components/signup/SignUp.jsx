import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import StudentSignUp from "./StudentSignUp";
import CompanySignUp from "./CompanySignUp";

const SignUp = () => {
  const form = useForm();
  const [userType, setUserType] = useState("student");
  const ChangeUserType = (type) => {
    setUserType(type);
  };

  return (
    <div className="p-4 grid md:grid-cols-2 min-h-[88dvh] ">
      <div className="col-span-1 w-full h-full bg-lightGreen rounded-3xl md:flex flex-col hidden justify-center items-start space-y-3 px-12">
        <h3 className="md:text-4xl xl:text-5xl  mb-3 text-white font-semibold">
          Join CGN - Shape Your Future .
        </h3>
        <p className="text-xl leading-relaxed  text-white font-thin w-[80%]">
          Welcome to CGN, where we empower students to forge their path to
          success! 🚀 Join our growing community of ambitious individuals and
          unlock a world of opportunities
        </p>
      </div>
      {/* form */}
      <div className="col-span-1 w-full h-full px-5 md:px-20 flex flex-col justify-center space-y-10">
        {/* title */}
        <div className="space-y-3">
          <h3 className="text-4xl xl:text-6xl font-bold text-darkBlue">
            Sign Up
          </h3>
          <p className="xl:text-xl">
            Already have an account?{" "}
            <Link href={"/signin"} className="text-lightGreen font-semibold">
              Sign in
            </Link>
          </p>
        </div>
        <div>
          {/* user type */}
          <div className="flex flex-col md:flex-row gap-3">
            <div
              onClick={() => {
                ChangeUserType("student");
              }}
              className={`w-full border p-3 rounded-lg flex justify-center items-center  gap-2 ${
                userType === "student" &&
                "bg-lighterGreenHover border-2 border-lighterGreen"
              }`}
            >
              <div className="w-5 h-5 border rounded-full border-lighterGreen flex items-center justify-center">
                {userType === "student" && (
                  <div className="w-3 h-3 bg-lighterGreen rounded-full"></div>
                )}
              </div>
              <p
                className={`font-semibold text-xl ${
                  userType === "student" && "text-lighterGreen"
                }`}
              >
                Student
              </p>
            </div>
            <div
              onClick={() => {
                ChangeUserType("company");
              }}
              className={`w-full border p-3 rounded-lg flex justify-center items-center  gap-2 ${
                userType === "company" &&
                "bg-lighterGreenHover border-2 border-lighterGreen"
              }`}
            >
              <div className="w-5 h-5 border rounded-full border-lighterGreen flex justify-center items-center">
                {userType === "company" && (
                  <div className="w-3 h-3 bg-lighterGreen rounded-full"></div>
                )}
              </div>
              <p
                className={`font-semibold text-xl ${
                  userType === "company" && "text-lighterGreen"
                }`}
              >
                Company
              </p>
            </div>
          </div>
          {/* name */}
        </div>
        {userType === "company" ? <CompanySignUp /> : <StudentSignUp />}
      </div>
    </div>
  );
};
export default SignUp;
