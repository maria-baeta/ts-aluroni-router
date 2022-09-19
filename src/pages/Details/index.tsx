import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Details.module.scss";

export const Details = () => {
  console.log(useLocation());

  const navegate = useNavigate();

  const comeBack = () => {
    navegate(-1);
  };

  return (
    <div>
      <div className={styles.comeBack}>
        <button onClick={comeBack}>
          {"< Voltar"}
        </button>
      </div>
      detalhes do patro
    </div>
  );
};