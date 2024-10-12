import { useState, useCallback } from "react";
import axios from "axios";
import { useTokenContext } from "../context/TokenContext";

const useMatchApi = () => {
  const [isLoadingMatch, setIsLoadingMatch] = useState(true);
  const [dataMatch, setDataMatch] = useState(null);
  const { token } = useTokenContext();

  const fetchDataMatch = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.bitpin.org/v1/mth/matches/${token.id}/`
      );

      if (response.status === 200) {
        setDataMatch(response.data.slice(0, 10));
        setIsLoadingMatch(false);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingMatch(false);
    }
  }, [token]);

  return { dataMatch, isLoadingMatch, fetchDataMatch };
};

export default useMatchApi;
