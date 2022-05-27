
import React,{useEffect, useState} from 'react'
import styled from "styled-components";
import { ColContainer, MyPageContentContainer, RowContainer } from '../../components/Container';
import Pagination from '../../components/Pagination';
import { getScrap } from '../../services/ApiService';

const Scrap = () => {
    const [limit, setLimit]=useState(3);
    const [page, setPage]=useState(1);
    const offset=(page-1)*limit;
    const [dummy, setDummy] = useState([{

    }])

    const getData = async() => {
        try {
            const res = await getScrap();
            if(res.code === 0) {
                window.location.href = '/login';
                alert("로그인 후 이용 가능합니다.");
            }
            else if(res.code === 1000) {
                console.log(res.data);
                setDummy(res.data);
                console.log("스크랩 내역", dummy);
            }
            else alert("데이터베이스 오류입니다.");
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(()=>{getData()},[]);


  return (
    <MyPageContentContainer>
        {dummy.slice(offset, offset+limit).map((dum)=>(
            <Box>
                <Img src={dum.profileImgUrl}></Img>
                <Col>
                    <Title>{dum.bookstore}</Title>
                    <Sub>{dum.subtitle}</Sub>
                    <Tag>{dum.tags}</Tag>
                </Col>
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

export default Scrap
const Box=styled(RowContainer)`
    gap:5%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #BDBDBD;
`
const Img=styled.img`
    width:40%;
    height:100px;
`
const Col=styled(ColContainer)`
    width:40%;
`
const Title=styled.div`
    font-weight: 500;
    font-size: 20px;
    color: #222222;
`
const Sub=styled.div`
    font-weight: 400;
    font-size: 14px;
    color: #BDBDBD;
`
const Tag=styled.div`
    font-weight: 400;
    font-size: 16px;
    color: #616161;

`
const PaginationWrapper=styled.div`
    margin-top: -70px;
    
`