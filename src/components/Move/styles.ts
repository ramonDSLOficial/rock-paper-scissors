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
	border: min(3.33vw, 2rem) solid transparent;
	border-radius: 50%;
	line-height: 0;
	transition: all 0.5s ease-in-out;

	${({ $move, theme: { color } }) => {
		if ($move)
			return css`
				padding: min(6.834vw, 4.385rem);
				background-color: ${color.neutral.badge.bgColorT1};
				background-clip: padding-box;
				border-color: ${color.moves[$move + 'Accent']};
				box-shadow: 0 6.869px 0 ${color.moves[$move + 'Shadow']},
					${boxShadow};
			`;
		else
			return css`
				padding: min(3.965vw, 1.964rem);
				background-clip: border-box;
				background-color: ${(props) =>
					props.theme.color.neutral.badge.bgColorT2};
				filter: opacity(0.5);
			`;
	}}

	@media screen and (max-width: 680px) and (max-height: 650px) {
		padding: 5.237vw;
		border-width: 8.568px;

		${({ $move, theme: { color } }) =>
			$move
				? `box-shadow: 0 4.869px 0 ${
						color.moves[$move + 'Shadow']
				  }, ${boxShadow}`
				: ''}
	}
	@media screen and (min-width: 768px) {
		/* // NOTE ver se pode tirar o else, já que ele é exatamente igual ao anterior */
		${({ $move }) => {
			if ($move)
				return css`
					padding: min(6.865vw, 4.285rem);
				`;
			else
				return css`
					padding: min(3.965vw, 2.464rem);
				`;
		}}
	}
	@media screen and (min-width: 1199px) {
		${({ $move }) => {
			if ($move)
				return css`					
					padding: 2.385vw;
				`;
		}}
	}
`;

export const Image = styled.img<MoveStyledProps>`
	display: block;
	visibility: ${({ $move }) => ($move ? 'initial' : 'hidden')};
	width: min(11.33vw, 5rem);
	height: min(12vw, 5.66rem);
	transition: all 0.5s ease-in-out;

	@media screen and (max-width: 380px) and (max-height: 650px) {
		width: 3.2rem;
		height: 3rem;
	}
	@media screen and (max-width: 380px) and (min-height: 651px) and (max-height: 780px) {
		width: 3.8rem;
		height: 3.8rem;
	}
	@media screen and (min-width: 768px) {
		width: min(11.33vw, 6.895rem);
		height: min(12vw, 6.895rem);
	}
	@media screen and (min-width: 1199px) {
		width: min(8vw, 4.954rem);
		height: min(8vw, 5rem);
		object-fit: contain;
	}
`;
