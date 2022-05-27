import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/Container'
const Img = ({title, content, imgs, img }) => {
  return (
    <Container>
        <ColContainer style={{width:"53%"}}>
            <Text>
            <Title>{title}</Title>
            <Content>{content}</Content> 
            </Text>
            <Imgs>
                <img  src={imgs[0]} style={{height:"260px", width:"100%"}}></img>
                <img  src={imgs[1]} style={{height:"260px", width:"100%"}}></img>
                <img  src={imgs[2]} style={{height:"260px", width:"100%"}}></img>
            </Imgs>
        </ColContainer>
       <BigImg src={img}>
       </BigImg>
    </Container>
  )
}

export default Img
const Container=styled(RowContainer)`
    height:857px;
`
const Text=styled(ColContainer)`
    height: 280px;
    margin:63px 31% 136px 8%;
`
const Title=styled.div`
font-weight: 700;
font-size: 55px;

`
const Content=styled.div`
    font-weight: 500;
font-size: 20px;
color: #616161;
margin-top: 50px;
`
const Imgs=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
   gap:3%;
`
const BigImg=styled.img`
margin-top:110px;
    height: 750px;
    width:47%;
`