import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container'
import { RoundBtn } from '../../components/Buttons'
const Event = () => {
  return (
    <EventContainer>
        <EventWrapper>
            <Col1>
                <Img src='../img/collection/event1.png'></Img>
                <BtnContainer>
                    <RoundBtn>책방 프로필 보러가기</RoundBtn>
                </BtnContainer>
                
            </Col1>
            <Col2>
            <ContentContainer>
            <Title>책방 창업 워크숍 &lt;나는 왜 책방인가&gt;</Title>
                <Content>꾸준히 책방 창업과 운영과 관련한 클래스, 세미나를 선보이는 책방 연희가 꾸준히 선보였던 책방창업 클래스를 단독으로 보다 심도있게 
                &lt;나는 왜 책방인가&gt;를 준비했습니다.독립책방 창업을 준비하거나, 이제 시작했거나, 운영하고 있지만 잘 모르는 분들, 새로운 콘텐츠 창작과 책방을 함께 하고픈 분들 신청해주세요.</Content>
            </ContentContainer>
               
                <Info>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>2022년 5월 29일 일요일 13:00-15:00</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>책방 연희</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>10명</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>50,000원</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>책방 연희 인스타그램 DM</div>
                    </RowContainer>
                </Info>
                
            </Col2>
        </EventWrapper>
        <EventWrapper>
            <Col1>
                <Img src='../img/collection/event2.png'></Img>
                <BtnContainer>
                    <RoundBtn>책방 프로필 보러가기</RoundBtn>
                </BtnContainer>
                
            </Col1>
            <Col2>
            <ContentContainer>
            <Title>색채 심리, 색으로 알아보는 나</Title>
                <Content>색으로 알아보는 나. 컬리 테라피스트 김설유 선생님과 함께 하는 색채심리 수업입니다. 드로잉을 통해 나의 심리를 알아봅니다. 본질색 외면색통해 스스로를 더 깊이 이해해봅니다. 보완색을 나를 채우는 법을 배웁니다.자세한 내용이 궁금한 분, 함께 하고 싶은 분은 서점 리스본 홈페이지를 찾아주세요.</Content>
            </ContentContainer>
               
                <Info>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>2022년 5월 14일 토요일 19:30</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>리스본 서점</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>5명</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>30,000원</div>
                    </RowContainer>
                    <RowContainer style={{marginBottom:"15px"}}>
                        <div style={{background: "#E0EBF5", height:"29px", padding:"2px 10px", marginRight:"1%"}}>일시</div>
                        <div style={{fontSize: "16px", color: "#222222"}}>리스본 서점 홈페이지</div>
                    </RowContainer>
                </Info>
            </Col2>
        </EventWrapper>
    </EventContainer>
  )
  }
export default Event
const EventContainer=styled(ColContainer)`
   margin-left:0.1%;
   margin-top: 117px;
`
const EventWrapper=styled(RowContainer)`
   height: 614px;
`
const Col1=styled(ColContainer)`
    width:31.1%;
`
const Img=styled.img`
    height: 416px;
`
const BtnContainer=styled.div`
    height: 198px;
    padding: 70px 0 61px 0;
    display: flex;
    justify-content: center;
`
const Col2=styled(ColContainer)`
    width: 70%;
`
const Title=styled.div`
font-weight: 700;
font-size: 30px;
color: #222222;
margin-bottom: 20px;
`
const Content=styled.div`
font-weight: 400;
font-size: 16px;
line-height: 25px;
color: #9E9E9E;
`
const ContentContainer=styled(ColContainer)`
    padding: 61px 35% 61px 5%;
`
const Info=styled(ColContainer)`
    height: 327px;
    padding-top:63px;
    padding-left: 5%;
`