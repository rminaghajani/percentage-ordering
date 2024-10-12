import { useStyles } from "./MarketPageStyles";
import { useEffect } from "react";
import useBuyApi from "../../api/useBuyApi";
import useSellApi from "../../api/useSellApi";
import useMatchApi from "../../api/useMatchApi";
import TabContainer from "../../components/tab/TabContainer";
import List from "../../components/list/List";
import Header from "../../components/header/Header";
import { useTokenContext } from "../../context/TokenContext";
import { useSum } from "../../utility/utility";
import Card from "../../components/card/Card";

export default function MarketPage() {
  const { dataBuy, isLoadingBuy, fetchDataBuy } = useBuyApi();
  const { dataSell, isLoadingSell, fetchDataSell } = useSellApi();
  const { dataMatch, isLoadingMatch, fetchDataMatch } = useMatchApi();
  const { token } = useTokenContext();

  const styles = useStyles();

  useEffect(() => {
    const interval = setInterval(() => {
      fetchDataBuy();
      fetchDataSell();
      fetchDataMatch();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [fetchDataBuy, fetchDataSell, fetchDataMatch]);

  const tabsShow = [
    {
      label: "Buy orders",
      data: (
        <List
          data={dataBuy}
          id="BuyOrders"
          header={["Price", "Remain", "Value"]}
          sumData={useSum(
            dataBuy,
            token["currency1"].decimal,
            token["currency1"].decimal_amount
          )}
        />
      ),
      isLoading: isLoadingBuy,
    },
    {
      label: "Sell orders",
      data: (
        <List
          data={dataSell}
          id="SellOrders"
          header={["Price", "Remain", "Value"]}
          sumData={useSum(
            dataSell,
            token["currency1"].decimal,
            token["currency1"].decimal_amount
          )}
        />
      ),
      isLoading: isLoadingSell,
    },
    {
      label: "Transactions",
      data: (
        <List
          data={dataMatch}
          id="Transactions"
          header={["Price", "Remain", "Time"]}
        />
      ),
      isLoading: isLoadingMatch,
    },
  ];

  const tabsOrder = [
    {
      label: "Buy",
      data: (
        <Card
          OrderData={useSum(
            dataSell,
            token["currency1"].decimal,
            token["currency1"].decimal_amount
          )}
          Decimal={token["currency1"].decimal}
          DecimalAmount={token["currency1"].decimal_amount}
          type="Buy"
        ></Card>
      ),
      isLoading: isLoadingSell,
    },
    {
      label: "Sell",
      data: (
        <Card
          OrderData={useSum(
            dataBuy,
            token["currency1"].decimal,
            token["currency1"].decimal_amount
          )}
          Decimal={token["currency1"].decimal}
          DecimalAmount={token["currency1"].decimal_amount}
          type="Sell"
        ></Card>
      ),
      isLoading: isLoadingBuy,
    },
  ];

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.tabsContainer}>
        <TabContainer
          tabs={tabsShow}
          defaultTab="Sell orders"
          className={styles.showContainer}
        ></TabContainer>
        <TabContainer
          tabs={tabsOrder}
          defaultTab="Buy"
          className={styles.orderContainer}
        ></TabContainer>
      </div>
    </div>
  );
}
