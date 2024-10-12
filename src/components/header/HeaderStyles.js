import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    container: {
      background: `${theme.palette.divider}`,
      display: "flex",
      alignItems: "center",
      boxShadow: `${theme.shadows[1]}`,
    },
  };
});
