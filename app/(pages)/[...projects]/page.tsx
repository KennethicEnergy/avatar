"use client"
import React from 'react'
import Card from '../../components/card/card';
import styles from './page.module.scss';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { timelineData } from "@/app/constants/data";

const Page = () => {
  const router = useRouter();
  const pathname = usePathname();
  const projectData = timelineData.find((project) => `/${project.projectUrl}` === pathname);

  return (
    <div className={styles.project}>
      <h1><IoIosArrowRoundBack onClick={() => router.push("/")}/>{projectData?.projectName}</h1>
      <Card
        projectGif={projectData?.projectGif ?? '/images/fallback-img.jpg'}
        projectTechStack={projectData?.projectTechStack ?? []}/>
      <p>{projectData?.projectDescription ?? 'No project description found.'}</p>
    </div>
  )
}

export default Page