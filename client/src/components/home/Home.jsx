import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/home.module.css";

export default function Home() {
  const [howItWorks, setHowItWorks] = useState("student");

  function toggle() {
    setHowItWorks((prev) => (prev === "student" ? "company" : "student"));
  }

  return (
    <main className={styles.mainContainer}>
      <section className={`${styles.section} ${styles.heroSection} mt-16`}>
        <h1>
          CGN is Your <span>way to success</span>
        </h1>
        <img className="justify-items-end" src="cgn.png" />
        <p>
          Empower your career journey with Carrer Guidance Network. Connect,
          collaborate, and thrive in our vibrant professional community. Your
          next opportunity awaits here. Join us today!
        </p>
        <Link href="#">Get Started</Link>
      </section>

      <section className={`${styles.section} ${styles.howItWorksSection}`}>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Get a Career</h3>
            <img src="build.png" />
            <p>
              Discover your dream career with us as We connect talented
              professionals with top opportunities, making job hunting simple
              and rewarding. Your future starts here
            </p>
          </div>
          <div className={styles.card}>
            <h3>Stay ahead</h3>
            <img src="learn.png" />
            <p>
              Stay ahead with us and Access a curated Roadmap and expert
              insights to master the latest skills. Empower your professional
              growth and embrace a future of endless possibilities
            </p>
          </div>
          <div className={styles.card}>
            <h3>Get your first job</h3>
            <img src="job.png" />
            <p>
              Kickstart your career journey with us and Access tailored
              resources and entry-level opportunities and expert advice to land
              your first job. Your path to success begins here
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.roadmapSection}`}>
        <h2>Visit our Roadmaps</h2>
        <div className={styles.careersContainer}>
          <div className={styles.career}>
            <h3>Front-end career path</h3>
            <p>
              Explore the art of user interaction with Front-End Development.
              Learn to create seamless user experiences, design intuitive
              interfaces, and bring websites to life
            </p>
          </div>
          <div className={styles.career}>
            <h3>Back-end career path</h3>
            <p>
              Delve into the heart of web technology with Back-End
              Development.Discover the world of server-side programming like
              databases and server management
            </p>
          </div>
          <div className={styles.career}>
            <h3>Software engineer career path</h3>
            <p>
              Embark on a transformative journey in Software Engineering. Master
              the art and science of developing high-quality software solutions
            </p>
          </div>
        </div>
        <Link href="#">Discover Now</Link>
      </section>
    </main>
  );
}
