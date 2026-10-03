import styled from 'styled-components';

export const Container = styled.footer`
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
`;
