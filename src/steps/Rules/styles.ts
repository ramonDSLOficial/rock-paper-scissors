import styled from 'styled-components';
// FIXME aumentar a largura para wide screens
export const Container = styled.dialog`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	max-width: 100%;
	max-height: 100%;

	&[open] {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 0.7fr;
		justify-items: center;
		align-items: center;
		border: none;
	}

	@media screen and (max-width: 680px) and (max-height: 650px) {
		&[open] {
			grid-auto-rows: 0.31fr;
		}
	}

	@media screen and (min-width: 768px) {
		max-width: 450px;
		max-height: 450px;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}

		&[open] {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: minmax(65px, 15%) 1fr;
			grid-template-areas:
				'title close'
				'rules rules';
			border-radius: 15px;
			padding: 15px 10px;
		}
	}
	@media screen and (min-width: 1199px) {
		top: 50%;
		transform: translate(-50%, -50%);
	}
	@media screen and (min-width: 1600px) {
		max-width: 35vw;
		max-height: 35vw;
		top: 50%;
		transform: translate(-50%, -50%);
	}
`;

export const Title = styled.h3`
	color: ${(props) => props.theme.color.neutral.text.textT0};
	font-size: 3.8rem;
	font-weight: ${(props) => props.theme.fontWeight.bold};
	width: max-content;

	@media screen and (min-width: 768px) {
		grid-area: title;
		justify-self: flex-start;
		padding-left: 12%;
	}
	@media screen and (min-width: 1600px) {
		font-size: clamp(5.5rem, 1.23rem + 2.485vw, 12.5rem);
	}
`;

export const RulesImage = styled.img`
	width: 85%;

	@media screen and (max-width: 680px) and (max-height: 650px) {
		width: 55%;
	}

	@media screen and (min-width: 768px) {
		grid-area: rules;
	}
`;

export const CloseBtn = styled.button`
	background-color: transparent;
	border: none;

	@media screen and (min-width: 768px) {
		grid-area: close;
		margin-bottom: 0;
		padding-right: 12%;
		justify-self: flex-end;
		width: max-content;

		& img {
			pointer-events: none;
		}
	}
	@media screen and (min-width: 1199px) {
		& img {
			transition: filter .5s ease-in-out;
		}
	
		&:focus-within {
			outline: none;
	
			& img {
				filter: drop-shadow(1px 1px 2px #000);
			}
		}
	}
	@media screen and (min-width: 1600px) {
		width: 20%;

		& img {
			width: 100%;
		}
	}
`;
