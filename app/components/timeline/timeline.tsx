import React, { useState } from "react";
import TimelineItem from "../timeline-item/timeline-item";
import styles from "./timeline.module.scss";
import { timelineData } from "@/app/constants/data";
import { useAppStore } from "@/app/store/app-store";

const Timeline: React.FC = () => {
  const { theme } = useAppStore();

  const [isExpanded, setIsExpanded] = useState(false);

  const sortedData = [...timelineData].sort((a, b) => b.id - a.id);

  const itemsToShow = isExpanded ? sortedData : sortedData.slice(0, 3);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.timeline} data-theme={theme}>
      {itemsToShow.map((item) => (
        <TimelineItem
          key={item.id}
          title={item.title}
          date={item.date}
          projectUrl={item.projectUrl}
          companyUrl={item.companyUrl}
          company={item.company}
          description={item.description}
        />
      ))}
      {timelineData.length > 3 && <button className={styles.expandButton} onClick={handleExpand} data-theme={theme}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>}
    </div>
  );
};

export default Timeline;
