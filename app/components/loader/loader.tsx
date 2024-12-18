"use client"

import React, { useEffect } from 'react'

import { RiLoader2Line } from 'react-icons/ri';
import styles from './loader.module.scss'
import { useAppStore } from '@/app/store/app-store';

const Loader = () => {
  const { isPageLoading } = useAppStore();

  useEffect(() => {
    const container = document.getElementById("layout-container");
    console.log(container)
    if (container) {
      container.style.padding = isPageLoading ? "unset" : "";
    }
  }, [isPageLoading])

  return (
    <>{isPageLoading && <div className={styles.loader}>
      <RiLoader2Line size={30}/>
    </div>}</>
  )
}

export default Loader;