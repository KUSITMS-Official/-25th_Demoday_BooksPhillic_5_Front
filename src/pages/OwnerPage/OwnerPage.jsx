import React , {useState} from 'react'
import styled from 'styled-components'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { RowContainer, ColContainer } from '../../components/Container'
import Mistery from './Mistery'
import BookstoreContent from './Bookstore'
const OwnerPage = () => {
    const [tab, setTab]=useState(1);
    const handleContent=()=>{
        switch (tab) {
            case 1:
               return <Mistery/>
            case 2: 
                return <BookstoreContent/>
            default:
                console.log("err");
        }
    }
  return (
    <>
    <Header/>
    <OwnerPageContainer>
        <Nav>
            <Profile>
                <Img src='../img/bookstore1.png'></Img>
                <Bookstore>무엇보다 책방</Bookstore>
            </Profile>
            <Tab onClick={(e)=>setTab(1)} className={tab===1? "focused":""}>미스터리북 관리</Tab>
            <Tab onClick={(e)=>setTab(2)} className={tab===2? "focused":""}>내 책방 관리</Tab>
            <Tab onClick={(e)=>setTab(3)} className={tab===3? "focused":""}>공지사항</Tab>
        </Nav>
        <Content>
        {handleContent()}
        </Content>
    </OwnerPageContainer>
    <Footer/>
    </>
  )
}

export default OwnerPage

const OwnerPageContainer=styled(RowContainer)`
    display:grid;
    grid-template-columns: 1fr 6fr;
`
const Nav=styled(ColContainer)`
    padding: 47px 0 0 0;
   height: 100%;
`
const Profile=styled(ColContainer)`
    display: flex;
   align-items: center;
   gap:10px;
   margin: 0 10% 80px 10%;
`
const Img=styled.img`
    height: 103px;
    width:60%;
    border-radius: 100%;
`
const Bookstore=styled.div`
    font-weight: 500;
font-size: 20px;
`
const Content=styled.div`
     
     background-color: #F5F5F5;
     padding: 47px 5% 150px 5%;
`
const Tab=styled.button`
   font-weight: 400;
    font-size: 16px;
    text-align: center;
    height: 60px;
   &.focused{
  background-color: #E0E0E0;
   }
`