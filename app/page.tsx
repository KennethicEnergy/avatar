"use client"
import Experience from "./components/experience/experience";
import WhatIWorkWith from "./components/what-i-work-with";
import Profile from "./components/profile/profile";
import { useAppStore } from "./store/app-store";
import { useEffect } from "react";
import Alert from "./components/alert/alert";
import Loader from "./components/loader/loader";

export default function Home() {
  const { setIsPageLoading, isAlertOpen, isPageLoading } = useAppStore();

  useEffect(() => {
    setIsPageLoading(false);
  }, []);

	return (
    <>
      <>
        <Profile />
        <WhatIWorkWith />
        <Experience />
      </>
      {isAlertOpen && <Alert />}
      {isPageLoading && <Loader />}
    </>
	);
}
