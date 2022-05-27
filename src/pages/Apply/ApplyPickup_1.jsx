import React from 'react'
import { ColContainer, RowContainer, ApplyContentContainer } from '../../components/Container'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import {Background} from '../../components/apply/Background';
import { useState } from 'react';
import DropDown from './DropDown';
import DatePicker from "react-datepicker";

const ApplyPickup_1 = () => {
    const [date, setDate] = useState();
    const [district, setDistrict] = useState();

    const handleChange=(e)=>{
        setDistrict(e.target.value);
        console.log(date, district);
    }
    return (
      <Background>
        <ApplyContainer>
        <ColContainer>
            <TitleWrapper>
                <Num>01</Num>
                <Title>픽업 일자</Title>
            </TitleWrapper>
            <ApplyContentContainer>
                <Subtitle>원하는 픽업일자를 입력하세요</Subtitle>
                <DateWrapper>
                    <DatePicker
                        minDate={new Date()}
                        selected={date}
                        onChange={(date) => setDate(date)}
                        dateFormat="yyyy.MM.dd"
                        placeholderText='yyyy.mm.dd'
                    />
                </DateWrapper>
            </ApplyContentContainer>
            <TitleWrapper>
                <Num>02</Num>
                <Title>픽업장소</Title>
            </TitleWrapper>
            <ApplyContentContainer>
                <Subtitle>픽업할 장소 혹은 책방의 이름을 입력하세요</Subtitle>
                <DropDown handleChange={handleChange}></DropDown>
            </ApplyContentContainer>

        </ColContainer>
        <Col2>
        <Link to="/apply2" state={{date, district}}>
            <img src='../img/arrow2.png' style={{position:'absolute', bottom: '0px', right:'0px'}}></img>
        </Link>

        </Col2>
        </ApplyContainer>
      </Background>

  )
}

export default ApplyPickup_1

const ApplyContainer=styled(RowContainer)`
    margin-top: 29px;
    padding: 82px 40px 82px 99px;
    display: grid;
    grid-template-columns: 3fr 2fr;
`
const Input=styled.input`
 border: 1px solid #616161;
    height: 60px;
    width:70%;
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

const DateWrapper=styled.div`
  border: 1px solid #616161;
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  width: ${( props ) => props.width || "70%"};
  justify-content: space-between;
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
    margin-bottom: 20px;
`

const Col2=styled.div`
    position: relative;
    height: 100%;
`
