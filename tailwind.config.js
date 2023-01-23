module.exports = {
	content: [
		'./docs/.vitepress/**/*.{js,ts,vue}',
		'./docs/**/*.md',
	],

	theme: {
		container: {
			center: true,
		},
	},

	plugins: [
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '100%',
					},
					'@screen md': {
						maxWidth: '100%',
					},
					'@screen lg': {
						maxWidth: '100%',
					},
					'@screen xl': {
						maxWidth: '1152px',
					},
				}
			})
		},
	],
}