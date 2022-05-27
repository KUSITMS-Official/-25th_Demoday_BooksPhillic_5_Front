import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import { CenterContainer, Container, RowContainer } from '../../components/Container';
import Header from '../../components/Header';
import BookstoreCard from './BookstoreCard';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ContentPasteSearchOutlined } from '@mui/icons-material';
import Keywords from './Keywords';
import { keywordList } from '../../components/keywordList';
import {HeaderTitle} from '../Collections/HeaderTitle';
import { Box } from '../../components/apply/Boxs';


const AllList = () => {
  
  const [all, setAll]=useState([]);
  const [week, setWeek]=useState([]);
  const radio=useParams().week;
  const clickWeek=()=>{
    //이 주의 동네만 모아보기
    axios.get('/api/board?include=SONGPA&size=100')
    .then((res)=>{
      console.log(res.data);
      console.log(res.data.data); 
      setWeek(res.data.data);
    })
  }
  const clickAll=()=>{
    //모든 동네 모아보기
    axios.get(`/api/board?size=100`)
    .then((res)=>{
      console.log(res.data);
      console.log(res.data.data); 
      setAll(res.data.data);
    })
  }
  //페이지도 백에서 구현함, 2번 페이지 누르면 page=2를 쿼리로 보내면 됨, size=9는 최대 아홉개 보내준다는 뜻
  //초기 상태
  useEffect(()=>{
    {
      radio ==="1"
      ?
      axios.get(`/api/board?size=100`)
      .then((res)=>{
        console.log(res.data.data);
        setAll(res.data.data);
        setCategory("1");
        
      })
      :
      axios.get('/api/board?include=SONGPA&size=100')
      .then((res)=>{
        console.log(res.data.data);
        setWeek(res.data.data);
        setCategory("2");
      })
    }
    
  }, [useParams()])
 
    const [limit, setLimit]=useState(6);
    const [page, setPage]=useState(1);
    const offset=(page-1)*limit;
    const [category, setCategory]=useState("1");
    const handleClickRadioBtn=(e)=>{
        console.log(e.target.value);
        setCategory(e.target.value);
        setPage(1);
    }
  return (
    <Background>
        <Header/>
        <HeaderTitle/>
        <CenterContainer style={{marginBottom:'30px', width: 'min-content', margin:"0 auto"}}>
          <Blocks style={{marginTop: '168px'}}>
            <TitleBox style={{background:"#FFFFFF", alignItems:'center'}}>동네 컬렉션</TitleBox>
          </Blocks>
            <RadioBtnWrapper>
                <RadioBtn
                    id="radio1"
                    type="radio"
                    value="1"
                    checked={category==="1"}
                    onChange={handleClickRadioBtn}
                    onClick={clickAll}
                />
                <Label for="radio1">
                모든 동네 보기
                </Label>
                <RadioBtn
                    id="radio2"
                    type="radio"
                    value="2"
                    checked={category==="2"}
                    onChange={handleClickRadioBtn}
                    onClick={clickWeek}
                    
                />
                  <Label for="radio2">
                    이 주의 동네만 모아보기
                  </Label>
            </RadioBtnWrapper>
            <div style={{height: '1190px'}}>
              {
                  category==="1"                
                  ?
                  <Collection>
                  { all.slice(offset, offset+limit).map((all)=>(
                    <BookstoreCard dum={all}/>
                  ))}
                  </Collection>
                  :
                  <>
                  <Title>#파동이 닿는 곳, 송파</Title>
                  <Collection>
                  {week.slice(offset, offset+limit).map((week)=>(
                    <BookstoreCard dum={week}/>
                  ))}
                  </Collection>
                  </>
              }
            </div>
           <Pagination
              total={
                (category === "1" ? all.length: week.length)
              }
              limit={limit}
              page={page}
              setPage={setPage}
           />
        </CenterContainer>
        <Blocks>
            <TitleBox style={{background:"#FFFFFF", alignItems:'center'}}>키워드로 보는 동네 컬렉션</TitleBox>
          </Blocks>
        <Keywords/>
        <Footer/>
    </Background>
  )
}

export default AllList
const Background=styled(Container)`
background-image: url('../img/background/background_list.jpg');
background-attachment: local;
background-size: 100% 6544px;
`

const Blocks=styled(RowContainer)`
  margin-left:2%;
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

const RadioBtnWrapper=styled(RowContainer)`
   margin: 90px 0 17px 0;
`
const RadioBtn=styled.input`
      width: 20px;
      height:20px;
      border: 1px solid #BDBDBD;
      border-radius: 100%;
      &:checked+Label{
         color:black;
      }
      &:checked{
        background-color: #FFFA88;
        border: none;
      }
`
const Label=styled.label`
   font-size:20px;
   color:#BDBDBD;
   margin-left: 1%;
   margin-right: 5%;
`
const Collection=styled.div`
    display: grid;
    width: min-content;
    grid-template-columns: repeat(3, 360px);
    grid-template-rows: 540px 540px;
    gap:80px 30px;
    margin:30px auto;
`
const Title=styled.div`
font-weight: 700;
font-size: 30px;
margin-bottom: 20px;
color: #BDBDBD;

`