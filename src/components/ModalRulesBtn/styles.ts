import styled from 'styled-components';

export const Container = styled.button`
	color: ${(props) => props.theme.color.neutral.text.textT1};
	font-weight: 1.8rem;
	letter-spacing: 2.5px;
	background-color: transparent;
	border: 1.5px solid #fff;
	border-radius: 8px;
	padding: min(3.5%, 1.1rem) min(10%, 3rem);

	@media screen and (max-width: 380px) and (max-height: 650px) {
		transform: scale(0.8);
	}
	@media screen and (min-width: 768px) {
		margin-top: 0;
		margin-left: auto;
	}
	@media screen and (min-width: 768px) and (max-width: 850px) and (min-height: 980px) {
		margin-left: 0;
		margin-bottom: 10%;
	}
	@media screen and (min-width: 1199px) {
		font-size: 0.9rem;
		transition: text-shadow 0.5s ease-in-out, filter 0.5s ease-in-out,
			background-color 0.5s ease-in-out;

		&:hover,
		&:focus {
			cursor: pointer;
			text-shadow: 1px 1px 5px #fff;
			filter: invert(1);
			background-color: ${(props) =>
				props.theme.color.neutral.badge.bgColorT2};
			outline: none;
		}
	}
	@media screen and (min-width: 1600px) {
		font-size: clamp(1.5rem, 0.65rem + 0.79vw, 3.5rem);
		padding: min(4.5%, 2.5rem) min(11%, calc(2.5rem * 2.5));
	}
`;
