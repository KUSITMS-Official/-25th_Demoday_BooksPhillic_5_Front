import React,{useState} from 'react'
import styled from 'styled-components'
import { ColContainer } from '../../components/Container'
const Card = ({post}) => {
    const arr=post.title.split(":");
    const [click, setClick]=useState(false);
  return (
    <CardContainer onClick={()=>setClick(!click)}>
        <Img src={post.storeImgUrl}></Img>
    {
        click
        ? 
    <Content>
        <Category>{post.postCategory}</Category>
        <Line>
           
        </Line>   
        <Title>{arr[0]}</Title>
        <Title> &lt;{arr[1]}&gt; </Title>
    </Content>
        :
        <UnClickContent>
            <Category>{post.postCategory}</Category>  
            <Line>
           
        </Line> 
        </UnClickContent>
    }
       
    </CardContainer>
  )
}

export default Card
const CardContainer=styled(ColContainer)`
    width: 100%;
    display: column;
    height:460px;
   
`
const Img=styled.img`
    height:400px;
    width:100%;
    z-index: 0;
    
`
const Content=styled(ColContainer)`
    padding: 40px;
    background-color: #FFFA88;
    display: flex;
    align-items: flex-start;
    height:245px;
    top:749px;
    position: absolute;
    width:34.3%;
    z-index: 1;
`
const Category=styled.div`
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 20px;
    color: #222222;
`
const Line=styled.div`
    border: 2px solid black;
    width: 7%;
    margin-bottom: 10px;
`
const Title=styled.div`
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;
`
const UnClickContent=styled(ColContainer)`
    padding: 15px;
    background-color: #FFFA88;
    display: flex;
    align-items: flex-start;
    height: 60px;
`