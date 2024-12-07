"use client"
import Experience from "./components/experience/experience";
import WhatIWorkWith from "./components/what-i-work-with";
import Profile from "./components/profile/profile";

export default function Home() {
	return (
    <>
      <Profile />
      <WhatIWorkWith />
      <Experience />
    </>
	);
}
