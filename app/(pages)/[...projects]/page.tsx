"use client"
import React, { useEffect } from 'react'
import Card from '../../components/card/card';
import styles from './page.module.scss';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { timelineData } from "@/app/constants/data";
import { useAppStore } from '@/app/store/app-store';

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { setIsPageLoading } = useAppStore();
  const projectData = timelineData.find((project) => `/${project.projectUrl}` === pathname);

  const goBack = () => {
    router.push("/");
    setIsPageLoading(true);
  };

  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  return (
    <div className={styles.project}>
      <h1><IoIosArrowRoundBack onClick={goBack}/>{projectData?.projectName}</h1>
      <Card
        projectGif={projectData?.projectGif ?? '/images/fallback-img.jpg'}
        projectTechStack={projectData?.projectTechStack ?? []}/>
      <p>{projectData?.projectDescription ?? 'No project description found.'}</p>
    </div>
  )
}

export default Page