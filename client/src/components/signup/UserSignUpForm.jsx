import { getUserData } from "@/redux/features/user/userDataSlice";
import { userRegister } from "@/redux/features/user/userRegisterSlice";
import { DevTool } from "@hookform/devtools";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const UserSignUpForm = () => {
  const passwordRegex = /^(?=.*[0-9]).{8,}$/;
  const router = useRouter();
  const dispatch = useDispatch();

  const status = useSelector((state) => state.register.status);
  const userData = useSelector((state) => state.userData.userData);
  const form = useForm({
    defaultValues: {
      city: 1,
      title: 1,
    },
  });
  const { register, handleSubmit, control, formState, watch } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log(data);
    data.city = 1;
    data.title = 1;

    // userRgister(data);
    dispatch(userRegister(data));
  };
  useEffect(() => {
    if (userData) {
      router.push("/");
    }
  }, [userData]);
  useEffect(() => {
    if (status === "succeeded") {
      // dispatch(getUserData());
      router.push("/signin");
    }
    // console.log(status);
  }, [status]);
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");
  const isNumeric = (value) => /^\d+$/.test(value);
  return (
    <div className=" space-y-3 px-2 mt- mb-14">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[700px] mx-auto p-5 py-10 border rounded-md  gap-3 md:grid grid-cols-2"
      >
        <div>
          <p className="text-lg mb-1">First Name</p>
          <input
            placeholder="First Name"
            name="firstName"
            {...register("firstName", {
              required: {
                value: true,
                message: "please enter your first name",
              },
            })}
            type="text"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
              errors.firstName && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.firstName?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">Last Name</p>
          <input
            placeholder="Last Name"
            name="lastName"
            {...register("lastName", {
              required: {
                value: true,
                message: "please enter your last name",
              },
            })}
            type="text"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
              errors.lastName && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.lastName?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">Email</p>
          <input
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
            name="email"
            type="email"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
              errors.email && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.email?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">Password</p>
          <input
            placeholder="Password"
            name="password"
            {...register("password", {
              required: {
                value: true,
                message: "please enter your password",
              },
              pattern: {
                value: passwordRegex,
                message:
                  " must be at least 8 characters and contain at least one number",
              },
            })}
            type="password"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
              errors.password && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.password?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">Confirm Password</p>
          <input
            placeholder="Confirm Password"
            name="password2"
            {...register("password2", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            type="password"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
              errors.password2 && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.password2?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">Phone Number</p>
          <input
            placeholder="Phone Number"
            name="phoneNumber"
            {...register("phoneNumber", {
              required: "Please confirm your password",
              validate: {
                validNumber: (value) =>
                  isNumeric(value) ||
                  "Please enter a valid numeric phone number",
                length: (value) =>
                  value.length >= 11 ||
                  "Phone number must be at least 11 digits",
              },
            })}
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
              errors.phoneNumber && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.phoneNumber?.message}</p>
        </div>

        <div>
          <p className="text-lg mb-1">Date Of Birth</p>
          <input
            placeholder="Date Of BirthConfirm "
            name="dateOfBirth"
            {...register("dateOfBirth", {
              required: "Please enter your Date Of Birth",
            })}
            type="date"
            className={`border-2 p-[11px]  rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
              errors.dateOfBirth && "border-red-500 focus:border-red-500"
            }`}
            min="1995-01-01"
          />
          <p className="text-red-500 mt-1">{errors.dateOfBirth?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">Gender</p>
          <select
            {...register("gender", {
              required: "Please Choose your gender",
            })}
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-lightGreen ${
              errors.gender && "border-red-500 focus:border-red-500"
            }`}
          >
            <option value="">select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <p className="text-red-500 mt-1">{errors.gender?.message}</p>
        </div>
        <button className="w-full col-span-2 rounded-lg px-4 font-bold text-white bg-lighterGreen py-3 active:scale-[0.99] duration-100">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default UserSignUpForm;
