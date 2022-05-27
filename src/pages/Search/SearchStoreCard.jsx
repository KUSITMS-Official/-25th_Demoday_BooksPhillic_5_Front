import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container';
import { Link } from 'react-router-dom';
import {collectKeyword} from '../../components/collectKeyword';

const SearchStoreCard = ({store}) => {
  const keyword = collectKeyword(store.district);


  return (
    <Link to={`/content/${store.storeId}`} >
      <CardContainer>
        <Img src={store.profileImg}></Img>
        <Title>{store.name}</Title>
        <Content>
        {
          (store.description !== null) &&
          (store.description.length < 80 ? 
          store.description :
          store.description.slice(0, 80)+"...")
        }
        </Content>

        <hr style={{margin: '10px 0'}} />

        <BottomWrapper>
          <Bottom>{keyword && keyword}</Bottom>
        </BottomWrapper>
      </CardContainer>    
    </Link>

  )
}

export default SearchStoreCard
const CardContainer=styled(ColContainer)`
  height: 500px;
  max-width: 348px;
`
const Img=styled.img`
  max-width: 348px;
  height: 240px;
  object-fit: cover;
  margin-bottom: 25px;
`
const Title=styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  color: #222222;
  max-width: 348px;
  height: 100px;
  display: -webkit-box;
  -webkit-line-clamp:2;
  overflow: hidden;
  text-overflow: ellipsis;
`
const Content=styled.div`
  margin-top:10px;
  height: 200px;
  font-weight: 400;
  font-size: 16px;
  line-height: 25px;
  max-width: 348px;
  color: #9E9E9E;
`
const BottomWrapper=styled(RowContainer) `
`
const Bottom=styled.div`
  font-size: 16px;
  color: #616161;
`