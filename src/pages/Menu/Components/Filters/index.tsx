import filters from "./filters.json";
import styles from "./Filters.module.scss";
import classNames from "classnames";

type FiltersType = typeof filters[0];

interface FILTERINTERFACE {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export const Filters = ({ filter, setFilter }: FILTERINTERFACE) => {
  const selectedFilter = (option: FiltersType) => {
    if (filter === option.id) {
      return setFilter(null);
    }
    return setFilter(option.id);
  };

  return (
    <div className={styles.filters}>
      {filters.map((option: FiltersType) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--active"]]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectedFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};
