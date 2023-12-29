// import { userLogin } from "@/api/userApis";
import { getUserData } from "@/redux/features/user/userProfileSlice";
import { userLogin } from "@/redux/features/user/userLoginSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

const SignIn = () => {
  const router = useRouter();
  const status = useSelector((state) => state.login.status);
  const form = useForm();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const userData = useSelector((state) => state.userData.userData);
  const onSubmit = async (data) => {
    // userLogin(data);

    dispatch(userLogin(data));
  };
  useEffect(() => {
    if (status === "succeeded" && localStorage.getItem("token")) {
      dispatch(getUserData());
      router.push("/");
    }
    // console.log(status);
  }, [status]);

  useEffect(() => {
    if (userData) {
      router.push("/");
    }
  }, [userData]);
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
          <form
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:max-w-[500px] space-y-5"
          >
            <div className="space-y-2">
              <p className="text-xl">Email</p>
              <input
                name="email"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: " Please enter your email",
                  },
                  pattern: {
                    value:
                      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
                    message: "Please enter a valid email",
                  },
                })}
                className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                  errors.email && "border-red-500 focus:border-red-500"
                }`}
              />
              <p className="text-red-500 mt-1">{errors.email?.message}</p>
            </div>
            <div className="space-y-2">
              <p className="text-xl">Password</p>
              <input
                name="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "please enter your password",
                  },
                })}
                placeholder="Password"
                type="password"
                className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
                  errors.password && "border-red-500 focus:border-red-500"
                }`}
              />
              <p className="text-red-500 mt-1">{errors.password?.message}</p>
            </div>

            <Button className="col-span-2 h-12 w-full mt-4">Sign in</Button>
          </form>
        </div>
      </div>
      {/*  */}
      <div className="col-span-1 w-full h-full bg-darkBlue rounded-3xl md:flex flex-col hidden justify-center  space-y-3 px-12">
        <h3 className="md:text-4xl xl:text-5xl   text-white font-semibold">
          Welcome Back to CGN
        </h3>
        <p className="text-gray-200">Your Journey Continues Here.</p>
        <p className="text-xl  text-white font-thin w-[80%] leading-relaxed">
          Hello again! We're thrilled to see you back at CGN. Welcome back to
          the community that's shaping the future of students like you.
        </p>
      </div>
    </div>
  );
};
export default SignIn;
