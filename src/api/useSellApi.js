import { useState, useCallback } from "react";
import axios from "axios";
import { useTokenContext } from "../context/TokenContext";

const useSellApi = () => {
  const [isLoadingSell, setIsLoadingSell] = useState(true);
  const [dataSell, setDataSell] = useState(null);
  const { token } = useTokenContext();

  const fetchDataSell = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.bitpin.org/v2/mth/actives/${token.id}/?type=sell`
      );

      if (response.status === 200) {
        setDataSell(response.data.orders.slice(0, 10));
        setIsLoadingSell(false);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingSell(false);
    }
  }, [token]);

  return { dataSell, isLoadingSell, fetchDataSell };
};

export default useSellApi;
