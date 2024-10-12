import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  tabsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: "6rem",
    padding: "0rem 3.5rem",
  },

  showContainer: {
    width: "60%",
  },

  orderContainer: {
    width: "40%",
  },
}));
