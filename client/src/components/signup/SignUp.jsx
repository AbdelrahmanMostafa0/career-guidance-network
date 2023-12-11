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
    <div className="my-10">
      <h1 className="text-center text-5xl font-bold underline">
        Choose your Path
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center min-h-[75dvh] gap-10 md:gap-24 px-3">
        <Link
          href={"/signup/company"}
          className="text-3xl text-center  text-white p-10 w-full md:w-96 md:h-96 flex items-center font-semibold justify-center rounded-xl  hover:-translate-y-3 bg-lightGreen hover:drop-shadow-lg duration-150 hover:bg-darkBlue hover:text-white"
        >
          Company
        </Link>
        <Link
          href={"/signup/user"}
          className="text-3xl text-center  text-white p-10 w-full md:w-96 md:h-96 flex items-center font-semibold justify-center rounded-xl  hover:-translate-y-3 bg-lightGreen hover:drop-shadow-lg duration-150 hover:bg-darkBlue hover:text-white"
        >
          User
        </Link>
      </div>
    </div>
  );
};
export default SignUp;
