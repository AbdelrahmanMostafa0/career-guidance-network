import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@/components/ui/button";
import { addSkills } from "@/redux/features/user/SkillsSlice";
import { getUserData } from "@/redux/features/user/userProfileSlice";
import MySkills from "./MySkills";
const AddSkillForm = () => {
  const skills = useSelector((state) => state.SkillsData.skillsData.skills);
  const userData = useSelector((state) => state.userData.userData);

  const addSkillStatus = useSelector(
    (state) => state.SkillsData.addSkills.status
  );
  const [skillsSearch, setSkillsSearch] = useState("");
  const [filteredSkills, setFilteredSkills] = useState();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
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
  const selectSkill = (skill) => {
    setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    setSkillsSearch("");
    setError(false);

    setFilteredSkills(null);
  };
  //   console.log(skills);
  //   console.log(filteredSkills);
  //   console.log(selectedSkills);
  const removeSkill = (skill) => {
    const newSkillsArr = selectedSkills.filter((skills) => skills !== skill);
    setSelectedSkills(newSkillsArr);
  };

  const handleSubmit = async () => {
    const skillsId = selectedSkills.map((skill) => skill.id);

    if (selectedSkills.length > 0) {
      try {
        // Dispatch the addSkills action and wait for it to complete
        await dispatch(addSkills({ skills: skillsId }));
        if (addSkillStatus === "succeeded") {
        }
        setSelectedSkills([]);
        dispatch(getUserData());

        // After addSkills is completed, dispatch getUserData
      } catch (error) {
        // Handle errors if necessary
        console.error("Error adding skills:", error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className="relative space-y-3">
      {/* displayed skills if user have skills */}
      {userData.skills.length > 0 && <MySkills />}
      <div className="relative">
        <input
          value={skillsSearch}
          className={`w-full p-2 border-2 mt-2 text-darkBlue rounded-md ${
            error && "border-red-500"
          }`}
          placeholder="Search a skill"
          type="text"
          onChange={handleSkillsSearch}
        />
        {error && <p className="text-red-500">Select a skill to add</p>}
        {filteredSkills && filteredSkills.length > 0 && (
          <div className="space-y-2 absolute top-12 w-full bg-white border my-1  rounded max-h-[250px] overflow-auto">
            {filteredSkills.map((skill) => {
              return (
                <p
                  onClick={() => selectSkill(skill)}
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
      <div className="flex flex-wrap gap-2">
        {selectedSkills &&
          selectedSkills.length > 0 &&
          selectedSkills.map((skill) => {
            return (
              <p className="border rounded-full t px-2 py-[2px] flex gap-2 justify-between items-center">
                {skill.name}{" "}
                <button onClick={() => removeSkill(skill)}>
                  <CloseIcon className="text-sm hover:text-red-500" />
                </button>
              </p>
            );
          })}
      </div>

      <Button
        disabled={addSkillStatus === "pending"}
        onClick={handleSubmit}
        className="w-full"
      >
        {addSkillStatus === "pending"
          ? "Loading ..."
          : addSkillStatus === "succeeded"
          ? " Skills Added"
          : addSkillStatus === "failed"
          ? "error"
          : addSkillStatus === "idle" && "Add Skills"}
      </Button>
    </div>
  );
};

export default AddSkillForm;
