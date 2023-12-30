import ExtraDataContainer from "./ExtraDataContainer";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Education = () => {
  const data = {
    school: "computer science - Helwan University ",
    grad: true,
    schoolTime: "2018-2023",
    tags: ["js", "html", "css", "frontend", "git"],
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam libero, dolores facilis similique dolore voluptatum enim! Facere maxime impedit ad quis consectetur mollitia corporis! Nulla, est. Alias, dolores nisi. Eaque tempore, eligendi modi quas facilis laborum iusto magnam voluptates. Autem possimus illo animi consequatur atque doloremque unde voluptatem adipisci.",
  };
  return (
    <ExtraDataContainer>
      <h3 className="font-bold text-xl">School</h3>
      <p className="py-1 font-semibold">
        {data.school} <span className="font-light">{data.schoolTime}</span>
        {data.grad && <CheckCircleIcon className="text-green-400 -mt-1 mx-2" />}
      </p>
    </ExtraDataContainer>
  );
};
export default Education;
