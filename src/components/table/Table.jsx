import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import useTable from "./useTable";
import { startTransition } from "react";
import PaginationTable from "./Pagination";
import { useStyles } from "./TableStyles";

export default function Table({ data, setPage, page }) {
  const styles = useStyles();
  const { headerTable, paginationCount, selectedData } = useTable({
    data,
    page,
  });

  function handleChange(e, value) {
    startTransition(() => {
      setPage(value);
    });
  }

  return (
    <>
      <table className={styles.table}>
        <TableHeader header={headerTable}></TableHeader>
        <TableBody data={selectedData} />
      </table>
      <PaginationTable
        page={page}
        onChange={handleChange}
        count={paginationCount}
        className={styles.pagination}
      />
    </>
  );
}
