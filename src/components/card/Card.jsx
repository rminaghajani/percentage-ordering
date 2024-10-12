import { useEffect, useState } from "react";
import Button from "../button/Button";
import InputText from "../input/InputText";
import { useStyles } from "./CardStyles";

export default function Card({ OrderData, Decimal, DecimalAmount, type }) {
  const [input, setInput] = useState("");
  const [hasError, setHasError] = useState(false);
  const [receivableVolume, setReceivableVolume] = useState(0);
  const [cost, setCost] = useState(0);

  function onChangeInput(e) {
    if (Number(e.target.value) <= 100 && Number(e.target.value) >= 0) {
      setInput(e.target.value);
      setHasError(false);
      setReceivableVolume(
        ((OrderData[1] * Number(e.target.value)) / 100).toFixed(DecimalAmount)
      );
      setCost(
        (
          ((OrderData[1] * Number(e.target.value)) / 100) *
          OrderData[3]
        ).toFixed(Decimal)
      );
    } else {
      setHasError(true);
      setReceivableVolume(0);
      setCost(0);
    }
  }

  useEffect(() => {
    if (!hasError) {
      setReceivableVolume(
        ((OrderData[1] * Number(input)) / 100).toFixed(DecimalAmount)
      );
      setCost(
        (((OrderData[1] * Number(input)) / 100) * OrderData[3]).toFixed(Decimal)
      );
    }
  }, [OrderData]);

  const styles = useStyles();
  return (
    <div className={styles.container}>
      <InputText
        textError="Please enter number between 0 and 100"
        hasError={hasError}
        onChangeInput={onChangeInput}
      ></InputText>
      <div className={styles.resContainer}>
        <p className={styles.textHeader}>Average Price</p>
        <p className={styles.textResult}>{OrderData[3]}</p>
      </div>
      <div className={styles.resContainer}>
        <p className={styles.textHeader}>Receivable Volume</p>
        <p className={styles.textResult}>{receivableVolume}</p>
      </div>
      <div className={styles.resContainer}>
        <p className={styles.textHeader}>Cost</p>
        <p className={styles.textResult}>{cost}</p>
      </div>
      <Button
        className={styles.btn}
        color={type === "Buy" ? "success" : "error"}
      >
        {type}
      </Button>
    </div>
  );
}
