/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'main': '#d63a3a',
			},
			screens: {
				'3xl': '1920px',
			},
		},
	},
	plugins: [require('@tailwindcss/typography'),],
}
