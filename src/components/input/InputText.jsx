import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useStyles } from "./InputTextStyles";

export default function InputText({ hasError, textError, onChangeInput }) {
  const styles = useStyles();

  return (
    <TextField
      error={hasError}
      helperText={hasError ? textError : " "}
      onChange={onChangeInput}
      label="Percentage ordering"
      variant="filled"
      color="primary"
      className={styles.input}
      slotProps={{
        input: {
          endAdornment: <InputAdornment position="end">%</InputAdornment>,
        },
      }}
    />
  );
}
