import { convertLabel } from "utils/label";
import styles from "./Tags.module.scss";
import classNames from "classnames";
import { ITEM } from "types/interface";
import { FC } from "react";

export const Tags: FC<ITEM> = ({ item }) => {
  const { category, size, serving, price } = item;
  return (
    <div className={styles.item__tags}>
      <div
        className={classNames({
          [styles.item__type]: true,
          [styles[`item__type__${convertLabel(category.label)}`]]:
            true,

        })}
      >
        {category.label}
      </div>
      <div
        className={styles.item__portion}
      >
        {size}g
      </div>
      <div
        className={styles.item__qtdpeople}
      >
        Serve {serving} pessoa{serving === 1 ? "" : "s"}
      </div>
      <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
    </div>
  );
};