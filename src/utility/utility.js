import Decimal from "decimal.js";
import { useMemo } from "react";

export function exportTime(timeStamp) {
  let date = new Date(Math.floor(timeStamp * 1000));
  let min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  return `${hour}:${min}`;
}

export function useSum(data, decimal, decimalAmount) {
  let sumValue = useMemo(() => {
    return data?.reduce((res, item) => {
      res += Number(item.value);
      return res;
    }, 0);
  }, [data]);

  let sumRemain = useMemo(() => {
    return data?.reduce((res, item) => {
      res += Number(item.remain);
      return res;
    }, 0);
  }, [data]);

  let sumPrice = useMemo(() => {
    let res = data?.reduce((res, item) => {
      res += Number(item.remain) * Number(item.price);
      return res;
    }, 0);
    return res / sumRemain;
  }, [data, sumRemain]);

  let AvgPrice = useMemo(() => {
    let res = data?.reduce((res, item) => {
      res += Number(item.price);
      return res;
    }, 0);
    return res / data?.length;
  }, [data]);

  if (data) {
    return [
      Decimal(String(sumPrice)).toFixed(decimal),
      Decimal(String(sumRemain)).toFixed(decimalAmount),
      Decimal(String(sumValue)).toFixed(decimal),
      Decimal(String(AvgPrice)).toFixed(decimal),
    ];
  } else {
    return;
  }
}
