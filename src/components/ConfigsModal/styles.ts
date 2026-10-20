import styled from 'styled-components';
import { Container as CloseModalBtn } from '../CloseModalBtn/styles'

export const Container = styled.dialog`
	position: absolute;
	top: 50%;
    transform: translateY(-60%);
	margin: 0 auto;
	width: 90%;
	height: 50%;
	max-width: 100%;
	max-height: 100%; 
	
    &[open] {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		border: 10px solid #141639ff;
	}

	& > h2 {
		font-size: clamp(2rem, .78rem + 1.67vw, 3.8rem);
		letter-spacing: 1.54px;
	}

	@media screen and (min-width: 768px) {
		max-width: 42vw;
		max-height: 46vw;
		transform: translateY(-45%);

		&[open] {
			outline: 3px solid ${props => props.theme.color.neutral.badge.bgColorT1};
		}

		&::backdrop {
			background-color: rgba(0, 0, 0, 0.5);
		}

		& ${CloseModalBtn} {
			padding-right: 0;
		}
	}
	@media screen and (min-width: 1600px) {
		& ${CloseModalBtn} {
			width: min(1.8vw, 6.89rem);
		}
	}
`;

export const Settings = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
    width: 80%;
    border: 10px solid #141639ff;
	background-color: #565469ff;
	padding: min(3vh, 20px) min(4vw, 30px);
	
	@media screen and (min-width: 768px) {
		padding: min(6.33vh, 55px) min(4vw, 30px);
		width: 50%;
	}
	@media screen and (min-width: 1199px) {
		padding: min(6.33vh, 6rem) min(4vw, 4rem);
		width: 69%;
		gap: min(1.25vh, 2.34rem);
	}
`;

export const ResetScore = styled.button`
	color: ${props => props.theme.color.neutral.text.textT1};
	font-size: clamp(1.3rem, .45rem + .44vw, 2rem);
	text-shadow: 1px 1px 1px #000;
	border: 1.5px solid ${props => props.theme.color.neutral.badge.bgColorT2};
	background-color: #dc2e4eff;
	width: 66%;
	margin-inline: auto;
	margin-top: 15%;

	@media screen and (min-width: 1600px) {
		font-size: clamp(2.6rem, 1.04rem + .86vw, 5.3rem);
	}
`;
