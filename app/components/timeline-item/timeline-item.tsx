import React, { useEffect, useRef, useState } from "react";
import styles from "./timeline-item.module.scss";
import { CiImageOn } from "react-icons/ci";
import { TimelineItemProps } from "@/app/constants/types";

const TimelineItem: React.FC<TimelineItemProps> = ({
  title,
  company,
  date,
  projectUrl,
  companyUrl,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  const toggleClamp = () => {
    setIsExpanded((prev) => !prev);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current;
      const lineHeight = parseInt(getComputedStyle(element).lineHeight, 10);
      const maxHeight = lineHeight * 4;
      const actualHeight = element.scrollHeight;
      setIsClamped(actualHeight > maxHeight);
      console.log(element, lineHeight, maxHeight, actualHeight);
    }
  }, []);

  return (
    <div className={styles.timelineItem}>
      <div className={styles.marker}></div>
      <div className={styles.content} >
        <h3 className={styles.title}>{title} {projectUrl && <span><CiImageOn size={20}/></span>}</h3>
        <h4 className={styles.company} onClick={() => companyUrl && window.open(companyUrl, "_blank")}>{company}</h4>
        <p className={styles.date}>{date}</p>
        <p ref={descriptionRef} className={styles.description} style={{WebkitLineClamp: isExpanded ? "none" : 4}} >{description}</p>
        {isClamped && <button onClick={toggleClamp}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>}
      </div>
    </div>
  );
};

export default TimelineItem;
