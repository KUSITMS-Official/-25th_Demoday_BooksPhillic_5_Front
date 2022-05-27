import React,{useState} from 'react'
import {useLocation} from 'react-router-dom';
import { ColContainer, RowContainer, ApplyContentContainer } from '../../components/Container'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {Box, LongBox} from '../../components/apply/Boxs';
import {Background} from '../../components/apply/Background';

const ApplyPickup_4 = () => {
    const [click, setClick]=useState([false, false, false, false, false]);
    const handleClick=(i)=>{
        setClick([...click.slice(0,i), !click[i], ...click.slice(i+1) ])
    }

    const location = useLocation();
    const {date, store, tagList, requirement} = location.state;

    return (
      <Background>
        <ApplyContainer>
        <Col1>
            <TitleWrapper>
                <Num>06</Num>
                <Title>결제정보</Title>
            </TitleWrapper>
            <ApplyContentContainer>
            <Subtitle>서비스 이용료로 2000원이 발생합니다.</Subtitle>
            <Sub>
                결제 금액
            </Sub>
            <CostBox>
                <div style={{color: '#BDBDBD', fontSize:'16px'}}>총 결제 금액</div>
                <div style={{color: '#000000', fontSize:'30px', fontWeight:'700'}}>2000원</div>
            </CostBox>
            
            <Sub>
                결제 수단
            </Sub>
            <Grid>
                <Box onClick={()=>handleClick(0)} className={click[0] ? "click" :""}>
                    <RowContainer>
                        {
                            click[0]
                            ? <img src='../img/apply/kakaopay.png' style={{marginRight: "10px"}}/>
                            : <img src='../img/apply/kakaopaygray.png' style={{marginRight: "10px"}}/>
                        }
                   
                    <Text style={click[0] ? {color:"black"} :{}} >
                        카카오페이
                    </Text>
                    </RowContainer>
                </Box>
                <Box onClick={()=>handleClick(1)} className={click[1] ? "click" :""}>
                    <RowContainer>
                        
                            
                            <img src='../img/apply/naverpay.png' style={{marginRight: "10px"}}/>
            
                    
                    <Text style={click[1] ? {color:"black"} :{}}>네이버페이</Text>
                    </RowContainer>
                </Box>
                <Box onClick={()=>handleClick(2)} className={click[2] ? "click" :""}>
                    <RowContainer>
                    <img src='../img/apply/payco.png'style={{marginRight: "10px"}}/>
                    <Text className={click[2] ? "click" :""}>페이코</Text>
                    </RowContainer>
                </Box>
               
                <Box onClick={()=>handleClick(3)} className={click[3] ? "click" :""}>
                    <RowContainer>
                    <img src='../img/apply/phone.png'/>
                    <Text className={click[3] ? "click" :""}>핸드폰결제</Text>
                    </RowContainer>
                </Box>
               
            </Grid>
            <LongBox style={{marginTop:"5px"}}  onClick={()=>handleClick(4)} className={click[4] ? "click" :""}>
                <RowContainer>
                <img src='../img/apply/cardpay.png'style={{marginRight: "10px"}}/>
                <Text className={click[4] ? "click" :""}>신용카드</Text>
                </RowContainer>
            </LongBox>
            <br/>
            <hr></hr>
            <Sub>안내 사항</Sub>
            <Notice>※구매 도서에 대한 잔여 금액은 책방에서 직접 결제하셔야 합니다.<br/>
                ※신청이 확인된 후에는 취소 및 환불이 불가합니다.</Notice>
            </ApplyContentContainer>
            
        </Col1>
        <Col2>
        <Link to="/apply5" state={{
            date: date, store: store, tagList: tagList, requirement: requirement
        }}>
        <img src='../img/arrow2.png' style={{position:'absolute', bottom: '0px', right:'0px'}}></img>
        </Link>
            
        </Col2>
       </ApplyContainer>
      </Background>
   
  )
}

export default ApplyPickup_4

const ApplyContainer=styled(RowContainer)`
    margin-top: 29px;
    padding: 82px 40px 82px 99px;
    display: grid;
    grid-template-columns: 3fr 2fr;
`
const Col1=styled(ColContainer)`

`
const Text=styled.div`
font-weight:500;
 font-size:20px;
 color:#9E9E9E;
 
`
const CostBox=styled(LongBox)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 1% 0px 1%;
`
const Sub=styled.div`
    font-weight: 500;
    font-size: 20px;
    margin: 30px 0px 10px 0px;
`
const TitleWrapper=styled(RowContainer)`
    gap: 0px 20px;
    margin-top: 77px;
`
const Title=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 52px;
`
const Num=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
`
const Subtitle=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 35px;
    color: #616161;
   
`
const Grid=styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(45%, auto));
    gap: 5px 5px;
    
`
const Col2=styled.div`
    position: relative;
    height: 100%;
`
const Notice=styled.div`
    font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #9E9E9E;
`
