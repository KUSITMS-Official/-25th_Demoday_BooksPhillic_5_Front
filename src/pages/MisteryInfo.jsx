import React from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, RowContainer } from '../components/Container';
import Header from '../components/Header';
import Flex from '../components/Flex';
import { RoundBtn } from '../components/Buttons';
import Footer from '../components/Footer';
const MisteryInfo = () => {
  return (
      <>
      <Background>
        <Header/>
        <MisteryInfoContainer>
          <InfoHeader>
            <HeaderImg src='../img/Info/Info_header.png'></HeaderImg>
          </InfoHeader>
          <Contents>
              <Review>hi</Review>
              <Review>hi</Review>
              <Review>hi</Review>
              <Review>hi</Review>
            </Contents>
            <MoreReview>
              <div style={{marginTop:"5px"}}>더많은 리뷰 보기</div>
              <img src='../img/arrow.png'></img>
            </MoreReview>
            <Guide>
              <RoundBtn>미스터리북 신청하기</RoundBtn>
            </Guide>
        </MisteryInfoContainer>
         <Footer/>
      </Background>
     </>
  )
}

export default MisteryInfo
const Background=styled.div`
  background-image: url('../img/background/background_info.jpg');
  background-attachment: local;
  //background-size: cover;//반응형 성공!
  background-size: 100% 2942px;
 
`
const MisteryInfoContainer=styled(CenterContainer)`
  
`
const InfoHeader=styled.div`
    width: 100%;
    height: 500px;
`
const HeaderImg=styled.img`
    width: 30%;
    height: 142px;
    margin: 150px 0px 208px 10%;
`

const Contents=styled(RowContainer)`
  margin-top:307px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`
const Review=styled.div`
  height: 480px;
`
const MoreReview=styled(Flex)`
  margin-top: 20px;
  justify-content: flex-end;
`
const Guide=styled(Flex)`
  margin: 810px 0px 210px 0px;
  justify-content: center;
`