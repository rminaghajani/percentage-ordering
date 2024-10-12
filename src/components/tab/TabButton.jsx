import { useTransition } from "react";
import { useStyles } from "./TabContainerStyles.js";
import clsx from "clsx";

export default function TabButton({ children, isActive, onClick }) {
  const [isPending, startTransition] = useTransition();
  const styles = useStyles();

  return (
    <button
      onClick={() => {
        startTransition(() => {
          onClick();
        });
      }}
      className={clsx(
        styles.tabButton,
        {
          [styles.tabButtonActive]: isActive,
        },
        {
          [styles.tabButtonPending]: isPending,
        }
      )}
    >
      {children}
    </button>
  );
}
