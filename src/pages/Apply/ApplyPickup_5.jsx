import React, {useEffect} from 'react';
import { useLocation, Link } from 'react-router-dom';
import styled from "styled-components";
import { ApplyContentContainer, RowContainer } from '../../components/Container';
import { LongUnderlineBox } from '../../components/apply/Boxs';
import { Chip } from '@mui/material';
import { RoundBtn } from '../../components/Buttons';
import Flex from '../../components/Flex';
import {Background} from '../../components/apply/Background';
import {applyPickUp} from '../../services/ApiService';


const ApplyPickup_5 = () => {
    const location = useLocation();
    const {date, store, tagList, requirement} = location.state;

    const getDateString = () => {
        const year = date.getFullYear();
        const month = date.getMonth() > 9 ? date.getMonth()+1 : "0" + (date.getMonth()+1);
        const date2 = date.getDate();
        return `${year}-${month}-${date2}`;
    }

    const apply = async (data) => {
        try{
            const res = await applyPickUp(data);
            if(res.code === 1000) { //성공
                console.log('성공');
            }
            else { //실패
                console.log('실패'); 
                alert("요청 실패");
                window.location.back();
            }
        } catch(err) {
            console.error(err);
            alert("요청 실패");
            window.history.back();
        }
    }

    // 픽업 신청 api 호출
    useEffect(()=> {
        const body = {
            date, 
            storeId: store.storeId, 
            tags: tagList.toString(),
            requirement
        };
        console.log(body);
        apply(body);
    }, []);

    return (
        <Background>
            <ApplyContainer>
                <Title>미스터리북 신청이 완료되었습니다.</Title>
              <Sub>
                  픽업 책방
              </Sub>
              <LongUnderlineBox style={{marginBottom:"34px"}}>{store.name}</LongUnderlineBox>
              <Sub>
                  픽업 일자
              </Sub>
              <LongUnderlineBox  style={{marginBottom:"34px"}}>
                  {getDateString()}
              </LongUnderlineBox>
              <Sub>
                  도서 유형
              </Sub>
              <LongUnderlineBox  style={{marginBottom:"34px"}}>
                <Chips>
                    {
                        tagList.map(tag => (
                            <Chip label={tag} size="medium" style={{backgroundColor:'#FFFA88'}}></Chip>
                        ))
                    }
                </Chips>
               
              </LongUnderlineBox>
              <Sub>
                  추가 요청 사항
              </Sub>
              <LongUnderlineBox style={{marginBottom:"34px"}}>{requirement}</LongUnderlineBox>
              <BtnContainer>
                  <Link to="/userPage">
                    <Link to='/userPage'>
                    <RoundBtn onClick={()=>alert('미스터리북 신청이 완료되었습니다!')}>확인</RoundBtn>
                    </Link>
                  </Link>
              </BtnContainer>
              </ApplyContainer>
        </Background>
     
    )
}
  
export default ApplyPickup_5

const ApplyContainer=styled(ApplyContentContainer)`
    margin: 112px 0px 0px 82px;
`
const Sub=styled.div`
    font-weight: 500;
    font-size: 20px;
`

const Title=styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 52px;
    margin-bottom: 68px;
`
const Chips=styled(RowContainer)`
    gap: 17px 12px;
    display: grid;
    grid-template-columns: repeat(6, minmax(10%, auto));
    width: 100%;
`
const BtnContainer=styled(Flex)`
    justify-content: end;
    margin-bottom: 100px;
`
