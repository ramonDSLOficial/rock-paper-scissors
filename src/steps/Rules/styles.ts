import styled from 'styled-components';

export const Container = styled.dialog`
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;

	&[open] {
		display: grid;
	}

	@media screen and (min-width: 768px) {
		max-width: 450px;
		max-height: 450px;
		left: 50%;
		transform: translate(-50%, 38.66%);
		
		&::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}
		
		&[open] {
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: minmax(65px, 15%) 1fr;
			grid-template-areas: 
			"title close"
			"rules rules";
			justify-items: center;
			align-items: center;
			border-radius: 15px;
			padding: 15px 10px;
		}
	}
`;

export const Title = styled.h3`
	color: ${(props) => props.theme.color.neutral.text.textT0};
	font-size: 3.8rem;
	font-weight: ${(props) => props.theme.fontWeight.bold};
	width: max-content;
	grid-area: title;

	@media screen and (min-width: 768px) {
		justify-self: flex-start;
		padding-left: 12%;
	}
`;

export const RulesImage = styled.img`
	width: 85%;
	grid-area: rules;
`;

export const CloseBtn = styled.button`
	background-color: transparent;
	border: none;
	margin-bottom: 12.4vh;
	width: max-content;
	grid-area: close;

	@media screen and (min-width: 768px) {
		margin-bottom: 0;
		padding-right: 12%;
		justify-self: flex-end;
	}
`;
