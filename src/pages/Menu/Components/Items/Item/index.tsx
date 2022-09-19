import { Tags } from "components";
import { FC } from "react";
import { ITEM } from "types/interface";
import styles from "./Item.module.scss";

export const Item: FC<ITEM> = (item) => {
  const { title, description, photo } = item.item;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div
        className={styles.item__description}
      >
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
          <Tags item={item.item} />
        </div>
      </div>
    </div>
  );
};
