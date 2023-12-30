import ExtraDataContainer from "./ExtraDataContainer";

const Experience = () => {
  const data = {
    school: "computer science - Helwan University ",
    grad: true,
    schoolTime: "2018-2023",
    tags: ["js", "html", "css", "frontend", "git"],
    about:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quibusdam libero, dolores facilis similique dolore voluptatum enim! Facere maxime impedit ad quis consectetur mollitia corporis! Nulla, est. Alias, dolores nisi. Eaque tempore, eligendi modi quas facilis laborum iusto magnam voluptates. Autem possimus illo animi consequatur atque doloremque unde voluptatem adipisci.",
    experiance: [
      {
        title: "fontend developer",
        monthes: 3,
        active: true,
        type: "full-time",
        description:
          " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur illo iure dolorum autem voluptates explicabo. Cupiditate molestias eius voluptate.",
      },
      {
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
      {data.experiance.map((exp, index) => {
        return (
          <div key={index}>
            <h4 className="font-bold">
              <span className="capitalize">{exp.title}</span>
              {"  "}{" "}
              <span className="font-light text-sm">
                {"  "}
                {exp.monthes + " " + "Month"} {exp.active && "- Currunt"}
              </span>
            </h4>
            <p className="text-darkGreen"> {exp.type} </p>
            <p className="text-sm">{exp.description}</p>
          </div>
        );
      })}
    </ExtraDataContainer>
  );
};
export default Experience;
