import Modal from "@/shared/Modal";
import ExtraDataContainer from "./ExtraDataContainer";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddSkillForm from "../editForms/skills/AddSkillForm";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { getUserData } from "@/redux/features/user/userProfileSlice";

const AboutMe = () => {
  const data = {
    school: "computer science - Helwan University ",
    grad: true,
    schoolTime: "2018-2023",
    tags: ["js", "html", "css", "frontend", "git"],
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam libero, dolores facilis similique dolore voluptatum enim! Facere maxime impedit ad quis consectetur mollitia corporis! Nulla, est. Alias, dolores nisi. Eaque tempore, eligendi modi quas facilis laborum iusto magnam voluptates. Autem possimus illo animi consequatur atque doloremque unde voluptatem adipisci.",
  };
  const form = useForm({
    defaultValues: {
      about: "",
    },
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const dispatch = useDispatch();
  const editAbout = async (e) => {
    // e.preventDefault();

    async () => {
      // console.log("project id", projectId);
      const profileData = new FormData();
      profileData.append("profileImgUrl", img);
      try {
        const response = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/user/edit/`,
          data.about,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "application/json", // Specify content type as JSON
            },
          }
        );
        return response.data;
      } catch (error) {
        throw error.response.data;
      }
    };
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("about", data.about);
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/edit/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data", // Specify content type as JSON
          },
        }
      );
      dispatch(getUserData());
      return response.data;
    } catch (error) {
      throw error.response;
    }
  };
  const displayedAbout =
    "Frontend Developer with a passion for creating intuitive and visually appealing user interfaces. Proficient in modern web technologies, including HTML, CSS, and JavaScript, with a keen eye for design and usability. Proven track record of delivering high-quality, responsive web applications. Strong collaboration and problem-solving skills, dedicated to staying current with industry trends and best practices. Eager to contribute creativity and technical expertise to dynamic development teams".substring(
      0,
      150
    );
  const showMoreAbout = data.about.length > 150;
  return (
    <ExtraDataContainer className={"md:w-7/12"}>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-xl">About</h3>
        <Modal
          title={"Edit Skill"}
          openBtn={<BorderColorOutlinedIcon className="text-lg" />}
        >
          {" "}
          <form onSubmit={handleSubmit(onSubmit)}>
            <textarea
              name="about"
              {...register("about", {})}
              className="w-full p-2 focus:outline-none h-[200px] resize-none focus:border-darkBlue  border-2 mt-2 text-darkBlue rounded-md"
              placeholder="Certification name"
            />
            <Button
              onClick={() => {
                onSubmit();
              }}
              className="w-full"
            >
              Submit
            </Button>
          </form>
        </Modal>
      </div>
      <p className="leading-loose">
        {displayedAbout}
        {showMoreAbout && " ......."}
      </p>
      {!!showMoreAbout && (
        <div className="flex justify-center items-center">
          <Modal
            openBtn={
              <div className="text-lightGreen text-center underline">
                show more
              </div>
            }
          >
            <p className="leading-loose">
              {
                " Frontend Developer with a passion for creating intuitive and visually appealing user interfaces. Proficient in modern web technologies, including HTML, CSS, and JavaScript, with a keen eye for design and usability. Proven track record of delivering high-quality, responsive web applications. Strong collaboration and problem-solving skills, dedicated to staying current with industry trends and best practices. Eager to contribute creativity and technical expertise to dynamic development teams"
              }
            </p>
          </Modal>
        </div>
      )}
    </ExtraDataContainer>
  );
};
export default AboutMe;
