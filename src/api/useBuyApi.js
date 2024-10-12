import { useState, useCallback } from "react";
import axios from "axios";
import { useTokenContext } from "../context/TokenContext";

const useBuyApi = () => {
  const [isLoadingBuy, setIsLoadingBuy] = useState(true);
  const [dataBuy, setDataBuy] = useState(null);
  const { token } = useTokenContext();

  const fetchDataBuy = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.bitpin.org/v2/mth/actives/${token.id}/?type=buy`
      );

      if (response.status === 200) {
        setDataBuy(response.data.orders.slice(0, 10));
        setIsLoadingBuy(false);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingBuy(false);
    }
  }, [token]);

  return { dataBuy, isLoadingBuy, fetchDataBuy };
};

export default useBuyApi;
