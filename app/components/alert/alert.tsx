"use client"
import React from 'react'
import styles from './alert.module.scss';
import { IoIosClose } from "react-icons/io";
import { useAppStore } from '@/app/store/app-store';

const Alert = () => {
  const { alertType = 'default', alertMessage, isAlertDismissable, isAlertOpen, resetAlert } = useAppStore();
  let background = '';

  if (alertType === 'success') {
    background = '#63bb65';
  } else if (alertType === 'error') {
    background = '#FF6961';
  } else if (alertType === 'info') {
    background = '#4d4dff';
  } else if (alertType === 'warning') {
    background = '#aeae00';
  } else if (alertType === 'default') {
    background = '#4a4a4a';
  }

  return (
    <>
      {isAlertOpen && <div className={styles.alert} style={{backgroundColor: `${background}`}}>
        <p>{alertMessage}</p>
        {isAlertOpen && isAlertDismissable && <p onClick={() => resetAlert()}><IoIosClose /></p>}
      </div>}
    </>
  )
}

export default Alert;