import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { BorderGrayBtn } from '../../components/Buttons';
import BookstoreCard from '../Collections/BookstoreCard';
import { CenterContainer, ColContainer, MyPageContentContainer } from '../../components/Container';
import Pagination from '../../components/Pagination';
import { getMyPickupList } from '../../services/ApiService';
import { Link } from 'react-router-dom';
        
const Apply = () => {
    const [limit, setLimit]=useState(3);
    const [page, setPage]=useState(1);
    const offset=(page-1)*limit;
    const [dummy, setDummy] = useState([]);

    const getData = async() => {
        const res = await getMyPickupList();
        console.log("픽업 내역 조회 code", res.code);   
        if(res.code === 1000) {
            console.log(res.data);
            setDummy(res.data);
        }
        else if(res.code === 2203 || res.code === 2206) {
            alert("로그인 후 이용가능합니다.");
            window.location.href='/login';
        }
        else {
            alert('데이터베이스 오류입니다.');
        }
    }

    useEffect( ()=> {
        getData();
    },[]);
    
  return (
    <MyPageContentContainer>
        {dummy.slice(offset, offset+limit).map((d)=>(
            <Box>
            <ColContainer>
                <Date>{(d.createdAt).substring(0,10)}</Date>
                <Title>{d.bookstore}</Title>
            </ColContainer>
            <Link to='/review'>
                <BorderGrayBtn>리뷰 쓰기</BorderGrayBtn>
            </Link>
        </Box>
        ))}
        <PaginationWrapper>
        <Pagination
        total={dummy.length}
          limit={limit}
          page={page}
          setPage={setPage}
       />
        </PaginationWrapper>
        
    </MyPageContentContainer>
  )
}

export default Apply
const Box=styled.div`
    height: 100px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #BDBDBD;
    align-items:center;
`
const Date=styled.div`
    font-weight: 400;
font-size: 14px;
color: #BDBDBD;
`
const Title=styled.div`
    font-weight: 500;
font-size: 20px;
color: #222222;
`
const PaginationWrapper=styled.div`
    margin-top: -50px;
`