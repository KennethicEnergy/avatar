"use client"
import { BiLogoGithub } from "react-icons/bi";
import { IoLogoLinkedin } from "react-icons/io";
import styles from "./page.module.scss";
import Technologies from "./components/technologies/technologies";
import Timeline from "./components/timeline/timeline";
import { githubUrl, linkedinUrl } from "./constants/constants";

export default function Home() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.profile}>
					<div className={styles.nameRow}>
						<h1 className={styles.name}>Kenneth Buenavista</h1>
            <div>
              <span onClick={() => window.open(githubUrl, "_blank")}><BiLogoGithub size={30}/></span>
              <span onClick={() => window.open(linkedinUrl, "_blank")}><IoLogoLinkedin size={30}/></span>
            </div>
					</div>
          <div className={styles.location}>
            <p>Philippines</p>
          </div>
          <p className={styles.intro}>I code to make websites</p>
				</div>
        <h2 className={styles.techTitle}>What I work with</h2>
        <Technologies hasTitle={true}/>
        <h2 className={styles.techTitle}>Experience</h2>
        <Timeline />
			</main>
		</div>
	);
}
