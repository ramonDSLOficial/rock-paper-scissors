import styled, { css } from 'styled-components';
import type { Moves } from '../../types/types';

interface MoveStyledProps {
	$move?: Moves;
}

const boxShadow = 'inset 0 6.32px 0 #babed2;';

const moveColor = css<MoveStyledProps>`
	background-clip: padding-box;
	
	${({ $move }) => {
		switch ($move) {
			case 'rock':
				return css`
					border-color: ${(props) =>
						props.theme.color.moves[$move + 'Accent']};
					box-shadow: 0 6.869px 0
						${(props) =>
							`${
								props.theme.color.moves[$move + 'Shadow']
							}, ${boxShadow}`};
				`;
			case 'paper':
				return css`
					border-color: ${(props) =>
						props.theme.color.moves[$move + 'Accent']};
					box-shadow: 0 6.869px 0
						${(props) =>
							`${
								props.theme.color.moves[$move + 'Shadow']
							}, ${boxShadow}`};
				`;
			case 'scissors':
				return css`
					border-color: ${(props) =>
						props.theme.color.moves[$move + 'Accent']};
					box-shadow: 0 6.869px 0
						${(props) =>
							`${
								props.theme.color.moves[$move + 'Shadow']
							}, ${boxShadow}`};
				`;
			case 'lizard':
				return css`
					border-color: ${(props) =>
						props.theme.color.moves[$move + 'Accent']};
					box-shadow: 0 6.869px 0
						${(props) =>
							`${
								props.theme.color.moves[$move + 'Shadow']
							}, ${boxShadow}`};
				`;
			case 'spock':
				return css`
					border-color: ${(props) =>
						props.theme.color.moves[$move + 'Accent']};
					box-shadow: 0 6.869px 0
						${(props) =>
							`${
								props.theme.color.moves[$move + 'Shadow']
							}, ${boxShadow}`};
				`;
		}
	}}
`;

export const Container = styled.button<MoveStyledProps>`
	position: relative;
	background-color: ${(props) => props.theme.color.neutral.badge.bgColor};
	border-radius: 50%;
	border: 12px solid;
	${moveColor}
	padding: 6.796vw 7.365vw;
	line-height: 0;
`;

export const Image = styled.img<MoveStyledProps>`
	display: block;
	width: max(6.768vw, 4.85rem);
	height: max(6.768vw, 4.85rem);
	object-fit: scale-down;
`;
