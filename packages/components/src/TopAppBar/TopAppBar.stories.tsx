import React from "react";
import TopAppBar from "./TopAppBar";
const props={
    color:"#343a40"
}
export default {
  component: <TopAppBar {...props}/>,
  title: "TopAppBar",
};

export const Default = {
    render :(args)=> <TopAppBar {...args}/>,
    args:props
}
