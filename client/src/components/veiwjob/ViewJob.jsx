import React, { useState } from "react";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "../../styles/viewjob.module.css";
import Modal from "@/shared/Modal";
import ApplayForm from "./ApplayForm";

export default function ViewJob({ jobData }) {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.flow}`}>
        <div className={`${styles.firstCol} ${styles.flow}`}>
          <div className={`${styles.companyInfo} ${styles.flow}`}>
            <img
              className={"h-52 mx-auto md:mx-0 w-52 rounded-full object-cover "}
              src="companylogo.png"
              alt="company logo"
            />
            <h1>{jobData?.company?.name}</h1>
          </div>
          <div
            className={`flex items-center md:justify-start justify-center flex-wrap gap-10 `}
          >
            <div>
              <h2 className="text-xl font-bold">Job Title </h2>
              <p>{jobData?.title?.name}</p>
            </div>
            <div>
              <h5 className="text-xl font-bold">Website</h5>
              <Link className="text-blue-500" href="#">
                example.com
              </Link>
            </div>
            <div>
              <h5 className="text-xl font-bold">Location</h5>
              <p>Nasr city, Cairo</p>
            </div>
            <div>
              <h5 className="text-xl font-bold">Company size</h5>
              <p>50 Employees</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-end items-end">
          <Modal
            openBtn={
              <span className="bg-lightGreen text-white px-6 py-2 rounded-md cursor-pointer">
                apply
              </span>
            }
          >
            <ApplayForm jobData={jobData} />
          </Modal>
        </div>
      </header>
      <main className={`${styles.mainContainer} ${styles.flow}`}>
        <section className={`${styles.jobDescriptionSection} ${styles.flow}`}>
          <h2>Job Description</h2>
          <p className="">
            {jobData.about.split("\n").map((line, index) => (
              <span key={index}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </section>
        <section className={`${styles.jobSkillsSection} ${styles.flow}`}>
          <h2>Job Skills</h2>
          <div
            style={{
              padding: "20px",
            }}
            className={styles.groupOfSkills}
          >
            {jobData.skills.map((skill) => {
              return (
                <p>
                  <CheckCircleIcon className={styles.checkIcon} />
                  {skill.name}
                </p>
              );
            })}
          </div>
        </section>
        <section className={`${styles.suggestedRoadmapSection}`}>
          <h2>Suggested Roadmap</h2>
          <Link href="#">
            <div className={styles.suggestedRoadmap}>
              <h3>Front End Roadmap</h3>
              <p>
                pharetra. Adipiscing mauris ornare quis vitae et semper mollis
                eget{" "}
              </p>
            </div>
          </Link>
        </section>
        <section className={styles.similarJobsSections}></section>
      </main>
    </div>
  );
}
