import { useStyles } from "./ListStyles";
import ListRow from "./ListRow";
import { exportTime } from "../../utility/utility";

export default function List({ data, id, header, sumData }) {
  const styles = useStyles();
  const ListRows = data.map((value, index) => {
    let cells;
    if (id === "Transactions") {
      cells = [value.price, value.match_amount, exportTime(value.time)];
    } else {
      cells = [value.price, value.remain, value.value];
    }
    return (
      <ListRow key={index} cells={cells} id={id} order={value?.type}></ListRow>
    );
  });

  return (
    <div className={styles.container}>
      <ListRow cells={header}></ListRow>
      {ListRows}
      {id !== "Transactions" && (
        <>
          <hr className={styles.hr} />
          <ListRow cells={sumData}></ListRow>
        </>
      )}
    </div>
  );
}
