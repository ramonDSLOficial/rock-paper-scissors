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
	border: 12px solid;
	padding: 6.865vw;
	border-radius: 50%;
	line-height: 0;

	${({ $move, theme: { color } }) => {
		if ($move)
			return css`
				background-color: ${color.neutral.badge.bgColor};
				background-clip: padding-box;
				border-color: ${color.moves[$move + 'Accent']};
				box-shadow: 0 6.869px 0 ${color.moves[$move + 'Shadow']},
					${boxShadow};
			`;
		else return css``;
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
	width: max(6.768vw, 4.85rem);
	height: max(6.768vw, 4.85rem);
	object-fit: scale-down;

	@media screen and (max-width: 380px) and (max-height: 650px) {
		width: 2.8rem;
		height: 2.6rem;
	}
	@media screen and (max-width: 380px) and (min-height: 651px) and (max-height: 780px) {
		width: 3.8rem;
		height: 3.8rem;
	}
`;
