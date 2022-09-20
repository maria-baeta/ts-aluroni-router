import React, { FC } from "react";
import styles from "./Search.module.scss";
import { CgSearch } from "react-icons/cg";

interface SEARCHINTERFACE {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const Search: FC<SEARCHINTERFACE> = ({ search, setSearch }) => {
  return (
    <div className={styles.search}>
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Buscar"
        value={search}
      />
      <CgSearch size={20} color="#4C4D5E" />
    </div>
  );
};
