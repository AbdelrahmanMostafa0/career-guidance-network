import React from "react";
import styles from "../../styles/about.module.css";

export default function About() {
    return (
        <main className={styles.mainContainer}>
            <section className={styles.introSection}>
                <h1>Empowering Futures,<br></br> Connecting Dreams</h1>
                <p>Welcome to Career guidance network, where we're on a mission to redefine the future for students. At our core, we believe in the transformative power of education and the incredible potential that lies within each student. We're here to bridge the gap between the classroom and the professional world, providing a unique platform designed to empower students in their journey toward success.</p>
            </section>
            <section className={styles.aboutSection}>
                <h2>About US</h2>
                <div className={styles.innerAboutSection}>
                    <div className={`${styles.wrapper} ${styles.missionContainer}`}>
                        <div>
                            <h3>Our Mission</h3>    
                            <p>At Career guidance network, we believe in empowering students to shape their future through meaningful connections and valuable opportunities. Our mission is to bridge the gap between education and the professional world, providing a platform where students can showcase their skills, connect with potential employers, and receive guidance on their career journey.</p>
                        </div>
                        <img src="arrow.png" />
                    </div>
                    <div className={styles.wrapper}>
                        <div>
                            <h3>Our Vision</h3>
                            <p>At Career guidance network, we envision a future where every student has equal access to opportunities, regardless of their background. We strive to create a world where the playing field is leveled, empowering students to shape their destinies and build successful futures through meaningful connections and valuable opportunities</p>
                        </div>
                        <img src="eye.png" />
                    </div>
                </div>
            </section>
            <section className={styles.purposeSection}>
                <h2>Why Career guidance network?</h2>
                <div className={styles.purposeWrapper}>
                    <div className={styles.innerPurposeWrapper}>
                        <h3>Connecting Opportunities</h3>
                        <p>We are committed to facilitating connections between students and potential employers. Our platform serves as a dynamic space where students can showcase their skills and connect with companies offering internships and job opportunities. By providing a personalized profile feature, we empower students to stand out, increasing their chances of securing internships and jobs that align with their aspirations.</p>
                    </div>
                    <div className={styles.innerPurposeWrapper}>
                        <h3>Guiding Career Paths</h3>
                        <p>In our commitment to student success, we offer a roadmap for every field of choice. This interactive feature assists students in navigating their career journeys by providing insights, guidance, and project ideas tailored to their chosen paths. Our goal is to equip students with the tools they need to sharpen their skills and gain real-world experience in their desired career fields.</p>
                    </div>
                </div>
            </section>
            <h3 className={styles.extraText}>Join Us in Shaping the Future</h3>
        </main>
    )
}