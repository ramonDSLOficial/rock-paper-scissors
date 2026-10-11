import styled from 'styled-components';

export const Container = styled.button`
	background-color: transparent;
	border: none;

	@media screen and (min-width: 768px) {
		grid-area: close;
		margin-bottom: 0;
		padding-right: 12%;
		justify-self: flex-end;
		width: max-content;

		& img {
			pointer-events: none;
		}
	}
	@media screen and (min-width: 1199px) {
		& img {
			transition: filter 0.5s ease-in-out;
		}

		&:hover {
			cursor: pointer;
		}

		&:focus-within,
		&:hover {
			outline: none;

			& img {
				filter: drop-shadow(1px 1px 2px #000);
			}
		}
	}
	@media screen and (min-width: 1600px) {
		width: 20%;

		& img {
			width: 100%;
		}
	}
`;
