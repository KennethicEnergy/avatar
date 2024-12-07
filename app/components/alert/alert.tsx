import React from 'react'
import styles from './alert.module.scss';
import { IoIosClose } from "react-icons/io";

type AlertType = {
  type?: 'error' | 'success' | 'info' | 'warning' | 'default';
  isDismissable?: boolean;
}

const Alert = ({type = 'default', isDismissable = true}: AlertType) => {
  let background = '';
  if (type === 'success') {
    background = '#63bb65';
  } else if (type === 'error') {
    background = '#FF6961';
  } else if (type === 'info') {
    background = '#4d4dff';
  } else if (type === 'warning') {
    background = '#aeae00';
  } else if (type === 'default') {
    background = '#4a4a4a';
  }

  return (
    <div className={styles.alert} style={{backgroundColor: `${background}`}}>
      <p>This feature is currently on development</p>
      {isDismissable && <p><IoIosClose /></p>}
    </div>
  )
}

export default Alert;