import React from "react";
import { Grid } from "@mui/material";
import BadgeInfo from "./BadgeComponent";
import { IBadgeProps } from "./BadgeComponent.types";
const props: IBadgeProps = {
  label: "Power",
  labelFontColor: "#caf0f8",
  labelBackground: "#00b4d8",
};
export default {
  component: <BadgeInfo {...props} />,
  title: "PokemonBadge",
};

export const Default = {
  render: (args: IBadgeProps) => (
    <Grid
      container
      justifyContent={"space-between"}
      alignContent={"stretch"}
      alignItems={"stretch"}
    >
      <Grid item xs={4}>
        <BadgeInfo {...args} />
      </Grid>
    </Grid>
  ),
  args: props,
};
