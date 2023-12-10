import React from 'react'
import Link from "next/link"
import styles from "../../styles/newsfeed.module.css"

export default function Newsfeed() {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.newsfeedContainer}>
                <div className={`${styles.feed} ${styles.flow}`}>
                    <div className={styles.companyInfo}>
                        <Link href="#">
                            <div className={styles.InnerCompanyInfo}>
                                <img className={styles.companyLogo} src='googlelogo.png' alt='company logo'/>
                                <p className={styles.companyName}>Google</p>
                            </div>
                        </Link>
                        <p className={styles.time}>2m ago</p>
                    </div>
                    <h3 className={styles.jobTitle}>Front end</h3>
                    <p className={styles.jobInfo}>Full Time - <span>on site</span></p>
                    <p className={styles.jobDescription}>Lorem ipsum dolor sit amet consectetur. Nibh ac facilisis senectus tristique. Pretium nunc quam facilisis nulla. Proin pretium a mattis parturient nunc. Eget libero morbi malesuada lectus quisque amet molestie </p>
                    <div className={styles.btnsContainer}>
                        <button className={`${styles.btn} ${styles.detailsBtn}`}>Details</button>
                        <button className={`${styles.btn} ${styles.applyBtn}`}>Apply</button>
                    </div>
                </div>
            </div>
            <div className={styles.asideContainer}>

            </div>
        </main>
    )
}

