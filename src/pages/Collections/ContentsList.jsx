import React, {useEffect, useParams, useState} from 'react'
import Header from '../../components/Header';
import styled from "styled-components";
import { CenterContainer , Container} from '../../components/Container';
import { RowContainer } from '../../components/Container';
import { Box } from '../../components/apply/Boxs';
import BookstoreCard from './BookstoreCard';
import Event from './Event';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {HeaderTitle} from '../Collections/HeaderTitle';
import Keywords from './Keywords';
import Footer from '../../components/Footer';

const ContentsList = () => {
  const [week, setWeek]=useState([]);
  const [other, setOther]=useState([]);
  useEffect(()=>{
    try {
      //이주의 동네를 송파로 가정
      axios.get('/api/board?include=SONGPA&size=6')
      .then((res)=>{
        console.log(res.data.data);
        setWeek(res.data.data);
      })
      axios.get('/api/board?exclude=SONGPA&size=6')
      .then((res)=>{
        console.log(res.data);
        setOther(res.data.data);
    })
    } catch(err) {
      console.log(err);
    }

  }, [])
  return (
    <Background>
        <Header/>
        <HeaderTitle/>

        <CenterContainer>
            <Blocks>
              <TitleBox style={{background:"#FFFFFF", alignItems:'center'}}>이주의 동네</TitleBox>
              <TitleBox style={{background:"#FFFA88", alignItems:'center'}}>파동이 닿는 곳, 송파</TitleBox>
            </Blocks>
            <Collection>
           {week.map((week)=>(
             <BookstoreCard dum={week}/>
           ))}
            </Collection>
            <Link to="/allCollection/2">
            <MoreContents>+전체 콘텐츠보기</MoreContents> 
            </Link>
           
            <Blocks>
              <TitleBox style={{background:"#FFFFFF", display:"flex", alignItems:"center"}}>다른 동네 컬렉션</TitleBox>
            </Blocks>
            <Collection>
           {other.map((other)=>(
             <BookstoreCard dum={other}/>
           ))}
            </Collection>
            <Link to='/allCollection/1'>
            <MoreContents>+전체 콘텐츠보기</MoreContents> 
            </Link>
           
            <Blocks>

            <TitleBox style={{background:"#FFFFFF", display:"flex", alignItems:"center"}}>이번주 책방 이벤트</TitleBox>
            </Blocks>
            <Event></Event>
            <Blocks>
              <TitleBox style={{background:"#FFFFFF", display:"flex", alignItems:"center", marginTop:"-5px"}}>키워드로 보는 동네 컬렉션</TitleBox>
            </Blocks>
        </CenterContainer>
        <Keywords/>
        <Footer/>
    </Background>
  )
}

export default ContentsList
const Background=styled(Container)`
background-image: url('../img/background/background_list.jpg');
background-attachment: local;
background-size: 100% 6544px;
`

const Blocks=styled(RowContainer)`
  margin-left:2%;
  margin-top: 168px;
  gap:10px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  display: flex;
  align-items: center;
  text-align: center;
`
const TitleBox=styled(Box)`
  padding: 14px 4% 14px 4%;
  border: 1px solid #616161;
`
const Collection=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap:77px 5%;
  margin:107px 9%;
`
const MoreContents=styled.div`
  font-weight: 700;
  font-size: 24px;
  color: #9E9E9E;
  display:flex;
  justify-content: center;
`