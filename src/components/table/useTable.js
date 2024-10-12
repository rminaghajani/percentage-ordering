import { useMemo } from "react";

export default function useTable({ data, page }) {
  const headerTable = useMemo(() => {
    return ["Name", "Price", "24h Volume", "ATL", "Market Cap", " "];
  }, []);
  const paginationCount = useMemo(() => {
    if (data.length % 10 !== 0) {
      return Math.ceil(data.length / 10);
    } else {
      return data.length / 10;
    }
  }, [data]);
  const selectedData = useMemo(() => {
    let startpoint = (page - 1) * 10;
    let endpoint = page * 10;
    if (data.length < endpoint) {
      endpoint = data.length;
    }
    return data.slice(startpoint, endpoint);
  }, [page, data]);

  return { headerTable, paginationCount, selectedData };
}
