import Link from "next/link";

import { Button } from "../ui/button";
import UserSignin from "./UserSignin";
import { useState } from "react";
import CompanySignin from "./CopmanySignin";
import axios from "axios";

const SignIn = () => {
  const [signinType, setSigninType] = useState("user");
  const onSignInType = (type) => {
    setSigninType(type);
  };

  const fetchtest = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/company/test/", {
        headers: {
          "X-Auth-Token":
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0NTY0NTcyLCJpYXQiOjE3MDQ0NzgxNzIsImp0aSI6IjI0NjFkOGJmZjhjMTQ4YmE5OWRlNWViNzAyNzA3ODU3IiwidXNlcl9pZCI6MSwiY29tcGFueV9pZCI6MSwiZW1haWwiOiJjb21wYW55MUBjb21wYW55LmNvbSJ9.jEP4aJFtJrbJAD0SlOoVFCR3tzGWKdRhe_wrh9MBcrs",
        },
      });
      console.log(response.data);
    } catch (error) {}
  };
  return (
    <div className="p-4 grid md:grid-cols-2 min-h-[80dvh] md:min-h-[88dvh] ">
      {/* form */}
      <div className="col-span-1 w-full h-full px-5 md:px-20 flex flex-col justify-center space-y-10">
        {/* title */}
        <div className="space-y-3">
          <h3 className="text-4xl xl:text-6xl font-bold text-darkBlue">
            Sign in
          </h3>
          <p className="xl:text-xl">
            Don't have an account?{" "}
            <Link href={"/signup"} className="text-lightGreen font-semibold">
              Sign Up
            </Link>
          </p>
        </div>
        <div>
          <div className="flex -mt-3 mb-3 gap-2 md:max-w-[500px]">
            {" "}
            <button
              onClick={() => onSignInType("user")}
              className={`w-full border py-2 rounded-md border-darkBlue font-semibold ${
                signinType === "user" && "bg-darkBlue text-white"
              }`}
            >
              User
            </button>
            <button
              onClick={() => onSignInType("company")}
              className={`w-full border py-2 rounded-md border-darkBlue font-semibold ${
                signinType === "company" && "bg-darkBlue text-white"
              }`}
            >
              Company
            </button>
          </div>
          {signinType === "user" ? <UserSignin /> : <CompanySignin />}
        </div>
      </div>
      {/*  */}
      <div className="col-span-1 w-full h-full bg-darkBlue rounded-3xl md:flex flex-col hidden justify-center  space-y-3 px-12">
        <h3 className="md:text-4xl xl:text-5xl   text-white font-semibold">
          Welcome Back to CGN
        </h3>
        <p className="text-gray-200">Your Journey Continues Here.</p>
        <p className="text-xl  text-white  w-[80%] leading-relaxed">
          Hello again! We're thrilled to see you back at CGN. Welcome back to
          the community that's shaping the future of students like you.
        </p>
      </div>
    </div>
  );
};
export default SignIn;
