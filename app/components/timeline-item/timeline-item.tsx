import React from "react";
import styles from "./timeline-item.module.scss";
import { CiImageOn } from "react-icons/ci";
import { TimelineItemProps } from "@/app/constants/types";

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  date,
  projectGalleryUrl,
  companyUrl,
  description,
}) => {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.marker}></div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title} {projectGalleryUrl && <span><CiImageOn size={20}/></span>}</h3>
        <h4 className={styles.company} onClick={() => companyUrl && window.open(companyUrl, "_blank")}>{company}</h4>
        <p className={styles.date}>{date}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;
