import MuiButton from "@mui/material/Button";
import { useStyles } from "./ButtonStyles";
import clsx from "clsx";

export default function Button({ children, className, onClick, color }) {
  const styles = useStyles();
  return (
    <MuiButton
      variant="contained"
      className={clsx(styles.btn, className)}
      onClick={onClick}
      color={color}
    >
      {children}
    </MuiButton>
  );
}
