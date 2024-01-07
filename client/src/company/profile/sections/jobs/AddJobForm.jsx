import { Button } from "@/components/ui/button";
import {
  getCitiesList,
  getTitlesList,
} from "@/redux/features/getData/globalDataSlice";
import { getSkills } from "@/redux/features/user/SkillsSlice";
import { addExp, getExp } from "@/redux/features/user/experienceSlice";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { addJob, getJobs } from "@/redux/features/company/companyJobsSlice";

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
const AddJobForm = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsSearch, setSkillsSearch] = useState("");
  const [filteredSkills, setFilteredSkills] = useState();
  const skills = useSelector((state) => state.SkillsData.skillsData.skills);

  const form = useForm({
    defaultValues: {
      skills: [],
      canApply: true,
    },
  });
  const { register, handleSubmit, formState, reset, setValue } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.experience.addExp.status);
  const titles = useSelector((state) => state.globalData.titles.titlesList);

  useEffect(() => {
    if (!skills) {
      dispatch(getSkills());
    }
    if (!titles) {
      dispatch(getTitlesList());
    }
  }, []);
  const handleSkillsSearch = (e) => {
    setSkillsSearch(e.target.value);
    const filteredArray = skills.filter((item) => {
      const skill = item.name || "";
      return skill.toLowerCase().includes(skillsSearch.toLowerCase());
    });
    setFilteredSkills(filteredArray);
    if (!e.target.value) {
      setFilteredSkills(null);
    }
  };
  console.log(selectedSkills);
  const handleSkillSelect = async (skill) => {
    setSkillsSearch("");
    setFilteredSkills(null);

    // Check if the skill with the same id already exists in selectedSkills
    if (
      !selectedSkills.some((selectedSkill) => selectedSkill.id === skill.id)
    ) {
      await setSelectedSkills((prevSkills) => [...prevSkills, skill]);

      const skillsIds = selectedSkills.map((selectedSkill) => selectedSkill.id);
      setValue("skills", skillsIds);

      // Update default values in the form
      const currentSkills = form.getValues("skills");
      form.setValue("skills", [...currentSkills, skill.id]);
    }
    // If it already exists, you may want to handle this case or show a message
    // For example, you could log a message or show a notification.
  };
  const handleSkillDelete = (skillId) => {
    // Remove the skill from selectedSkills
    const updatedSelectedSkills = selectedSkills.filter(
      (selectedSkill) => selectedSkill.id !== skillId
    );
    setSelectedSkills(updatedSelectedSkills);

    // Update the default values in the form
    const currentSkills = form.getValues("skills");
    const updatedSkills = currentSkills.filter((id) => id !== skillId);
    form.setValue("skills", updatedSkills);
  };

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await dispatch(addJob(data));
      dispatch(getJobs());
      reset();
      setSelectedSkills([]);
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
        <div className="w-full">
          <p>Phone Number</p>
          <input
            name="phoneNumber"
            {...register("phoneNumber", {
              required: {
                value: true,
                message: " Required",
              },
            })}
            type="text"
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
            placeholder="Phone Number"
          />
          {errors.phoneNumber && (
            <p className="text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>
      <div>
        <p>Skills</p>
        <div className="relative">
          <input
            value={skillsSearch}
            name="phoneNumber"
            type="text"
            className="w-full p-2 focus:outline-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
            placeholder="skills"
            onChange={handleSkillsSearch}
          />{" "}
          {filteredSkills && filteredSkills.length > 0 && (
            <div className="space-y-2 absolute top-12 w-full bg-white border my-1 drop-shadow-md  rounded max-h-[250px] overflow-auto">
              {filteredSkills.map((skill) => {
                return (
                  <p
                    onClick={() => handleSkillSelect(skill)}
                    className="hover:bg-slate-200 py-1 px-2"
                    key={skill.id}
                  >
                    {skill.name}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-2">
          {selectedSkills &&
            selectedSkills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="py-[1px] px-2 rounded-md bg-gray-200 flex gap-2"
                >
                  {skill.name}{" "}
                  <button onClick={() => handleSkillDelete(skill.id)}>
                    {" "}
                    <CloseIcon className="text-sm hover:text-red-500" />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      <div>
        <p> Job description</p>
        <textarea
          name="about"
          {...register("about", {
            required: {
              value: true,
              message: " Required",
            },
            validate: {
              minLength: (value) =>
                value.length > 70 ||
                "description must be at least 70 charachter",
            },
          })}
          type="file"
          className="w-full p-2 focus:outline-none h-[200px]  focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
          placeholder="Job description"
        />
        {errors.about && <p className="text-red-500">{errors.about.message}</p>}
      </div>
      <Button disabled={status === "pending"} className="w-full">
        {status === "loading" ? "loadding..." : "Add certification"}
      </Button>
    </form>
  );
};
export default AddJobForm;
