import { Button } from "@/components/ui/button";
import { companyRegister } from "@/redux/features/company/companyRegisterSlice";
import { getCitiesList } from "@/redux/features/getData/globalDataSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const CompanySignUp = () => {
  const status = useSelector((state) => state.companyRegister.status);
  const cities = useSelector((state) => state.globalData.cities.citiesList);
  const router = useRouter();

  const dispatch = useDispatch();
  const form = useForm();
  const { register, handleSubmit, formState, watch } = form;
  const { errors } = formState;
  const onSubmit = (data) => {
    dispatch(companyRegister(data));
  };
  const isNumeric = (value) => /^\d+$/.test(value);
  const passwordRegex = /^(?=.*[0-9]).{8,}$/;
  const password = watch("password", "");
  useEffect(() => {
    if (status === "succeeded") {
      router.push("/signin");
    }
  }, [status]);

  useEffect(() => {
    dispatch(getCitiesList());
  }, []);
  return (
    <div className="my- space-y-3 px-2  mb-14">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[700px] mx-auto p-5 py-10 border rounded-md  gap-3 md:grid grid-cols-2"
      >
        <div>
          <p className="text-lg mb-1">Company Name</p>
          <input
            placeholder="Name"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "please enter your company name",
              },
            })}
            type="text"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-darkBlue ${
              errors.name && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.name?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">Email</p>
          <input
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: " Please enter your company email",
              },
              pattern: {
                value:
                  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
                message: "Please enter a valid email",
              },
            })}
            name="email"
            type="email"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-darkBlue ${
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
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-darkBlue ${
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
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-darkBlue ${
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
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-darkBlue ${
              errors.phoneNumber && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.phoneNumber?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">Founded At</p>
          <input
            placeholder="Founded at "
            name="foundedAt"
            {...register("foundedAt", {
              required: "Please enter when your company Founded at",
            })}
            type="date"
            className={`border-2 p-[11px]  rounded-lg focus:outline-none w-full   focus:border-darkBlue ${
              errors.foundedAt && "border-red-500 focus:border-red-500"
            }`}
            min="1995-01-01"
          />
          <p className="text-red-500 mt-1">{errors.foundedAt?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">City</p>
          <select
            name="city"
            {...register("city", {
              required: "Please select a city",
            })}
            className={`border-2 p-[11px]  rounded-lg focus:outline-none w-full   focus:border-darkBlue ${
              errors.city && "border-red-500 focus:border-red-500"
            }`}
            min="1995-01-01"
          >
            <option value="" disabled selected>
              select a city
            </option>
            {cities &&
              cities.map((city) => {
                return <option value={city.id}>{city.name}</option>;
              })}
          </select>
          <p className="text-red-500 mt-1">{errors.city?.message}</p>
        </div>
        <div>
          <p className="text-lg mb-1">number of employes</p>
          <input
            placeholder="numberOfEmployes"
            name="numberOfEmployes"
            {...register("numberOfEmployes", {
              required: {
                value: true,
                message: "please enter number of employes",
              },
            })}
            type="text"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-darkBlue ${
              errors.numberOfEmployes && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">
            {errors.numberOfEmployes?.message}
          </p>
        </div>
        {/* <div className="md:col-span-2">
          <p className="text-lg mb-1">About</p>
          <textarea
            placeholder="About Company"
            name="about"
            {...register("about", {
              required: {
                value: true,
                message: "please enter your company About",
              },
              validate: {
                minLength: (value) =>
                  value.length > 100 || "The About must be atleast 100",
              },
            })}
            type="text"
            className={`border-2 p-3 rounded-lg focus:outline-none w-full   focus:border-darkBlue resize-none min-h-[150px] ${
              errors.about && "border-red-500 focus:border-red-500"
            }`}
          />
          <p className="text-red-500 mt-1">{errors.about?.message}</p>
        </div> */}
        <Button className="col-span-2 h-10 w-full mt-4">Sign Up</Button>
      </form>
    </div>
  );
};
export default CompanySignUp;
