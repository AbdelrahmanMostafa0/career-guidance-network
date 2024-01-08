import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { getUserData } from "@/redux/features/user/userProfileSlice";
import { deleteSkill } from "@/redux/features/user/SkillsSlice";

const MySkills = () => {
  const userData = useSelector((state) => state.userData.userData);
  const dispatch = useDispatch();
  const handleDelete = async (skillId) => {
    try {
      // Dispatch the addSkills action and wait for it to complete
      await dispatch(deleteSkill(skillId));

      dispatch(getUserData());
      // After addSkills is completed, dispatch getUserData
    } catch (error) {
      // Handle errors if necessary
      console.error("Error adding skills:", error);
    }
  };
  // deleteSkill
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {userData.skills.map((skill) => {
        return (
          <div
            key={skill.id}
            className="border rounded-full t px-3 py-[2px] bg-white drop-shadow-sm flex gap-2 justify-between items-center"
          >
            <p>{skill.name}</p>
            <button
              onClick={() => {
                handleDelete(skill.id);
              }}
            >
              <CloseIcon className="text-sm hover:text-red-500" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default MySkills;
