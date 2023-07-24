import { IBadgeCss } from "./BadgeComponent.types";

export const styles = {
  badge: ({color,fontColor="white"}:IBadgeCss)=>{
    return ({
        "& .MuiBadge-badge": {
          color: fontColor,
          backgroundColor: color,
        },
      })
  },
  label:({color,fontColor}:IBadgeCss)=>{
    return ({
        backgroundColor: color,
        color:fontColor,
        padding: "5px 20px",
        borderRadius: "5px",
        width:"fit-content"
      })
  },
};
