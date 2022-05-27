import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container';

const ReviewCard = ({col, id, username, urls, content, emoji, createdAt}) => {
    console.log("전송된 데이터", col);
  return (
    <CardContainer>
        <BigImg src={col.urls[0]}></BigImg>
        <RowContainer style={{gap:"2%"}}>
            <SmallImg src='../img/bookstore1.png'></SmallImg>
            <SmallImg src='../img/bookstore1.png'></SmallImg>
        </RowContainer>
        <ContentContainer>
            <hr style={{margin: "15px 0"}}/>
            <Id>{col.username}</Id>
            <Date>{col.createdAt}</Date>
            <RowContainer>
                <Emoji src='../img/emoji/smile.png'></Emoji>
                <Content>{col.content}</Content>
            </RowContainer>
            <hr style={{margin: "15px 0"}}/>
        </ContentContainer>
    </CardContainer>
  )
}

export default ReviewCard

const CardContainer=styled(ColContainer)`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    height: 700px;
`
const BigImg=styled.img`
    height:347px;
    margin-bottom: 15px;
`
const SmallImg=styled.img`
    height: 170px;
`
const ContentContainer=styled.div`
    height: 150px;
`
const Id=styled.div`
    font-weight: 500;
font-size: 20px;
color: #616161;
`
const Date=styled.div`
    font-weight: 400;
font-size: 14px;
color: #BDBDBD;
margin-bottom: 15px;
`
const Emoji=styled.img`
    height: 20px;
    width: 20px;
    margin-bottom: 20px;
    margin-right: 2%;
`
const Content=styled.div`
    font-weight: 400;
font-size: 16px;
color: #616161;
`