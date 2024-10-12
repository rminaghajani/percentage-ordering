import { useStyles } from "./ListStyles";
import clsx from "clsx";

export default function ListRow({ cells, id, order }) {
  const styles = useStyles();

  return (
    <div className={styles.rowContainer}>
      <p
        className={clsx(
          styles.text,
          styles.textLeft,
          {
            [styles.priceSell]: id === "SellOrders" || order === "sell",
          },
          {
            [styles.priceBuy]: id === "BuyOrders" || order === "buy",
          }
        )}
      >
        {cells[0]}
      </p>
      <p className={clsx(styles.text, styles.textCenter)}>{cells[1]}</p>
      <p className={clsx(styles.text, styles.textRight)}>{cells[2]}</p>
    </div>
  );
}

// className={clsx(
//     styles.tabButton,
//     {
//       [styles.tabButtonActive]: isActive,
//     },
//     {
//       [styles.tabButtonPending]: isPending,
//     }
//   )}
