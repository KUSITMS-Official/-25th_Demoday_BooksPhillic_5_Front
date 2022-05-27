import styled, { css } from "styled-components";

const Flex = styled.div`
	display: flex;
	flex-direction: ${({ dir }) => dir};
	gap: ${({ gap }) => gap};
	width: ${({ width }) => width};
	height: ${({ height }) => height};
	padding: ${({ padding }) => padding};
	${({ spaceBetween }) =>
		spaceBetween &&
		css`
			justify-content: space-between;
		`};
	${({ spaceAround }) =>
		spaceAround &&
		css`
			justify-content: space-around;
		`};
	${({ justifyCenter }) =>
		justifyCenter &&
		css`
			justify-content: center;
		`};
	${({ alignCenter }) =>
		alignCenter &&
		css`
			align-items: center;
		`};
	${({ center }) =>
		center &&
		css`
			align-items: center;
			justify-content: center;
		`};
`;
export default Flex;