import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  tabContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabButton: {
    flexGrow: 1,
    outline: "none",
    border: "none",
    padding: "10px 0px",
    color: `${theme.palette.primary.light}`,
    fontWeight: "bold",
    fontSize: "1.6rem",
    transition: "all 0.2s",
    backgroundColor: `${theme.palette.divider}`,
    borderBottom: `3px solid ${theme.palette.primary.light}`,
    cursor: "pointer",
  },
  tabButtonActive: {
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.contrastText}`,
  },
  tabButtonPending: {
    backgroundColor: `${theme.palette.action.disabledBackground}`,
    color: `${theme.palette.action.disabled}`,
  },
}));
