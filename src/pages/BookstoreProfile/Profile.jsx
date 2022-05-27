import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import { CenterContainer, ColContainer, Container,RowContainer } from '../../components/Container';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Category, SignalWifiConnectedNoInternet4TwoTone } from '@mui/icons-material';
import DropDown from '../../components/DropDown';
import Card from './Card';
import Pagination from '../../components/Pagination';
import Select from '../../components/Select'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {getBookstoreList, getBookstoreListByDistrict } from '../../services/ApiService';
import { HeaderTitle } from './HeaderTitle';

const Profile = () => {
  const [limit, setLimit]=useState(9);
  const [page, setPage]=useState(1);
  const [dummy, setDummy]=useState([]);
  const offset=(page-1)*limit;
  const [category, setCategory]=useState(1);

  const getAllData = async() => {
    try {
      const res = await getBookstoreList();
      console.log("res.code",res.code);
      // if(res.code === 0) {
      //   window.location.href = '/login';
      //   alert("로그인 후 이용 가능합니다.");
      // }
      if(res.code === 1000) {
        console.log("/list 데이터", res.data)
        setDummy(res.data)      
      }
      else if(res.code ===2203 || res.code===2206){
        alert("오류!");
        window.location.href("/login");
      }
      else alert("데이터베이스 오류입니다.");
      
    } catch(err) {
      console.log(err);
    }
  }
  useEffect(()=>{
    getAllData();
  }, [useParams()]);

  const handleChange=async(e)=>{
    console.log(e.target.value);
    const res = await getBookstoreListByDistrict(e.target.value);
    // if(res.code === 0) {
    //   window.location.href = '/login';
    //   alert("로그인 후 이용 가능합니다.");
    // }
    console.log("res.code", res.code)
    if(res.code === 1000) {
      console.log("Profile-책방 리스트",res.data)
      setDummy(res.data)
    }
    else alert("데이터베이스 오류입니다.");
  }

  return (
    <Background>
      <Header/>
      <HeaderTitle/>
      <CenterContainer>
        <Weekly>
          <WeeklyTitle>
            <Title onClick={(e)=>{setCategory(1);}} className={category===1? "focused":""}>
              <Sub>차, 책, 전시가 만나다</Sub>
              <div>송파, 하우스북스</div>
            </Title>
            <Title onClick={(e)=>{setCategory(2);}} className={category===2? "focused":""}>
              <Sub>책과 술, 문화모임이 있는 쉼의 공간</Sub>
              <div>송파, 동네책방 주책</div>
            </Title>
            <Title onClick={(e)=>{setCategory(3); console.log(category);}} className={category===3? "focused":""}>
              <Sub>석촌호수 그 옆 작은 책의 공간</Sub>
              <div>송파, 무엇보다 책방</div>
            </Title>
          </WeeklyTitle>
          {
            category===1
            ?<WeeklyImg src='../img/profile/sample.png'></WeeklyImg>
            :(
              category===2
              ? <WeeklyImg src='../img/profile/sample2.png'></WeeklyImg>
              : <WeeklyImg src='../img/profile/sample3.png'></WeeklyImg>
            )
          }
           
        </Weekly>
        <Content>
        <Box>전체 프로필</Box>
        <DropDown handelChange={handleChange}/>
        
        <Collection>
          {dummy.slice(offset, offset+limit).map((dum)=>(
            <Card title={dum.name} id={dum.storeId} subtitle={dum.subtitle} img={dum.profileImgUrl} scraped = {dum.scraped} district={dum.district}/>
          ))}
        </Collection>
        <Pagination
              total={dummy.length}
              limit={limit}
              page={page}
              setPage={setPage}
           />
        </Content>
      </CenterContainer>
      <Footer/>
    </Background>
  )
}

export default Profile
const Background=styled(Container)`
background-image: url('../img/background/background_profile.jpg');
background-attachment: local;
background-size: 100% 3803px;
`

const Weekly=styled(RowContainer)`
  margin-top: 169px;
  margin-bottom: 35px;
`
const WeeklyTitle=styled(ColContainer)`
  width:50%;
  gap:60px;
  height:660px;
  padding: 40px 0 0 5%;
`
const WeeklyImg=styled.img`
  width:50%;
  height: 660px;
`
const Box=styled.div`
font-weight: 700;
font-size: 30px;
margin-left: -2%;
margin-bottom: 80px;
`
const Title=styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #BDBDBD;
&.focused{
  color:black;
  background-color: #FFFA88;
  width: 70%;
  margin-left: -15%;
  padding: 10px 0 10px 3%;
}
  
`
const Content=styled(Container)`
  margin: 147px 7% 151px 7%;
`
const Sub=styled.div`
  font-weight: 500;
font-size: 20px;
color: #616161;
`
const Collection=styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap:107px 5%;
  margin-top:42px;
`