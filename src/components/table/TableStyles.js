import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  table: {
    margin: "2rem 0",
    fontSize: "1.4rem",
    width: "100%",
    minWidth: "400px",
    tableLayout: "fixed",
    borderCollapse: "separate",
    borderSpacing: "0px 2px",
  },

  trHeader: {
    backgroundColor: `${theme.palette.secondary.dark}`,
    color: "#fff",
  },

  trBody: {
    backgroundColor: `${theme.palette.secondary.light}`,
    color: `${theme.palette.secondary.contrastText}`,
  },

  th: {
    padding: "0.5rem 0rem",
  },

  td: {
    padding: "0.5rem 0rem",
    textAlign: "center",
    color: `${theme.palette.secondary.contrastText}`,
  },

  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  nameContainer: {
    display: "flex",
    paddingLeft: "1rem",
    alignItems: "center",
    gap: "0.5rem",
    color: `${theme.palette.secondary.contrastText}`,
  },

  nameCell: {
    width: "70rem",
  },

  img: {
    width: "3rem",
    height: "3rem",
  },

  name: {
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
}));
