import NameContainer from "./NameContainer";
import { useTokenSetFunctionContext } from "../../context/TokenContext";
import { useNavigate } from "react-router-dom";
import Decimal from "decimal.js";
import clsx from "clsx";
import { useStyles } from "./TableStyles";
import Button from "../button/Button";

export default function TableRow({ data }) {
  const navigate = useNavigate();
  const { setToken } = useTokenSetFunctionContext();
  const styles = useStyles();
  return (
    <tbody className={styles.tbody}>
      <tr className={styles.trBody}>
        <td className={clsx(styles.td, styles.nameCell)}>
          <NameContainer
            imageUrl={data["currency1"].image}
            name={data["currency1"].title}
            symbol={data["currency1"].code}
          ></NameContainer>
        </td>
        <td className={styles.td}>
          {Decimal(data.price).toFixed(data["currency1"].decimal)}
        </td>
        <td className={styles.td}>
          {Decimal(data.volume_24h).toFixed(data["currency1"].decimal)}
        </td>
        <td className={styles.td}>
          {Decimal(data.all_time_high).toFixed(data["currency1"].decimal)}
        </td>
        <td className={styles.td}>
          {Decimal(data.market_cap).toFixed(data["currency1"].decimal)}
        </td>
        <td className={styles.td}>
          <Button
            onClick={() => {
              setToken(data);
              navigate(`/market/${data.code}`);
            }}
            color="primary"
          >
            Buy/Sell
          </Button>
        </td>
      </tr>
    </tbody>
  );
}
