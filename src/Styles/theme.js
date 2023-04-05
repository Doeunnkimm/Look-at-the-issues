const PALETTE = {
	error: 'rgb(240, 0, 1)',
	white: '#ffffff',
	black: '#000000',
	gray: {
		100: 'rgb(220, 220, 220)',
		200: 'rgb(180, 180, 180)',
		300: 'rgb(130, 130, 130)',
	},
}

const DEVICE_SIZES = {
	mobile: 575,
	tablet: 991,
	laptop: 1199,
}

const DEVICE = {
	mobile: `screen and (max-width: ${DEVICE_SIZES.mobile}px)`,
	tablet: `screen and (max-width: ${DEVICE_SIZES.tablet}px)`,
	laptop: `screen and (max-width: ${DEVICE_SIZES.laptop}px)`,
}

const theme = { PALETTE, DEVICE }

export default theme
