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
	aspect-ratio: ${({ $hasExtraMoves }) => !$hasExtraMoves ? '313 / 278' : '329 / 313'};

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
			else return css``;
		}}
	}
`;
