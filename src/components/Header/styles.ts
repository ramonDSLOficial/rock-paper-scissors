import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5vw;
    padding-left: 5.5vw;
    outline: 3px solid ${props => props.theme.color.neutral.badge.outline};
    border-radius: 3px;
    width: min(85%, 60rem);

    @media screen and (max-width: 380px) and (max-height: 650px) {
        margin-bottom: 13%;
    }
`;

export const LogoTitle = styled.h1`
    line-height: 0;

    & img {
        display: block;
        height: 100%;
        width: min(65%, 24rem);
    }
`;