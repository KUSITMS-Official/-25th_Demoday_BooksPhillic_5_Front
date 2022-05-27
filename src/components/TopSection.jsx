import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { RowContainer, ColContainer } from './Container';
import Flex from './Flex';
import {scrap} from '../services/ApiService';

const TopSection = ({title, editor, editorImage, date,id, tags, scraped}) => {
    const [isScraped, setIsScraped] = useState(scraped);
    const location=useLocation();
    const handleLocation=()=>{
        if (location.pathname.includes("profile")){
            return "profile";
        }
    }

    const onClickScrapButton = async ()=> {
        const res = await scrap(id);
        if(res.code === 0) {
            window.location.href = '/login';
            alert("로그인 후 이용 가능합니다.");
        }
        else if(res.code=== 1000) {
            if(res.data === true) {
                setIsScraped(true);
            }
            else setIsScraped(false);
        }
    }
    
    useEffect( ()=>{},[scraped]);

  return ( 
    <Top>
        <TopTitle style={{width: "67%"}}> {title}</TopTitle>
            <EditorWrapper>
            <Editor>
                
                {handleLocation()==="profile"
                ?
                    //스크랩 버튼만 보이게
                    <ColContainer onClick={()=>onClickScrapButton()}> 
                    {
                    isScraped===true ? <img src='../img/scraped.png'></img> : <img src='../img/unscraped.png'></img>
                    }
                    <div style={{marginTop:"10px"}}>스크랩</div>
                    </ColContainer>   
                :
                //에디터 정보 보이게
                <>
                {editorImage ?
                    <img style={{height:"90px"}} src={editorImage}></img>
                    : <img style={{height:"90px"}} src='../img/editorProfile.png'></img>
                }
                <div>에디터 {editor}</div>
                <div>{date}</div>
                </>     
            }
                
            </Editor>
            
            </EditorWrapper>
            <Tags>
                {tags && tags.map( (value) => (' #' + value))}
        </Tags>
    </Top>
  )
}

export default TopSection
const Top=styled(RowContainer)`
    height: 150px;
`
const TopTitle=styled(Flex)`
   
    font-weight: 700;
    font-size: 36px;
    justify-content: center;
`
const EditorWrapper=styled(Flex)`
    width: 11%;
    display: flex; 
    justify-content: center;
   
`
const Editor=styled(ColContainer)`
    font-size: 16px;
    color: #616161;
`
const Tags=styled(Flex)`
    width: 22%;
    justify-content: center;
    padding: 0px 20px 0px 20px;
`

const CardContainer=styled(ColContainer)`
  height: 366px;
`