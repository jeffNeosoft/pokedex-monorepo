import React, { useState } from "react";
import MuiCard from "@mui/material/Card";
import { Box, CardMedia, Typography } from "@mui/material";
import { ICardProps } from "./PokeCard.types";
import BadgeComponent from "../BadgeComponent/BadgeComponent";
import { POKEMON_TYPE, styles } from "./PokeCard.styles";
import PokeLoader from "../PokeLoader/PokeLoader";

const Card = (props: ICardProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <MuiCard sx={styles.muiCard}>
      <Box sx={styles.mediaContainer(props.types)}>
        {loading && <PokeLoader />}
        <CardMedia
          sx={styles.mediaCard(loading)}
          component="img"
          image={props.image}
          title={props.name}
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={() => setLoading(false)}
        />
      </Box>
      <Box sx={styles.circularCard}>
        {props.stats &&
          props.stats.map((data,i) => (
            <Box key={`statCard${i}`} sx={styles.cardContainer(props.stats.length)}>
              <Typography variant={"caption"} color={"white"}>
                <p>{data.name}</p>
                <p>{data.value}</p>
              </Typography>
            </Box>
          ))}
      </Box>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        sx={{
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {props.name}
      </Typography>
      <Box>
        {props.types.map((type,i) => (
          <Box key={`type${i}`} sx={{ display: "inline-block" , margin:"1rem"}}>
            <BadgeComponent
              labelBackground={POKEMON_TYPE[type]}
              label={type}
              labelFontColor="white"
            />
          </Box>
        ))}
      </Box>
    </MuiCard>
  );
};
export default Card;
