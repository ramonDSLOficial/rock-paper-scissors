import styled from 'styled-components';

export const Container = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 0.8fr;
	grid-template-areas:
		'playerOne playerTwo'
		'result result';
	gap: 2.5vh 5vw;
	width: 100%;

	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(2, minmax(200px, 35%));
		justify-content: space-evenly;
	}

	@media screen and (min-width: 1199px) {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 5vw;
		
		& > div#playerTwo {
			order: 2;
		}
	}
`;

export const ResultContainer = styled.div`
	position: relative;
    z-index: 3;
	grid-area: result;
	display: flex;
	flex-direction: column;
	align-items: center;
	row-gap: 2rem;
	text-align: center;
	width: 0px;
	overflow: hidden;
	transform: scale(0);
	transition: transform 0.5s ease-in-out, width 0.5s ease-in-out,
		overflow 0.5s ease-in-out;

	&.visible {
		transform: scale(1) rotate(360deg);
		width: initial;
		overflow: visible;
	}
`;

export const Message = styled.h2`
	color: ${(props) => props.theme.color.neutral.text.textT1};
	font-size: clamp(3.8rem, 2.12rem + 8.26vw, 4.2rem);
	font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: 2px;

	@media screen and (min-width: 1600px) {
		font-size: clamp(5rem, 1.12rem + 2.26vw, 10.2rem);
	}
`;

export const RestartBtn = styled.button`
	color: ${(props) => props.theme.color.neutral.text.textT0};
	font-size: clamp(1.3rem, 0.88rem + 1.6vw, 1.4rem);
	font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: 2px;
	padding: min(5%, 2rem) min(18.8%, 7.5rem);
	background-color: ${(props) => props.theme.color.neutral.badge.bgColorT1};
	border: none;
	border-radius: 10px;

	@media screen and (min-width: 1199px) {
		padding: min(8%, 3.5rem) min(22%, 8.5rem);
		white-space: nowrap;
		border: 1px solid transparent;
		transition: color .5s ease-in-out, border-color .5s ease-in-out, background-color .5s ease-in-out;

		&:hover {
			cursor: pointer;
		}

		&:hover,
		&:focus {
			color: ${props => props.theme.color.neutral.text.textT1};
			border-color: ${props => props.theme.color.neutral.badge.bgColorT1};
			background-color: transparent;
			outline: none;
		}
	}
	@media screen and (min-width: 1600px) {
		font-size: clamp(1.8rem, 0.88rem + .55vw, 2.8rem);
		padding: min(9%, 4.2rem) min(23%, 16rem);
	}
	@media screen and (min-width: 2000px) {
		width: 105%;		
	}
`;
