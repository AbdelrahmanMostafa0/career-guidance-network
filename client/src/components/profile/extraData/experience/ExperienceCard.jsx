const ExperienceCard = ({ exp }) => {
  const calculateTheExpDuration = (startDate, endDate = new Date()) => {
    if (!endDate) {
      endDate = new Date();
    }
    const yearsDifference = endDate.getFullYear() - startDate.getFullYear();
    const monthsDifference = endDate.getMonth() - startDate.getMonth();
    let result;

    if (yearsDifference > 0) {
      if (monthsDifference < 0) {
        result = `${yearsDifference - 1} year and ${
          monthsDifference + 12
        } months`;
      } else {
        result = `${yearsDifference} year and ${monthsDifference} months`;
      }
    } else {
      result = `${monthsDifference} months`;
    }
    return result;
  };

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
};
export default ExperienceCard;
