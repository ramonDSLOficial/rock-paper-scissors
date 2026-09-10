import styled from 'styled-components';

export const Container = styled.dialog`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    &[open] {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.color.neutral.text.scoreValueText};
    font-size: 3.8rem;
    font-weight: ${props => props.theme.fontWeight.bold};
`;

export const RulesImage = styled.img`
    width: 85%;
`;

export const CloseBtn = styled.button`
    background-color: transparent;
    border: none;
    margin-bottom: 12.4vh;
`;