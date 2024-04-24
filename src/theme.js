import { createTheme } from "@mui/material/styles";
const materialTheme = createTheme({
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState }) => {
					const defaultStyle = {
						borderRadius: "10px",
						lineHeight: "1",
					};
					if (ownerState.variant === "contained") {
						switch (ownerState.color) {
							case "primary":
								return {
									background: "linear-gradient(to bottom, #907ffc 30%, #6F58FF)",
									color: "#fff",
									border: "1px solid #6F58FF",
									...defaultStyle
								};
							case "secondary":
								return {
									backgroundColor: "#fff",
									color: "#000",
									border: "1px solid #e4e4e7",
									"&:hover": {
										backgroundColor: "#fff",
									},
									...defaultStyle
								};
							default:
								return {
									...defaultStyle
								};
						}
					}
					return {
						...defaultStyle
					};
				}
			}
		},
		MuiLink: {
			styleOverrides: {
				root: {
					marginRight: "1rem",
					color: "#000",
					textDecoration: "none",
					"&:hover": {
						textDecoration: "underline"
					}
				}
			}
		},
	},
	typography: {
		button: {
			textTransform: "none"
		}
	}
});

export default materialTheme;
