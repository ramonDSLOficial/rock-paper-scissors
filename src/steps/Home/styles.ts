import styled, { css } from 'styled-components';
import { Container as Move } from '../../components/Move/styles';
import type { GameCommonStyles } from '../../types/types';

export const Container = styled.section<GameCommonStyles>`
	position: relative;
	width: min(82%, 38rem);
	background: ${({ $hasExtraMoves }) =>
		`url('./images/bg-${
			!$hasExtraMoves ? 'triangle' : 'pentagon'
		}.svg') center no-repeat`};
	background-size: contain;
	aspect-ratio: ${({ $hasExtraMoves }) =>
		!$hasExtraMoves ? '313 / 278' : '329 / 313'};

	& ${Move} {
		position: absolute;
		transform: translate(-50%, -50%);

		${({ $hasExtraMoves }) => {
			if (!$hasExtraMoves)
				return css`
					&#rock {
						top: 70%;
						left: 50%;
					}
					&#paper,
					&#scissors {
						top: 5%;
					}
					&#paper {
						left: 15%;
					}
					&#scissors {
						left: 85%;
					}
				`;
			else
				return css`
					&#rock {
					}
					&#paper {
					}
					&#scissors {
					}
					&#lizard {
					}
					&#spock {
					}
				`;
		}}

		@media screen and (min-width: 1199px) {
			${({ $hasExtraMoves }) => {
				if (!$hasExtraMoves)
					return css`
						&#rock {
							top: 75%;
							left: 50%;
						}
						&#paper,
						&#scissors {
							top: 5%;
						}
						&#paper {
							left: 10%;
						}
						&#scissors {
							left: 90%;
						}
					`;
				else return css``;
			}}
		}
		@media screen and (min-width: 2000px) {
			${({ $hasExtraMoves }) => {
				if (!$hasExtraMoves)
					return css`
						&#rock {
							top: 80%;
						}
					`;
			}}
		}
		@media screen and (min-width: 3000px) {
			${({ $hasExtraMoves }) => {
				if (!$hasExtraMoves)
					return css`
						&#rock {
							top: 91%;
						}
					`;
			}}
		}
	}

	@media screen and (min-width: 1199px) {
		width: min(20.6vw, 32.33rem);
	}
	@media screen and (min-width: 2000px) {
		width: min(20.6vw, 66.33rem);
	}
	@media screen and (min-width: 3000px) and (max-height: 1600px) {
		width: min(20.6vw, 43.33rem);
	}
`;
