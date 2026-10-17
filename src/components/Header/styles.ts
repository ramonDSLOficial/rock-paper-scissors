import styled from 'styled-components';

export const Container = styled.header`
    position: relative;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: min(2.5vw, 1.35rem);
    padding-left: min(5.5vw, 2rem);
    outline: 3px solid ${props => props.theme.color.neutral.badge.outline};
    border-radius: 3px;
    width: min(85%, 60rem);

    @media screen and (max-width: 380px) and (max-height: 650px) {
        margin-bottom: 13%;
    }
    @media screen and (min-width: 1199px) {
        margin-bottom: 2%;
    }
    @media screen and (min-width: 1600px) {
        margin-bottom: 0;
        padding: min(1.5vw, 3.35rem);
        width: min(85%, 52vw);
    }
    @media screen and (min-width: 3000px) {
        padding: min(2.5vw, 5.35rem);
        padding-right: min(8vw, 5.35rem);
        padding-left: min(8vw, 6rem);
    }
`;

export const LogoTitle = styled.h1`
    line-height: 0;

    & img {
        display: block;
        height: 100%;
        width: min(52.5%, 15rem);
    }

    @media screen and (min-width: 768px) {
        & img {
            width: min(76%, 20rem);
        }
    }
    @media screen and (min-width: 1600px) {
        & img {
            width: min(9.5vw, 35rem);
        }
    }
`;