import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";



export const Navbar = () => {
  const routes = [{ label: "Home", to: "/" }, { label: "Cardápio", to: "/cardapio" }, { label: "Sobre", to: "/sobre" }];
  return (
    <nav className={styles.menus}>
      <Logo />
      <ul className={styles.menu__list} >
        {routes.map(({ label, to }, index) => (
          <li key={index} className={styles.menu__link}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
