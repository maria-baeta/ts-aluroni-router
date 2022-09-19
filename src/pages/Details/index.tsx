import classNames from "classnames";
import { useNavigate, useParams } from "react-router-dom";
import { convertLabel } from "utils/label";
import styles from "./Details.module.scss";
import items from "data/itemsMenu.json";

export const Details = () => {
  const { id } = useParams();
  const navegate = useNavigate();

  const item = items.find(item => item.id === Number(id));

  if (!item) {
    return "";
  }


  const comeBack = () => {
    navegate(-1);
  };

  return (
    <>

      <button className={styles.comeBack} onClick={comeBack}>
        {"< Voltar"}
      </button>
      <section className={styles.container}>
        <h1 className={styles.title}>{item?.title}</h1>
        <div className={styles.image}>
          <img src={item?.photo} alt={item?.title} />
        </div>
        <div className={styles.contents}>
          <p className={styles.contents__description}>{item?.description}</p>
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__type]: true,
              [styles[`tags__type__${convertLabel(item?.category?.label)}`]]: true
            })}>
              {item?.category.label}
            </div>
            <div className={styles.tags__portion}>{item?.size}g</div>
            <div className={styles.tags__qtdpeople}>Serve {item?.serving} pessoa{item?.serving === 1 ? "" : "s"}</div>
            <div className={styles.tags__value}>R${item?.price.toFixed(2)}</div>
          </div>
        </div>
      </section>
    </>
  );
};