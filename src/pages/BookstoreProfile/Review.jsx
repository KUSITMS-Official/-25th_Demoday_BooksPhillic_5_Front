import React, {useEffect, useState} from 'react'
import styled, { keyframes } from "styled-components";
import { RowContainer, ColContainer } from '../../components/Container';
import ReviewCard from './ReviewCard';
import Pagination from '../../components/Pagination';
import { DonutLarge } from '@mui/icons-material';

const Review = ({collection}) => {
  console.log("Review에 넘어온 데이터", collection); 
  const emoji=[
    {src:"../img/emoji/happy.png",
    name:"추천해요"},
    {src:"../img/emoji/smile.png",
    name:"좋아요"},
    {src:"../img/emoji/heart.png",
    name:"맘에 들어요"},
    {src:"../img/emoji/wink.png",
    name:"짱이에요"},
    ]
    
  const [limit, setLimit]=useState(2);
  const [page, setPage]=useState(1);
  const offset = (page-1)*limit;

  useEffect( ()=> {}, [collection]);

  /* 이미지가 3장보다 적은 경우 처리해줘야함! */
  return (
      <>
        <ReviewContainer>
          {collection && collection.slice(offset, offset+limit).map(col=>{
            return(
            <CardContainer>
              <BigImg src={col.urls[0]}></BigImg>
              <RowContainer style={{gap:"2%"}}>
                <SmallImg src={col.urls[1]}></SmallImg>
                <SmallImg src={col.urls[2]}></SmallImg>
              </RowContainer>
            <ContentContainer>
              <hr style={{margin: "15px 0"}}/>
              <Id>{col.username}</Id>
              <Date>{col.createdAt.slice(0,10)}</Date>
              <RowContainer>
                <Emoji src={emoji[emoji.findIndex(v => v.name === col.emoticon)].src}></Emoji>
                <Content>{col.content}</Content>
              </RowContainer>
              <hr style={{margin: "15px 0"}}/>
            </ContentContainer>
            </CardContainer>
            )
          })}
        </ReviewContainer>
        <PaginationWrapper>
        <Pagination
          total={collection.length}
          limit={limit}
          page={page}
          setPage={setPage}
            review={1}
        />
        </PaginationWrapper>      
      </>

  )
}

export default Review
const ReviewContainer=styled(RowContainer)`
    height:714px;
    width: 95%;
    margin: 30px 2% 0 2%; 
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
`
const PaginationWrapper=styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`

const CardContainer=styled(ColContainer)`
    display: grid;
    grid-template-rows: 2fr 1fr 1fr;
    height: 700px;
    width:100%;
`
const BigImg=styled.img`
    height:347px;
    margin-bottom: 15px;
    width:100%;
`
const SmallImg=styled.img`
    height: 170px;
    width:50%;
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