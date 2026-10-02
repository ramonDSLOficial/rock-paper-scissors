import styled from 'styled-components';
import { Container as Move } from '../../components/Move/styles';

export const Container = styled.section`
	flex: 0.55;
	position: relative;
	display: grid;
	grid-template-areas:
		'paper scissors'
		'rock rock';
	background: url('./images/bg-triangle.svg') center no-repeat;
	background-size: 100%;
	width: min(68%, 38rem);

	& ${Move} {
		position: absolute;

		&#rock {
			grid-area: rock;
			transform: translateY(max(-13.23%, -2rem));
			justify-self: center;
		}
		&#paper {
			grid-area: paper;
			transform: translate(max(-27%, -6rem), max(-7.88%, -1.8rem));
		}
		&#scissors {
			grid-area: scissors;
			justify-self: flex-end;
			transform: translate(min(27%, 6rem), max(-7.88%, -1.8rem));
		}

		@media screen and (max-width: 680px) and (max-height: 650px) {
			&#rock {
				transform: translateY(max(-15.23%, -2rem));
			}
			&#paper {
				transform: translate(max(-12%, -2.5rem), max(-30%, -3rem));
			}
			&#scissors {
				transform: translate(min(12%, 2.5rem), max(-30%, -3rem));
			}
		}

		@media screen and (min-width: 768px) {
			&#paper,
			&#scissors {
				align-self: center;
			}
			&#paper {
				transform: translateX(max(-22%, -4rem));
			}
			&#scissors {
				transform: translateX(min(22%, 4rem));
			}
		}
		@media screen and (min-width: 768px) and (max-height: 900px) {
			&#paper {
				transform: translate(max(-28%, -4rem), -5rem);
			}
			&#scissors {
				transform: translate(min(28%, 4rem), -5rem);
			}
		}
		@media screen and (min-width: 1199px) {
			&#paper,
			&#scissors {
				align-self: flex-end;
			}
			&#paper {
				transform: translate(min(4.5%, 2.5rem), max(-22%, -3.5rem));
			}
			&#scissors {
				transform: translate(max(-4.5%, -2.5rem), max(-22%, -3.5rem));
			}
		}
	}

	@media screen and (max-width: 680px) and (max-height: 650px) {
		background-size: contain;
		flex: 0.85;
	}
	@media screen and (min-width: 768px) {
		flex: 0.9;
		margin: 2% 0 5% 0;
	}
	@media screen and (min-width: 768px) and (max-height: 900px) {
		&& {
			margin-top: 5rem;
		}
	}
	@media screen and (min-width: 1199px) {
		background-size: 68%;
		margin-top: 25%;
	}
	/* mudar para contain o size da bg */
`;
