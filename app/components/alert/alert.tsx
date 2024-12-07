import React from 'react'
import styles from './alert.module.scss';

const Alert = () => {
  return (
    <div className={styles.alert}>
      <p>Error</p>
      <span>This feature is currently on development</span>
    </div>
  )
}

export default Alert;