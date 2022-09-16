import styles from "./About.module.scss";
import stylesTheme from "styles/Theme.module.scss";
import casa from "assets/about/casa.png";
import massa1 from "assets/about/massa1.png";
import massa2 from "assets/about/massa2.png";


export const About = () => {
  return (
    <section>
      <h3 className={stylesTheme.title}>Sobre</h3>
      <div className={styles.aboutUs}>
        <img src={casa} alt="Home" />
        <div className={styles.aboutUs__text} >
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.images}>
        <img src={massa1} alt="Massa 1" />
        <img src={massa2} alt="Mass 2" />
      </div>
    </section>
  );
};