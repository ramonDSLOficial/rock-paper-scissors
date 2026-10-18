import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;

	@media screen and (min-width: 1600px) {
		gap: min(1.25vw, 2.56rem);
	}
`;

export const Label = styled.label`
	font-size: clamp(2rem, .55rem + .54vw, 2.5rem);
	font-weight: ${props => props.theme.fontWeight.semiBold};
	letter-spacing: 1px;

	@media screen and (min-width: 1600px) {
		font-size: clamp(3.5rem, 1.77rem + 1.06vw, 8rem);
	}
`;

export const Input = styled.input.attrs({
	type: 'checkbox',
})`
	outline: 3.5px solid #141639ff;
	background-color: transparent;
	width: 20px;
	height: 20px;

	&:checked {
		accent-color: #141639ff;
	}

	@media screen and (min-width: 1600px) {
		width: min(1.48vw, 5.66rem);
		height: min(1.48vw, 5.66rem);
	}
`;
