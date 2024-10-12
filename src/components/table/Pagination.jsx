import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PaginationItem from "@mui/material/PaginationItem";

export default function PaginationTable({ page, onChange, className, count }) {
  return (
    <div className={className}>
      <Stack spacing={2}>
        <Pagination
          count={count}
          page={page}
          onChange={onChange}
          size="large"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
      </Stack>
    </div>
  );
}
