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
  };
  return (
    <section className=" space-y-4">
      {/* -----------------------------------tags and school-------------------------- */}
      <div className="flex gap-4 items-stretch">
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
      <div className="flex gap-4">
        <div className="p-5 bg-white w-7/12 space-y-2 rounded-lg">
          <h3 className="font-bold text-xl">About</h3>
          <p className="leading-loose">{data.about}</p>
        </div>
        <div className="p-5 bg-white space-y-2 rounded-lg w-5/12">
          <h3 className="font-bold text-xl">Badges</h3>
        </div>
      </div>
      {/* skills & experiance & contact info */}
      <div className="flex gap-4">
        <div className="p-5 bg-white w-7/12 space-y-2 rounded-lg">
          <h3 className="font-bold text-xl">Top Skills</h3>
        </div>
        <div className="p-5 bg-white w-7/12 space-y-2 rounded-lg">
          <h3 className="font-bold text-xl">Experience</h3>
        </div>
        <div className="p-5 bg-white w-7/12 space-y-2 rounded-lg">
          <h3 className="font-bold text-xl">Contact info</h3>
        </div>
      </div>
    </section>
  );
};
export default ExtraData;
