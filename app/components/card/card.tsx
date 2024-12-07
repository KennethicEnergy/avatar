import React from 'react'
import styles from './card.module.scss';
import Image from 'next/image';
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoReact, BiLogoSass, BiLogoTypescript } from 'react-icons/bi';
import { RxEnterFullScreen } from "react-icons/rx";


type TProps = {
  projectGif: string;
}
const Card = ({projectGif}: TProps) => {
  return (
    <div className={styles.card}>
      <Image src={projectGif} alt="project image" width={580} height={300} quality={100} priority/>

      <div className={styles.madeWith}>
        <span>Made with:</span>
        <div className={styles.technologies}>
          <span><RiNextjsFill size={30}/> Next.js</span>
          <span><BiLogoReact size={30}/> React</span>
          <span><BiLogoSass size={30}/> SASS</span>
          <span><BiLogoTypescript size={30}/> TypeScript</span>
        </div>
      </div>

      <div className={styles.enterFullScreen}>
        <RxEnterFullScreen size={30}/>
      </div>
    </div>
  )
}

export default Card