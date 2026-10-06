import styled from 'styled-components';

export const Container = styled.button`
    color: ${props => props.theme.color.neutral.text.textT1};
    font-weight: 1.8rem;
    letter-spacing: 2.5px;
    background-color: transparent;
    border: 1.5px solid #fff;
    border-radius: 8px;
    padding: min(3.5%, 1rem) min(10%, 3rem);
    margin-top: -18%;

    @media screen and (max-width: 380px) and (max-height: 650px) {
        margin-top: 0;
        transform: scale(.8);
    }
    @media screen and (min-width: 768px) {
        margin-top: 0;
        margin-left: auto;
    }
    @media screen and (min-width: 768px) and (max-width: 850px)  and (min-height: 980px) {
        margin-left: 0;
        margin-bottom: 10%;
    }
    @media screen and (min-width: 1199px) {
        font-size: .9rem;;
    }
    @media screen and (min-width: 1600px) {
        font-size: clamp(1.5rem, .65rem + .79vw, 3.5rem);
        padding: min(4.5%, 2.5rem) min(11%, calc(2.5rem * 2.5));
    }
`;
