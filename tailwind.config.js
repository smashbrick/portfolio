/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				secondaryBlack: "#868e96",
				primaryBlue: "#2e8fde",
			},
			boxShadow: {
				dark: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
				light: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
				top: "rgba(0, 0, 0, 0.1) 0px -2px 2px",
			},
		},
	},
	plugins: [],
};
