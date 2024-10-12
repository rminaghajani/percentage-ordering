import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    gap: "0.15rem",
  },
  rowContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0rem 0.5rem",
    backgroundColor: `${theme.palette.divider}`,
  },
  text: {
    fontWeight: "bold",
    flexGrow: 1,
    flexBasis: "33%",
    fontSize: "1.2rem",
  },
  textLeft: {
    textAlign: "left",
  },
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  priceSell: {
    color: `${theme.palette.error.main}`,
  },
  priceBuy: {
    color: `${theme.palette.success.main}`,
  },
  hr: {
    width: "100%",
  },
}));
