import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/home.module.css";
import Lottie from "lottie-react";
// import Card from "./Card/Card";
// import PathCard from "./PathCard/PathCard";

export default function Home() {
  const [howItWorks, setHowItWorks] = useState("student");

  function toggle() {
    setHowItWorks(prev => prev === "student" ? "company" : "student")
  }

  return (
    <main className={styles.mainGrid}>
      <section className={`${styles.section} ${styles.heroSection}`}>
        <h1>CGN is Your way to success</h1>
        <img src="cgn.png" />
        <p>Empower your career journey with Carrer Guidance Network. Connect, collaborate, and thrive in our vibrant professional community. Your next opportunity awaits here. Join us today!</p>
        <Link href="#">Get Started</Link>
      </section>

      <section className={`${styles.section} ${styles.howItWorksSection}`}>
        {/* <h2>How it Works</h2> */}
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h3>Get Ready For a Career</h3>
            <img src="build.png" />
            <p>Discover your dream career with us as We connect talented professionals with top opportunities, making job hunting simple and rewarding. Your future starts here</p>
          </div>
          <div className={styles.card}>
            <h3>Know The Latest Skills</h3>
            <img src="learn.png"/>
            <p>Stay ahead with us and Access a curated Roadmap and expert insights to master the latest skills. Empower your professional growth and embrace a future of endless possibilities</p>
          </div>
          <div className={styles.card}>
            <h3>Get your first job</h3>
            <img src="job.png"/>
            <p>Kickstart your career journey with us and Access tailored resources and entry-level opportunities and expert advice to land your first job. Your path to success begins here</p>
          </div>
        </div>
      </section>

      <section>
        {/* <h2>Visit our Roadmap</h2> */}
      </section>
    </main>
  );
}
