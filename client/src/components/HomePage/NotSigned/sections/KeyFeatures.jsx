import { CheckSharp } from "@mui/icons-material";
import React from "react";

const KeyFeatures = () => {
  return (
    <section className="my-3  p-7   space-y-10 ">
      <h3 className="text-center  text-5xl font-bold text-darkBlue">
        {" "}
        Our Key Features
      </h3>
      <div className="flex flex-col md:flex-row  justify-between items-stretch gap-10">
        <div className="md:border md:w-1/2 py-10 md:p-10 rounded-lg bg-white md:drop-shadow-md space-y-6">
          <h4 className="text-3xl font-semibold md:text-start text-center">
            Connecting Students
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              {" "}
              <CheckSharp />
              <div className="space-y-2">
                <p className="text-xl font-medium">Showcase Skills.</p>
                <p className="w-[90%]">
                  Create a standout profile. Highlight your skills, experience,
                  and projects to catch the eye of potential employers
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              {" "}
              <CheckSharp />
              <div className="space-y-2">
                <p className="text-xl font-medium">Employer Opportunities</p>
                <p className="w-[90%]">
                  Companies, find the best talent for your openings. Post
                  internship and job opportunities to discover the next
                  generation of professionals.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              {" "}
              <CheckSharp />
              <div className="space-y-2">
                <p className="text-xl font-medium">Networking.</p>
                <p className="w-[90%]">
                  Expand your professional network by connecting with industry
                  professionals and fellow students. Forge valuable connections
                  that can open doors to new opportunities and insights.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* --------------------------------------------------------------- */}
        <div className="md:border md:w-1/2 py-10 md:p-10 rounded-lg bg-white md:drop-shadow-md space-y-6">
          <h4 className="text-3xl font-semibold md:text-start text-center">
            Career Guidance
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              {" "}
              <CheckSharp />
              <div className="space-y-2">
                <p className="text-xl font-medium">Roadmap</p>
                <p className="w-[90%]">
                  Access career roadmaps for various fields of choice.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              {" "}
              <CheckSharp />
              <div className="space-y-2">
                <p className="text-xl font-medium">Project Ideas</p>
                <p className="w-[90%]">
                  Explore project ideas to sharpen your skills and gain
                  practical experience.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              {" "}
              <CheckSharp />
              <div className="space-y-2">
                <p className="text-xl font-medium">Industry Insights</p>
                <p className="w-[90%]">
                  Stay informed about industry trends and insights relevant to
                  your career. Access curated content and updates to keep your
                  knowledge current and relevant.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
