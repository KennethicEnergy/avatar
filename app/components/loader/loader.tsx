import React from 'react'
import { RiLoader2Line } from 'react-icons/ri';
import styles from './loader.module.scss'

const loader = () => {
  return (
    <div className={styles.loader}>
      <RiLoader2Line size={30}/>
    </div>
  )
}

export default loader;