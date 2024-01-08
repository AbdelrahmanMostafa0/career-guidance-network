import { useSelector } from "react-redux";
import CertificationsCard from "./CertificationsCard";

const EditCertifications = () => {
  const certification = useSelector(
    (state) => state.certification.getCertification.certifications
  );
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-xl">certification</h3>

      {certification.map((certification) => {
        return (
          <>
            <CertificationsCard
              key={certification.id}
              edit={true}
              certification={certification}
            />{" "}
            <hr />
          </>
        );
      })}
    </div>
  );
};
export default EditCertifications;
