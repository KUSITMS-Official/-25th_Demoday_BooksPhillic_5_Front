import React from 'react'
import { RoundBtn } from '../Buttons'
import { ColContainer } from '../Container'
import styled from "styled-components";
import Flex from '../Flex';
const IntroMistery = () => {
  return (
   <IntroMisteryContainer>
       <Wrapper>
        <img src='../img/misteryBook_intro.png'></img>
        <IntroRoundBtn>미스터리북 신청하기</IntroRoundBtn>
       </Wrapper>
   
   </IntroMisteryContainer>
  )
}

export default IntroMistery
const IntroMisteryContainer=styled(Flex)`
    justify-content: flex-end;
    margin: 270px 10% 300px 0px;
`
const Wrapper=styled(ColContainer)`
    width: 35%;
`
const IntroRoundBtn=styled(RoundBtn)`
    margin:50px 0px;
    width: 50%;
`