/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { Item } from "./Item";
import items from "./items.json";
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
  themeDark: boolean;
}

export const Items: FC<INTERFACEITEMS> = ({
  themeDark,
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
        <Item themeDark={themeDark} key={item.id} item={item} />
      ))}
    </div>
  );
};
