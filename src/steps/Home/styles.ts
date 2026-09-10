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
			transform: translate(-50%, 35%);
		}
		&#paper {
			transform: translateY(-35%);
		}
		&#scissors {
			right: 0;
			transform: translateY(-35%);
		}
		&#lizard {

		}
		&#spock {

		}
	}
`;
