import SectionContainer from "@/shared/SectionContainer";
import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EducationCard from "@/components/profile/extraData/education/EducationCard";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import CertificationsCard from "@/components/profile/extraData/certifications/CertificationsCard";
import Modal from "@/shared/Modal";
import ReactTimeAgo from "react-time-ago";
import PojectCard from "@/components/profile/projects/PojectCard";
const CompanyViewUser = ({ userData }) => {
  return (
    <div className="bg-gray-100">
      <div className="md:w-[88%] max-w-[1800px] mx-[10px] md:mx-auto   min-h-[100dvh] py-5 space-y-4  gap-4  ">
        <SectionContainer
          className={"flex flex-col justify-center items-center"}
        >
          <img
            src={userData?.profileImgUrl || "/avatar.jpg"}
            alt="user-image"
            className="max-h-[150px] rounded-full object-cover"
          />
          <h1 className="capitalize font-semibold text-2xl tracking-wide text-darkBlue text-center">
            {userData?.firstName + " " + userData?.lastName}
            {""}
          </h1>
          <p className="text-lightBlue">{userData?.title?.name}</p>
          <div className="flex  justify-center items-center gap-4">
            {userData?.linkedinLink && (
              <a
                href={userData?.linkedin}
                title={userData?.linkedin}
                className="flex gap-2 items-end"
                target="_blank"
              >
                <LinkedInIcon />
                <p>LinkedIn</p>
              </a>
            )}
            {userData?.githubLink && (
              <a
                href={userData?.github}
                target="_blank"
                title={userData?.github}
                className="flex gap-2 items-end"
              >
                <GitHubIcon />
                GitHub
              </a>
            )}
            <div className="flex items-center text-center gap-2 flex-col md:flex-row ">
              <p className="text-xl font-semibold">
                {userData.projects?.length}
              </p>
              {/* <LightbulbOutlinedIcon /> */}

              <p> Projects</p>
            </div>
          </div>
        </SectionContainer>
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          <SectionContainer>
            <h3 className="font-bold text-xl ">Skills</h3>
            {userData.skills.length > 0 ? (
              <div className="flex flex-wrap justify-start items-center -mt-2 gap-2">
                {userData?.skills.map((skill, index) => {
                  return (
                    <div
                      key={skill.id}
                      className="bg-gray-100 py-1 px-3 rounded-lg font-semibold"
                    >
                      {skill.name}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="grid place-content-center min-h-[50px] text-center">
                no skills
              </div>
            )}
          </SectionContainer>
          <SectionContainer>
            <h3 className="font-bold text-xl ">Education</h3>
            {/* <EducationCard education={education[0]} key={education[0].id} /> */}
          </SectionContainer>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <SectionContainer className={"md:w-7/12"}>
            <h3 className="font-bold text-xl ">About</h3>
            {userData.about ? (
              <p> {userData.about}</p>
            ) : (
              <div className="grid place-content-center min-h-[120px]">
                no about
              </div>
            )}
          </SectionContainer>
          <SectionContainer className={"md:w-5/12"}>
            <h3 className="font-bold text-xl ">Contact info</h3>
            <div className="space-y-5 h-full flex flex-col justify-center pb-3">
              <p className=" flex items-center gap-2 text-xl">
                <LocalPhoneIcon className="text-3xl text-lightBlue" />{" "}
                <span>-</span> <span>{userData?.phoneNumber}</span>
              </p>
              <p className="flex items-center gap-2 text-xl">
                <EmailIcon className="text-3xl text-lightBlue" />
                <span>-</span>{" "}
                <span className="break-words break-all	">
                  {" "}
                  {userData?.email}
                </span>
              </p>
            </div>
          </SectionContainer>
        </div>
        <div className="flex flex-col  md:flex-row gap-4">
          <SectionContainer>
            <h3 className="font-bold text-xl ">Experience</h3>
            {userData.experiences.length > 0 ? (
              userData.experiences.slice(0, 2).map((exp) => {
                return (
                  <div className="space-y-1">
                    <h4 className="font-bold">
                      <span className="capitalize">
                        {exp.title.name || exp.title}
                      </span>
                      {"  "}{" "}
                      <span className="font-light text-sm">
                        {exp.currentFlag ? (
                          <span className="font-sans">
                            <ReactTimeAgo
                              date={new Date(exp.fromDate)}
                              locale="en-US"
                            />{" "}
                            - Current
                          </span>
                        ) : (
                          <span>
                            {exp.fromDate} - {exp.toDate}
                          </span>
                        )}
                        {"  "}
                      </span>
                    </h4>
                    <p className="text-darkGreen">
                      {" "}
                      {exp.employment_type} - {exp.location_type}{" "}
                    </p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                );
              })
            ) : (
              <div className="grid place-content-center min-h-[120px]">
                no Experience
              </div>
            )}
            {userData.certifications.length > 2 && (
              <div className="flex justify-center">
                <Modal
                  className={"overflow-auto"}
                  openBtn={
                    <div className=" text-lightGreen text-center underline ">
                      Show {userData.experiences.length - 2} more Experience
                    </div>
                  }
                >
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl">Experience</h3>

                    {userData.experiences.map((exp) => {
                      return (
                        <div className="space-y-1">
                          <h4 className="font-bold">
                            <span className="capitalize">
                              {exp.title.name || exp.title}
                            </span>
                            {"  "}{" "}
                            <span className="font-light text-sm">
                              {!exp.currentFlag ? (
                                <span>
                                  <ReactTimeAgo
                                    date={new Date(exp.fromDate)}
                                    locale="en-US"
                                  />{" "}
                                  - Current
                                </span>
                              ) : (
                                <span>
                                  {exp.fromDate} - {exp.toDate}
                                </span>
                              )}
                              {"  "}
                            </span>
                          </h4>
                          <p className="text-darkGreen">
                            {" "}
                            {exp.employment_type} - {exp.location_type}{" "}
                          </p>
                          <p className="text-sm">{exp.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </Modal>
              </div>
            )}
          </SectionContainer>
          <SectionContainer>
            <h3 className="font-bold text-xl ">certification</h3>
            {userData.certifications.length > 0 ? (
              userData.certifications.slice(0, 2).map((certification) => {
                return (
                  <CertificationsCard
                    key={certification.id}
                    certification={certification}
                  />
                );
              })
            ) : (
              <div className="grid place-content-center min-h-[120px]">
                no certifications
              </div>
            )}
            {userData.certifications.length > 2 && (
              <div className="flex justify-center">
                <Modal
                  className={"overflow-auto"}
                  openBtn={
                    <div className=" text-lightGreen text-center underline ">
                      Show {userData.certifications.length - 2} more
                      certification
                    </div>
                  }
                >
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl">certification</h3>

                    {userData.certifications.map((certification) => {
                      return (
                        <>
                          <CertificationsCard
                            key={certification.id}
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
          </SectionContainer>
        </div>
        <SectionContainer>
          <h3 className="font-bold text-xl ">
            Projects: {userData.projects.length}
          </h3>
          {userData.projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 2xl   items-stretch justify-items-center gap-8 pb-3    ">
              {userData.projects.map((project, index) => (
                <PojectCard project={project} edit={false} key={index} />
                // <ProjectCardSkelaton key={index} />
              ))}
            </div>
          ) : (
            <div className="grid place-content-center min-h-[120px]">
              No Projects yet
            </div>
          )}
        </SectionContainer>
      </div>
    </div>
  );
};
export default CompanyViewUser;
