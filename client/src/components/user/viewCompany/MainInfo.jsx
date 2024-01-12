import SectionContainer from "@/shared/SectionContainer";

const MainInfo = ({ companyData }) => {
  return (
    <SectionContainer
      className={"flex flex-col py-12 gap-2 items-center justify-center"}
    >
      <img
        src={companyData.imgUrl || "/avatar.jpg"}
        alt="user-image"
        className="max-h-[150px] rounded-full object-cover"
      />
      <h1 className="capitalize font-semibold text-2xl tracking-wide text-darkBlue text-center">
        {companyData.name}
      </h1>
    </SectionContainer>
  );
};
export default MainInfo;
