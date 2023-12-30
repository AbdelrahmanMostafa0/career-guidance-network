import { useSelector } from "react-redux";
import Skills from "./extraData/Skills";
import Experience from "./extraData/Experience";
import Education from "./extraData/Education";
import AboutMe from "./extraData/AboutMe";
import ContactInfo from "./extraData/ContactInfo";

const ExtraData = () => {
  const userData = useSelector((state) => state.userData.userData);
  console.log(userData);
  return (
    <section className=" space-y-4">
      {/* -----------------------------------Skills and school-------------------------- */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        <Skills />
        <Education />
      </div>

      {/* -------------------------------about and badges----------------------- */}
      <div className="flex flex-col md:flex-row gap-4">
        <AboutMe />
        <ContactInfo />
      </div>
      {/* ------------------------------ skills & experiance & contact info -------------------------- */}
      <div className="flex flex-col  md:flex-row gap-4">
        <Experience />
        <Skills />
      </div>
    </section>
  );
};
export default ExtraData;
