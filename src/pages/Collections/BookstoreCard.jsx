import { BottomNavigation } from '@mui/material';
import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container';
import { Link } from 'react-router-dom';
import {collectKeyword} from '../../components/collectKeyword';

const BookstoreCard = ({dum}) => {
  const title=dum.title.split(":");
  const keyword = collectKeyword(dum.district);

  return (
    <Link to={`/content/${dum.postId}`} >
      <CardContainer>
        <Img src={dum.storeImgUrl}></Img>
        <Title className={title[0].length<14 ? "" : "long"}>{title[0]}<br/>
        :{title[1]}</Title>
        <Content>{ dum.content.length <80
        ?dum.content
        :dum.content.slice(0, 80)+"..."
      }</Content>
        <hr style={{margin: '10px 0'}} />
        <BottomWrapper>
        <Bottom>{keyword && keyword}</Bottom>
        <Bottom>ㅣ</Bottom>
        <Bottom>{dum.category}</Bottom>
        </BottomWrapper>
      </CardContainer>    
    </Link>

  )
}

export default BookstoreCard
const CardContainer=styled(ColContainer)`
  height: 540px;
  max-width: 358px;
`
const Img=styled.img`
  max-width: 358px;
  height: 240px;
  object-fit: cover;
  margin-bottom: 25px;
`
const Title=styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #222222;
  max-width: 358px;
  height: 120px;
  display: -webkit-box;
  -webkit-line-clamp:2;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Content=styled.div`
  margin-top:10px;
  height: 100px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  max-width: 358px;
  color: #9E9E9E;
`
const BottomWrapper=styled(RowContainer) `
`
const Bottom=styled.div`
  font-size: 14px;
  color: #616161;
`