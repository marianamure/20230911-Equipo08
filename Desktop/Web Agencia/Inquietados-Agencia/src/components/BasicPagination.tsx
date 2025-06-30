import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function BasicPagination({
  page,
  totalPages,
  onPageChange,
}: Props) {
  return (
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={page}
        onChange={onPageChange}
        color="primary"
      />
    </Stack>
  );
}
