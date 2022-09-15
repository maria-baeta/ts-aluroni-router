import itemMenu from "data/itemsMenu.json";
import styles from "./Home.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import ourHome from "assets/home/nossa_casa.png";

export const Home = () => {
  let recommendations = [...itemMenu];

  recommendations = recommendations
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={stylesTheme.title}>Recomendações da Cozinha</h3>
      <div className={styles.recommendeds}>
        {recommendations.map((item) => (
          <div className={styles.recommended} key={item.id}>
            <div className={styles.recommended__image}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button className={styles.recommended__button}>Ver mais</button>
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
