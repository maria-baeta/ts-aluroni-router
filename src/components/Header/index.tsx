import styles from "./Header.module.scss";
import { Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da Massa</div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};