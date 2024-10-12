import { Suspense, useEffect, useRef, useState } from "react";
import TabButton from "./TabButton.jsx";
import { useStyles } from "./TabContainerStyles.js";
import SkeletonStack from "../skeleton/Skeleton.jsx";
import { Fragment } from "react";

export default function TabContainer({ tabs, defaultTab, className }) {
  const [tab, setTab] = useState(defaultTab);
  const styles = useStyles();
  const tabRef = useRef(null);

  //swipe event
  useEffect(() => {
    let element = tabRef.current;
    let touchstartX = 0;
    let touchendX = 0;

    function swipe(type) {
      let indexTab;
      tabs.find((val, index) => {
        indexTab = index;
        return val.label === tab;
      });
      if (type === "left" && indexTab !== tabs.length - 1) {
        setTab(tabs[indexTab + 1].label);
      } else if (type === "right" && indexTab !== 0) {
        setTab(tabs[indexTab - 1].label);
      }
    }

    function checkDirection() {
      if (Math.abs(touchendX - touchstartX) >= 80) {
        if (touchendX < touchstartX) swipe("left");
        if (touchendX > touchstartX) swipe("right");
      }
    }
    function handleStart(e) {
      touchstartX = e.changedTouches[0].screenX;
    }
    function handleEnd(e) {
      touchendX = e.changedTouches[0].screenX;
      checkDirection();
    }

    element.addEventListener("touchstart", handleStart);
    element.addEventListener("touchend", handleEnd);
    return () => {
      element.removeEventListener("touchstart", handleStart);
      element.removeEventListener("touchend", handleEnd);
    };
  }, [tab, tabs]);

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
      <div className={className} ref={tabRef}>
        <div className={styles.tabContainer}>{TabButtons}</div>
        <>{TabBodies}</>
      </div>
    </Suspense>
  );
}
