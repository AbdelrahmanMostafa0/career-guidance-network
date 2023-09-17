const UserInfo = () => {
  return (
    <div className="flex flex-col h-fit md:h-[90dvh] md:justify-between  items-center md:items-start space-y-4 ">
      <div className="space-y-3 md:block flex flex-col items-center">
        <img
          src="/user.jpg"
          alt=""
          className="w-64 h-64 object-cover rounded-full"
        />
        <h3 className="text-5xl font-extrabold text-center md:text-start">
          Abdo Mostafa
        </h3>
        <p className="max-w-[80%] font-bold text-lightGreen">
          Front End Developer
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex gap-3">
          <div className="border-2 px-3 py-2 md:min-w-[250px] rounded-lg flex items-center">
            cgn.com/<span className="font-semibold">abdomostafa</span>
          </div>
          <button className="py-1 px-3 bg-darkBlue text-white font-semibold rounded-lg cursor-pointer">
            {" "}
            Copy link
          </button>
        </div>
        <div className="hidden md:block cursor-pointer">
          <p className="text-red-500 font-semibold">Log Out</p>
        </div>
      </div>
    </div>
  );
};
export default UserInfo;
