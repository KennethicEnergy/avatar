"use client"
import React, { useEffect } from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import { useAppStore } from '@/app/store/app-store';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { setIsPageLoading, setAlert, setIsAlertOpen } = useAppStore();
  const router = useRouter();

  const goBack = () => {
    router.push("/");
    setIsPageLoading(true);
  };

  useEffect(() => {
    setIsPageLoading(false);
    setAlert("warning", "This feature is currently on development.");
    setIsAlertOpen(true);
  }, []);

  return (
    <div className={styles.about}>
      <h1><IoIosArrowRoundBack onClick={goBack}/>About</h1>
      <div className={styles.avatar}>
        <Image src="/images/fallback-img.jpg" alt="avatar" fill quality={100} priority/>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quisquam laboriosam praesentium alias soluta laudantium architecto sint corporis est, illum, magnam,
        ab consequuntur voluptas consequatur nemo? Omnis, labore totam consectetur, sit quaerat commodi aperiam earum velit ullam molestias culpa consequuntur mollitia doloremque recusandae voluptas perspiciatis
        aspernatur optio ducimus, alias distinctio! Aut ducimus necessitatibus animi nulla fuga nobis, est voluptatem tempora ullam eum earum! Debitis ipsam dolorum tempora sit enim similique nam
        inventore iusto aperiam aliquam. Quidem, repellendus nulla amet alias a, asperiores sapiente atque quo dolores odio rerum et aperiam. Eos sunt praesentium soluta tenetur similique corrupti consequatur,
        qui nesciunt?
      </p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quisquam laboriosam praesentium alias soluta laudantium architecto sint corporis est, illum, magnam,
        ab consequuntur voluptas consequatur nemo? Omnis, labore totam consectetur, sit quaerat commodi aperiam earum velit ullam molestias culpa consequuntur mollitia doloremque recusandae voluptas perspiciatis
        aspernatur optio ducimus, alias distinctio! Aut ducimus necessitatibus animi nulla fuga nobis, est voluptatem tempora ullam eum earum! Debitis ipsam dolorum tempora sit enim similique nam
        inventore iusto aperiam aliquam. Quidem, repellendus nulla amet alias a, asperiores sapiente atque quo dolores odio rerum et aperiam. Eos sunt praesentium soluta tenetur similique corrupti consequatur,
        qui nesciunt?
      </p>

      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus quisquam laboriosam praesentium alias soluta laudantium architecto sint corporis est, illum, magnam,
        ab consequuntur voluptas consequatur nemo? Omnis, labore totam consectetur, sit quaerat commodi aperiam earum velit ullam molestias culpa consequuntur mollitia doloremque recusandae voluptas perspiciatis
        aspernatur optio ducimus, alias distinctio! Aut ducimus necessitatibus animi nulla fuga nobis, est voluptatem tempora ullam eum earum! Debitis ipsam dolorum tempora sit enim similique nam
        inventore iusto aperiam aliquam. Quidem, repellendus nulla amet alias a, asperiores sapiente atque quo dolores odio rerum et aperiam. Eos sunt praesentium soluta tenetur similique corrupti consequatur,
        qui nesciunt?
      </p>
    </div>
  )
}

export default Page;