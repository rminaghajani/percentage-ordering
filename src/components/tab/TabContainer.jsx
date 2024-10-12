import { Suspense, useState } from "react";
import TabButton from "./TabButton.jsx";
import { useStyles } from "./TabContainerStyles.js";
import SkeletonStack from "../skeleton/Skeleton.jsx";
import { Fragment } from "react";

export default function TabContainer({ tabs, defaultTab, className }) {
  const [tab, setTab] = useState(defaultTab);
  const styles = useStyles();

  const TabButtons = tabs.map((value, index) => {
    return (
      <TabButton
        isActive={tab === value.label}
        onClick={() => setTab(value.label)}
        key={index}
      >
        {value.label}
      </TabButton>
    );
  });

  const TabBodies = tabs.map((value, index) => {
    return (
      <Fragment key={index}>
        {tab === value.label && (
          <>
            {value.isLoading ? (
              <SkeletonStack />
            ) : (
              tab === value.label && value.data
            )}
          </>
        )}
      </Fragment>
    );
  });

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className={className}>
        <div className={styles.tabContainer}>{TabButtons}</div>
        <>{TabBodies}</>
      </div>
    </Suspense>
  );
}
