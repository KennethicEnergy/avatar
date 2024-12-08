import React from 'react';
import styles from './profile.module.scss';
import { country, fullName, githubUrl, introduction, linkedinUrl } from "@/app/constants/constants";
import { BiLogoGithub } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";

const Profile = () => {

  const handleDownload = async () => {
    const url = `https://docs.google.com/document/d/${process.env.NEXT_PUBLIC_DOCUMENT_ID}/export?format=pdf`;
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.profile}>
      <div className={styles.nameRow}>
        <h1 className={styles.name} onClick={handleDownload}>{fullName}</h1>
        <div className={styles.socials}>
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