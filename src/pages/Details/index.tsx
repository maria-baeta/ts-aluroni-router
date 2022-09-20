import { useNavigate, useParams } from "react-router-dom";
import styles from "./Details.module.scss";
import items from "data/itemsMenu.json";
import { Header, Tags } from "components";
import { NoResult } from "pages/NoResult";

export const Details = () => {
  const { id } = useParams();
  const navegate = useNavigate();

  const item = items.find(item => item.id === Number(id));

  if (!item) {
    return <NoResult />;
  }


  const comeBack = () => {
    navegate(-1);
  };

  return (
    <Header>
      {/* <Header /> */}
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
          <Tags item={item} />
        </div>
      </section>
    </Header>
  );
};