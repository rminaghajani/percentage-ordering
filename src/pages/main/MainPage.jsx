import { useStyles } from "./MainPageStyles";
import Header from "../../components/header/Header";
import TabContainer from "../../components/tab/TabContainer";
import useTableApi from "../../api/useTableApi";
import Table from "../../components/table/Table";
import { useState } from "react";

export default function MainPage() {
  const styles = useStyles();
  const { isLoading, USDTData, IRTData } = useTableApi();
  const [pageUSDT, setPageUSDT] = useState(1);
  const [pageIRT, setPageIRT] = useState(1);

  const tabs = [
    {
      label: "USDT",
      data: (
        <Table
          data={USDTData}
          id="USDT"
          page={pageUSDT}
          setPage={setPageUSDT}
        />
      ),
      isLoading: isLoading,
    },
    {
      label: "IRT",
      data: (
        <Table data={IRTData} id="IRT" page={pageIRT} setPage={setPageIRT} />
      ),
      isLoading: isLoading,
    },
  ];

  return (
    <div className={styles.container}>
      <Header></Header>
      <TabContainer
        tabs={tabs}
        defaultTab="USDT"
        className={styles.tabContainer}
      ></TabContainer>
    </div>
  );
}
