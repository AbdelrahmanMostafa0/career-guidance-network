import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ExtraData = () => {
  const tags = ["js", "html", "css", "frontend", "git"];
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
    <section className=" space-y-4">
      {/* -----------------------------------tags and school-------------------------- */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {/* tags */}
        <div
          className="bg-white p-5 rounded-lg
        space-y-2 w-full"
        >
          <h3 className="font-bold text-xl">Tags</h3>
          <div className="flex flex-wrap justify-start items-center gap-2">
            {data.tags.map((tag) => {
              return (
                <div className="bg-gray-100 py-1 px-3 rounded-lg font-semibold">
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white space-y-2 p-5 rounded-lg w-full">
          <h3 className="font-bold text-xl">School</h3>
          <p className="py-1 font-semibold">
            {data.school} <span className="font-light">{data.schoolTime}</span>
            {data.grad && (
              <CheckCircleIcon className="text-green-400 -mt-1 mx-2" />
            )}
          </p>
        </div>
      </div>
      {/* -------------------------------about and badges----------------------- */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="p-5 bg-white md:w-7/12 space-y-2 rounded-lg">
          <h3 className="font-bold text-xl">About</h3>
          <p className="leading-loose">{data.about}</p>
        </div>
        <div className="p-5 bg-white space-y-2 rounded-lg md:w-5/12">
          <h3 className="font-bold text-xl">Badges</h3>
        </div>
      </div>
      {/* skills & experiance & contact info */}
      <div className="flex flex-col  md:flex-row gap-4">
        <div className="p-5 bg-white w-full space-y-2 rounded-lg">
          <h3 className="font-bold text-xl">Top Skills</h3>
        </div>
        <div className="p-5 bg-white w-full  space-y-2 rounded-lg">
          <h3 className="font-bold text-xl">Experience</h3>
          {data.experiance.map((exp) => {
            return (
              <div>
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
        </div>
        <div className="p-5 bg-white w-full space-y-2 rounded-lg">
          <h3 className="font-bold text-xl">Contact info</h3>
        </div>
      </div>
    </section>
  );
};
export default ExtraData;
