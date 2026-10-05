import styled from 'styled-components';

export const Container = styled.dl`
	display: grid;
	place-items: center;
	gap: 1.5px;
	background-color: ${(props) => props.theme.color.neutral.badge.bgColorT1};
	border-radius: 6px;
	padding: min(3.5%, 1.8rem) min(8.5%, 3.5rem);
	
	@media screen and (min-width: 1600px) {
		padding: min(3.5%, 4.2rem) min(8.5%, 7.5rem);
	}
`;

export const ScoreText = styled.dt`
	color: ${(props) => props.theme.color.neutral.text.textT2};
	font-size: 1.1rem;
	font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: 1px;
	
	@media screen and (min-width: 1600px) {
		font-size: clamp(1.8rem, 1rem + .39vw, 3rem);
	}
`;

export const ScoreValue = styled.dd`
	color: ${(props) => props.theme.color.neutral.text.textT0};
	font-size: clamp(3.8rem, 1.14rem + 2.77vw, 5.5rem);
	font-weight: ${(props) => props.theme.fontWeight.bold};
	line-height: .8;
	
	@media screen and (min-width: 1600px) {
		font-size: clamp(7.5rem, 1.54rem + 3.77vw, 12rem);
	}
`;
