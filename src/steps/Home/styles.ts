import styled from 'styled-components';
import { Container as Move } from '../../components/Move/styles';

export const Container = styled.section`
	flex: 0.55;
	display: grid;
	grid-template-areas:
		'paper scissors'
		'rock rock';
	background: url('./images/bg-triangle.svg') center no-repeat;
	align-items: center;
	justify-content: center;
	background-size: 100%;
	width: min(82%, 38rem);

	& ${Move} {
		&#rock {
			grid-area: rock;
			transform: translateY(max(-8.23%, -.8rem));
			align-self: start;
			justify-self: center;
		}
		&#paper {
			grid-area: paper;
			transform: translate(max(-27%, -6rem), max(-7.88%, -1.8rem));
		}
		&#scissors {
			grid-area: scissors;
			transform: translate(min(27%, 6rem), max(-7.88%, -1.8rem));
		}

		@media screen and (max-width: 680px) and (max-height: 650px) {
			&#paper {
				transform: translate(max(-24.5%, -5.4rem), max(-15.88%, -2.1rem));
			}
			&#scissors {
				transform: translate(min(24.5%, 5.4rem), max(-15.88%, -2.1rem));
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
		@media screen and (max-width: 768px) and (max-height: 1200px) {
			&#paper,
			&#scissors {
				justify-self: center;
			}
			&#paper {
				transform: translate(max(-24.5%, -5.4rem), max(-15.88%, -.89rem));
			}
			&#scissors {
				transform: translate(min(24.5%, 5.4rem), max(-15.88%, -.89rem));
			}
		}
		@media screen and (min-width: 1199px) {
			&#paper,
			&#scissors {
				align-self: flex-end;
				justify-self: center;
			}
			&#paper {
				transform: translate(max(-4.5%, -3.8rem), max(-22%, -3.5rem));
			}
			&#scissors {
				transform: translate(min(4.5%, 3.8rem), max(-22%, -3.5rem));
			}
		}
		@media screen and (min-width: 1600px) {
			&#rock {
				transform: translateY(-17.66%);
			}
			&#paper {
				transform: translate(-23.5%, -40%);
			}
			&#scissors {
				transform: translate(23.5%, -40%);
			}
		}
	}

	@media screen and (max-width: 680px) and (max-height: 650px) {
		background-size: 80%;
		flex: .65;
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
		justify-content: initial;
	}
	@media screen and (min-width: 1600px) {
		width: min(25%, 25vw);
		max-height: 18vw;
		background-size: cover;
	}
	@media screen and (min-width: 3000px) and (max-height: 1500px) {
		width: min(25%, 22vw);
		max-height: 15vw;
		background-size: contain;
	}
`;
