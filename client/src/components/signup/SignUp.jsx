import Link from "next/link";
import { useState, useEffect } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userType: "student",
    firstName: "",
    LastName: "",
    email: "",
    password: "",
    phone: "",
  });
  const [formError, setFormError] = useState({
    firstName: false,
    LastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    phone: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.userType === "student") {
      if (
        formData.firstName &&
        formData.LastName &&
        formData.email &&
        formData.password &&
        confirmPassword === formData.password
      ) {
        console.log(formData);
      }
    } else if (
      formData.firstName &&
      formData.email &&
      formData.password &&
      confirmPassword === formData.password
    ) {
      console.log(formData);
    } else {
      if (!formData.firstName) {
        setFormError({ ...formError, firstName: true });
      } else if (formData.userType === "student") {
        if (!formData.LastName) {
          setFormError({ ...formError, LastName: true });
        }
      } else if (!formData.email) {
        setFormError({ ...formError, email: true });
      } else if (!formData.phone) {
        setFormError({ ...formError, phone: true });
      } else if (!formData.password) {
        setFormError({ ...formError, password: true });
      } else if (!confirmPassword) {
        setFormError({ ...formError, confirmPassword: true });
      }
    }
  };
  return (
    <div className="p-4 grid md:grid-cols-3 min-h-[100dvh] ">
      <div className="col-span-1 w-full h-full bg-lightGreen rounded-3xl md:flex flex-col hidden justify-center items-start space-y-3 px-12">
        <h3 className="md:text-4xl xl:text-5xl  whitespace-nowrap text-white font-semibold">
          Start your <br />
          journey with us.
        </h3>
        <p className="text-xl text- text-white font-thin w-[80%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          tenetur quidem itaque quae unde quia vitae similique obcaecati aliquam
          odit.
        </p>
      </div>
      {/* form */}
      <div className="col-span-2 w-full h-full px-5 md:px-20 flex flex-col justify-center space-y-10">
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
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            {/* user type */}
            <div className="flex flex-col md:flex-row gap-3">
              <div
                onClick={() => {
                  setFormData({ ...formData, userType: "student" });
                }}
                className={`w-full border p-3 rounded-lg flex justify-center items-center  gap-2 ${
                  formData.userType === "student" &&
                  "bg-lighterGreenHover border-2 border-lighterGreen"
                }`}
              >
                <div className="w-5 h-5 border rounded-full border-lighterGreen flex items-center justify-center">
                  {formData.userType === "student" && (
                    <div className="w-3 h-3 bg-lighterGreen rounded-full"></div>
                  )}
                </div>
                <p
                  className={`font-semibold text-xl ${
                    formData.userType === "student" && "text-lighterGreen"
                  }`}
                >
                  Student
                </p>
              </div>
              <div
                onClick={() => {
                  setFormData({ ...formData, userType: "company" });
                }}
                className={`w-full border p-3 rounded-lg flex justify-center items-center  gap-2 ${
                  formData.userType === "company" &&
                  "bg-lighterGreenHover border-2 border-lighterGreen"
                }`}
              >
                <div className="w-5 h-5 border rounded-full border-lighterGreen flex justify-center items-center">
                  {formData.userType === "company" && (
                    <div className="w-3 h-3 bg-lighterGreen rounded-full"></div>
                  )}
                </div>
                <p
                  className={`font-semibold text-xl ${
                    formData.userType === "company" && "text-lighterGreen"
                  }`}
                >
                  Company
                </p>
              </div>
            </div>
            {/* name */}
            {formData.userType === "student" ? (
              <div className="flex flex-col md:flex-row w-full gap-3">
                <div className="space-y-2 w-full">
                  <p className="text-xl">First Name</p>
                  <input
                    value={formData.firstName}
                    onChange={(e) => {
                      if (e.target.value) {
                        setFormError({ ...formError, firstName: false });
                      }
                      setFormData({ ...formData, firstName: e.target.value });
                    }}
                    placeholder="First Name"
                    type="text"
                    className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                      formError.firstName &&
                      "border-red-500 focus:border-red-500"
                    }`}
                  />
                  {formError.firstName && (
                    <p className="text-red-500">Please enter your first name</p>
                  )}
                </div>
                <div className="space-y-2 w-full">
                  <p className="text-xl">Last Name</p>
                  <input
                    value={formData.LastName}
                    onChange={(e) => {
                      if (e.target.value) {
                        setFormError({ ...formError, LastName: false });
                      }
                      setFormData({ ...formData, LastName: e.target.value });
                    }}
                    placeholder="Last Name"
                    type="text"
                    className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                      formError.LastName &&
                      "border-red-500 focus:border-red-500"
                    }`}
                  />
                  {formError.LastName && (
                    <p className="text-red-500">Please enter your last name</p>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-2 w-full">
                <p className="text-xl">Name</p>
                <input
                  value={formData.firstName}
                  onChange={(e) => {
                    if (e.target.value) {
                      setFormError({ ...formError, firstName: false });
                    }
                    setFormData({ ...formData, firstName: e.target.value });
                  }}
                  placeholder="First Name"
                  type="text"
                  className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                    formError.firstName && "border-red-500 focus:border-red-500"
                  }`}
                />
                {formError.firstName && (
                  <p className="text-red-500">Please enter your first name</p>
                )}
              </div>
            )}
            {/* email and phone */}
            <div className="flex flex-col md:flex-row w-full gap-3">
              <div className="space-y-2 w-full">
                <p className="text-xl">Email</p>
                <input
                  value={formData.email}
                  onChange={(e) => {
                    if (e.target.value) {
                      setFormError({ ...formError, email: false });
                    }
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  placeholder="Email"
                  type="text"
                  className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                    formError.email && "border-red-500 focus:border-red-500"
                  }`}
                />
                {formError.email && (
                  <p className="text-red-500">Please enter your email</p>
                )}
              </div>
              <div className="space-y-2 w-full">
                <p className="text-xl">Phone</p>
                <input
                  value={formData.phone}
                  onChange={(e) => {
                    if (e.target.value) {
                      setFormError({ ...formError, phone: false });
                    }
                    setFormData({ ...formData, phone: e.target.value });
                  }}
                  placeholder="Phone Number"
                  type="text"
                  className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                    formError.phone && "border-red-500 focus:border-red-500"
                  }`}
                />
                {formError.phone && (
                  <p className="text-red-500">Please enter your phone</p>
                )}
              </div>
            </div>
            {/* password */}
            <div className="flex flex-col md:flex-row w-full gap-3">
              <div className="space-y-2 w-full">
                <p className="text-xl">Password</p>
                <input
                  value={formData.password}
                  onChange={(e) => {
                    if (e.target.value) {
                      setFormError({ ...formError, password: false });
                    }
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  placeholder="Password"
                  type="text"
                  className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                    formError.password ||
                    (formError.confirmPassword &&
                      "border-red-500 focus:border-red-500")
                  }`}
                />
                {formError.password && (
                  <p className="text-red-500">Please enter your password</p>
                )}
              </div>
              <div className="space-y-2 w-full">
                <p className="text-xl">Confirm Password</p>
                <input
                  value={confirmPassword}
                  onChange={(e) => {
                    if (e.target.value === formData.password) {
                      setFormError({ ...formError, confirmPassword: false });
                    }
                    setConfirmPassword(e.target.value);
                  }}
                  placeholder="Last Name"
                  type="text"
                  className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                    formError.confirmPassword &&
                    "border-red-500 focus:border-red-500"
                  }`}
                />
                {formError.confirmPassword && (
                  <p className="text-red-500">Passwords Doesn't match</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-lighterGreen p-3 rounded-lg cursor-pointer duration-150 hover:bg-lightGreen text-white font-bold md:w-64"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
      {/*  */}
    </div>
  );
};
export default SignUp;
