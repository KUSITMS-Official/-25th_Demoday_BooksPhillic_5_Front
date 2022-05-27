import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination';
import { ColContainer, MyPageContentContainer,RowContainer} from '../../components/Container';
import WriteReview from './WriteReview';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getMyPickupList } from '../../services/ApiService';
import { BorderGrayBtn } from '../../components/Buttons';

const MisteryReview = ({setTab}) => {
  
  const [limit, setLimit]=useState(2);
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
      else {
          alert('데이터베이스 오류입니다.');
      }
  }

  useEffect( ()=> {
      getData();
  },[]);

  return (
  
    <MisteryReviewContainer>
    {dummy.slice(offset, offset+limit).map((d)=>(
        <Box>
        <Accordion square={true} style={{boxShadow:"none", width:"100%"}} disableGutters={true}>
        <AccordionSummary
          style={{height:"113px", borderBottom: "1px solid #BDBDBD", width:"100%"}}
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          disabled={ d.review===false ? "false" : ""}
        >
        <RowContainer style={{display:'flex',justifyContent:"space-between", width:"100%"}}>
          <ColContainer>
                  <Date>{(d.createdAt).substring(0,10)}</Date>
                  <Title>{d.bookstore}</Title>
          </ColContainer>
          {
            d.review===false
            ?
            <State style={{marginRight:"1%"}}>
              리뷰 작성 완료
            </State>
            :
            <State style={{marginRight:"1%"}}>
              도서 픽업 완료
            </State>
          }
        </RowContainer>
        </AccordionSummary>
        <AccordionDetails style={{padding: "20px 0"}}>
          <WriteReview pickupId={d.pickupId} setTab={setTab}></WriteReview>
        </AccordionDetails>
      </Accordion>
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
      
    </MisteryReviewContainer>
  )
}

export default MisteryReview
const MisteryReviewContainer=styled(ColContainer)`
  width:100%;
  padding: 20px 10%;
`
const Box=styled.div`
    min-height: 130px;
    display: flex;
    justify-content: space-between;
    //border-bottom: 1px solid #BDBDBD;
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
const State=styled.div`
  font-weight: 400;
font-size: 16px;
color: #616161;

`