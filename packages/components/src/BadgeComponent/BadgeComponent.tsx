import { Box, Typography } from "@mui/material";
import React from "react";
import { styles } from "./BadgeComponent.styles";
import { IBadgeProps } from "./BadgeComponent.types";

export default function BadgeComponent({
  label,
  labelFontColor = "black",
  labelBackground = "#adb5bd",
}:IBadgeProps) {
  return (
    <Typography variant="body2">
         <Box sx={styles.label({ color:labelBackground, fontColor:labelFontColor })}>{label}</Box>
    </Typography>
  );
}
