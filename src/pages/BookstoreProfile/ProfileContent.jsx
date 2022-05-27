import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, Container, RowContainer } from '../../components/Container';
import Header from '../../components/Header';
import TopSection from '../../components/TopSection';
import Location from '../../components/Location';
import { StyleRounded } from '@mui/icons-material';
import Review from './Review';
import Accordion from './Accordion';
import { RoundBtn } from '../../components/Buttons';
import Footer from '../../components/Footer';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import Img from './Img';
import { Link } from 'react-router-dom';
import MisteryReview from './MisteryReview';
const ProfileContent = () => {
    const [loading, setLoading] = useState(false);
    const [content, setContent]=useState([]);
    const [collections, setCollections] = useState([]);
    let {id}=useParams();
    useEffect(()=>{
        axios.get('/api/bookstore',{params: {storeId:id, userId:localStorage.getItem('userId') }} )
        .then((res)=>{
            console.log(res.data.data)
            setContent(res.data.data)
        })
        axios.get(`/api/bookstore/${id}/reviewList`)
        .then( (res) => {
            console.log("리뷰 데이터", res.data.data);
            setCollections(res.data.data);
        })
    },[useParams(), loading]);


  return ( 
    <Background>
      <Header/>
      <CenterContainer>
      <TopSection title={content.name} scraped={content.scraped} tags={content.tags} id={id}/>
      </CenterContainer>

      <ImgContainer>
      <Img title={content.subtitle} content={content.description} imgs={Array.isArray(content.internalImgUrls) && content.internalImgUrls} img={content.profileImgUrl}></Img>
      </ImgContainer>
      <CenterContainer>
          <InfoContainer>
           <Map>
            <Location id={id} />
           </Map>
           <Info>
                <Title>{content.name}</Title>
                <RowContainer style={{gap:"5%", marginBottom:"25px"}}>
                    <Icon src='../img/icons/location.png'></Icon>
                    <InfoText>{content.address}</InfoText>
                </RowContainer>
                <RowContainer style={{gap:"5%" , marginBottom:"25px"}}>
                    <Icon src='../img/icons/call.png'></Icon>
                    <InfoText>{content.contact}</InfoText>
                </RowContainer>
                <RowContainer style={{gap:"5%" , marginBottom:"25px"}}>
                    <Icon src='../img/icons/link.png'></Icon>
                    <InfoText>{content.website}</InfoText>
                </RowContainer>
                <RowContainer style={{gap:"5%" , marginBottom:"25px",alignItems:"flex-start"}}>
                    <Icon src='../img/icons/time.png'></Icon>
                    {content.hours && 
                    <ColContainer>
                    <InfoText><div>월</div> {content.hours.mon} </InfoText>  
                    <InfoText><div>화</div> {content.hours.tue} </InfoText>
                    <InfoText><div>수</div> {content.hours.wed} </InfoText>
                    <InfoText><div>목</div> {content.hours.thu} </InfoText>
                    <InfoText><div>금</div> {content.hours.fri} </InfoText>
                    <InfoText><div>토</div> {content.hours.sat} </InfoText>
                    <InfoText><div>일</div> {content.hours.sun} </InfoText> 
                    </ColContainer>
                    }
                </RowContainer>
                <RowContainer style={{gap:"5%" , marginBottom:"25px"}}>
                    <Icon src='../img/icons/notice.png'></Icon>
                    <InfoText>{content.notice}</InfoText>
                </RowContainer>
           </Info>
          </InfoContainer>
          <Review collection={collections}/>
      </CenterContainer>

       <AccordionContainer>
            <Accordion id={id} loading={loading} setLoading={setLoading}/>
      </AccordionContainer>
      <BtnContainer>
        <div style={{fontSize:"36px", fontWeight:"700"}}>책방지기에게 도서 큐레이션을 받고 싶다면?</div>
        <Link to="/apply">
        <RoundBtn>미스터리북 신청하기</RoundBtn> 
        </Link>
       
      </BtnContainer>
      <ReviewContainer>
          <MisteryReview storeId={id}></MisteryReview>
      </ReviewContainer>
      <Link to="/review">
      <ReviewBtnContainer>   
          <div>미스터리북 리뷰 쓰고<br/>필릭지수 채우기</div>
         <img src='../img/arrow.svg' style={{marginTop: "35px", width:"6%", height:"40px"}}></img>  
      </ReviewBtnContainer>
      </Link>
      <Footer/>
    </Background>
  )
}

export default ProfileContent
const Background=styled(Container)`
background-image: url('../img/background/background_profileContent.jpg');
background-attachment: local;
background-size: 100% 5255px;
`
const ImgContainer=styled.div`
    height: 857px;
`
const InfoContainer=styled(RowContainer)`
margin-top: 321px;
height:572px;
margin-bottom: 315px;
`
const Map=styled.div`
  padding: 16px;
  width: 680px;
`
const Info=styled(ColContainer)`
   margin-left: 5%;
`
const Icon=styled.img`
    height: 25px;
    display: flex;
   
`
const Title=styled.div`
    font-weight: 700;
font-size: 30px;
margin: 20px 0 30px 0;
`
const InfoText=styled(RowContainer)`
    font-weight: 500;
font-size: 20px;
color: #222222;
gap:20px;
`
const AccordionContainer=styled.div`
    margin-top: 151px;
`
const BtnContainer=styled(ColContainer)`
    margin:150px 0 50px 0;
    display:flex;
    align-items: center;
    gap:50px;
`
const ReviewContainer=styled(RowContainer)`
    width:100%;
    margin: 0 5% 50px 5% ;
   
`
const ReviewBtnContainer=styled.div`
    display: flex;
    justify-content: flex-end;
    //margin-bottom: 150px;
    margin-right: 5%;
    font-weight: 700;
font-size: 24px;
line-height: 37px;
color: #222222;
width: 100vw;
height: 300px;
background-color: white;
`
