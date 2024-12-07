import {
	BiLogoGithub,
	BiLogoHtml5,
	BiLogoCss3,
	BiLogoTypescript,
	BiLogoDocker,
	BiLogoJavascript,
	BiLogoSass,
	BiLogoBootstrap,
	BiLogoTailwindCss,
	BiLogoMongodb,
	BiLogoReact,
	BiLogoAngular,
  BiLogoVuejs,
  BiLogoRedux,
  BiLogoNodejs,
  BiLogoFigma
} from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoIonic } from "react-icons/io";
import { DiMysql, DiRedis  } from "react-icons/di";
import { ReactElement } from "react";
import Marquee from "react-fast-marquee";
import styles from "./technologies.module.scss";

interface TechnologiesProps {
  hasTitle: boolean;
}

const firstRowIcons: ReactElement[] = [
  <BiLogoGithub size={30} key="github"/>,
  <BiLogoJavascript size={30} key="javaScript"/>,
  <BiLogoHtml5 size={30} key="HTML"/>,
  <BiLogoCss3 size={30} key="CSS"/>,
  <BiLogoTypescript size={30} key="typeScript"/>,
  <BiLogoDocker size={30} key="docker"/>,
  <BiLogoSass size={30} key="SASS"/>,
  <BiLogoBootstrap size={30} key="bootstrap"/>,
  <BiLogoTailwindCss size={30} key="tailwind"/>,
  <BiLogoMongodb size={30} key="mongoDb"/>
];

const secondRowIcons: ReactElement[] = [
  <BiLogoReact size={30} key="react"/>,
  <BiLogoAngular size={30} key="angular"/>,
  <BiLogoVuejs size={30} key="vueJs"/>,
  <BiLogoRedux size={30} key="redux"/>,
  <BiLogoNodejs size={30} key="nodeJs"/>,
  <BiLogoFigma size={30} key="figma"/>,
  <RiNextjsFill size={30} key="nextJs"/>,
  <IoLogoIonic size={30} key="ionic"/>,
  <DiRedis size={30} key="redis"/>,
  <DiMysql size={30} key="mysql"/>
];

const Technologies: React.FC<TechnologiesProps> = ({ hasTitle }) => {
  return (
    <div className={styles.technologies}>
      <Marquee pauseOnHover loop={0} direction="left" autoFill gradient gradientColor="#171717" gradientWidth={50}>
        {firstRowIcons.map((icon, index) => (
          <span className={styles.icon} key={index}>{icon} {hasTitle && firstRowIcons[index].key}</span>
        ))}
      </Marquee>
      <Marquee pauseOnHover loop={0} direction="right" autoFill gradient gradientColor="#171717" gradientWidth={50}>
        {secondRowIcons.map((icon, index) => (
          <span className={styles.icon} key={index}>{icon} {hasTitle && secondRowIcons[index].key}</span>
        ))}
      </Marquee>
    </div>
  )
}



export default Technologies;