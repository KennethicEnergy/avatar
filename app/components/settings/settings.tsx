import React, { useEffect, useMemo, useState } from 'react';
import styles from './setttings.module.scss'
import { CiLight, CiSettings, CiDark  } from 'react-icons/ci';
import { IoIosArrowDown } from "react-icons/io";
import { useAppStore } from '@/app/store/app-store';

const Settings = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, setTheme, isPageLoading, setIsPageLoading } = useAppStore();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  const themeStyles = useMemo(() => {
    return theme === 'light'
      ? { backgroundColor: '#ececec', color: '#171717' }
      : { backgroundColor: '#171717', color: '#ececec' };
  }, [theme]);

  useEffect(() => {
    setIsPageLoading(true);
    Object.assign(document.body.style, themeStyles);
    setIsPageLoading(false);
  }, [themeStyles]);

  if (isPageLoading) return null;

  return (
    <div className={styles.settings}>
      {/* <CiSettings
        size={30}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? styles.collapsed : styles.expanded}
      /> */}

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
