import React, { useEffect } from 'react'
import styled from "styled-components"
import { useRef, useState } from 'react'
import { ColContainer, RowContainer } from '../../components/Container'
import { BorderGrayBtn, RoundBtn } from '../../components/Buttons'
import { Avatar, Chip } from '@mui/material'

var files = new FormData();

const WriteReview = ({id, loading, setLoading}) => {
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
        
    const [clickEmoji, setClickEmoji]=useState("");
    console.log(clickEmoji);
    const[click, setClick]=useState(Array(4).fill(false));
    const handleClick=(id)=>{
        setClick(click.map((element, index)=>{
            return index===id 
            ? !element 
            : element===true
            ?!element
            : element
        }))
    }

    const [img, setImg]=useState([]);
    const [previewImg, setPreviewImg]=useState([]);

    const [content, setContent] = useState("");

    const imageInput = useRef();
   const insertImg=(e)=>{
       let reader=new FileReader();

       if (e.target.files[0]){
           reader.readAsDataURL(e.target.files[0]);
           setImg([...img, e.target.files[0]]);
        files.append('files',e.target.files[0])
       } 

       reader.onloadend=()=>{
           const previewImgUrl=reader.result;
           if (previewImgUrl){
               setPreviewImg([...previewImg,previewImgUrl]);
           }
       }
   }
   const getPreviewImg = () => {
    if(img === null || img.length === 0) {
      return (
         <div>최대 4장까지 가능합니다.  </div>
      )
    } else {
        return (
        <ImgContainer>
      { img.map((el, index) => {
        return (
              <Img src={previewImg[index]} />
        )
      })}
        </ImgContainer>
        )
    }
  }

  const resetForm = () => {
      setClickEmoji("");
  }

  useEffect( ()=>{

  },[clickEmoji])

  return (
    <WriteReviewContainer>
      {getPreviewImg()}
      <RowContainer style={{gap:"1%", marginTop:"20px"}}>
                {emoji.map((emo, index) => (
                        <Chip size="medium" 
                        label={emo.name}
                        avatar={<Avatar src={emo.src}/>}
                        variant={
                            click[index] ?  "": "outlined"
                        }
                        style={ 
                            click[index] ? {backgroundColor:'#FFFA88'} : {}
                        }
                        onClick={()=>{
                            handleClick(index)
                            setClickEmoji(emoji[index].name);
                        }}
                        >
                    </Chip>
                ))}
        </RowContainer>
      <Textarea placeholder='여러분은 이 책방에 어떤 점이 끌리셨나요? 여러분의 후기를 남겨주세요'
        maxLength={100} onChange={(event)=>setContent(event.target.value)}>
      </Textarea>
      <BtnContainer>
      <StyledFileInput
        onClick={() => {
            imageInput.current.click();
        }}
    >
        사진 추가하기
    </StyledFileInput>
        <form encType='multipart/form-data'>
        <input 
                type="file"
                id="files"
                ref={imageInput}
                style={{ display: 'none' }}
                accept='image/jpg, image/jpeg, image/png'
                onChange={(e)=>{insertImg(e)}}
                ></input>
        </form>
      <BorderGrayBtn
            onClick={ (e) => {
                console.log("files", files);
                fetch('/api/bookstore/reviewImages', {
                    method : 'POST',
                    body : files
                }).then((res) => {
                    res.json().then((json) => {
                        // console.log(json.data)
                        // console.log("이모지", clickEmoji)
                        fetch(`/api/bookstore/${id}/review`, {
                            method : 'POST',
                            headers: new Headers({
                                'Content-Type': 'application/json',
                            }),
                            body : JSON.stringify({
                                userId : localStorage.getItem('userId'),
                                content : content,
                                urls : json.data,
                                emoticon : clickEmoji
                            })
                        }).then((res) => {
                            res.json().then((json)=> {
                                console.log(json.data);
                                alert("리뷰가 등록되었습니다.");
                                setLoading(loading => !loading);
                                window.location.replace(window.location.href);
                            })
                        })
                    })
                })
            }}
            >
          <img src='../img/icons/pencil.png' style={{height:"20px", marginRight:"10px"}}></img>
          <span>리뷰 남기기</span>
        </BorderGrayBtn>
      </BtnContainer>
    </WriteReviewContainer>
    
  )
}

export default WriteReview
const WriteReviewContainer=styled(ColContainer)`
margin-bottom:115px;
`
const ImgContainer=styled(RowContainer)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap:1%;
`
const Img=styled.img`
    height: 200px;
`
const StyledFileInput=styled(BorderGrayBtn)`
width: 10%;
text-align: center;
margin-right: 3%;
`
const Textarea=styled.textarea`
    height: 170px;
    margin-top:20px;
    padding: 24px;
   border: 1px solid #616161;
`
const BtnContainer=styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`