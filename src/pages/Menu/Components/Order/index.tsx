import styles from "./Order.module.scss";
import options from "./options.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface ORDERINTERFACE {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export const Order = ({ order, setOrder }: ORDERINTERFACE) => {
  const [open, setOpen] = useState(false);

  const titleOrder =
    order && options.find((option) => option.value === order)?.name;

  console.log(titleOrder);

  return (
    <button
      className={classNames({
        [styles.order]: true,
        [styles["order--active"]]: order !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{titleOrder || "Ordenar por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.order__options]: true,
          [styles["order__options--active"]]: open,
        })}
      >
        {options.map((option) => (
          <div
            className={styles.order__option}
            key={option.value}
            onClick={() => setOrder(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
};
