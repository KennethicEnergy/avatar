import React from 'react';
import styles from './profile.module.scss';
import { country, fullName, githubUrl, introduction, linkedinUrl } from "@/app/constants/constants";
import { BiLogoGithub } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.nameRow}>
        <h1 className={styles.name}>{fullName}</h1>
        <div>
          <span onClick={() => window.open(linkedinUrl, "_blank")}><IoLogoLinkedin size={30}/></span>
          <span onClick={() => window.open(githubUrl, "_blank")}><BiLogoGithub size={30}/></span>
        </div>
      </div>
      <div className={styles.location}>
        <p>{country}</p>
      </div>
      <p className={styles.intro}>{introduction}</p>
    </div>
  )
}

export default Profile