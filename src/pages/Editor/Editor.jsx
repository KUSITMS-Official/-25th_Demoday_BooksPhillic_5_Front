import { ContentPasteGoOutlined } from '@mui/icons-material'
import axios from 'axios'
import React, { useEffect, useState} from 'react'
import styled from 'styled-components'
import { ColContainer, Container,RowContainer } from '../../components/Container'
import Header from '../../components/Header'
import Card from './Card'
const Editor = () => {
    const [editor, setEditor]=useState({})
    const [posts, setPosts]=useState([]);
    useEffect(()=>{
        axios.get('/api/editor/1/post')
        .then((res)=>{
            setPosts(res.data.data);
        })
        axios.get('/api/editor/1')
        .then((res)=>{
            setEditor(res.data.data);
        })
    },[])
  return (
    <Background>
        <Header/>
        <Top>
            <ProfileImg src='../img/mypage/profile.png'></ProfileImg>
            <Name>에디터 {editor.editorName}</Name>
            <Info>{editor.description}</Info>
        </Top>
        <RowContainer style={{margin:"150px 0 0 15%"}}>
        <Num>{editor.postCount}</Num>
        <Count> Articles</Count>
        </RowContainer>
        
        <Content>
            {
                posts.map((post)=>(
                    <Card post={post}/>
                ))
            }
           
        </Content>
    </Background>
  )
}

export default Editor
const Background=styled(Container)`
background-image: url('../img/background/background_editor.jpg');
  background-attachment: local;
  background-size: 100% 2790px;
`
const Top=styled(ColContainer)`
    height: 289px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-weight: 500;
font-size: 20px;
`
const ProfileImg=styled.img`
        height:100px;
        width: 8%;
`
const Name=styled.div`
    margin-top:5px;
    margin-bottom: 20px;
color: #616161;
`
const Info=styled.div`
    color:#000000;
`
const Content=styled.div`
    margin: 6px 15%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px 2%;
`
const Num=styled.div`
    font-weight: 400;
font-size: 16px;
color: #616161;
margin-right: 1%;
`
const Count=styled.div`
    
    font-weight: 400;
font-size: 14px;
color: #616161;
`