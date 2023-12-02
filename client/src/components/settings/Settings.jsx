import React, { useState } from "react";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineGlobal } from 'react-icons/ai';
import styles from "../../styles/settings.module.css";

export default function Settings() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    CurrentPassword:"",
    newPassword:"",
    confirmNewPassword:"",
    userName:"",
    phoneNumber:"",
    github:"",
    linkedin:"",
    website:""
  })
  
  function handleChange(event) {
    const { name, type, value } = event.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  return (
    <div>
      <div className={styles.deco}>
        <header className={styles.header}>
          <div className={styles.profileImgContainer}>
            <img className={styles.profileImg} src="profile.png" />
          </div>
          <Link href="/profile" className={styles.btn}>View Profile</Link>
        </header> 
      </div>
      <main className={`${styles.main} ${styles.mainGrid}`}>
        <section className={styles.section}>
          <div className={styles.info}>
            <h2>Personal Info</h2>
            <p>Info that will represent you in the website like name and user name</p>
          </div>
          <form>
            <label htmlFor="name">Name</label>
            <input
              id="name" 
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              id="email"  
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.userName}
              onChange={handleChange}
              />
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              value={formData.phoneNumber}
              onChange={handleChange}
              />
            <div className={styles.btnWrapper}>
              <button className={`${styles.btn} ${styles.saveBtn}`}>Save Changes</button>
              <button className={styles.btn}>Cancel</button>
            </div>
          </form>
        </section>

        <section className={styles.section}>
          <div className={styles.info}>
            <h2>Social Links</h2>
            <p>Let people know more about you</p>
          </div>
          <form>
            <label className={styles.label} htmlFor="github"><AiFillGithub className={styles.icon} />GitHub</label>
              <input
                id="github"
                name="github"
                type="url"
                value={formData.github}
                onChange={handleChange}
              />
            <label className={styles.label} htmlFor="linkedin"><AiFillLinkedin className={styles.icon} />LinkedIn</label>
            <input
              id="linkedin"
              name="linkedin"
              type="url"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <label className={styles.label} htmlFor="website"><AiOutlineGlobal className={styles.icon} />website</label>
            <input
              id="website"
              name="website"
              type="url"
              value={formData.website}
              onChange={handleChange}
            />
            <div className={styles.btnWrapper}>
              <button className={`${styles.btn} ${styles.saveBtn}`}>Save Changes</button>
              <button className={styles.btn}>Cancel</button>
            </div>
          </form>
        </section>

        <section className={styles.section}>
          <div className={styles.info}>
            <h2>Password</h2>
            <p>Enter your current password to update your password</p>
          </div>
          <form>
          <label className={styles.label} htmlFor="CurrentPassword">Current Password</label>
              <input
                id="CurrentPassword"
                name="CurrentPassword"
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            <label className={styles.label} htmlFor="newPassword">New Password</label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              value={formData.newPassword}
              onChange={handleChange}
            />
            <label className={styles.label} htmlFor="confirmNewPassword">Confirm New Password</label>
            <input
              id="confirmNewPassword"
              name="confirmNewPassword"
              type="password"
              value={formData.confirmNewPassword}
              onChange={handleChange}
            />
            <div className={styles.btnWrapper}>
              <button className={`${styles.btn} ${styles.saveBtn}`}>Save Changes</button>
              <button className={styles.btn}>Cancel</button>
            </div>
          </form>
        </section>

        <section className={`${styles.section} ${styles.deleteSection}`}>
          <div className={styles.deleteInfo}>
            <h2>Delete Account?</h2>
            <p>Note that if u deleted your account you will lose all your data and progress</p>
          </div>
          <button className={`${styles.btn} ${styles.deleteBtn}`}>Delete</button>
        </section>
      </main>
    </div>
  );
};
