import React,{ useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MisteryReview from './MisteryReview';
import MyReview from './MyReview';
import { ColContainer, RowContainer, Container } from '../../components/Container';
const Review = () => {
    const [tab, setTab]=useState(1);

    useEffect( ()=>{
        handleContent();
    },[tab]);

    const handleContent=()=>{
        switch (tab) {
            case 1:
               return <MisteryReview setTab={setTab}/>
             case 2:
                return <MyReview tab={tab}/>
            default:
                console.log("err");
        }
    }
  return (
      <>
      <Header/>
    <ReviewContainer>
        
        <Title>
            리뷰를 남기고<br/>나의 필릭 지수를 채워보세요!
        </Title>
         <ColContainer>
                <Menu>
                    <Tab onClick={(e)=>setTab(1)} className={tab===1? "focused":""}>미스터리북 리뷰</Tab>
                    <Tab onClick={(e)=>setTab(2)} className={tab===2? "focused":""}>내가 쓴 리뷰</Tab>
                </Menu>
                <Content>
                  {handleContent()}
                </Content>
            </ColContainer>
    </ReviewContainer>
    <Footer/>
    </>
  )
}

export default Review
const ReviewContainer=styled(Container)`
    padding: 47px 20% 150px 20%;
    background-color: #F5F5F5;
`
const Title=styled.div`
     font-weight: 700;
    font-size: 36px;
    margin-bottom: 94px;
`
const Menu=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`
const Tab=styled.button`
   font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #616161;
    
   &.focused{
    font-weight: 500;
    font-size: 18px;
    color: #222222;
    background-color: white;
    padding: 13px 0 12px 0;
   }
`
const Content=styled.div`
    min-height:420px;
    background-color: white;
    margin-bottom: 100px;
`