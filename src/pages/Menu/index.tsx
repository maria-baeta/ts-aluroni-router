import styles from "./Menu.module.scss";
import { useState } from "react";
import { Search, Filters, Order, Items } from "./Components";

export const Menu = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [order, setOrder] = useState("");

  return (
    <main>

      <header className={styles.header}>
        <div className={styles.header__text}>A casa do código e da Massa</div>
      </header>
      <section className={styles.menu}>
        <h3
          className={styles.menu__title_ligth}
        >
          Cardápio
        </h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filters filter={filter} setFilter={setFilter} />
          <Order order={order} setOrder={setOrder} />
        </div>
        <Items
          search={search}
          filter={filter}
          order={order}
        />
      </section>
    </main>
  );
};
