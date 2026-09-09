import type { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
	color: {
		moves: {
			scissorsAccent: 'hsl(39, 89%, 49%)',
			scissorsShadow: 'hsl(28, 76%, 44%)',
			paperAccent: 'hsl(230, 89%, 62%)',
			paperShadow: 'hsl(229, 64%, 46%)',
			rockAccent: 'hsl(349, 71%, 52%)',
			rockShadow: 'hsl(347, 75%, 35%)',
			lizardAccent: 'hsl(261, 73%, 60%)',
			lizardShadow: 'hsl(261, 51%, 44%)',
			spockAccent: 'hsl(189, 59%, 53%)',
			spockShadow: 'hsl(194, 58%, 42%)',
		},
		neutral: {
			text: {
				scoreValueText: 'hsl(229, 25%, 31%)',
				scoreText: 'hsl(229, 64%, 46%)',
				textT1: '#fff',
			},
			badge: {
				outline: 'hsl(246, 11%, 37%)',
				gradient: 'hsl(214, 47%, 23%), hsl(237, 48%, 15%)',
				bgColor: '#fff'
			}
		},
	},
	fontWeight: {
		semiBold: 600,
		bold: 700,
	},
};
