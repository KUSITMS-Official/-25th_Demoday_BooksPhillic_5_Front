import { BottomNavigation } from '@mui/material';
import React, { useState } from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container';
import { Link } from 'react-router-dom';
import {scrap} from '../../services/ApiService';

const Card = ({title, id,subtitle, img, scraped, district }) => {
  const [isScraped, setIsScraped] = useState(scraped);

  const onClickScrapButton = async ()=> {
    const res = await scrap(id);
    if(res.code === 0) {
      window.location.href = '/login';
      alert("로그인 후 이용 가능합니다.");
    }
    else if(res.code=== 1000) {
        if(res.data === true) {
            setIsScraped(true);
        }
        else setIsScraped(false);
    }
  }

  return (
    <Link to={`/profileContent/${id}`} >
    <CardContainer>

        <Img src={img}></Img>

      <ContentContainer>
          <Left>
              <Title>{title}</Title>
              <RowContainer>
                  <Bottom>{district}</Bottom>
                  <Bottom>ㅣ</Bottom>
                  <Bottom>{subtitle}</Bottom>
              </RowContainer>
          </Left>
        <Right>
            <ColContainer 
              onClick={(e)=> {
                e.preventDefault();
                onClickScrapButton();}}> 
            {
              isScraped===true ? 
                <img src='../img/gray-scrapped.svg' width='40px' height='40px'></img> : 
                <img src='../img/gray-unscrapped.svg' width='40px' height='40px'></img>
            }
            <ScrapTitle>스크랩</ScrapTitle>
            </ColContainer>
        </Right>
      </ContentContainer>
    </CardContainer>

    </Link>

  )
} 

export default Card
const CardContainer=styled(ColContainer)`
  height: 366px;
`
const Img=styled.img`
  width:100%;
  height: 64%;
  margin-bottom: 25px;
`
const ContentContainer=styled(RowContainer)`
    
`
const Left=styled(ColContainer)`
    width:85%;
`
const Right=styled(ColContainer)`
    width:15%;
    align-items: flex-end;
    justify-content: center;
    margin-right: 4px;

`
const Title=styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #222222;
`
const Bottom=styled.div`
  font-size: 16px;
  color: #616161;
`
const ScrapTitle=styled.div`
    font-size: 14px;
color: #BDBDBD;
`