import AddCertification from "../../editForms/certification/AddCertification";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import ExtraDataContainer from "../ExtraDataContainer";
import Modal from "@/shared/Modal";
import ExperienceCard from "./ExperienceCard";
import { useSelector, useDispatch } from "react-redux";
import { getExp } from "@/redux/features/user/experienceSlice";
import { useEffect } from "react";
import AddExp from "../../editForms/experience/AddExp";
const Experience = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getExp());
  }, []);
  const experiances = useSelector((state) => state.experience.getExp.exps);
  console.log(experiances);
  const data = {
    school: "computer science - Helwan University ",
    grad: true,
    schoolTime: "2018-2023",
    tags: ["js", "html", "css", "frontend", "git"],
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam libero, dolores facilis similique dolore voluptatum enim! Facere maxime impedit ad quis consectetur mollitia corporis! Nulla, est. Alias, dolores nisi. Eaque tempore, eligendi modi quas facilis laborum iusto magnam voluptates. Autem possimus illo animi consequatur atque doloremque unde voluptatem adipisci.",
    experiance: [
      {
        id: 3,
        title: "fontend developer",
        monthes: 3,
        active: true,
        type: "full-time",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur illo iure dolorum autem voluptates explicabo. Cupiditate molestias eius voluptate.",
      },
      {
        id: 4,
        title: "fontend developer",
        monthes: 3,
        active: true,
        type: "full-time",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur illo iure dolorum autem voluptates explicabo. Cupiditate molestias eius voluptate.",
      },
    ],
  };
  return (
    <ExtraDataContainer>
      <h3 className="font-bold text-xl">Experience</h3>
      {experiances && experiances.length > 0 ? (
        data.experiance.map((exp, index) => {
          return <ExperienceCard exp={exp} key={exp.id} />;
        })
      ) : (
        <div className="min-h-[200px] grid place-content-center">
          <Modal
            className={"overflow-auto"}
            title={"Add Experience"}
            openBtn={
              <button>
                <ControlPointOutlinedIcon className="text-5xl" />
              </button>
            }
          >
            {" "}
            <AddExp />
          </Modal>
        </div>
      )}
    </ExtraDataContainer>
  );
};
export default Experience;
