import styled from 'styled-components';

export const Container = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr .8fr;
    gap: 2.5vh 5vw;
    width: 100%;
`;

export const ResultContainer = styled.div`
    text-align: center;
    grid-column: 1 / 3;
    transform: scale(0);
    transition: transform .5s ease-in-out;

    &.visible {
        transform: scale(1) rotate(360deg);
    }
`;

export const Message = styled.h2`
    color: ${props => props.theme.color.neutral.text.textT1};
    font-size: clamp(3.8rem, 2.12rem + 8.26vw, 6rem);
    font-weight: ${props => props.theme.fontWeight.bold};
    letter-spacing: 2px;
`;

export const RestartBtn = styled.button`
    color: ${props => props.theme.color.neutral.text.textT0};
    font-size: clamp(1.3rem, .88rem + 1.6vw, 1.8rem);
    font-weight: ${props => props.theme.fontWeight.bold};
    letter-spacing: 2px;
    padding: 5% 18.8%;
    background-color: ${props => props.theme.color.neutral.badge.bgColorT1};
    border: none;
    border-radius: 10px;
`;