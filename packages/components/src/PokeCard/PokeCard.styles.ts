import { TPokemonTypeKeys } from "./PokeCard.types";

export const POKEMON_TYPE = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
} as const;
export const styles = {
  muiCard: {
    height: "75vh",
    width: "70vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    outline: "1px solid black",
    outlineOffset: "-1rem",
    background: "rgba( 255, 255, 255, 0.35 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4.5px )",
    WebkitBackdropFilter: "blur( 4.5px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
  },
  mediaContainer: (types: TPokemonTypeKeys[]) => {
    let percent = 0;
    const lineraBackground = types.map((ele) => {
      const prev = percent;
      percent += 100 / types.length;
      return `${POKEMON_TYPE[ele]}80 ${prev}% ${percent}%`;
    });
    return {
      width: "100%",
      objectFit: "fill",
      height: "95%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(45deg,${lineraBackground.toString()})`,
      borderRadius: "10px",
    };
  },
  mediaCard:(laoding:boolean)=>{
    return {
      width: laoding ? "0px":"150px",
      objectFit: "fill",
      filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.8))",
    }
  } ,
  circularCard: {
    height: "65vh",
    margin: "0 auto",
    position: "absolute",
    top:"2rem",
    left:"calc(50% - 50px)",
    textAlign: "center",
    width: "200px",
    WebkitTransformOrigin: "center center",
    MozTransformOrigin: "center center",
    OTransformOrigin: "center center",
    MsTransformOrigin: "center center",
    transformOrigin: "center center",
  },
  cardContainer: (cardLength) => {
    const cardDegrees = 360 / cardLength;
    const cardCss = Array.from({ length: cardLength }, (c, i) => i).reduce(
      (acc, curr) => {
        return {
          ...acc,
          [`&:nth-child(${curr + 1})`]: {
            WebkitTransform: `rotate(${(curr + 1) * cardDegrees}deg)`,
            MozTransform: `rotate(${(curr + 1) * cardDegrees}deg)`,
            MsTransform: `rotate(${(curr + 1) * cardDegrees}deg)`,
            OTransform: `rotate(${(curr + 1) * cardDegrees}deg)`,
            transform: `rotate(${(curr + 1) * cardDegrees}deg)`,
            "& p":{
              rotate:`-${(curr + 1) * cardDegrees}deg`
            },
          },
        };
      },
      {}
    );

    return {
      background: "rgb(130,90,164)",
      border: "8px solid white",
      WebkitBorderRadius: "4px",
      MozBorderRadius: "4px",
      borderRadius: "4px",
      WebkitBoxShadow: "0 1px 3px rgba(0,0,0,.24)",
      MozBoxShadow: "0 1px 3px rgba(0,0,0,.24)",
      boxShadow: "0 1px 3px rgba(0,0,0,.24)",
      WebkitBoxSizing: "border-box",
      MozBoxSizing: "border-box",
      boxSizing: "border-box",
      height: "120px",
      top: "0",
      position: "absolute",
      width: "90px",
      WebkitTransformOrigin: "center 250px",
      MozTransformOrigin: "center 280px",
      OTransformOrigin: "center 280px",
      MsTransformOrigin: "center 280px",
      transformOrigin: "center 280px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...cardCss,
    };
  },
};
