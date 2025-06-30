import { useLocation, Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { FiHome } from "react-icons/fi";

interface DynamiBreadCrumbsProps {
  projectTitle?: string;
}

export default function DynamicBreadcrumbs({
  projectTitle,
}: DynamiBreadCrumbsProps) {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" component={RouterLink} to="/">
        <FiHome size={"1.5rem"} />
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        if (isLast && projectTitle) {
          return (
            <Typography key={to} color="text.primary">
              {projectTitle}
            </Typography>
          );
        }

        return isLast ? (
          <Typography key={to} color="text.primary">
            {decodeURIComponent(value)}
          </Typography>
        ) : (
          <Link
            key={to}
            underline="hover"
            color="inherit"
            component={RouterLink}
            to={to}
          >
            {decodeURIComponent(value)}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
