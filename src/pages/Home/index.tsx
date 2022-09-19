import itemMenu from "data/itemsMenu.json";
import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import ourHome from "assets/home/nossa_casa.png";
import { ITEM } from "utils/interface";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let recommendations = [...itemMenu];
  const navegate = useNavigate();

  recommendations = recommendations
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  const redirect = (item: ITEM) => {
    const { id } = item.item;
    navegate(`/sugestao/${id}`, { state: { ...item.item } });
  };

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da Cozinha</h3>
      <div className={styles.recommendeds}>
        {recommendations.map((item) => (
          <div className={styles.recommended} key={item.id}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recommended__button}
              onClick={() => redirect({ item })}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTheme.title}>Nossa casa</h3>
      <div className={styles.ourHome}>
        <img src={ourHome} alt="Casa" />
        <div className={styles.ourHome__address}>
          Rua das Acácias, 1030 <br /> <br /> Santo Antônio - MG
        </div>
      </div>
    </section>
  );
};
