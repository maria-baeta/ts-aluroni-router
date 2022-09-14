import classNames from "classnames";
import styles from "./Item.module.scss";

interface INTERFACEITEM {
  item: {
    title: string;
    description: string;
    photo: string;
    size: number;
    serving: number;
    price: number;
    id: number;
    category: {
      id: number;
      label: string;
    };
  };
}

export const Item = ({ item }: INTERFACEITEM) => {
  const { title, description, category, size, serving, price, photo } = item;

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div
        className={styles.item__description_ligth}
      >
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.item__tags}>
        <div
          className={classNames({
            [styles.item__type]: true,
            [styles[`item__type__${category.label.toLocaleLowerCase()}Ligth`]]:
              true,

          })}
        >
          {category.label}
        </div>
        <div
          className={styles.item__portion_ligth}
        >
          {size}g
        </div>
        <div
          className={styles.item__qtdpeople_ligth}
        >
          Serve {serving} pessoa{serving === 1 ? "" : "s"}
        </div>
        <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
      </div>
    </div>
  );
};
