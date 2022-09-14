import { FC, useEffect, useState } from "react";
import { Item } from "./Item";
import items from "data/itemsMenu.json";
import styles from "./Items.module.scss";
import {
  hadleOrder,
  handleFilter,
  handleSearch,
} from "./utils/handleOrderandFilter";

interface INTERFACEITEMS {
  search: string;
  filter: number | null;
  order: string;
}

export const Items: FC<INTERFACEITEMS> = ({
  search,
  filter,
  order,
}) => {
  const [list, setList] = useState(items);

  useEffect(() => {
    const newList = items.filter(
      (item) =>
        handleSearch(search, item.title) &&
        handleFilter(filter, item.category.id)
    );
    setList(hadleOrder(order, newList));
  }, [search, filter, order]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
