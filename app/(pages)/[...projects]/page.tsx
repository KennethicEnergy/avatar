"use client"
import React from 'react'
import Card from '../../components/card/card';
import styles from './page.module.scss';
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className={styles.project}>
      <h1><IoIosArrowRoundBack onClick={() => router.push("/")}/>Lorem Ipsum</h1>
      <Card/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus blanditiis ipsum mollitia reprehenderit sint neque architecto ut ratione nulla tenetur quas,
        cumque est vel impedit provident repellendus reiciendis praesentium culpa aperiam nemo! Ullam magni voluptate commodi aspernatur temporibus iure,
        culpa dolore sint quas eaque debitis itaque facilis voluptas fugiat perspiciatis!
      </p>
    </div>
  )
}

export default Page