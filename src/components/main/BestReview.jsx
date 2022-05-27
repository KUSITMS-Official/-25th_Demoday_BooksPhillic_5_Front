import React from 'react'
import styled from "styled-components";
import { ColContainer } from '../Container';
const BestReview = () => {
  return (
    <BestReviewContainer>
      <User>PHS님</User>
      <img src='../img/line.png' width="25px" height="3px"></img>
      <Content>
      책방 사장님이 추천해주신 책 그 자리에서 바로 완독 했습니다ㅎㅎ 책 내용도 좋았지만 무엇보다 책방 분위기가 편안해서 책에 집중하기 좋았어요. 너무 시끄럽지도, 너무 조용하지도 않은 공간이요! 책방 내에서 음료도 시킬 수 있어 커피 한 잔과 함께 읽었답니다. 북스필릭 이용하면서 여러 군데의 동네책방을 방문해봤는데 이번에 방문한 동네 책방이 저와 가장 잘 맞았어요! 단골이 될 것 같습니다ㅎㅎ 주말에 고즈넉하게 여유로움을 느끼고 싶다면 완전 강추입니다~
      </Content>
    </BestReviewContainer>
  )
}

export default BestReview
const BestReviewContainer=styled(ColContainer)`
   width: 40%;
   margin: 150px 0px 160px 10%;
   height: 561px;
   padding-top: 102px;
   padding-right: 181px;
`
const User=styled.div`
margin-bottom: 20px;
`
const Content=styled.div`
  margin-top: 20px;
`