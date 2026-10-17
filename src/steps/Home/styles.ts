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
					&#scissors {
						left: 50%;
					}

					&#spock,
					&#paper {
						top: 40%;
					}
					&#paper {
						left: 100%;
					}

					&#lizard,
					&#rock {
						top: 100%;
					}
					&#lizard {
						left: 17%;
					}
					&#rock {
						left: 83%;
					}
				`;
		}}

		@media screen and (max-width: 680px) and (max-height: 650px) {
			${({ $hasExtraMoves }) => {
				if ($hasExtraMoves)
					return css`
						&#scissors {
							top: 5%;
						}

						&#spock,
						&#paper {
							top: 40%;
						}
						&#spock {
							left: 10%;
						}
						&#paper {
							left: 90%;
						}

						&#lizard,
						&#rock {
							top: 90%;
						}
						&#lizard {
							left: 20%;
						}
						&#rock {
							left: 80%;
						}
					`;
			}}
		}
		@media screen and (min-width: 768px) {
			${({ $hasExtraMoves }) => {
				if ($hasExtraMoves)
					return css`
						transform: translate(-50%, -50%) scale(0.75);
					`;
			}}
		}
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
				else
					return css`
						transform: translate(-50%, -50%);
					`;
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

	@media screen and (min-width: 768px) {
		${({ $hasExtraMoves }) => {
			if ($hasExtraMoves) return css`
					&& {
						margin: auto 0;
					}
					width: min(23.6vw, 31.33rem);
				`;
		}}
	}
	@media screen and (min-width: 768px) and (min-height: 1000px) {
		${({ $hasExtraMoves }) => {
			if (!$hasExtraMoves)
				return css`
					width: min(45.33vw, 36.33rem);
				`;
			else
				return css`
					width: min(36.33vw, 36.33rem);
				`;
		}}
	}
	@media screen and (min-width: 1199px) {
		width: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? 'min(21.2vw, 32.33rem)' : 'min(18.2vw, 32.33rem)'};
	}
	@media screen and (min-width: 1199px) and (max-height: 700px) {
		&& {
			margin: ${({ $hasExtraMoves }) => (!$hasExtraMoves ? '0' : 'auto 0')};
		}
	}
	@media screen and (min-width: 2000px) {
		width: min(20.6vw, 66.33rem);

		&& {
			margin: auto 0;
		}
	}
	@media screen and (min-width: 3000px) and (max-height: 1600px) {
		width: min(20.6vw, 43.33rem);
	}
`;
