import { memo } from "react";
import { useStyles } from "./TableStyles";

const TableHeader = memo(function TableHeader({ header }) {
  const styles = useStyles();
  const ths = header.map((value, index) => {
    return (
      <th key={index} className={styles.th}>
        {value}
      </th>
    );
  });
  return (
    <thead>
      <tr className={styles.trHeader}>{ths}</tr>
    </thead>
  );
});

export default TableHeader;
