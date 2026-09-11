import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	color: {
		moves: {
			scissorsAccent: '#ec9e0eff',
			scissorsShadow: '#c56b1bff',
			paperAccent: '#4865f4ff',
			paperShadow: '#2a46c0ff',
			rockAccent: '#dc2e4eff',
			rockShadow: '#9c1633ff',
			lizardAccent: '#834fe3ff',
			lizardShadow: '#5f37a9ff',
			spockAccent: '#40b9ceff',
			spockShadow: '#2d8ca9ff',
		},
		neutral: {
			text: {
				textT0: '#3b4363ff',
				textT1: '#fff',
				textT2: '#2a46c0ff',
			},
			badge: {
				outline: '#565469ff',
				gradient: '#1f3756ff, #141639ff',
				bgColorT1: '#fff',
				bgColorT2: '#141639ff',
			},
		},
	},
	fontWeight: {
		semiBold: 600,
		bold: 700,
	},
};
