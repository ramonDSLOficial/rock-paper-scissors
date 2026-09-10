import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
	width: 100%;
	min-height: 100dvh;
    padding: 3.76vh 0;
	background: ${(props) =>
		`${props.theme.color.neutral.badge.outline} linear-gradient(to bottom, ${props.theme.color.neutral.badge.gradient})`};

    & main {
        display: grid;
        place-items: center;
        width: 80%;
        flex: .85;
    }
`;

export const Main = styled.main``;
