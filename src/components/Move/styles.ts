import styled, { css } from 'styled-components';
import type { Moves } from '../../types/types';

interface MoveStyledProps {
	$move?: Moves;
}

const boxShadow = 'inset 0 6.32px 0 #babed2b2;';
/*
// NOTE quando começar a mexer na parte JS, pegar o aparelho (largura e altura) para criar uma const com os box-shadow só fazendo uma alteração básica, para evitar ter que continuar repetindo toda essa linha de códgo
// protótipo
const moveAccentShadow = `
	${({ $move, theme: { color } }) => {
		return css<MoveStyledProps>`
			box-shadow: 0 6.869px 0 ${color.moves[$move + 'Shadow']}, ${boxShadow};
		`;
	}}
`;
*/
export const Container = styled.button<MoveStyledProps>`
	border: min(3.2vw, 1.4rem) solid transparent;
	border-radius: 50%;
	line-height: 0;
	transition: all .5s ease-in-out;

	${({ $move, theme: { color } }) => {
		if ($move)
			return css`
				padding: min(6.865vw, 2.668rem);
				background-color: ${color.neutral.badge.bgColorT1};
				background-clip: padding-box;
				border-color: ${color.moves[$move + 'Accent']};
				box-shadow: 0 6.869px 0 ${color.moves[$move + 'Shadow']},
					${boxShadow};
			`;
		else
			return css`
				padding: 4.465vw;
				background-clip: border-box;
				background-color: ${props => props.theme.color.neutral.badge.bgColorT2};
				filter: opacity(0.5);
			`;
	}}

	@media screen and (max-width: 380px) and (max-height: 650px) {
		padding: 4.568vw;
		border-width: 7.59px;
		${({ $move, theme: { color } }) =>
			$move
				? `box-shadow: 0 4.869px 0 ${
						color.moves[$move + 'Shadow']
				  }, ${boxShadow}`
				: ''}
	}
	@media screen and (max-width: 380px) and (min-height: 651px) and (max-height: 780px) {
		padding: 5.437vw;
		border-width: 8.568px;
		${({ $move, theme: { color } }) =>
			$move
				? `box-shadow: 0 4.869px 0 ${
						color.moves[$move + 'Shadow']
				  }, ${boxShadow}`
				: ''}
	}
`;

export const Image = styled.img<MoveStyledProps>`
	display: block;
	visibility: ${({ $move }) => $move ? 'initial' : 'hidden'};
	width: min(9.768vw, 3.85rem);
	height: min(9.768vw, 3.85rem);
	object-fit: scale-down;
	transition: all .5s ease-in-out;

	@media screen and (max-width: 380px) and (max-height: 650px) {
		width: 2.8rem;
		height: 2.6rem;
	}
	@media screen and (max-width: 380px) and (min-height: 651px) and (max-height: 780px) {
		width: 3.8rem;
		height: 3.8rem;
	}
`;
