import React from 'react'
import styles from './card.module.scss';
import Image from 'next/image';
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoReact, BiLogoSass, BiLogoTypescript } from 'react-icons/bi';
import { RxEnterFullScreen } from "react-icons/rx";

const Card = () => {
  return (
    <div className={styles.card}>
      <Image src="/images/project-gifs/game99.gif" alt="project image" width={580} height={300} quality={100} />

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