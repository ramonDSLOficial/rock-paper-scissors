import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;

export const Label = styled.label`
	font-size: clamp(2rem, .55rem + .54vw, 2.5rem);
	font-weight: ${props => props.theme.fontWeight.semiBold};
	letter-spacing: 1px;
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
`;
