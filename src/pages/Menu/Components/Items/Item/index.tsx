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
  themeDark: boolean;
}

export const Item = ({ item, themeDark }: INTERFACEITEM) => {
  const { title, description, category, size, serving, price, photo } = item;
  console.log(themeDark);

  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div
        className={classNames({
          [styles.item__description_ligth]: true,
          [styles.item__description_dark]: themeDark,
        })}
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
            [styles[`item__type__${category.label.toLocaleLowerCase()}Dark`]]:
              themeDark,
          })}
        >
          {category.label}
        </div>
        <div
          className={classNames({
            [styles.item__portion_ligth]: true,
            [styles.item__portion_dark]: themeDark,
          })}
        >
          {size}g
        </div>
        <div
          className={classNames({
            [styles.item__qtdpeople_ligth]: true,
            [styles.item__qtdpeople_dark]: themeDark,
          })}
        >
          Serve {serving} pessoa{serving === 1 ? "" : "s"}
        </div>
        <div className={styles.item__value}>R$ {price.toFixed(2)}</div>
      </div>
    </div>
  );
};
