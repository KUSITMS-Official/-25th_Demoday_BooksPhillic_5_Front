import React, {useState} from 'react'
import { ColContainer, RowContainer } from '../Container'
import styled from 'styled-components'

const Card = ({data}) => {
console.log(data);
  return (
    <CardContainer>
        <Col1>
          <Img src={data.profileImgUrl}></Img>
          <Content>
          <Title>{data.name}</Title>
          <Tags>
              {/* 태그 목록 (아직 추가 안함) */}
              {data.tags.map((tag) => (
                 <span>#{tag}&nbsp;&nbsp;</span>
              ))}
          </Tags>
          </Content>
        </Col1>
        <Col2>
          <RowContainer style={{gap:"5%", marginBottom:"25px", alignItems: 'flex-start'}}>
              <Icon src='../img/icons/location.png'></Icon>
              <InfoText>
                {data.address}
              </InfoText>
          </RowContainer>
          <RowContainer style={{gap:"5%" , marginBottom:"25px", alignItems: 'flex-start'}}>
              <Icon src='../img/icons/call.png'></Icon>
              <InfoText>{data.contact}</InfoText>
          </RowContainer>
          <RowContainer style={{gap:"5%" , marginBottom:"25px", alignItems: 'flex-start'}}>
              <Icon src='../img/icons/link.png'></Icon>
              <InfoText>{data.website}</InfoText> 
          </RowContainer>
          <RowContainer style={{gap:"5%" , marginBottom:"25px",alignItems:"flex-start"}}>
              <Icon src='../img/icons/time.png'></Icon>
              {
                data.hours ?
                <ColContainer>
                  <InfoText><div>월</div>&nbsp;&nbsp;{data.hours.mon}</InfoText>
                  <InfoText><div>화</div>&nbsp;&nbsp;{data.hours.tue}</InfoText>
                  <InfoText><div>수</div>&nbsp;&nbsp;{data.hours.wed}</InfoText>
                  <InfoText><div>목</div>&nbsp;&nbsp;{data.hours.thu}</InfoText>
                  <InfoText><div>금</div>&nbsp;&nbsp;{data.hours.fri}</InfoText>
                  <InfoText><div>토</div>&nbsp;&nbsp;{data.hours.sat}</InfoText>
                  <InfoText><div>일</div>&nbsp;&nbsp;{data.hours.sun}</InfoText>
                </ColContainer>
                :
                null
              }
          </RowContainer>
        </Col2>
    </CardContainer>
  )
}

export default Card
const CardContainer=styled(RowContainer) `
  height:430px;
  width: 459px;
  border: 1px solid #616161;
`
const Img=styled.img`
    height: 50%;
`
const Content=styled(ColContainer)`
  padding: 44px 5% 27px 5%;
`
const Title=styled.div`
font-weight: 500;
font-size: 20px;
margin-bottom: 5px;
`
const Tags=styled.div`
  white-space: pre-line;
  width:100%;
  color: #BDBDBD;
  font-weight: 400;
  font-size: 14px;
`

const Col1=styled(ColContainer)`
  width:50%;
  height:100%;
  border-right: 1px solid #616161;
`
const Col2=styled(ColContainer)`
  width:50%;
  padding: 27px 5%;
  
`
const Icon=styled.img`
    height: 20px;
    display: flex;
    margin-top: 4px;
`
const InfoText=styled(RowContainer)`
    width: 150px;
    font-weight: 400;
    font-size: 14px;
    color: #9E9E9E;
    flex-wrap: wrap;
    white-space: pre-line;
    word-break: break-all;
`

