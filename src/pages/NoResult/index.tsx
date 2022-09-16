import styles from "./NoResult.module.scss";
import stylesThema from "styles/Theme.module.scss";
import { ReactComponent as NoResultImage } from "assets/not_found.svg";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const NoResult = () => {

  const navegate = useNavigate();

  const comeBack = () => {
    navegate(-1);
  };

  return (
    <section className={classNames({
      [styles.container]: true,
      [stylesThema.container]: true
    })}>
      <div className={styles.comeBack}>
        <button onClick={comeBack}>
          {"< Voltar"}
        </button>
      </div>
      <NoResultImage />
    </section>
  );
};