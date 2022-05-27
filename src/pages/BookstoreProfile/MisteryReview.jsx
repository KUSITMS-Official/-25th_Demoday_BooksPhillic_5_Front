import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { ColContainer, RowContainer } from '../../components/Container'
import styled from 'styled-components'
import {getPickupReviewByStore} from '../../services/ApiService';

const MisteryReview = ({storeId}) => {
    const [reviews, setReviews]=useState([])
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
    
    const getReviewDatas = async() => {
        const res = await getPickupReviewByStore(storeId);
        if(res.code === 1000) {
            console.log("픽업 리뷰들", res.data);
            setReviews(res.data);
        }
    }

    useEffect( ()=> {
        getReviewDatas();
    },[]);

  return (
   <MisteryReviewContainer>
       {reviews.map( (review) => (
            <ReviewCard>
                <Img src={review.url}></Img>
                <Content>
                    <RowContainer style={{fontWeight: "400",fontSize: "16px",color:"#9E9E9E"}}>
                        <div>{review.username}님</div>
                        <div>ㅣ</div>
                        <div>{review.createdAt.substring(0,10)}</div>{/* date형식 바꾸는 법은 Content.jsx 36번째 줄 moment함수 참고 */}
                    </RowContainer> 
                        <ContentContainer>
                        <Emoji src={emoji[emoji.findIndex(v => v.name === review.emoticon)].src}></Emoji> {/* './Review.jsx' 코드 참고해서 짜면 될듯 */}
                            <Text>일러스트 그림이 그려진 요리책을 원했는데, 그림도 아기자기 하고 내용도 정말 마음에 들었습니다! 미스터리북 서비스 추천해요!</Text>
                        </ContentContainer>
                </Content>
        </ReviewCard>
       ))
       }
   </MisteryReviewContainer>
  )
}

export default MisteryReview
const MisteryReviewContainer=styled(RowContainer)`
margin-top:50px;
white-space: nowrap;
    overflow: auto;
`
const ReviewCard=styled(ColContainer)`
min-width:400px;
max-width:400px;
height: 618px;
margin-right: 2%;
`
const Img=styled.img`
    height:318px;
    width: 100%;
    border-radius: 200px 200px 0 0;
`
const Content=styled(ColContainer)`
    background: #E0EBF5;
    height: 300px;
    width:100%;
    padding: 40px 5%;
    white-space: pre-line;
`
const ContentContainer=styled(RowContainer)`
margin-top:20px;
`
const Emoji=styled.img`
    align-self: flex-start;
    margin-right: 3%;
`
const Text=styled.div`
    font-weight: 500;
font-size: 20px;
line-height: 35px;
color: #222222;

`