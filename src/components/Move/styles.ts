import styled, { css } from 'styled-components';
import type { Moves } from '../../types/types';
import { Container as Game } from '../../steps/Game/styles';

interface MoveStyledProps {
	$move?: Moves;
}

const boxShadow = 'inset 0 6.32px 0 #babed2b2';
const winnerShadowLength = '4.2vw';
const winnerShadow = `0 0 0 ${winnerShadowLength} #56546943, 0 0 0 calc(${winnerShadowLength} * 2) #3b43633a, 0 0 0 calc(${winnerShadowLength} * 3) #1f375645`;
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
	transition: border-color 0.5s ease-in-out, background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out, padding 0.5s ease-in-out, filter 0.5s ease-in-out;

	${({ $move, theme: { color } }) => {
		if ($move)
			return css`
				padding: min(6.834vw, 4.385rem);
				background-color: ${color.neutral.badge.bgColorT1};
				background-clip: padding-box;
				border-color: ${color.moves[$move + 'Accent']};
				box-shadow: 0 6.869px 0 ${color.moves[$move + 'Shadow']},
					${boxShadow};
					
				${Game} &.winner {
					box-shadow: 0 6.869px 0 ${color.moves[$move + 'Shadow']}, ${boxShadow}, ${winnerShadow};
				}
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
		border-width: min(3.33vw, 1.7rem);

		${Game} & {
			border-width: min(3.33vw, 2.2rem);
		}

		${({ $move }) => {
			if ($move)
				return css`
					padding: 2.385vw;

					${Game} & {
						padding: 3.456vw 4.265vw;
					}

					&:hover {
						cursor: pointer;
					}
					&:hover,
					&:focus {
						filter: saturate(.75) drop-shadow(0 0 3px #000);
						outline: none;
					}
				`;
			else {
				return css`
					${Game} & {
						padding: 2.626vw 3.396vw;

						&:focus {
							outline: 1px solid cadetblue
						}
					}
				`;
			}
		}}
	}
	@media screen and (min-width: 1600px) {
		border-width: 1vw;

		${Game} & {
			border-width: 1.35vw;
		}

		${({ $move }) => {
			if ($move)
				return css`
					padding: 2.385vw;

					${Game} & {
						padding: 2.556vw 2.765vw;
					}
				`;
			else {
				return css`
					${Game} & {
						padding: 1.226vw 1.426vw;
					}
				`;
			}
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

		${Game} & {
			width: min(8vw, 8rem);
			height: min(8vw, 9rem);
		}
	}
	@media screen and (min-width: 1600px) {
		width: 3.5vw;
		height: 3.5vw;

		${Game} & {
			width: 5.83vw;
			height: 5.83vw;
		}
	}
`;
