import styled from 'styled-components';

export const Container = styled.button`
    color: ${props => props.theme.color.neutral.text.textT1};
    font-weight: 1.8rem;
    letter-spacing: 2.5px;
    background-color: transparent;
    border: 1.5px solid #fff;
    border-radius: 8px;
    padding: min(3.5%, 1.5rem) min(10%, 4.4rem);

    @media screen and (max-width: 380px) and (max-height: 650px) {
        margin-left: auto;
        transform: scale(.8);
    }
`;
