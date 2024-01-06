import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  addEducation,
  editEducation,
  getEducation,
} from "@/redux/features/user/educationSlice";
import { useEffect } from "react";
import { getUniversityList } from "@/redux/features/getData/globalDataSlice";

const grades = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D"];
const yearsArray = [];

for (let year = 2040; year >= 2010; year--) {
  const startDate = `${year}-01-01`;
  yearsArray.push({ value: startDate, name: String(year) });
}

const EditEducationForm = ({ education }) => {
  const form = useForm({
    defaultValues: {
      description: education.description,
      graduated: education.graduated ? "true" : "false",
      grade: education.grade,
      university: education.university.id,
      start_date: education.start_date,
      end_date: education.end_date,
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const status = useSelector((state) => state.education.editEducation.status);
  const universities = useSelector(
    (state) => state.globalData.universities.uni
  );

  useEffect(() => {
    dispatch(getUniversityList());
  }, []);
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    const educationId = education.id;
    try {
      await dispatch(editEducation({ educationData: data, educationId }));
      dispatch(getEducation());
    } catch (error) {}
  };
  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="mt-2 space-y-3"
    >
      <div>
        <p>Field of study</p>
        <input
          name="description"
          {...register("description", {
            required: {
              value: true,
              message: " Required",
            },
          })}
          type="text"
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Ex: Computer science"
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}
      </div>
      <div>
        <p> University</p>
        <select
          name="university"
          {...register("university", {
            required: {
              value: true,
              message: " Required",
            },
          })}
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
        >
          <option value={""} selected disabled>
            Choose the University
          </option>
          {universities &&
            universities.map((uni) => {
              return (
                <option key={uni.id} value={uni.id}>
                  {uni.name}
                </option>
              );
            })}
        </select>
        {errors.university && (
          <p className="text-red-500">{errors.university.message}</p>
        )}
      </div>
      <div>
        <p> Grade</p>
        <select
          name="grade"
          {...register("grade", {
            required: {
              value: true,
              message: " Required",
            },
          })}
          className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
        >
          <option value={""} selected disabled>
            Choose the your Grad
          </option>
          {grades.map((grad) => {
            return <option value={grad}>{grad}</option>;
          })}
        </select>
        {errors.grade && <p className="text-red-500">{errors.grade.message}</p>}
      </div>
      <div className="space-y-2">
        <p>Graduated</p>
        <div className="flex items-center">
          <div>
            <input
              type="radio"
              id="graduatedTrue"
              name="graduated"
              value="true"
              {...register("graduated", {
                required: "Required",
              })}
              className="mr-2"
            />
            <label htmlFor="graduatedTrue">Yes</label>
          </div>

          <input
            type="radio"
            id="graduatedFalse"
            name="graduated"
            value="false"
            {...register("graduated", {
              required: "Required",
            })}
            className="ml-4 mr-2"
          />
          <label htmlFor="graduatedFalse">No</label>
        </div>
        {errors.graduated && (
          <p className="text-red-500">{errors.graduated.message}</p>
        )}
      </div>
      <div className="flex gap-2">
        <div className="w-full">
          <p> Start Date</p>
          <select
            name="start_date"
            {...register("start_date", {
              required: {
                value: true,
                message: " Required",
              },
            })}
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          >
            <option value={""} selected disabled>
              start date
            </option>
            {yearsArray.map((year) => {
              return <option value={year.value}>{year.name}</option>;
            })}
          </select>
          {errors.start_date && (
            <p className="text-red-500">{errors.start_date.message}</p>
          )}
        </div>
        <div className="w-full">
          <p> End Date</p>
          <select
            name="end_date"
            {...register("end_date", {
              required: {
                value: true,
                message: " Required",
              },
            })}
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          >
            <option value={""} selected disabled>
              end date
            </option>
            {yearsArray.map((year) => {
              return <option value={year.value}>{year.name}</option>;
            })}
          </select>
          {errors.end_date && (
            <p className="text-red-500">{errors.end_date.message}</p>
          )}
        </div>
      </div>

      <Button disabled={status === "pending"} className="w-full mt-10">
        {status === "loading" ? "loadding..." : "Add Education"}
      </Button>
    </form>
  );
};
export default EditEducationForm;
