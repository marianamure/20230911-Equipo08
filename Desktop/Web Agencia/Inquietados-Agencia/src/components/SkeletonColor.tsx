import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function SkeletonColor() {
  return (
    <Box
      sx={{
        bgcolor: "#121212",
        p: 8,
        width: "800px",
        height: "450px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Skeleton
        sx={{ bgcolor: "grey.900" }}
        variant="rectangular"
        width={800}
        height={450}
      />
    </Box>
  );
}
