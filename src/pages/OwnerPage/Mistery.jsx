import React from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/Container'

const Mistery = () => {
  return (
    <>
    <Title>미스터리북 관리</Title>
    <Content>
        <Col1>
            <NumContainer>
                <RowContainer style={{justifyContent:"center"}}>
                    <Text>신규주문</Text>
                    <Num>2</Num>
                    <Text style={{color:"#BDBDBD"}}>건</Text>
                </RowContainer>
                <RowContainer style={{borderLeft:"1px solid #BDBDBD", borderRight:"1px solid #BDBDBD",justifyContent:"center"}}>
                    <Text>신규주문</Text>
                    <Num>2</Num>
                    <Text style={{color:"#BDBDBD"}}>건</Text> 
                </RowContainer>   
                <RowContainer style={{justifyContent:"center"}}>
                <Text>신규주문</Text>
                    <Num>2</Num>
                    <Text style={{color:"#BDBDBD"}}>건</Text> 
                </RowContainer>   
            </NumContainer>
            <Graph>

            </Graph>
        </Col1>
        <Col2></Col2>
    </Content>
    </>
  )
}

export default Mistery
const Title=styled.div`
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 50px;
`
const Content=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5%;
`
const Col1=styled(ColContainer)`
    grid-template-rows: 2fr 9fr;
    gap:44px;
`
const NumContainer=styled(RowContainer)`
    background-color: white;
    padding: 16px 5%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const Text=styled.div`
    font-weight: 400;
font-size: 16px;
`
const Num=styled.div`
    font-weight: 700;
font-size: 30px;
color: #FF784E;
margin-left: 10%;
`
const Col2=styled.div`
    background-color: white;
    height: 100%;
`
const Graph=styled.div`
background-color: white;
    height: 456px;
`