import React, { useState } from "react";
import Link from "next/link";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "../../styles/viewjob.module.css";

export default function ViewJob() {
  return (
    <div className={styles.container}>
      <header className={`${styles.header} ${styles.flow}`}>
        <div className={`${styles.firstCol} ${styles.flow}`}>
          <div className={`${styles.companyInfo} ${styles.flow}`}>
            <img
              className={styles.companyLogo}
              src="companylogo.png"
              alt="company logo"
            />
            <h1>Company Name</h1>
          </div>
          <div className={`${styles.companyDetails} ${styles.flow}`}>
            <div>
              <h2>Job Title </h2>
              <p>Front End Dev</p>
            </div>
            <div>
              <h5>Website</h5>
              <Link href="#">example.com</Link>
            </div>
            <div>
              <h5>Location</h5>
              <p>Nasr city, Cairo</p>
            </div>
            <div>
              <h5>Company size</h5>
              <p>50 Employees</p>
            </div>
          </div>
        </div>
        <div className={styles.secondCol}>
          <button className={styles.followBtn}>Follow</button>
          <button className={styles.applyBtn}>Apply</button>
        </div>
      </header>
      <main className={`${styles.mainContainer} ${styles.flow}`}>
        <section className={`${styles.jobDescriptionSection} ${styles.flow}`}>
          <h2>Job Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Sed scelerisque quam
            pellentesque ut augue massa orci pellentesque. Non viverra imperdiet
            aenean viverra consequat quam nisl tempor. Vestibulum montes
            suspendisse non porttitor tortor sed mollis risus pharetra.
            Adipiscing mauris ornare quis vitae et semper mollis eget magna.
            Lorem ipsum dolor sit amet consectetur. Sed scelerisque quam
            pellentesque ut augue massa orci pellentesque. Non viverra imperdiet
            aenean viverra consequat quam nisl tempor. Vestibulum montes
            suspendisse non porttitor tortor sed mollis risus pharetra.
            Adipiscing mauris ornare quis vitae et semper mollis eget magna.
            Lorem ipsum dolor sit amet consectetur. Sed sceleris que ut augue
            massa orci pellentesque. Non viverra imperdiet aenean viverra
            consequat quam nisl tempor. Vestibulum montes suspendisse non
            porttitor tortor sed mollis risus pharetra. Adipiscing mauris ornare
            quis vitae et semper mollis eget
          </p>
        </section>
        <section className={`${styles.jobSkillsSection} ${styles.flow}`}>
          <h2>Job Skills</h2>
          <div className={styles.groupOfSkills}>
            <p>
              <CheckCircleIcon className={styles.checkIcon} />
              HTML
            </p>
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
