import { useState } from "react";
import Switch from "@mui/material/Switch";
import { useColorScheme } from "@mui/material";

export default function ToggleButton() {
  const { mode, setMode } = useColorScheme();
  const [checked, setChecked] = useState(mode === "light" ? false : true);

  const handleChange = (event) => {
    if (event.target.checked) {
      setMode("dark");
      setChecked(true);
    } else {
      setMode("light");
      setChecked(false);
    }
  };

  return <Switch onChange={handleChange} checked={checked} />;
}
