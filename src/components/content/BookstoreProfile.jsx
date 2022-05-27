import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { RoundBtn } from '../Buttons'
import { ColContainer, Container, RowContainer } from '../Container'
import Location from '../Location'
const BookstoreProfile = ({store}) => {
    const [post, setPost]=useState({});
    const [profile, setProfile]=useState({});
    //console.log(store);
   
  return (
    <ProfileContainer>
        <Col1>
            <InfoContainer>
                <RowContainer  style={{gap:"5%", marginBottom:"25px"}}>
                    <Icon src='../img/icons/location.png'></Icon>
                    <InfoText>{store.address}</InfoText>
                </RowContainer>
                <RowContainer  style={{gap:"5%", marginBottom:"25px"}}>
                    <Icon src='../img/icons/call.png'></Icon>
                    <InfoText>{store.contact}</InfoText>
                </RowContainer>
                <RowContainer  style={{gap:"5%", marginBottom:"25px"}}>
                    <Icon src='../img/icons/link.png'></Icon>
                    <InfoText>{store.website}</InfoText>
                </RowContainer>
                <RowContainer  style={{gap:"5%", marginBottom:"25px", alignItems:"start"}}>
                    <Icon src='../img/icons/time.png'></Icon>
                    <ColContainer>
                    <InfoText><div>월</div>{store.operatingHours.mon}</InfoText>  
                    <InfoText><div>화</div>{store.operatingHours.tue}</InfoText>
                    <InfoText><div>수</div> {store.operatingHours.wed}</InfoText>
                    <InfoText><div>목</div> {store.operatingHours.thu}</InfoText>
                    <InfoText><div>금</div>{store.operatingHours.fri}</InfoText>
                    <InfoText><div>토</div>{store.operatingHours.sat}</InfoText>
                    <InfoText><div>일</div> {store.operatingHours.sun}</InfoText> 
                    </ColContainer>
                </RowContainer>
            </InfoContainer>
        </Col1>
        <Col2>
        <Box>
            <Map>
            <Location id={store.storeId}/>
            
            </Map>
            </Box>
        </Col2>
    </ProfileContainer>
  )
}

export default BookstoreProfile
const ProfileContainer=styled(RowContainer)`
    margin: 70px 10% 100px 10%;
    min-height: 375px;
`
const Col1=styled(ColContainer)`
    width: 50%;
    height: 100%;
`
const Icon=styled.img`
    height: 25px;
    display: flex;
`
const InfoText=styled(RowContainer)`
    font-weight: 400;
font-size: 16px;
color: #616161;
gap:20px;
`
const InfoContainer=styled(ColContainer)`   
    height: 100%;
   align-content: flex-start;
`
const Col2=styled.div`
width: 50%;
`
const Btn=styled(RoundBtn)`
font-weight: 700;
font-size: 20px;
margin-right: 7%;
`
const Box=styled.div`
    width:100%;
    height:430px;
    border: 1px solid #616161;
position: relative;
z-index: 0;
`
const Map=styled.div`
    z-index: 1;
    width:100%;
    height:430px;
    position: absolute;
    top: 20px;
    right: 5%;
`

