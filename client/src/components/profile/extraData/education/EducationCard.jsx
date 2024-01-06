import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const EducationCard = ({ education }) => {
  return (
    <p className="py-1 font-semibold">
      {education?.description}
      {" - "} {education?.university?.name}
      <span className="font-light px-1">
        {education.start_date.split("-")[0]}
        {" - "}
        {education.end_date.split("-")[0]}
      </span>
      {education.graduated && (
        <CheckCircleIcon className="text-green-400 -mt-1 mx-2" />
      )}
    </p>
  );
};
export default EducationCard;
