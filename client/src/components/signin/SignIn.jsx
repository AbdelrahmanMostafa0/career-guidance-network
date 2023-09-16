import Link from "next/link";
import { useState, useEffect } from "react";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      setFormData({ ...formData, email: email, password: password });
      console.log(formData);
    } else {
      if (!email) {
        setEmailError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
    }
  };
  return (
    <div className="p-4 grid md:grid-cols-2 min-h-[100dvh] ">
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:max-w-[500px] space-y-5"
          >
            <div className="space-y-2">
              <p className="text-xl">Email</p>
              <input
                value={email}
                onChange={(e) => {
                  if (e.target.value) {
                    setEmailError(false);
                  }
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                type="email"
                className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                  emailError && "border-red-500 focus:border-red-500"
                }`}
              />
              {emailError && (
                <p className="text-red-500">Please enter your email</p>
              )}
            </div>
            <div className="space-y-2">
              <p className="text-xl">Password</p>
              <input
                value={password}
                onChange={(e) => {
                  if (e.target.value) {
                    setPasswordError(false);
                  }
                  setPassword(e.target.value);
                }}
                placeholder="Password"
                type="text"
                className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                  passwordError && "border-red-500 focus:border-red-500"
                }`}
              />
              {passwordError && (
                <p className="text-red-500">Please enter your password</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-lighterGreen p-3 rounded-lg text-white font-bold"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      {/*  */}
      <div className="col-span-1 w-full h-full bg-lightGreen rounded-3xl md:flex flex-col hidden justify-center items-center space-y-3 px-12">
        <h3 className="md:text-4xl xl:text-5xl text-center whitespace-nowrap text-white font-semibold">
          Welcome Back !
        </h3>
        <p className="text-xl text-center text-white font-thin w-[80%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
          tenetur quidem itaque quae unde quia vitae similique obcaecati aliquam
          odit.
        </p>
      </div>
    </div>
  );
};
export default SignIn;
