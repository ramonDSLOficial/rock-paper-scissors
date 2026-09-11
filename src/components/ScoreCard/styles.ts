import styled from 'styled-components';

export const Container = styled.dl`
	display: grid;
	place-items: center;
	gap: 1.5px;
	background-color: ${(props) => props.theme.color.neutral.badge.bgColorT1};
	border-radius: 6px;
	padding: 3.5% 8.5%;
`;

export const textT2 = styled.dt`
	color: ${(props) => props.theme.color.neutral.text.textT2};
	font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: 1px;
`;

export const ScoreValue = styled.dd`
	color: ${(props) => props.theme.color.neutral.text.textT0};
	font-size: 4rem;
	font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: -1px;
`;
