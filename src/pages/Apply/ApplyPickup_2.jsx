import React, {useEffect, useState} from 'react'
import { ColContainer, RowContainer, ApplyContentContainer } from '../../components/Container'
import styled from "styled-components";
import Card from '../../components/apply/Card';
import Flex from '../../components/Flex';
import { Link } from 'react-router-dom';
import {Background} from '../../components/apply/Background';
import {useLocation} from 'react-router-dom';
import {getStoreByDistrict} from '../../services/ApiService';


const ApplyPickup_2 = () => {

    // 지역구 책방 목록
    const [storeList, setStoreList] = useState([]);

    // 선택한 책방
    const [checkedStore, setCheckedStore] = useState();

    // 픽업 날짜, 지역구
    const location = useLocation();
    const {date, district} = location.state;

    const handleClick = (store) => {
        console.log(store);
        setCheckedStore(store);
    }

    const getStoreList = async () => {
        try{
            // 특정 지역구의 책방 정보 가져오기
            const res = await getStoreByDistrict(district);
            if(res.code !== 1000) {
                alert('요청 실패');
                console.log(res);
            } else {
                // alert('요청 성공');
                setStoreList(res.data);
            }
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getStoreList();
    },[]);


  return (
      <Background>
        <ApplyContainer>
        <ColContainer>
            <TitleWrapper>
                <Num>03</Num>
                <Title>책방 선택</Title>
            </TitleWrapper>
            <ApplyContentContainer>
                <Subtitle>원하는 책방을 선택하세요</Subtitle>
                <SubText>
                    <div>{storeList.length}개의 추천 책방이 있습니다.</div>
                </SubText>
                <Stores>
                {
                    storeList.map(store => (
                        <div style={StoreStyle} key={store.storeId} onClick={() => handleClick(store)}>
                            <Card data={store}></Card>
                            <div style={{display:"flex", justifyContent:"center", marginTop:"10px"}}>
                                {
                                    checkedStore && (checkedStore.storeId === store.storeId) ?
                                        <Check src='../img/icons/yellowCheck.png' /> :
                                        <Check src='../img/icons/check.png' />

                                }
                            </div>
                        </div>
                    ))
                }
            </Stores>
            </ApplyContentContainer>

        </ColContainer>
        <Col2>

        {/*  픽업 날짜, 선택한 책방 넘김  */}
        <Link to="/apply3" state={{date:date, store:checkedStore}}>
            <img src='../img/arrow2.png' style={{position:'absolute', bottom: '0px', right:'0px'}}></img>
        </Link>

        </Col2>
        </ApplyContainer>
      </Background>

  )
}

export default ApplyPickup_2

const ApplyContainer=styled(RowContainer)`
    margin-top: 29px;
    padding: 82px 40px 82px 99px;
    display: grid;
    grid-template-columns: 3fr 2fr;
`
const SubText=styled(Flex)`
    margin-top: 30px;
    margin-bottom: 15px;
    justify-content: flex-end;
`
const Stores=styled(RowContainer)`
    height:500px;
    white-space: nowrap;
    overflow: auto;
    gap: 3%;
    align-items: flex-start;
`

const StoreStyle = {
    display: "flex",
    flexDirection: "column"
}

const Check=styled.img`
  max-width:40px;
  height: 40px;
`
const Icon=styled.img`
    width:40px;
    height:40px;
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

const Col2=styled.div`
    position: relative;
    height: 100%;
`
