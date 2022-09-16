import styles from "./NoResult.module.scss";
import stylesThema from "styles/Theme.module.scss";
import { ReactComponent as NoResultImage } from "assets/not_found.svg";
import classNames from "classnames";

export const NoResult = () => {
  return (
    <section className={classNames({
      [styles.container]: true,
      [stylesThema.container]: true
    })}>
      <NoResultImage />
    </section>
  );
};