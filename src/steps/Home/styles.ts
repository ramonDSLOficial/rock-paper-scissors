import styled from 'styled-components';
import { Container as Move } from '../../components/Move/styles';

export const Container = styled.section`
	position: relative;
	background: url('./images/bg-triangle.svg') center no-repeat;
	background-size: contain;
	flex: 0.45;
	width: 100%;

	& ${Move} {
		position: absolute;

		&#rock {
			bottom: 0;
			left: 50%;
			transform: translate(-50%, 30%);
		}
		&#paper {
			transform: translate(10%, -35%);
		}
		&#scissors {
			right: 5%;
			transform: translateY(-35%);
		}

		@media screen and (max-width: 380px) and (max-height: 650px) {
			&#rock {
				transform: translate(-50%, 20%);
			}
			&#paper {
				transform: translate(52%, -50%);
			}
			&#scissors {
				right: 5%;
				transform: translate(-38%, -50%);
			}
		}
		@media screen and (max-width: 380px) and (min-height: 651px) and (max-height: 780px) {
			&#rock {
				transform: translate(-50%, 10%);
			}
			&#paper {
				transform: translate(24.5%, -50%);
			}
			&#scissors {
				right: 5%;
				transform: translate(-10%, -50%);
			}
		}
	}

	@media screen and (max-width: 380px) and (max-height: 650px) {
		flex: 0.58;
	}
`;
