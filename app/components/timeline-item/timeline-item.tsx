import React, { useEffect, useRef, useState } from "react";
import styles from "./timeline-item.module.scss";
import { CiImageOn } from "react-icons/ci";
import { TimelineItemProps } from "@/app/constants/types";
import { useRouter } from "next/navigation";
import { useAppStore } from "@/app/store/app-store";

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
  const router = useRouter();
  const { setIsPageLoading, isPageLoading, theme } = useAppStore();

  const toggleClamp = () => {
    setIsExpanded((prev) => !prev);
  };

  const navigateToProject = (url: string) => {
    setIsPageLoading(true)
    router.push(url);
  };

  useEffect(() => {
    if (descriptionRef.current) {
      const element = descriptionRef.current;
      const lineHeight = parseInt(getComputedStyle(element).lineHeight, 10);
      const maxHeight = lineHeight * 4;
      const actualHeight = element.scrollHeight;
      setIsClamped(actualHeight > maxHeight);
    }
  }, []);

  if (isPageLoading) return null;

  return (
    <div className={styles.timelineItem}>
      <div className={styles.marker}></div>
      <div className={styles.content} >
        <h3 className={styles.title}>
          {title}
          {projectUrl && <div className={styles.icon} onClick={() => navigateToProject(projectUrl)}><CiImageOn size={20}/></div>}
        </h3>
        <h4 className={styles.company} onClick={() => companyUrl && window.open(companyUrl, "_blank")}>{company}</h4>
        <p className={styles.date}>{date}</p>
        {typeof(description) === "string" ?
          <p ref={descriptionRef} className={styles.description} style={{WebkitLineClamp: isExpanded ? "none" : 3}} >{description}</p> :
          <ul className={styles.descriptionList}>
            {description && description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        }
        {isClamped && <button onClick={toggleClamp} data-theme={theme}>
          {isExpanded ? "Read Less" : "Read More"}
        </button>}
      </div>
    </div>
  );
};

export default TimelineItem;
