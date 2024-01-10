import { useSelector } from "react-redux";
import ExtraDataContainer from "../ExtraDataContainer";
import CertificationsCard from "./CertificationsCard";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AddCertification from "../../editForms/certification/AddCertification";
import Modal from "@/shared/Modal";
import EditCertifications from "./EditCertifications";

const Certifications = () => {
  const certification = useSelector(
    (state) => state.certification.getCertification.certifications
  );

  return (
    <ExtraDataContainer>
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-xl">certification</h3>
        {certification && certification.length > 0 && (
          <div className="flex items-center gap-1">
            <Modal
              className={"overflow-auto"}
              openBtn={<BorderColorOutlinedIcon className="text-lg" />}
            >
              {" "}
              <EditCertifications />
            </Modal>

            <Modal
              className={"overflow-auto"}
              title={"add certificat"}
              openBtn={<ControlPointOutlinedIcon className="text-xl" />}
            >
              {" "}
              <AddCertification />
            </Modal>
          </div>
        )}
      </div>
      <div className="space-y-4">
        {certification && certification.length > 0 ? (
          certification.slice(0, 2).map((certification) => {
            return (
              <CertificationsCard
                key={certification.name}
                certification={certification}
              />
            );
          })
        ) : (
          <div className="min-h-[200px] grid place-content-center">
            <Modal
              className={"overflow-auto"}
              title={"add certificat"}
              openBtn={<ControlPointOutlinedIcon className="text-5xl" />}
            >
              {" "}
              <AddCertification />
            </Modal>
          </div>
        )}
      </div>
      {certification && certification.length > 2 && (
        <div className="flex justify-center">
          <Modal
            className={"overflow-auto"}
            openBtn={
              <button className=" text-lightGreen text-center underline ">
                Show {certification.length - 2} more certification
              </button>
            }
          >
            <div className="space-y-3">
              <h3 className="font-bold text-xl">certification</h3>

              {certification.map((certification) => {
                return (
                  <>
                    <CertificationsCard
                      key={certification.name}
                      certification={certification}
                    />{" "}
                    <hr />
                  </>
                );
              })}
            </div>
          </Modal>
        </div>
      )}
    </ExtraDataContainer>
  );
};
export default Certifications;
