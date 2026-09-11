import styled from 'styled-components';
import type { Moves } from '../../types/types';

interface MoveStyledProps {
	$move?: Moves;
}

const boxShadow = 'inset 0 6.32px 0 #babed2b2;';

export const Container = styled.button<MoveStyledProps>`
	position: relative;
	background-color: ${(props) => props.theme.color.neutral.badge.bgColor};
	border: 12px solid ${(props) => props.theme.color.moves[props.$move + 'Accent']};
	border-radius: 50%;
	padding: 6.865vw;
	line-height: 0;
	background-clip: padding-box;
	box-shadow: 0 6.869px 0
		${(props) =>
			`${props.theme.color.moves[props.$move + 'Shadow']}, ${boxShadow}`};

	@media screen and (max-width: 380px) and (max-height: 650px) {
		padding: 4.568vw;
		border-width: 7.59px;
		box-shadow: 0 4.869px 0
			${(props) =>
				`${props.theme.color.moves[props.$move + 'Shadow']}, ${boxShadow}`};
	}
	@media screen and (max-width: 380px) and (min-height: 651px) and (max-height: 780px) {
		padding: 5.437vw;
		border-width: 8.568px;
		box-shadow: 0 4.869px 0
			${(props) =>
				`${props.theme.color.moves[props.$move + 'Shadow']}, ${boxShadow}`};
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
