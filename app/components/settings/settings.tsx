import React, { useEffect, useState } from 'react';
import styles from './setttings.module.scss'
import { CiLight, CiSettings, CiDark  } from 'react-icons/ci';
import { IoIosArrowDown } from "react-icons/io";
import { useAppStore } from '@/app/store/app-store';

const Settings = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, setTheme, setIsPageLoading } = useAppStore();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    if (theme === 'light') {
      document.body.style.backgroundColor = '#ececec';
      document.body.style.color = '#171717';
    } else {
      document.body.style.backgroundColor = '#171717';
      document.body.style.color = '#ececec';
    }
    setIsPageLoading(false);
  }, [theme])

  return (
    <div className={styles.settings}>
      <CiSettings
        size={30}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? styles.collapsed : styles.expanded}
      />

      {isCollapsed && <IoIosArrowDown/>}

      {isCollapsed &&<div className={styles.settingsDropdown}>
        <span onClick={handleClick}>{theme === 'light' ? <CiDark size={30}/> : <CiLight size={30}/>}</span>
        {/* <div>
          <input type="color" id="body" name="body" value="#f6b73c" />
        </div> */}
      </div>}


    </div>
  )
}

export default Settings
