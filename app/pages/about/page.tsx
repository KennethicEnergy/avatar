"use client"
import React, { useEffect } from 'react';
import styles from './page.module.scss';
import { useAppStore } from '@/app/store/app-store';

const Page = () => {
  const { setIsPageLoading, setAlert, setIsAlertOpen } = useAppStore();

  useEffect(() => {
    setIsPageLoading(false);
    setAlert("warning", "This feature is currently on development.");
    setIsAlertOpen(true);
  }, []);

  return (
    <div className={styles.about}>About</div>
  )
}

export default Page;