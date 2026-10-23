import styled, { css } from 'styled-components';
import type { GameCommonStyles, Moves } from '../../types/types';
import { Container as Game } from '../../steps/Game/styles';
interface MoveStyledProps extends GameCommonStyles {
	$move?: Moves;
}

const boxShadow = 'inset 0 6.32px 0 #babed2b2';
const winnerShadowLength = '4.2vw';
const winnerShadow = `0 0 0 ${winnerShadowLength} #56546943, 0 0 0 calc(${winnerShadowLength} * 2) #3b43633a, 0 0 0 calc(${winnerShadowLength} * 3) #1f375645`;

export const Container = styled.button<MoveStyledProps>`
	border: min(3.33vw, 2rem) solid transparent;
	border-radius: 50%;
	line-height: 0;
	transition: border-color 0.5s ease-in-out, background-color 0.5s ease-in-out,
		box-shadow 0.5s ease-in-out, padding 0.5s ease-in-out,
		filter 0.5s ease-in-out;

	${({ $move, $hasExtraMoves, theme: { color } }) => {
		if ($move)
			return css`
				padding: ${!$hasExtraMoves
					? 'min(6.834vw, 4.385rem)'
					: 'min(4.864vw, 2.865rem)'};
				background-color: ${color.neutral.badge.bgColorT1};
				background-clip: padding-box;
				border-color: ${color.moves[`${$move}Accent`]};
				box-shadow: 0 6.869px 0 ${color.moves[`${$move}Shadow`]},
					${boxShadow};

				${Game} &.winner {
					box-shadow: 0 6.869px 0 ${color.moves[`${$move}Shadow`]},
						${boxShadow}, ${winnerShadow};
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
		padding: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? '8.137vw' : '5.137vw'};
		border-width: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? '12.968px' : '8.968px'};

		${({ $move, theme: { color } }) =>
			$move
				? `box-shadow: 0 3.469px 0 ${
						color.moves[`${$move}Shadow`]
				  }, ${boxShadow}`
				: ''}
	}
	@media screen and (min-width: 768px) {
		${({ $move, $hasExtraMoves }) => {
			if ($move)
				return css`
					padding: ${!$hasExtraMoves
						? 'min(6.865vw, 4.285rem)'
						: 'min(6.865vw, 2.885rem)'};
				`;
			else
				return css`
					padding: min(3.965vw, 2.464rem);
				`;
		}}
	}
	@media screen and (max-width: 968px) and (max-height: 600px) {
		.home & {
			${({ $move, $hasExtraMoves, theme: { color } }) => {
				if ($move)
					return css`
						border-width: min(
							0.93vw,
							${!$hasExtraMoves ? '1.3rem' : '1rem'}
						);
						padding: ${!$hasExtraMoves
							? 'min(1.365vw, 1.085rem)'
							: 'min(1.365vw, 1.285rem)'};

						${$move
							? `box-shadow: 0 3.669px 0 ${
									color.moves[`${$move}Shadow`]
							  }, ${boxShadow}`
							: ''}
					`;
				else
					return css`
						padding: min(3.965vw, 2.464rem);
					`;
			}}
		}
	}
	@media screen and (min-width: 968px) and (max-height: 600px) {
		${({ $move, $hasExtraMoves }) => {
			if ($move)
				return css`
					border-width: min(
						1.63vw,
						${!$hasExtraMoves ? '1.6rem' : '1.4rem'}
					);
					padding: ${!$hasExtraMoves
						? 'min(6.865vw, 1.685rem)'
						: 'min(6.865vw, 1.385rem)'};
				`;
			else
				return css`
					padding: min(3.965vw, 2.464rem);
				`;
		}}
	}
	@media screen and (min-width: 1199px) {
		border-width: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? 'min(3.33vw, 1.7rem)' : 'min(1.03vw, 1.8rem)'};

		${Game} & {
			border-width: min(1.63vw, 3.2rem);
		}

		${({ $move, $hasExtraMoves }) => {
			if ($move)
				return css`
					padding: ${!$hasExtraMoves
						? '2.385vw'
						: 'min(1.685vw, 3.268rem)'};

					${Game} & {
						padding: min(2.594vw, 5.649rem);
					}

					&:hover {
						cursor: pointer;
					}
					&:hover,
					&:focus {
						filter: saturate(0.75) drop-shadow(0 0 3px #000);
						outline: none;
					}
				`;
			else {
				return css`
					${Game} & {
						padding: min(1.454vw, 4.323rem);

						&:focus {
							outline: 1px solid cadetblue;
						}
					}
				`;
			}
		}}
	}
	@media screen and (min-width: 2000px) {
		${({ $move, $hasExtraMoves }) => {
			if ($move)
				return css`
					border-width: min(1.23vw, 6.2rem);
					padding: ${!$hasExtraMoves
						? '2.385vw'
						: 'min(1.885vw, 8.268rem)'};

					${Game} & {
						border-width: min(1.23vw, 6.2rem);
						padding: min(2.485vw, 9.123rem);
					}
				`;
		}}
	}
	@media screen and (min-width: 3000px) and (max-height: 1600px) {
		${({ $move, $hasExtraMoves }) => {
			if ($move)
				return css`
					.home & {
						border-width: ${!$hasExtraMoves
							? 'min(1.23vw, 3.6rem)'
							: 'min(1.03vw, 2.8rem)'};
						padding: ${!$hasExtraMoves ? '1.655vw' : '1.255vw'};
					}
				`;
		}}
	}
