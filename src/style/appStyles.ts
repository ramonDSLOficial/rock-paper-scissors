import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	min-height: 100dvh;
	padding: 3.76vh 0;
	background: ${(props) =>
		`${props.theme.color.neutral.badge.outline} linear-gradient(to bottom, ${props.theme.color.neutral.badge.gradient})`};

	@media screen and (min-width: 1199px) {
		justify-content: space-evenly;
		overflow: hidden;
		padding-bottom: 0;
	}
`;
// FIXME retirar daqui a atribuição de margem para os sections
export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 80%;
	flex: 0.85;
	padding-bottom: 4vh;

	section {
		margin: auto 0;
	}

	@media screen and (max-width: 380px) and (max-height: 650px) {
		justify-content: space-around;
		gap: 3vh;
		flex: 0.72;
	}
	@media screen and (min-width: 768px) {
		padding-bottom: 0;
		
		section {
			margin: 0;
		}
	}
	@media screen and (min-width: 1199px) {
		justify-content: center;

		section {
			margin: auto 0;
		}
	}
`;
