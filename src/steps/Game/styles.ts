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
		grid-template-columns: 1fr 0fr 1fr;
		grid-template-rows: 1fr;
		grid-template-areas:
			'playerOne result playerTwo';	
		transition: grid-template-columns 1.45s ease-in-out;
		align-items: center;

		&.showResult {
			grid-template-columns: 1fr .6fr 1fr;
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
	overflow: hidden;
	transform: scale(0);
	transition: transform 2s ease-in-out, overflow 0.5s ease-in-out;

	${Container}.showResult & {
		transform: scale(1) rotate(360deg);
	}
`;

export const Message = styled.h2`
	color: ${(props) => props.theme.color.neutral.text.textT1};
	font-size: clamp(3.8rem, 2.12rem + 8.26vw, 4.6rem);
	font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: 2px;
	white-space: nowrap;

	@media screen and (min-width: 1600px) {
		font-size: clamp(5rem, 1.15rem + 2.36vw, 10.2rem);
	}
`;

export const RestartBtn = styled.button`
	color: ${(props) => props.theme.color.neutral.text.textT0};
	font-size: clamp(1.3rem, 0.88rem + 1.6vw, 1.35rem);
	font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: 2px;
	padding: min(5%, 2rem) min(18.8%, 7.5rem);
	background-color: ${(props) => props.theme.color.neutral.badge.bgColorT1};
	border: none;
	border-radius: 7px;

	@media screen and (min-width: 1199px) {
		padding: min(7%, 3.2rem) min(22%, 8.5rem);
		white-space: nowrap;
		border: 1px solid transparent;
		transition: color .5s ease-in-out;

		&:hover {
			cursor: pointer;
		}

		&:hover,
		&:focus {
			color: #dc2e4eff;
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
