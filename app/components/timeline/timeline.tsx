import React, { useState } from "react";
import TimelineItem from "../timeline-item/timeline-item";
import styles from "./timeline.module.scss";
import { timelineData } from "@/app/constants/data";

const Timeline: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sortedData = [...timelineData].sort((a, b) => b.id - a.id);

  const itemsToShow = isExpanded ? sortedData : sortedData.slice(0, 3);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={styles.timeline}>
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
      <button className={styles.expandButton} onClick={handleExpand}>
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default Timeline;
