import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setView } from "../redux/actions/viewActions";

import navbar from "../styles/Navbar.module.css";
import defaultStyles from "../styles/#Default.module.css";

import sun from "../assets/sun.svg";
import moon from "../assets/moon.svg";

const NavBar = () => {
  const dispatch = useDispatch();
  
  const [isDark, setIsDark] = useState(true);

  const toggleIcon = isDark ? moon : sun;
  const toggleIconAlt = isDark ? "Moon" : "Sun";

  const changeColorTheme = useCallback((isDark) => {
    const themes = {
      dark: {
        bgColor: "#121212",
        blockColor: "#1F1F1F",
        fontColor: "#D5D5D5"
      },
      light: {
        bgColor: "#D5D5D5",
        blockColor: "#fff",
        fontColor: "#121212"
      }
    }

    if(isDark) {
      document.documentElement.style.setProperty('--bg-light-theme-color',themes.dark.bgColor);
      document.documentElement.style.setProperty('--block-light-theme-color',themes.dark.blockColor);
      document.documentElement.style.setProperty('--light-theme-font-color',themes.dark.fontColor);
    } else {
      document.documentElement.style.setProperty('--bg-light-theme-color',themes.light.bgColor);
      document.documentElement.style.setProperty('--block-light-theme-color',themes.light.blockColor);
      document.documentElement.style.setProperty('--light-theme-font-color',themes.light.fontColor);
    }
  }, [])

  return (
    <div className={`${defaultStyles.displayFlex} ${navbar.navbar}`}>
      <h1>Book Track App</h1>
      <nav className={defaultStyles.displayFlex}>
        <ul className={`${defaultStyles.displayFlex} ${navbar.navbarItems}`}>
          <li>
            <button onClick={() => dispatch(setView("Grid"))}>Grid View</button>
          </li>
          <li>
            <button onClick={() => dispatch(setView("List"))}>List View</button>
          </li>
        </ul>
        <button className={navbar.themeToggle} onClick={() => {
          setIsDark(!isDark); 
          changeColorTheme(isDark);
        }}>
          <img src={toggleIcon} alt={toggleIconAlt} />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
