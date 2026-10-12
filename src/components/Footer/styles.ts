import styled from 'styled-components';

export const Container = styled.footer`
    position: relative;
    z-index: 3;
    color: ${props => props.theme.color.neutral.text.textT1};
    font-size: 1.35rem;
    letter-spacing: 1px;
    text-align: center;
    text-transform: lowercase;

    & a {
        color: hsl(28, 76%, 44%);
        font-size: 1.4rem;
        font-weight: ${props => props.theme.fontWeight.bold};
        text-decoration: none;
        text-transform: capitalize;
    }

	@media screen and (max-width: 380px) and (max-height: 650px) {
        font-size: 1.2rem;
        letter-spacing: 0;
    }
    @media screen and (min-width: 1199px) {
        margin: 1% 0;

        & a {
            transition: filter .5s ease-in-out;

            &:hover,
            &:focus {
                outline: none;
                text-shadow: 1px 1px 1px #000;
                filter: brightness(135%);
            }
        }
    }
    @media screen and (min-width: 1600px) {
        font-size: clamp(2rem, .64rem + .65vw, 3.2rem);
        letter-spacing: 2.5px;
        
        & a {
            font-size: clamp(2.4rem, .92rem + .85vw, 4rem);
        }
    }
`;