`;

export const Image = styled.img<MoveStyledProps>`
	display: block;
	visibility: ${({ $move }) => ($move ? 'initial' : 'hidden')};
	width: ${({ $hasExtraMoves }) =>
		!$hasExtraMoves ? 'min(11.33vw, 5rem)' : 'min(11.33vw, 7.8rem)'};
	height: ${({ $hasExtraMoves }) =>
		!$hasExtraMoves ? 'min(12vw, 5.66rem)' : 'min(12vw, 7.97rem)'};
	object-fit: contain;
	transition: all 0.5s ease-in-out;

	@media screen and (max-width: 380px) and (max-height: 650px) {
		width: ${({ $hasExtraMoves }) => (!$hasExtraMoves ? '3.9rem' : '3.1rem')};
		height: ${({ $hasExtraMoves }) => (!$hasExtraMoves ? '3.9rem' : '3.1rem')};
	}
	@media screen and (min-width: 768px) {
		width: min(11.33vw, 6.895rem);
		height: min(12vw, 6.895rem);
	}
	@media screen and (max-width: 968px) and (max-height: 600px) {
		.home & {
			width: min(3.33vw, 3.895rem);
			height: min(3.63vw, 3.895rem);
		}
	}
	@media screen and (min-width: 968px) and (max-height: 600px) {
		width: min(6.33vw, 4.095rem);
		height: min(6.33vw, 4.095rem);
	}
	@media screen and (min-width: 1199px) {
		width: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? 'min(4vw, 6.5rem)' : 'min(3.3vw, 7rem)'};
		height: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? 'min(4vw, 7rem)' : 'min(3.3vw, 7rem)'};

		${Game} & {
			width: min(6.5vw, 15rem);
			height: min(6.5vw, 15rem);
		}
	}
	@media screen and (min-width: 2000px) {
		width: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? 'min(4.2vw, 14rem)' : 'min(3.8vw, 10rem)'};
		height: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? 'min(4.2vw, 15.5rem)' : 'min(3.8vw, 10rem)'};

		${Game} & {
			width: min(7.5vw, 21.8rem);
			height: min(7.5vw, 21.8rem);
		}
	}
	@media screen and (min-width: 3000px) and (max-height: 1600px) {
		width: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? 'min(4.2vw, 11rem)' : 'min(2.2vw, 8rem)'};
		height: ${({ $hasExtraMoves }) =>
			!$hasExtraMoves ? 'min(4.2vw, 12.5rem)' : 'min(2.2vw, 8rem)'};

		${Game} & {
			width: min(6.5vw, 20rem);
			height: min(6.5vw, 20rem);
		}
	}
`;
