export const styles = {
	background: {
			height: "92vh",
			background: "linear-gradient(#ebf4f5,#b5c6e0)",
		},
	back: {
		all: "revert",
		alignItems: "center",
		backgroundColor: "#ced4da",
		border: "2px solid #111",
		borderRadius: "8px",
		boxSizing: "border-box",
		color: "#111",
		cursor: "pointer",
		display: "flex",
		fontFamily: "Inter,sans-serif",
		fontSize: "16px",
		height: "48px",
		justifyContent: "center",
		lineHeight: "24px",
		maxWidth: "100%",
		padding: "0 25px",
		position: "relative",
		textAlign: "center",
		textDecoration: "none",
		userSelect: "none",
		WebkitUserSelect: "none",
		touchAction: "manipulation",
		"&:after": {
			backgroundColor: "#adb5bd",
			borderRadius: "8px",
			content: '""',
			display: "block",
			height: "48px",
			left: "0",
			width: "100%",
			position: "absolute",
			top: "-2px",
			transform: "translate(8px, 8px)",
			transition: "transform .2s ease-out",
			zIndex: "-1",
		},
		"&:hover:after": {
			transform: "translate(0, 0)",
		},
		"&:active": {
			outline: "0",
		},
		"&:hover": {
			backgroundColor: "#adb5bd",
			transition: "transform .2s ease-in",
			outline: "0",
		},
		"@media (min-width: 768px)": {
			padding: "0 40px",
		},
	},
	back_container: {
		textAlign: "left",
		padding: "1rem",
	},
	card_container: {
		display: "grid",
		placeContent: "center",
	},
};
