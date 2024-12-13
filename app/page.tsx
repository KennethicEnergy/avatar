"use client"
import Experience from "./components/experience/experience";
import WhatIWorkWith from "./components/what-i-work-with";
import Profile from "./components/profile/profile";
import { useAppStore } from "./store/app-store";
import { useEffect } from "react";
import Settings from "./components/settings/settings";

export default function Home() {
  const { setIsPageLoading } = useAppStore();

  useEffect(() => {
    setIsPageLoading(false);
  }, []);

	return (
    <>
      <Settings />
      <Profile />
      <WhatIWorkWith />
      <Experience />
    </>
	);
}
