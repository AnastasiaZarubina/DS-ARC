import { spacers } from "./spacers";

export const typography = {
	fontFamily: {
		base: `"Open Sans", -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`,
		monospace: `'Noto Sans Mono', 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Consolas, Courier, monospace`,
	},

	fontSize: {
		h1: spacers[32],
		h2: spacers[28],
		h3: spacers[24],
		h4: spacers[20],
		h5: spacers[18],
		h6: spacers[16],
		base: spacers[16],
		small: spacers[14],
		extraSmall: spacers[12],
	},

	lineHeight: {
		h1: spacers[40],
		h2: spacers[36],
		h3: spacers[32],
		h4: spacers[28],
		h5: spacers[24],
		h6: spacers[24],
		base: spacers[20],
		small: spacers[20],
		extraSmall: spacers[16],
	},

	fontWeight: {
		regular: "400",
		medium: "500",
		semiBold: "600",
		bold: "700",
	},
};
