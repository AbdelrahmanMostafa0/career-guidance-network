import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/newsfeed.module.css";
import { getHomeFeed } from "@/api/userApis";
import ReactTimeAgo from "react-time-ago";

export default function Newsfeed() {
  const [posts, setPosts] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHomeFeed();
      setPosts(data);
    };

    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.mainContainer}>
        <div className={styles.asideContainer}>
          <div className={styles.suggestedRoadmaps}>
            <h3>Suggested Roadmaps</h3>
            <div className={styles.roadmap}>
              <h4>Front end</h4>
              <Link href="#">View</Link>
            </div>
            <div className={styles.roadmap}>
              <h4>Front end</h4>
              <Link href="#">View</Link>
            </div>
          </div>
        </div>
        {posts &&
          posts.map((post) => {
            return (
              <div className={styles.newsfeedContainer}>
                <div className={`${styles.feed} ${styles.flow}`}>
                  <div className={styles.companyInfo}>
                    <Link href={`/co/${post.company.id}`}>
                      <div className={styles.InnerCompanyInfo}>
                        <img
                          className={styles.companyLogo}
                          src={post.company.imgUrl || `/avatar.jpg`}
                          alt="company logo"
                        />
                        <p className={styles.companyName}>
                          {post.company.name}
                        </p>
                      </div>
                    </Link>
                    <p className={styles.time}>
                      <ReactTimeAgo
                        date={new Date(post.createdAt)}
                        locale="en-US"
                      />
                    </p>
                  </div>
                  <h3 className={styles.jobTitle}>{post.title.name}</h3>
                  <p className={styles.jobInfo}>
                    {post.employment_type} - <span>{post.location_type}</span>
                  </p>
                  <p className={styles.jobDescription}>{post.about}</p>
                  <div className={styles.btnsContainer}>
                    <Link
                      href={`/job?job=${post.id}&company=${post.company.id}`}
                      className={`${styles.btn} ${styles.detailsBtn}`}
                    >
                      Details
                    </Link>
                    <Link
                      href={`/job?job=${post.id}&company=${post.company.id}`}
                      className={`${styles.btn} ${styles.applyBtn}`}
                    >
                      Apply
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </main>
    </div>
  );
}
