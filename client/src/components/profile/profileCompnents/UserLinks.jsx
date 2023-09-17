import { AiFillLinkedin } from "react-icons/ai";

const UserLinks = () => {
  return (
    <div className="w-full h-full col-span-2 md:grid grid-cols-2 gap-5 p-5">
      <div className="p-7 border-2 max-h-[400px] space-y-5 rounded-xl bg-white drop-shadow-xl">
        <h3 className="font-semibold text-4xl">About me</h3>
        <p className="leading-loose text-lg font-light">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae in
          cupiditate laboriosam officia suscipit corrupti culpa, vel alias
          magnam autem nisi non odio necessitatibus veritatis pariatur, iste ut,
          illum praesentium delectus! Ea, sint? Rem distinctio voluptatum
          sapiente, similique non unde?
        </p>
      </div>
      <div className="flex justify-between gap-4 ">
        <div className="w-96 h-96 border">
          <AiFillLinkedin />
        </div>
        <div className="w-96 h-96 border"></div>
      </div>
    </div>
  );
};
export default UserLinks;
