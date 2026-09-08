import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			moves: {
				scissorsAccent: string;
				scissorsShadow: string;
				paperAccent: string;
				paperShadow: string;
				rockAccent: string;
				rockShadow: string;
				lizardAccent: string;
				lizardShadow: string;
				spockAccent: string;
				spockShadow: string;
			};
			neutral: {
				text: string;
				scoreText: string;
				outline: string;
				radialGradient: string;
			};
		};
		fontWeight: {
			semiBold: number;
			bold: number;
		};
	}
}
