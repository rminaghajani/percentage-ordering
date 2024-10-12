import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: `${theme.palette.divider}`,
    padding: "4rem 4rem",
    gap: "1.5rem",
  },

  resContainer: {
    width: "100%",
    display: "flex",
    alignItems: "baseline",
    justifyContent: "flex-start",
    backgroundColor: `${theme.palette.divider}`,
    padding: "0rem 1rem",
  },

  textHeader: {
    flexGrow: 1,
    flexBasis: "50%",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },

  textResult: {
    flexGrow: 1,
    flexBasis: "50%",
    fontSize: "1.5rem",
  },
  btn: {
    width: "100%",
    height: "4rem",
  },
}));
