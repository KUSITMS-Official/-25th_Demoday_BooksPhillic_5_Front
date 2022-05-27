import { TextareaAutosize } from '@mui/material'
import React , {useEffect}from 'react'
import styled from 'styled-components'
import { BorderGrayBtn } from '../../components/Buttons'
import { ColContainer, RowContainer } from '../../components/Container'
import axios from 'axios';
const Bookstore = () => {
    useEffect(() => {
      axios.get('/api/owner/profile', {params: {userId:1}})//userId는 로그인부터 해야 받아올 수 있을 듯..
        .then((res)=>{
            console.log(res.data);
        })
      
    }, [])
    
  return (
    <>
    <Title>내 책방 관리</Title>
    <Content>
        <BasicContainer>
            <SubTitle>
                기본정보
            </SubTitle>
            <BasicRow>
                
                
                <Img src='../img/bookstore1.png'></Img>
                <RowBtn className='rowBtn'>
                   <BorderGrayBtn>수정</BorderGrayBtn>
                   <BorderGrayBtn>삭제</BorderGrayBtn>
                </RowBtn>
                <Titles>
                    <div style={{marginBottom: "59px", marginTop:"20px"}}>책방 이름</div>
                    <div style={{marginBottom: "59px"}}>부제목</div>
                    <div>소개글</div>
                </Titles>
                <Inputs>
                        <Input value="값"></Input>  
                        <Input value="값"></Input>  
                        <Textarea value="값"></Textarea>
                </Inputs>
            </BasicRow>
            </BasicContainer>
           <BasicContainer>
                <SubTitle>
                    추가정보
                </SubTitle>
                <TagContainer>
                <div style={{width:"10%"}}>해시태그</div>
                <ChipInput
                         aria-label="empty textarea"
                         minRows={2}
                         
                        >    
                        </ChipInput>
                </TagContainer>
                <BasicRow>
                    <Titles>
                        <div style={{marginTop:"20px"}}>주소</div>
                        <div style={{marginTop:"60px"}}>연락처</div>
                        <div style={{marginTop:"55px"}}>URL</div>
                        <div style={{marginTop:"60px"}}>운영시간</div>
                        <div style={{marginTop:"60px"}}>기타</div>
                    </Titles>
                    <ExtraInputs>
                        <Input></Input>
                        <Input></Input>
                        <Input></Input>
                        <Input></Input>
                        <Input></Input>
                    </ExtraInputs>
                </BasicRow>
           </BasicContainer>
           <BasicContainer>
               <SubTitle>
                   책방사진
               </SubTitle>
               <BasicRow>
               <Titles>
                    <div style={{marginTop:"20px"}}>사진1</div>
                    <div style={{marginTop:"60px"}}>사진2</div>
                    <div style={{marginTop:"55px"}}>사진3</div>
                    <div style={{marginTop:"60px"}}>사진4</div>
                </Titles>
                <ExtraInputs>
                    <Label for="input-file1">
                        <Input type="file" id='input-file1' style={{display:"none"}}></Input>
                        값
                        <Icon src='../img/icons/delete.png'></Icon>
                    </Label>
                    
                    <Label for="input-file2">
                        <Input type="file" id='input-file2' style={{display:"none"}} ></Input>
                        <Icon src='../img/icons/delete.png'></Icon>
                    </Label>
                    
                    <Label for="input-file3">
                    <Input type="file" id='input-file3' style={{display:"none"}}></Input>
                    <Icon src='../img/icons/delete.png'></Icon>
                    </Label>
                    
                    <Label for="input-file4">
                    <Input type="file"id='input-file4' style={{display:"none"}} ></Input>
                    <Icon src='../img/icons/delete.png'></Icon>
                    </Label>
                    
                </ExtraInputs>
               </BasicRow>
           </BasicContainer>
           

    </Content>
    </>
  )
}

export default Bookstore
const Title=styled.div`
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 50px;
`
const Content=styled(ColContainer)`
    gap: 44px;
`
const BasicContainer=styled(ColContainer)`
    background-color: white;
    padding: 24px 5% 44px 5%;
`
const SubTitle=styled.div`
    font-weight: 500;
font-size: 20px;
margin-bottom: 24px;
`
const Titles=styled(ColContainer)`
    font-weight: 400;
    font-size: 16px;
    width: 10%;
    margin-right: 3%;
`
const BasicRow=styled(RowContainer)`
display: flex;
align-items: flex-start;
`
const ExtraRow=styled(BasicRow)`
    
`
const ExtraInputs=styled(ColContainer)`
    width:87%;
`
const TagContainer=styled(RowContainer)`
 display: flex;
align-items: flex-start;
`
const ChipInput=styled(TextareaAutosize)`
    background: #F5F5F5;
    border:none;
    margin-left: 3%;
    width: 87%;
    margin-bottom: 24px;
`
const RowBtn=styled(RowContainer)`
    position: absolute;
   opacity:0;
    top:37%;
    left:23%;
gap:10px;

justify-content:center;

`
const Img=styled.img`
    position: relative;
    height: 261px;
    width: 35%;
    margin-top: 24px;
    margin-right: 5%;
   &:hover {
      ${RowBtn}{
           opacity:1;
      }
    opacity:0.4;
   }
 
`
const Inputs=styled(ColContainer)`
    font-weight: 400;
    font-size: 16px;
    width: 45%;
`
const Input=styled.input`
    background: #F5F5F5;
    height:60px;
    margin-bottom: 24px;
    width: 100%;
`
const Textarea=styled.textarea`
     background: #F5F5F5;
     height: 200px;
     border: none;
     margin-bottom: 24px;
     width: 100%;
`
const Label=styled.label`
    background: #F5F5F5;
    height:60px;
    margin-bottom: 24px;
    width: 100%;
    position: relative;
`
const Icon=styled.img`
    position: absolute;
    right: 5%;
    margin-top: 20px;
`