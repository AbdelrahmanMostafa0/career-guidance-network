const CompanyJobDetails = ({ job }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold">
        {job.title + " - " + job?.employment_type}
      </h3>
    </div>
  );
};
export default CompanyJobDetails;
