import GitHubIcon from "@mui/icons-material/GitHub";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const PojectCard = ({ data }) => {
  return (
    <div className="w-[350px] overflow-hidden space-y-3 rounded-2xl drop-shadow-lg bg-white  border">
      <img src={data.img} alt="" className="w-full h-[240px] object-cover" />
      <div className="px-5 space-y-6 py-4">
        <h4 className="text-md font-semibold">{data.title}</h4>
        <p>
          {data.description.slice(0, 60)}
          {data.description.length > 60 && "....."}
        </p>
        {/* links */}
        <div className="flex justify-start items-center">
          <div className="flex items-center gap2">
            {data.liveDemo && (
              <div className="px-3 py-1 bg-gray-100 text-sm font-semibold rounded-full">
                Live Demo <RemoveRedEyeIcon className="text-sm" />
              </div>
            )}
            {data.github && (
              <div className="px-3 py-1 bg-gray-100 text-sm font-semibold rounded-full">
                github <GitHubIcon className="text-sm" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PojectCard;
