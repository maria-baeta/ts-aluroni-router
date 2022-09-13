import itemMenu from "data/itemsMenu.json";
import styles from "./Home.module.scss";

export const Home = () => {
  let recommendations = [...itemMenu];

  recommendations = recommendations
    .sort(() => 0.5 - Math.random())
    .splice(0, 3);

  return (
    <section>
      <h3 className={styles.title}>Recomendações da Cozinha</h3>
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
    </section>
  );
};
