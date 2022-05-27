import React from 'react'
import { ColContainer, RowContainer } from './Container'
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
       <Col1>
       <img src='../img/logo.svg'></img>
        <div>(주)북스필릭 사업자 정보</div>
       
        <div style={{marginTop:"100px"}}>©2022 Booksphilic</div>
       </Col1>
       <Col2>
          <Info>
            <div style={{fontWeight:"700", fontSize:"24px"}}>소개</div>
            <div>북스필릭 소개</div>
            <div>팀원 소개</div>
            <div>FAQ</div>
          </Info>
          <Service>
          <div style={{fontWeight:"700", fontSize:"24px"}}>서비스</div>
            <div>고객센터</div>
            <div>이용약관</div>
            <div>개인정보처리방침</div>
          </Service>
          <Social>
          <div style={{fontWeight:"700", fontSize:"24px"}}>소셜</div>
          <div>인스타그램</div>
          <div>페이스북</div>
          <div>펀딩</div>
          </Social>
       </Col2>
    </FooterContainer>
  )
}

export default Footer
const FooterContainer=styled(RowContainer)`
    padding: 75px 0 30px 5%;
    background-color: #2A3143;
    height: 400px;
    justify-content: space-between;
    font-weight: 400;
    line-height: 37px;
    font-size: 16px;
    color:white;
`
const Col1=styled(ColContainer)`
 

`
const Col2=styled(RowContainer)`
  margin-bottom: 140px;
  width: 40%;
`
const Info=styled(ColContainer)`
margin-right: 10%;
`
const Service=styled(ColContainer)`
  margin-right: 10%;
`
const Social=styled(ColContainer)`
`