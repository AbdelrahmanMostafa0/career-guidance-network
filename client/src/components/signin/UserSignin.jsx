import { getUserData } from "@/redux/features/user/userProfileSlice";
import { userLogin } from "@/redux/features/user/userLoginSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

const UserSignin = () => {
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
  }, [status]);

  useEffect(() => {
    if (userData) {
      router.push("/");
    }
  }, [userData]);
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex fade-in-right flex-col md:max-w-[500px] space-y-5"
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
  );
};
export default UserSignin;
