import styled from 'styled-components';
import { Container as Move } from '../../components/Move/styles';

export const Container = styled.section`
	position: relative;
	background: url('./images/bg-triangle.svg') center no-repeat;
	background-size: 100%;
	flex: 0.55;
	background-size: contain;
	width: min(68%, 38rem);

	& ${Move} {
		position: absolute;

		&#rock {
			bottom: 0;
			transform: translate(min(50%, 5rem), max(-4rem, -25%));
		}
		&#paper,
		&#scissors {
			top: 0;
		}
		&#paper {
			transform: translateX(max(-40%, -3.5rem));
		}
		&#scissors {
			right: 0;
			transform: translateX(min(40%, 3.5rem));
		}

		@media screen and (max-width: 680px) and (max-height: 650px) {
			&#rock {
				bottom: 0;
				transform: translate(min(58%, 5.4rem), max(-2rem, -5%));
			}
			&#paper {
				transform: translate(max(-20%, -3.5rem), max(-32%, -5rem));
			}
			&#scissors {
				right: 0;
				transform: translate(min(20%, 3.5rem), max(-32%, -5rem));
			}
		}

		@media screen and (min-width: 768px) {
			&#rock {
				bottom: 0;
				transform: translate(min(8.86vw, 13.66rem), min(3rem, 5vh));
			}
			&#paper {
				transform: translate(max(-3vw, -2.5rem), max(-5vh, -4.2rem));
			}
			&#scissors {
				right: 0;
				transform: translate(min(3vw, 2.5rem), max(-5vh, -4.2rem));
			}
		}
	}

	@media screen and (max-width: 680px) and (max-height: 650px) {
		background-size: contain;
		flex: 0.85;
	}
	@media screen and (min-width: 768px) {
		flex: 0.78;

		&& {
			margin: 2% 0 5% 0;
		}
	}
`;
