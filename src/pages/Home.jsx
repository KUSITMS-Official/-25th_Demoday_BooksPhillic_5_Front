import React, {useEffect, useState} from 'react'
import Header from '../components/Header';
import styled from "styled-components";
import { CenterContainer, ColContainer, RowContainer,Container } from '../components/Container';
import BestReview from '../components/main/BestReview';
import { Col } from 'react-bootstrap';
import styledEngine from '@mui/styled-engine';
import IntroMistery from '../components/main/IntroMistery';
import Footer from '../components/Footer';
import {homeBookstoreData, scrap} from '../services/ApiService';
import { EditNotifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home = () => {
  const [store3, setStore3] = useState({});
  const [store4, setStore4] = useState({});

  const getData = async()=>{
    try{
      const res = await homeBookstoreData(3);
      if(res.code === 0) {
        setStore3({
          storeId : 3,
          name : '동네책방 주책',
          profileImgUrl: "https://booksphillic.s3.ap-northeast-2.amazonaws.com/BOOKSTORE_PROFILE/cbcae7c8-7450-4a4e-a5f9-a1d7b36d57f6.jpg",
          description : "주택가에 위치한 작은 책방. 조용하게 커피 한 잔 마시며 독립출간물을 접할 수 있는 공간입니다.",
          subtitle: "책과 술, 문화모임이 있는 쉼의 공간",
          scraped: false
        })
      }
      else if(res.code === 1000) {
        console.log("3 스크랩 유무", res.data);
        setStore3(res.data);
      }
    
      const res2 = await homeBookstoreData(4);
      if(res2.code === 0) {
        setStore4({
          storeId: 4,
          name: "하우스북스",
          profileImgUrl: "https://booksphillic.s3.ap-northeast-2.amazonaws.com/BOOKSTORE_PROFILE/d702ec7e-839e-43c5-9d28-2294d7ef7ee6.jpg",
          description: "스페셜 티, 커피와 서점, 갤러리를 즐길 수 있는 복합문화공간에 자리잡은 책방입니다.",
          subtitle: "HOWS 발견의 공간",
          scraped: false
        })
      }
      else if(res2.code === 1000) {
          console.log("4 스크랩 유무", res2.data);
          setStore4(res2.data);
        }
      } catch(err) {
        console.log(err);
      }
  }

  useEffect(()=>{getData()},[]);

  const onClickScrap = async (storeId) => {
    console.log(storeId);
    const res = await scrap(storeId);
    console.log(res.data);
    if(res.code === 0) {
      window.location.href = '/login';
      alert("로그인 후 이용 가능합니다.");
    }
    else if(res.code === 1000) {
      if(storeId === 3) {
        setStore3({...store3, scraped : res.data});
      }
      else {
        setStore4({...store4, scraped : res.data});      }
    }
    // 실패
    else {
      alert("스크랩에 실패하였습니다.")
    }
  }



  const PostType = (type) => 
    <div style={{
      fontFamily: 'Frutiger',
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '35px',
      color: '#222222'
    }}>{type}</div>

  const PostContent = (content) => 
    <div style={{
      height: '100%', marginTop: '128px',
      fontSize: '20px', fontFamily: 'Noto Sans KR', fontWeight: 500,
      lineHeight: '35px', width: '308px'
    }}>{content}</div>

  const Hr = () => 
    <div style={{
      width: '25px',
      height: '0px',
      border: '2px solid #222222'
    }}></div>


  

  return (
  <>
   <Header/>
      <HomeContainer>
        <HomeCenterContainer>
          <TopWrapper>
            <img src='../img/house.png'></img>
            <div style={{
              marginLeft: '13px',
              fontFamily: 'NIXGONFONTS',
              fontWeight: 400,
              fontSize: '40px'
            }}>파동이 닿는 곳, 송파</div>
          </TopWrapper>
          <ContentWrapper>
          <BookstoreContent>
            {PostType('Bookstore')}
            <Hr/>
            <div style={{
              fontFamily: 'Noto Sans KR',
              fontWeight: 700,
              fontSize: '36px'
            }}>
              작지만 다채로운 공간<br/>
              &lt;무엇보다 책방&gt;
            </div>
            {PostContent('작은 공간임에도 편안하고 기분좋은 책들이 가득하다. 송리단길의 작은 서점이 우리를 맞이한다.')}
          </BookstoreContent>
          <img src='../img/bookstore1.png' width="62.4%" height="100%" ></img>
          </ContentWrapper>
          <ContentWrapper>
          <img src='../img/bookstore1.png' width="37.6%" height="100%" ></img>
            <BookstoreContent>
              {PostType('Event')}
              <Hr/>
              <div style={{
                fontFamily: 'Noto Sans KR',
                fontWeight: 700,
                fontSize: '36px'
              }}>
                책 향기를 가득 머금은 <br/> 책방에서
              </div>
              {PostContent('컨텐츠 경쟁시대에 이르렀다. 컨텐츠의 원조, 책에 진심인 사람들과 책으로 둘러쌓인 공간에서 오감으로 책을 느껴보는 시간을 가져보자.')}
            </BookstoreContent>

            <Link to="/collection">
              <MoreBtn>
              <div style={{marginRight: '12px'}}>더 많은 컨텐츠 <br/>보러가기</div>
              <img src='../img/arrow.png'></img>
            </MoreBtn>   
            </Link>
          </ContentWrapper>
          <BestReview/>
          <BookStoreProfile>
          <ProfileTop>
            <RowContainer>
              <img src='../img/bookstore.png'></img>
              <div style={{fontFamily: 'Noto Sans KR', fontWeight: 700, fontSize: '36px', marginLeft: '10px'}}>
                송파의 책방 프로필
              </div>
            </RowContainer>
            <RowContainer>
            <img src='../img/previous.png'></img>
            <img src='../img/next.png'></img>
            </RowContainer>
          </ProfileTop>
          
          <ProfileContent>
            <ProfileCard>
              <div style={{height:"490px"}}>
                <div style={profileStyle}>{store3.name}
: {store3.description}</div>  
              </div>
              <ProfileBottom>
                <Bottom1>
                  <div style={boldStyle}>{store3.name}</div> {/* 3 번 서점 */}
                  <div style={addressStyle}>{store3.subtitle}</div>
                </Bottom1>

                <Bottom2 onClick={() =>  onClickScrap(3)}>
                  {
                    store3.scraped===true ? 
                      <img src='../img/scrapped.svg' height="48px" width="60%" style={{margin: "auto"}}></img>
                    : <img src='../img/unscrapped.svg' height="48px" width="60%" style={{margin: "auto"}}></img>
                  }                  <div style={{textAlign: 'center', lineHeight: '30px', fontWeight: 400, fonSize: '16px'}}>스크랩</div>
                </Bottom2>
              </ProfileBottom>
            </ProfileCard>
            <ProfileCard>
              <div style={{height:"490px"}}> 
                <div style={profileStyle}>{store4.name}
  : {store4.description}</div>
              </div>
              
              <ProfileBottom>
                <Bottom1>
                  <div style={boldStyle}>{store4.name}</div> {/* 4 번 서점 */}
                  <div style={addressStyle}>{store4.subtitle}</div>
                </Bottom1>
                <Bottom2 onClick={() => onClickScrap(4)}>
                  {
                    store4.scraped===true ? 
                      <img src='../img/scrapped.svg' height="48px" width="60%" style={{margin: "auto"}}></img>
                    : <img src='../img/unscrapped.svg' height="48px" width="60%" style={{margin: "auto"}}></img>
                  }
                  <div style={{textAlign: 'center', lineHeight: '30px', fontWeight: 400, fonSize: '16px'}}>스크랩</div>
                </Bottom2>
              </ProfileBottom>
            </ProfileCard>
          </ProfileContent>
          <ProfileEnd>
            <Link to="/profile">
            <div>더 많은 책방 보러가기</div>
            <img src='../img/arrow.png'></img>
            </Link>
          
          </ProfileEnd>
        </BookStoreProfile>
        <IntroMistery/>
        </HomeCenterContainer>
      </HomeContainer>
       <Footer/>
    </>
   
  
 
  )
}

export default Home;

const boldStyle = {
  fontFamily: 'Noto Sans KR',
  fontWeight: 700,
  fontSize: '30px'
};

const addressStyle = {
  fontFamily: 'Noto Sans KR',
  fontWeight: 400,
  fontSize: '16px',
  color: '#616161'
}

const profileStyle = {
  marginTop: '255px', marginLeft: '380px', marginRight: '70px',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '35px'
}

const HomeContainer=styled(Container)`
  background-image: url('../img/background/background_home.jpg');
  background-attachment: local;
  //background-size: cover;//반응형 성공!
  background-size: 100% 4119px;
 
`
const HomeCenterContainer=styled(CenterContainer)`
   // margin: 0 3%; //양 옆 띄우기
`
const TopWrapper=styled(RowContainer)`
  width: 100%;
  justify-content: center;
  line-height: 52px;
  padding: 80px 0%; 
  margin-bottom: 3px;
`
const ContentWrapper=styled(RowContainer)`
  height: 511px;
  width: 100%;
  position: relative;
`
const BookstoreContent=styled(ColContainer)`
  height: 100%;
  padding: 27px;
  width: 37.6%;
`
const MoreBtn=styled(RowContainer)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: Noto Sans KR;
  font-size: 24px;
  font-weight: 700;
  line-height: 37px;
  text-align: left;

`
const BookStoreProfile=styled(ColContainer)`
  
`
const ProfileTop=styled(RowContainer)`
  justify-content: space-between;
  padding: 15px 2%;
`
const ProfileContent=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const ProfileCard=styled(ColContainer)`
   
`
const ProfileBottom=styled(RowContainer)`
  padding: 20px 1% 20px 5% ;
`
const Bottom1=styled(ColContainer)`
  width: 80%;
`
const Bottom2=styled(ColContainer)`
  width: 20%;
  padding-left: 5%;
`
const ProfileEnd=styled(RowContainer)`
  margin-top: 10px;
  width: 100%;
  justify-content: flex-end;
  font-weight: 700;
font-size: 24px;
line-height: 37px;
color: #222222;

`