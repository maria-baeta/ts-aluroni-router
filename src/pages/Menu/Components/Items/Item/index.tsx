import { Tags } from "components";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ITEM } from "types/interface";
import styles from "./Item.module.scss";

export const Item: FC<ITEM> = (item) => {
  const { title, description, photo, id } = item.item;
  const navigate = useNavigate();

  const nextNavigate = () => {
    navigate(`/sugestao/${id}`);
  };

  return (
    <div
      className={styles.item}
      onClick={nextNavigate}
    >
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
