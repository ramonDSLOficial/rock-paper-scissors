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
				text: {
					textT2: string;
					textT0: string;
					textT1: string;
				};
				badge: {
					outline: string;
					gradient: string;
					bgColorT1: string;
					bgColorT2: string;
				};
			};
		};
		fontWeight: {
			semiBold: number;
			bold: number;
		};
	}
}
