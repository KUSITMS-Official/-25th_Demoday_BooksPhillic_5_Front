import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, RowContainer,Container } from '../components/Container';
import Header from '../components/Header';
import Flex from '../components/Flex';
import { RoundBtn } from '../components/Buttons';
import Accordion from '../components/content/SimpleAccordion';
import Footer from '../components/Footer';
import TopSection from '../components/TopSection';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { getBookstoreProfile } from '../services/ApiService';
import { Link } from 'react-router-dom';
const Content = () => {
    const [content, setContent]=useState([]);

    let {id}=useParams();
    const getContent = async() => {
        const res = await getBookstoreProfile(id);
        if(res.code === 1000) {
            console.log(res.data);
            setContent(res.data);
        }
    }
    
    useEffect(()=>{
        getContent();
      }, [useParams()]);
  return (
    <>
    <Background>
        <Header/>
     
        <CenterContainer>
           <TopSection title={content.title} editor={content.editorName} editorImage={content.editorImage} date={moment(content.createdAt).format('YYYY.MM.DD')} tags={Array.isArray(content.tagList) && content.tagList.length &&content.tagList}/>
               {Array.isArray(content.contentImages) &&
                <ContentWrapper>
                <ContentContainer>
                   <img src={content.contentImages[0]} width="49%" height="690px" ></img>
                    
                    <Paragraph>
                        <ParagraphTiTle>송리단길의 <br/>작은서점</ParagraphTiTle>
                       <ParagraphContent>{content.content[0]} </ParagraphContent>
                    </Paragraph>
                </ContentContainer>
                <ContentContainer>
                    <Paragraph2>
                        
                  <ParagraphContent>{content.content[1]} </ParagraphContent>
                        
                    </Paragraph2>
                 <img src={content.contentImages[1]} width="40%" height="558px" ></img>
                    
                    
                </ContentContainer>
            </ContentWrapper>
}
            <ImgContainer>
                <ImgHeader>
                    <TopTitle>책방의 공간들</TopTitle>
                    <div>
                        <img src='../img/previous.png'></img>
                        <img src='../img/next.png'></img> 
                    </div>
                </ImgHeader>
                {
                   Array.isArray(content.bookstoreImages) &&
                <ImgWrapper>
               <div></div>
                    <img src={content.bookstoreImages[0]} width="32%" height="470px"></img>
                    <img src={content.bookstoreImages[1]} width="32%" height="470px"></img>
                    <img src={content.bookstoreImages[2]} width="32%" height="470px"></img>
                </ImgWrapper>
}
            </ImgContainer>
           
            <Recommend>
                <Col1>
                <TopTitle>책방지기의 <br/>추천도서</TopTitle>
                <div>책방지기 박현서</div>
                </Col1>
                <Col2>
                <img src='../img/content/sample_book.png' style={{transform: "rotate(15deg)", height:"250px", width:"80%" }} ></img>
                <img src='../img/collection/recommend.png' style={{transform: "rotate(-15deg)", height:"250px", width:"100%"}}></img>
                </Col2>
                <Col3>
                <Review>
                <div style={{fontSize: "24px", fontWeight:"700"}}>퇴근 후 동네책방</div>
                <ParagraphContent>각기 다른 매력의 동네책방을 담아놓은 여행에세이</ParagraphContent>
                </Review>
                <Review>
                <div style={{fontSize: "24px", fontWeight:"700"}}>숱한 사람들 속을 헤집고 나왔어도</div>
                <ParagraphContent>민낯의 문장들이 어우러져 읽히는 가랑비의 단상집</ParagraphContent>
                </Review>
                <RoundBtnContainer>
                    <Link to="/apply">
                    <RoundBtn>미스터리북 신청하기</RoundBtn> 
                    </Link>
                   
                </RoundBtnContainer>
                </Col3>
            </Recommend>
            <AccordionContainer>
                <Accordion id={id} profile={content.bookstore}></Accordion>
            </AccordionContainer>
           
         
        </CenterContainer>
        <MoreContent>
                <TopTitle>더 많은 책방의 이야기가 궁금하다면?</TopTitle>
                <Link to ="/allCollection/1">
                <RoundBtn>콘텐츠 보러가기</RoundBtn>
                </Link>
                
           </MoreContent>
        <Footer></Footer>
  </Background>
    </>
  )
}

export default Content
const Background=styled(Container)`
    background-image: url('../img/background/background_content.jpg');
    background-attachment: local;
    background-size: 100% 4665px;
`
const ContentContainer=styled(RowContainer)`
    margin-top: 107px;
    margin-bottom: 25px;
`
const TopTitle=styled(Flex)`
   
    font-weight: 700;
    font-size: 36px;
    justify-content: center;
`
const ContentWrapper=styled(ColContainer)`
    margin: 0px 6% 107px 6%;
`

const Paragraph=styled(ColContainer)`
    width: 41%;
    height: 690px;
    margin-left: 10%;
`
const Paragraph2=styled.div`
    margin-left: 8%;
    margin-right: 10%;
    height: 558px;
    width: 42%;
`
const ParagraphTiTle=styled.div`
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 50px;
`
const ParagraphContent=styled.div`
    font-size: 20px;
    line-height: 37px;
    letter-spacing: -0.6px;
    color: #222222;
`
const ImgContainer=styled.div`
    margin-top: 123px;
    border: solid black 1px;
    height: 560px;
    margin-bottom: 180px;
`
const ImgHeader=styled(RowContainer)`
    justify-content: space-between;
    align-content: center;
    padding: 0 14px 0 14px;
    height: 65px;
`
const ImgWrapper=styled(RowContainer)`
    gap:0 14px;
    height: 495px;
`
const Recommend=styled(RowContainer)`
    padding: 20px 20px 0px 20px;
    height: 585px;
`
const Col1=styled(ColContainer)`
    width: 15%;
    margin-right: 20%;
    height: 100px;
    margin-top: 80px;
    margin-bottom:400px;
`
const Col2=styled(ColContainer)`
    width:15%;
`
const Col3=styled(ColContainer)`
    width:45%;
    height: 450px;
`
const Review=styled(ColContainer)`
    margin: 44px 0 44px 5%;
    padding-left: 5%;
`
const RoundBtnContainer=styled(Flex)`
    padding-right: 15%;
    margin-top: 66px;
    justify-content: flex-end;
`
const AccordionContainer=styled.div`
    margin-top: 254px;
    
`
const MoreContent=styled(ColContainer)`
    align-items: center;
    padding: 150px 0 150px 0;
    width: 100vw;
    gap: 40px;
    background-color: white;
    height: 430px;
`