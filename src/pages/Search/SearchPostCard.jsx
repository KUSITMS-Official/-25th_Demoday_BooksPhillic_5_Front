import React from 'react'
import styled from "styled-components";
import { ColContainer, RowContainer } from '../../components/Container';
import { Link } from 'react-router-dom';
import {collectKeyword} from '../../components/collectKeyword';

const SearchPostCard = ({post}) => {
  const keyword = collectKeyword(post.district);

  return (
    <Link to={`/content/${post.postId}`} >
      <CardContainer>
        <Img src={post.profileImg}></Img>
        <Title>{post.title}</Title>
        <Content>
        {
          (post.content !== null) &&
          (post.content.length < 80 ? 
            post.content :
            post.content.slice(0, 80)+"...")
        }
        </Content>

        <hr style={{margin: '10px 0'}} />
        
        <BottomWrapper>
            <Bottom>{keyword && keyword}</Bottom>
            <Bottom>ㅣ</Bottom>
            <Bottom>{post.category}</Bottom>
        </BottomWrapper>
      </CardContainer>    
    </Link>

  )
}

export default SearchPostCard
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