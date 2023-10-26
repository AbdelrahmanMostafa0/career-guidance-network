import React, { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineGlobal } from 'react-icons/ai';

import styles from "../../styles/settings.module.css";

export default function Settings() {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
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
    <>
      <div className={styles.deco}>
        <header className={styles.header}>
          <div className={styles.profileImgContainer}>
            <img className={styles.profileImg} src="profile.png" />
          </div>
          <button className={styles.btn}>View Profile</button>
        </header> 
      </div>
      <main className={`${styles.main} ${styles.mainGrid}`}>
        <section className={styles.section}>
          <h2>Personal Info</h2>
          <p>Info that will represent you in the website like name and user name</p>
          <form>
            <label>Name</label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <label>Username</label>
            <input
              name="username"
              value={formData.userName}
              onChange={handleChange}
            />
            <label>Phone Number</label>
            <input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
            <button className={`${styles.btn} ${styles.saveBtn}`}>Save Changes</button>
            <button className={styles.btn}>Cancel</button>
          </form>
        </section>

        <section className={styles.section}>
          <h2>Social Links</h2>
          <p>Let people know more about you</p>
          <form>
            <label><AiFillGithub className={styles.icon} />GitHub</label>
              <input
                name="github"
                value={formData.github}
                onChange={handleChange}
              />
            <label><AiFillLinkedin className={styles.icon} />LinkedIn</label>
            <input
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
            />
            <label><AiOutlineGlobal className={styles.icon} />website</label>
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
            />
            <button className={`${styles.btn} ${styles.saveBtn}`}>Save Changes</button>
            <button className={styles.btn}>Cancel</button>
          </form>
        </section>

        <section className={styles.section}>
          <h2>Password</h2>
          <p>Enter your current password to update your password</p>
          <form>
          <label>Current Password</label>
              <input
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            <label>New Password</label>
            <input
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
            />
            <label>Confirm New Password</label>
            <input
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
            />
            <button className={`${styles.btn} ${styles.saveBtn}`}>Save Changes</button>
            <button className={styles.btn}>Cancel</button>
          </form>
        </section>

        <section className={styles.section}>
          <h2>Delete Account?</h2>
          <p>Note that if u deleted your account you will lose all your data and progress</p>
          <button className={`${styles.btn} ${styles.deleteBtn}`}>Delete</button>
        </section>
      </main>
    </>
  );
};
