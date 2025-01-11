import { ReactElement } from "react";
import {
	BiLogoGithub,
	BiLogoJavascript,
	BiLogoHtml5,
	BiLogoCss3,
	BiLogoTypescript,
	BiLogoDocker,
	BiLogoSass,
	BiLogoBootstrap,
	BiLogoTailwindCss,
	BiLogoMongodb,
	BiLogoReact,
	BiLogoAngular,
	BiLogoVuejs,
	BiLogoRedux,
	BiLogoNodejs,
	BiLogoFigma,
} from "react-icons/bi";
import { DiRedis, DiMysql } from "react-icons/di";
import { IoLogoIonic } from "react-icons/io";
import { RiNextjsFill } from "react-icons/ri";
import { SiFirebase, SiGoogleanalytics, SiGoogletagmanager } from "react-icons/si";

export const rowIcons: ReactElement[] = [
	<BiLogoGithub size={30} key="Github" />,
	<BiLogoJavascript size={30} key="JavaScript" />,
	<BiLogoHtml5 size={30} key="HTML" />,
	<BiLogoCss3 size={30} key="CSS" />,
	<BiLogoTypescript size={30} key="TypeScript" />,
	<BiLogoDocker size={30} key="Docker" />,
	<BiLogoSass size={30} key="SASS" />,
	<BiLogoBootstrap size={30} key="Bootstrap" />,
	<BiLogoTailwindCss size={30} key="Tailwind" />,
	<BiLogoMongodb size={30} key="MongoDb" />,
	<BiLogoReact size={30} key="React" />,
	<BiLogoAngular size={30} key="Angular" />,
	<BiLogoVuejs size={30} key="VueJs" />,
	<BiLogoRedux size={30} key="Redux" />,
	<BiLogoNodejs size={30} key="NodeJs" />,
	<BiLogoFigma size={30} key="Figma" />,
	<RiNextjsFill size={30} key="NextJs" />,
	<IoLogoIonic size={30} key="Ionic" />,
	<DiRedis size={30} key="Redis" />,
	<DiMysql size={30} key="MySql" />,
	<SiFirebase size={25} key="Firebase" />,
  <SiGoogletagmanager size={25} key="Google Tag Manager" />,
  <SiGoogleanalytics size={25} key="Google Analytics"/>,
];
