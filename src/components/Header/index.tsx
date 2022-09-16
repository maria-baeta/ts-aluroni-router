import styles from "./Header.module.scss";
import { Outlet } from "react-router-dom";
import stylesTheme from "styles/Theme.module.scss";
import { Navbar } from "../Navbar";
export const Header = () => {
  return (
    <>
      <Navbar />
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da Massa</div>
      </header>
      <div className={stylesTheme.container}>
        <Outlet />
      </div>
    </>
  );
};