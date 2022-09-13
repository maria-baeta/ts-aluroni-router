import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import { Search, Filters, Order, Items, Theme } from "./Components";
import classNames from "classnames";

export const Menu = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState("");
  const [themeDark, setThemeDark] = useState(false);

  const handleTheme = () => {
    setThemeDark(!themeDark);
  };

  return (
    <main className={classNames({ [styles.dark]: themeDark })}>
      <nav className={styles.menus}>
        <Logo />
        <Theme setTheme={handleTheme} themeDark={themeDark} />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da Massa</div>
      </header>
      <section className={styles.menu}>
        <h3
          className={classNames({
            [styles.menu__title_ligth]: true,
            [styles.menu__title_dark]: themeDark,
          })}
        >
          Cardápio
        </h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Order order={order} setOrder={setOrder} />
        </div>
        <Items
          themeDark={themeDark}
          search={search}
          filter={filter}
          order={order}
        />
      </section>
    </main>
  );
};
