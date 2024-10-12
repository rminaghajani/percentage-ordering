import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useStyles } from "./SkeletonStyles";

export default function SkeletonStack() {
  const styles = useStyles();
  return (
    <Stack spacing={1} paddingTop="2rem">
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
      <Skeleton
        variant="rectangular"
        className={styles.container}
        height="6rem"
        animation="wave"
      />
    </Stack>
  );
}
