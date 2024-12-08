"use client"
import React, { useEffect } from 'react';
import styles from './page.module.scss';
import { useAppStore } from '@/app/store/app-store';

const Page = () => {
  const { setIsPageLoading } = useAppStore();

  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  return (
    <div className={styles.about}>About</div>
  )
}

export default Page;