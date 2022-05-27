import styled from "styled-components";

export const Button = styled.button`
	all: unset;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	border: ${({ border }) => border};
`;

export const BorderWhiteBtn = styled(Button)`
	background-color: transparent;
	border: solid 1px #FFFFFF;
	font-size: 16px;
    color: #FFFFFF;
	padding: ${({ padding }) => (padding ? padding : "10px 20px")};
	&:hover {
		text-decoration: none;
	}
`;
export const RoundBtn=styled(Button)`
	background-color: #2A3143;
	padding: ${({ padding }) => (padding ? padding : "15px 45px")};
	border-radius: 50px;
	font-size: 16px;
	color: #FFFFFF;
	text-align: center;
`
export const BlackBtn=styled(Button)`
	background-color: #2A3143;
	align-items: center;
	padding: ${({ padding }) => (padding ? padding : "12px 36px")};
	font-weight: 500;
	font-size: 20px;
	color: #FFFFFF;
`
export const BorderGrayBtn=styled(Button)`
	padding: 5px 20px;
	align-items: center;
//width: 101px;
height: 35px;
background: #FFFFFF;
border: 1px solid #9E9E9E;
`