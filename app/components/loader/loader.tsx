"use client"
import React from 'react'
import { RiLoader2Line } from 'react-icons/ri';
import styles from './loader.module.scss'
import { useAppStore } from '@/app/store/app-store';

const Loader = () => {
  const { isPageLoading } = useAppStore();
  return (
    <>{isPageLoading && <div className={styles.loader}>
      <RiLoader2Line size={30}/>
    </div>}</>
  )
}

export default Loader;