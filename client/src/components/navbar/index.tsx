import { useState } from "react";
import { Link } from "react-router-dom";
import DiamondIcon from "@mui/icons-material/Diamond";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "../FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();

  const [selected, setSelected] = useState("hoverapplied");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[100]}>
      {/* LEFT SIDE PANNEL */}
      <FlexBetween gap="0.75rem">
        <DiamondIcon sx={{ fontSize: "30px" }} />
        <Typography variant="h4" fontSize="16px">
          ProfitSight
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE PANNEL */}
      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[200] } }}>
          <Link
            to="/"
            onClick={() => setSelected("hoverapplied")}
            style={{
              color:
                selected === "hoverapplied" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Dashboard
          </Link>
        </Box>

        <Box sx={{ "&:hover": { color: palette.primary[200] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("hoverapplied")}
            style={{
              color:
                selected === "hoverapplied" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;
