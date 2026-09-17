import styled from 'styled-components';
import { Container as Move } from '../../components/Move/styles';

export const Container = styled.section`
	flex: 0.55;
	position: relative;
	display: grid;
	grid-template-areas: 
	"paper scissors"
	"rock rock";
	background: url('./images/bg-triangle.svg') center no-repeat;
	background-size: 100%;
	width: min(68%, 38rem);

	& ${Move} {
		position: absolute;

		&#rock {
			grid-area: rock;
			transform: translateY(max(-7%, -2rem));
			justify-self: center;
		}
		&#paper {
			grid-area: paper;
			transform: translateX(max(-22%, -2.5rem));
		}
		&#scissors {
			grid-area: scissors;
			transform: translateX(min(22%, 2.5rem));
		}

		@media screen and (max-width: 680px) and (max-height: 650px) {
			&#rock {
			}
			&#paper {
				transform: translate(max(-22%, -2.5rem), max(-30%, -3rem));				
			}
			&#scissors {
				transform: translate(min(22%, 2.5rem), max(-30%, -3rem));
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
