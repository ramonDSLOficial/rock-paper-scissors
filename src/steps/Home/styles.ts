import styled from 'styled-components';
import { Container as Move } from '../../components/Move/styles';

export const Container = styled.section`
	position: relative;
	background: url('./images/bg-triangle.svg') center no-repeat;
	background-size: 100%;
	flex: .55;
	background-size: contain;
	width: min(68%, 38rem);

	& ${Move} {
		position: absolute;

		&#rock {
			/*// FIXME puxar um poco para a esquerda */
			bottom: 9.5%;
			transform: translateX(min(50%, 5.9rem));
		}
		&#paper,
		&#scissors {
			top: 0;
		}
		&#paper {
			left: min(-4%, -3.6rem);
		}
		&#scissors {
			right: min(-4%, -3.6rem);
		}
		@media screen and (max-width: 680px) and (max-height: 650px) {
			&#rock {
				bottom: 4%;
				left: 25.866%;
				transform: unset;
			}
			&#paper,
			&#scissors {
				top: -15.5%;
			}
			&#paper {
				left: -11%;
			}
			&#scissors {
				right: -11%;
			}
		}		
	}

	@media screen and (max-width: 680px) and (max-height: 650px) {
		background-size: contain;
		flex: 0.85;
	}
`;
