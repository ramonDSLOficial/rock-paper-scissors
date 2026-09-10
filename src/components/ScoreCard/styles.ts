import styled from 'styled-components';

// NOTE diminuir o gap, agora que a fonte está pegando, está dando uma diferença chata
export const Container = styled.dl`
    display: grid;
    place-items: center;
    gap: 1.5px;
	background-color: ${(props) => props.theme.color.neutral.badge.bgColor};
	border-radius: 6px;
    padding: 3.5% 8.5%;
`;

export const ScoreText = styled.dt`
	color: ${(props) => props.theme.color.neutral.text.scoreText};
    font-weight: ${(props) => props.theme.fontWeight.bold};
	letter-spacing: 1px;
`;

export const ScoreValue = styled.dd`
	color: ${(props) => props.theme.color.neutral.text.scoreValueText};
	font-size: 4rem;
	font-weight: ${(props) => props.theme.fontWeight.bold};
    letter-spacing: -1px;
`;
