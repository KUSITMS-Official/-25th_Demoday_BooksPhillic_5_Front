import React, {useState} from 'react'
import styled from 'styled-components'
import { CenterContainer, ColContainer, RowContainer } from '../../components/Container'
import Header from '../../components/Header'
import Input from './Input'
import { Chip } from '@mui/material'
import Footer from '../../components/Footer'

const dummy=["송파","아담한","조용한","편안한","독립출판","전시","좌석","독서모임","반려동물"]
const Weekly=[
  {title:"동네책방 주책", url: "https://booksphillic.s3.ap-northeast-2.amazonaws.com/BOOKSTORE_PROFILE/cbcae7c8-7450-4a4e-a5f9-a1d7b36d57f6.jpg"},
  {title:"무엇보다 책방", url: "https://booksphillic.s3.ap-northeast-2.amazonaws.com/BOOKSTORE_PROFILE/55b35a3f-7217-4801-a65d-b64a512cce72.jpg"}
]
const Monthly=[
  {title:"음악이 건네는 이야기", store: "라이너노트", url: "https://booksphillic.s3.ap-northeast-2.amazonaws.com/BOOKSTORE_PROFILE/426b396c-5403-42ec-a7c0-5571b135d1f8.jpg"},
  {title:"빼곡하지 않아 자세한", store: "서촌 그 책방", url: "https://booksphillic.s3.ap-northeast-2.amazonaws.com/BOOKSTORE_PROFILE/154f32fb-6291-4fed-b934-64eb9f1ae5d2.jpg"}
]
const Search = () => {

  const[searchWord, setSearchWord] = useState('');

  // 태그 클릭 핸들러
  const handleClick=(index)=>{
    setSearchWord(dummy[index]);
  }

  return (
    <Background>
        <Header/>
        <SearchBackground>
          <SearchContainer>
            <Input value={searchWord} setSearchWord={setSearchWord} />
            <div style={{
              fontFamily: 'Noto Sans KR',
              fontWeight: '500',
              fontSize: '18px',
              margin: '50px 0 20px 0'
            }}>
              이런 키워드는 어떠신가요?
            </div>
            <Chips>
            {dummy.map((dum, index) => (
                <Chip 
                  label={'#'+dum} size="medium" variant="outlined"
                  style={ChipStyle}
                  key={index}
                  onClick={()=>{
                      handleClick(index)
                  }
                }
                ></Chip>
              ))}
            </Chips>
          </SearchContainer>
        </SearchBackground>

        <BestContainer>
          <div>
            <BestText>이번 주 인기 동네 책방</BestText>
            <Best>
                {Weekly.map((e)=>(
                  <ColContainer className='pointer'>
                    <img src={e.url} style={ImgStyle}></img>
                    <Title>{e.title}</Title>              
                  </ColContainer>

                ))}
            </Best>
          </div>
          <div>
            <BestText>이달의 베스트 콘텐츠</BestText>
            <Best>
              {Monthly.map((e)=>(
                <ColContainer>
                  <img src={e.url} style={ImgStyle}></img>
                  <Title>{e.title}<br/>:{e.store}</Title>              
                </ColContainer>
              ))}
            </Best>
          </div>
        </BestContainer>
        <Footer/>
    </Background>
  )
}

export default Search

const Background=styled.div`
  // background-attachment: local;
  //background-size: cover;//반응형 성공!
`

const SearchBackground=styled.div`
  background: #F5F5F5;
  padding-top: 150px;
`

const SearchContainer=styled(CenterContainer)`
    margin: 0 15%;
`
const Title1=styled.div`
  width:50%;
`
const Title2=styled.div`
  width:50%;
`
const Chips=styled(RowContainer)`
  gap: 17px 12px;
  margin-bottom: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
const ChipStyle={
  height: '50px',
  borderRadius: '50px',
  fontFamily: 'Noto Sans KR',
  fontWeight: 500,
  fontSize: '16px',
  color: '#616161'
}

const BestContainer=styled.div`
  display: flex;
  justify-content: space-between;
  width: 1134px;
  margin: 107px auto 150px auto;
`
const BestText=styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 52px;
  margin-bottom: 16px;
`

const Best=styled(RowContainer)`
  display: flex;
  justify-content: space-between;
  width: 560px;
`
const ImgStyle = {
  height: "204px", width:"273px", objectFit: 'cover', objectPosition: "10% 10%"
}
const Title=styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-top: 16px;
`