const Avatar = ({ imgUrl, size }) => {
  return (
    <div className="border">
      <img
        src={imgUrl || "/avatar.jpg"}
        className={`max-w-[500px] rounded-full border-4 shadow-xl border-lightBlue`}
      />
    </div>
  );
};
export default Avatar;
