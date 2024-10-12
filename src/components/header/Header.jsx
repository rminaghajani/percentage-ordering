import { useStyles } from "./HeaderStyles";
import ToggleButton from "../switch/ToggleButton";
import { useColorScheme } from "@mui/material";

export default function Header() {
  const { mode } = useColorScheme();

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <ToggleButton></ToggleButton>
      <p>{mode === "light" ? "Light Mode" : "Dark Mode"}</p>
    </div>
  );
}
