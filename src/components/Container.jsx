import styled from "styled-components";
import Flex from "./Flex";

export const Container=styled(Flex)`
    min-height: 100vh;
	flex-direction: column;
	//align-items: center;
`
export const RowContainer = styled(Flex)`
	flex-direction: row;
	align-items: center;
`;

export const ColContainer = styled(Flex)`
	flex-direction: column;
`;
export const CenterContainer=styled(Flex)`
	flex-direction: column;
	//align-items: center;
	//min-height: 100vh;
	justify-content: center;
	margin: 0px 3%;
`
export const ApplyContentContainer=styled(ColContainer)`
	margin-left: 38px;
	width: 60vw;
`
export const MyPageContainer=styled(ColContainer)`
	margin: 47px 27% 151px 27%;
	justify-content: center;
`
export const MyPageContentContainer=styled(ColContainer)`
	margin: 44px 7% 44px 7%;
	justify-content: center;
`