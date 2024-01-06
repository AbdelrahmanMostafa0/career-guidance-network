import { Button } from "@/components/ui/button";
import {
  getCitiesList,
  getTitlesList,
} from "@/redux/features/getData/globalDataSlice";
import { addExp, getExp } from "@/redux/features/user/experienceSlice";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const EMPLOYMENT_TYPE_CHOICES = [
  { value: "full_time", name: "Full-time" },
  { value: "part_time", name: "Part-time" },
  { value: "contract", name: "Contract" },
  { value: "self_employed", name: "Self-Employed" },
  { value: "internship", name: "Internship" },
  { value: "freelance", name: "Freelance" },
  { value: "apprenticeship", name: "Apprenticeship" },
  { value: "seasonal", name: "Seasonal" },
];
const LOCATION_TYPE_CHOICES = [
  { value: "on_site", name: "On-site" },
  { value: "remote", name: "Remote" },
  { value: "hybrid", name: "Hybrid" },
];
function formatDateToYYYYMMDD(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
const AddExp = () => {
  //   ! location_type,employment_type
  const form = useForm();
  const { register, handleSubmit, formState, setValue, watch, reset } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.experience.addExp.status);
  const titles = useSelector((state) => state.globalData.titles.titlesList);
  const cities = useSelector((state) => state.globalData.cities.citiesList);

  useEffect(() => {
    if (!titles) {
      dispatch(getTitlesList());
    }
    if (!cities) {
      dispatch(getCitiesList());
    }
  }, []);
  const currentFlag = watch("currentFlag");
  const handleCurrentFlagChange = (currentFlagValue) => {
    // Set toDate to null and adjust validation rules based on currentFlag
    setValue("toDate", currentFlagValue ? null : ""); // Set null if currentFlag is true
    const toDateValidation = currentFlagValue
      ? formatDateToYYYYMMDD(new Date())
      : {
          required: {
            value: true,
            message: "Required",
          },
        };
    form.setValue("toDate", toDateValidation);
  };
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await dispatch(addExp(data));
      dispatch(getExp());
      //   reset();
    } catch (error) {}
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 space-y-3"
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full">
          <p>Job title</p>
          <select
            name="title"
            {...register("title", {
              required: {
                value: true,
                message: " Required",
              },
            })}
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          >
            <option value="" disabled selected>
              Select Your title
            </option>
            {titles?.map((title) => {
              return (
                <option key={title.id} value={title.id}>
                  {title.name}
                </option>
              );
            })}
          </select>
          {errors.title && (
            <p className="text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div className="w-full">
          <p>Employment type</p>
          <select
            name="employment_type"
            {...register("employment_type", {
              required: {
                value: true,
                message: " Required",
              },
            })}
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          >
            <option value="" disabled selected>
              choose employment type
            </option>
            {EMPLOYMENT_TYPE_CHOICES.map((type) => {
              return (
                <option key={type.value} value={type.value}>
                  {type.name}
                </option>
              );
            })}
          </select>
          {errors.employment_type && (
            <p className="text-red-500">{errors.employment_type.message}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="w-full">
          <p>City</p>
          <select
            name="city"
            {...register("city", {
              required: {
                value: true,
                message: " Required",
              },
            })}
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          >
            <option value="" disabled selected>
              Select city
            </option>
            {cities?.map((city) => {
              return (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              );
            })}
          </select>
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>
        <div className="w-full">
          <p>Location type</p>
          <select
            name="location_type"
            {...register("location_type", {
              required: {
                value: true,
                message: " Required",
              },
            })}
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          >
            <option value="" disabled selected>
              choose employment type
            </option>
            {LOCATION_TYPE_CHOICES.map((type) => {
              return (
                <option key={type.value} value={type.value}>
                  {type.name}
                </option>
              );
            })}
          </select>
          {errors.location_type && (
            <p className="text-red-500">{errors.location_type.message}</p>
          )}
        </div>
      </div>
      <div>
        <p>Company name</p>
        <input
          name="companyName"
          {...register("companyName", {
            required: {
              value: true,
              message: " Required",
            },
          })}
          type="text"
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Certification name"
        />
        {errors.companyName && (
          <p className="text-red-500">{errors.companyName.message}</p>
        )}
      </div>

      <div className="sm:flex items-center gap-2 ">
        <div className="w-full">
          <p>Start Date</p>
          <input
            name="fromDate"
            {...register("fromDate", {
              required: {
                value: true,
                message: "Required",
              },
            })}
            type="date"
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
            placeholder="Certification name"
          />
          {errors.fromDate && (
            <p className="text-red-500">{errors.fromDate.message}</p>
          )}
        </div>
        <div className="w-full">
          <p> End Date</p>
          <input
            name="toDate"
            {...register("toDate", {
              required: {
                value: currentFlag == "true" ? false : true,
                message: " Required",
              },
            })}
            disabled={!currentFlag == "true" ? false : true}
            type="date"
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
            placeholder="Certification name"
          />
          {errors.toDate && (
            <p className="text-red-500">{errors.toDate.message}</p>
          )}
        </div>
        <div className="space-y-2 w-full">
          <p>Current</p>
          <div className="flex items-center sm:h-11">
            <div>
              <input
                type="radio"
                id="currentFlagTrue"
                name="currentFlag"
                value="true"
                {...register("currentFlag", {
                  required: "Required",
                })}
                className="mr-2"
                onChange={() => handleCurrentFlagChange(true)}
              />
              <label htmlFor="currentFlagTrue">Yes</label>
            </div>

            <input
              type="radio"
              id="currentFlagFalse"
              name="currentFlag"
              value="false"
              {...register("currentFlag", {
                required: "Required",
              })}
              onChange={() => handleCurrentFlagChange(false)}
              className="ml-4 mr-2"
            />
            <label htmlFor="currentFlagFalse">No</label>
          </div>
          {errors.currentFlag && (
            <p className="text-red-500">{errors.currentFlag.message}</p>
          )}
        </div>
      </div>

      <div>
        <p> Job description</p>
        <textarea
          name="description"
          {...register("description", {
            required: {
              value: true,
              message: " Required",
            },
            validate: {
              minLength: (value) =>
                value.length > 70 ||
                "description must be at least 70 charachter",
              maxLength: (value) =>
                value.length < 300 ||
                "description must be less than 300 charachter",
            },
          })}
          type="file"
          className="w-full p-2 focus:outline-none h-[200px] resize-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Certification name"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <Button disabled={status === "pending"} className="w-full">
        {status === "loading" ? "loadding..." : "Add certification"}
      </Button>
    </form>
  );
};
export default AddExp;
