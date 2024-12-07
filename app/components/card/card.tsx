import React from 'react'
import styles from './card.module.scss';
import Image from 'next/image';
import { RxEnterFullScreen } from "react-icons/rx";
import { rowIcons } from "@/app/constants/tech-icons";

type TProps = {
  projectGif: string;
  projectTechStack: Array<string> | null;
}
const Card = ({projectGif, projectTechStack}: TProps) => {
  console.log(rowIcons, projectTechStack);
  return (
    <div className={styles.card}>
      <Image src={projectGif} alt="project image" fill quality={100} priority />

      <div className={styles.madeWith}>
        <span>Made with:</span>
        <div className={styles.technologies}>
          {projectTechStack?.map((tech, index) => <span key={index}>{rowIcons.find(icon => icon.key === tech)} {tech}</span>)}
        </div>
      </div>

      <div className={styles.enterFullScreen}>
        <RxEnterFullScreen size={30}/>
      </div>
    </div>
  )
}

export default Card