import axios from "axios";
import { useEffect, useMemo, useState, useCallback } from "react";

const useTableApi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchTable = useCallback(async () => {
    try {
      const response = await axios.get(`https://api.bitpin.ir/v1/mkt/markets/`);

      if (response.status === 200) {
        setData(response.data.results);
        setIsLoading(false);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTable();
  }, [fetchTable]);

  const USDTData = useMemo(() => {
    let sortedData = data?.filter((value) => {
      return value["currency2"]["code"] === "USDT";
    });
    return sortedData;
  }, [data]);

  const IRTData = useMemo(() => {
    let sortedData = data?.filter((value) => {
      return value["currency2"]["code"] === "IRT";
    });
    return sortedData;
  }, [data]);

  return { isLoading, USDTData, IRTData };
};

export default useTableApi;
