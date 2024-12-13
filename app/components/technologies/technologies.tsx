import Marquee from "react-fast-marquee";
import styles from "./technologies.module.scss";
import { rowIcons } from "@/app/constants/tech-icons";
import { useAppStore } from "@/app/store/app-store";

interface TechnologiesProps {
  hasTitle: boolean;
}

const middleIndex = Math.ceil(rowIcons.length / 2);
const firstRowIcons = rowIcons.slice(0, middleIndex);
const secondRowIcons = rowIcons.slice(middleIndex);

const Technologies: React.FC<TechnologiesProps> = ({ hasTitle }) => {
    const { theme } = useAppStore();

  return (
    <div className={styles.technologies}>
      <Marquee pauseOnHover loop={0} direction="left" autoFill gradient gradientColor={theme === "light" ? "#171717" : "#ececec"} gradientWidth={50}>
        {firstRowIcons.map((icon, index) => (
          <span className={styles.icon} key={index}>{icon} {hasTitle && firstRowIcons[index].key}</span>
        ))}
      </Marquee>
      <Marquee pauseOnHover loop={0} direction="right" autoFill gradient gradientColor={theme === "light" ? "#171717" : "#ececec"} gradientWidth={50}>
        {secondRowIcons.map((icon, index) => (
          <span className={styles.icon} key={index}>{icon} {hasTitle && secondRowIcons[index].key}</span>
        ))}
      </Marquee>
    </div>
  )
}



export default Technologies;