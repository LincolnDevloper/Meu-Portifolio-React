/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				// Adiciona a sua fonte personalizada
				poppins: ["Poppins", "sans-serif"],
			},
			boxShadow: {
				presetbtn: "0px 0px 1rem",
			},
			colors: {
				racingRed: "#e20000",
			},
			animation: {
				btnNeon: "btnNeon 2s infinite",
			},
			keyframes: {
				btnNeon: {
					"0%, 100%": { boxShadow: "0px 0px 20px #e20000" },
					"50%": { boxShadow: "0px 0px 50px #e20000" },
				},
			},
		},
		plugins: [],
	},
};
