import styled from 'styled-components';
import { Container as Move } from '../../../components/Move/styles';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	align-self: stretch;
	gap: 2.8vh;

	& ${Move} {
		margin: auto 0;
	}

	@media screen and (min-width: 1199px) {
		flex-direction: column-reverse;
		gap: min(5vh, 6.2rem);
	}
`;

export const PlayerText = styled.p`
	position: relative;
    z-index: 3;
	color: ${(props) => props.theme.color.neutral.text.textT1};
	font-size: clamp(1.068rem, 0.92rem + 0.88vw, 1.5rem);
	font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: 1.5px;

	@media screen and (min-width: 1199px) {
		letter-spacing: 2.5px;
	}
	@media screen and (min-width: 1600px) {
		letter-spacing: .088vw;
		font-size: clamp(2.068rem, 0.92rem + 0.88vw, 3.8rem);
	}
`;
