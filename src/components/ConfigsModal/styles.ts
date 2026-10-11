import styled from 'styled-components';

export const Container = styled.dialog`
	position: absolute;
	top: 50%;
    transform: translateY(-60%);
	margin: 0 auto;
	width: 90%;
	max-width: 100%;
	height: 50%;
	max-height: 100%; 
	
    &[open] {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: 0.7fr;
		justify-items: center;
		align-items: center;
		border: 10px solid #141639ff;
	}

	& > h2 {
		font-size: 2rem;
		letter-spacing: 1.54px;
	}
`;

export const Fieldset = styled.fieldset`
	display: flex;
	flex-direction: column;
	gap: 10px;
    width: 80%;
    border: 10px solid #141639ff;
	background-color: #565469ff;
	padding: 3vh min(4vw, 30px);
`;
