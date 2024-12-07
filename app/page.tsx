"use client"
import styles from "./page.module.scss";
import Experience from "./components/experience/experience";
import WhatIWorkWith from "./components/what-i-work-with";
import Profile from "./components/profile/profile";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
        <Profile />
        <WhatIWorkWith />
        <Experience />
			</main>
		</div>
	);
}
