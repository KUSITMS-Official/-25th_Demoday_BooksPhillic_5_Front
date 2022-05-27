import React , {useState, useEffect} from 'react'
import styled from 'styled-components'
import Pagination from '../../components/Pagination';
import { ColContainer, MyPageContentContainer,RowContainer } from '../../components/Container';
import WriteReview from './WriteReview';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { BorderGrayBtn } from '../../components/Buttons';
import { getMyReviews } from '../../services/ApiService';

const MyReview = ({tab}) => {
  const [limit, setLimit]=useState(2);
  const [page, setPage]=useState(1);
  const offset=(page-1)*limit;
  const [dummy, setDummy] = useState([]);

  const emoji=[
    {src:"../img/emoji/happy.png",
    name:"추천해요"},
    {src:"../img/emoji/smile.png",
    name:"좋아요"},
    {src:"../img/emoji/heart.png",
    name:"맘에 들어요"},
    {src:"../img/emoji/wink.png",
    name:"짱이에요"},
    ]

  const getData = async() => {
      const res = await getMyReviews();
      console.log("내 리뷰들 조회 code", res.code);   
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
  },[tab]);

  return (
    <MyPageContentContainer>
    {dummy.slice(offset, offset+limit).map((d)=>(
        <Box>
        <Accordion square={true} style={{boxShadow:"none", width:"100%"}} disableGutters={true} >
        <AccordionSummary
          style={{height:"113px", borderBottom: "1px solid #BDBDBD", width:"100%"}}
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <RowContainer style={{display:'flex',justifyContent:"space-between", width:"100%"}}>
          <ColContainer>
                  <Date>{d.createdAt.substring(0,10)}</Date>
                  <Title>{d.bookstore}</Title>
          </ColContainer>
          <Category>책방 리뷰</Category>
        </RowContainer>
        </AccordionSummary>
        <AccordionDetails style={{padding: "20px 0"}}>
          <Imgs>
            {d.urls.slice(0,3).map(url => <Img src={url}></Img>)}
          </Imgs>
          <TextBox>
            <div><Emoji src={emoji[emoji.findIndex(v => v.name === d.emoticon)].src}></Emoji></div>
            <div>{d.content}</div>
          </TextBox>
            <hr/>
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
    </MyPageContentContainer>
  )
}

export default MyReview
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
const Category=styled.div`
`
const Title=styled.div`
    font-weight: 500;
font-size: 20px;
color: #222222;
`
const PaginationWrapper=styled.div`
    margin-top: -50px;
`
const Imgs=styled(RowContainer)`
display:flex;
  justify-content: center;
  margin: 24px 0;
`
const Img=styled.img`
  width: 30%;
  height:115px;
`
const TextBox=styled(RowContainer)`
  height:200px;
  width: 100%;
  padding : 20px;
  background: #F5F5F5;;
  margin-bottom: 24px;
`

const Emoji=styled.img`
    height: 20px;
    width: 20px;
    margin-bottom: 20px;
    margin-right: 10px;
`