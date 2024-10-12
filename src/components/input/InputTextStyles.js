import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  input: {
    "& .MuiFormLabel-root": {
      fontSize: "1.5rem",
    },
    "& .MuiInputBase-root": {
      "& .MuiInputBase-input": { fontSize: "1.5rem" },
      "& .MuiInputAdornment-root": {
        "& .MuiTypography-root": {
          fontSize: "1.5rem",
        },
      },
    },
    "& .MuiFormHelperText-root": {
      fontSize: "1.3rem",
    },
  },
}));
