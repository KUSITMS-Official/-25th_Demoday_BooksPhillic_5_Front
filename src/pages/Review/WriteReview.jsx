import React,{useState, useRef} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../../components/Container'
import {RoundBtn, BorderGrayBtn} from '../../components/Buttons'
import { Avatar, Chip } from '@mui/material'


var files = new FormData();

  
const WriteReview = ({pickupId, setTab}) => {
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

  const [content, setContent] = useState("");
  const [fileName, setFileName]=useState([]);
  const imageInput = useRef();
  const insertImg=(e)=>{
      let reader=new FileReader();

      if (e.target.files[0]){
          reader.readAsDataURL(e.target.files[0]);
          setImg([...img, e.target.files[0]]);
          setFileName([...fileName, e.target.files[0].name]);
       files.append('files',e.target.files[0])
      } 

      reader.onloadend=()=>{

      }
    
  }

  return (
    <ColContainer style={{background:"white", width: "100%"}}>
      <ImgContainer>
        <div style={{margin:"24px 0"}}>도서/책방 사진</div>
          <RowContainer style={{marginBottom:"24px"}}>
            <SubTitle>메인사진</SubTitle>
            <Label>
              {fileName[0]}
            <Input                 
                type="file"
                id="files"
                ref={imageInput}
                accept='image/jpg, image/jpeg, image/png'
                onChange={(e)=>{insertImg(e)}}></Input> 
            </Label>
            
          </RowContainer>

          <RowContainer  style={{marginBottom:"24px"}}>
            <SubTitle>사진1</SubTitle>
           <Label>
             {fileName[1]}
           <Input                 
                type="file"
                id="files"
                ref={imageInput}
                accept='image/jpg, image/jpeg, image/png'
                onChange={(e)=>{insertImg(e)}}
                ></Input>
           </Label>
          </RowContainer>

          <RowContainer style={{marginBottom:"24px"}}>
            <SubTitle>사진2</SubTitle>
           <Label>
             {fileName[2]}
           <Input                 
                type="file"
                id="files"
                ref={imageInput}
                accept='image/jpg, image/jpeg, image/png'
                onChange={(e)=>{insertImg(e)}}></Input> 
           </Label>
          
          </RowContainer>
          {/* <BtnContainer>
          <BorderGrayBtn style={{height:"35px"}}>사진 추가하기</BorderGrayBtn>
          </BtnContainer> */}
         <hr/>
      </ImgContainer>  
      <WriteContainer>
        <div style={{margin:"24px 0"}}>리뷰 작성</div>
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
          <Textarea placeholder='미스터리북 구매 소감을 작성해주세요.(한글 기준 최소 5자 이상)'
                  maxLength={100} onChange={(event)=>setContent(event.target.value)}></Textarea>
          <BtnContainer>
          <RoundBtn
            onClick={ () => {
              console.log("files", files);
              fetch('/api/pick-up/review/images', {
                  method : 'POST',
                  body : files
              }).then((res) => {
                  res.json().then((json) => {
                      // console.log(json.data)
                      // console.log("이모지", clickEmoji)
                      fetch(`/api/pick-up/${pickupId}/review`, {
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
                            if(json.code === 1000) {
                              console.log(json.data);
                              alert("리뷰 업로드 성공!");
                              setTab(2);
                            }
                          })
                      })
                  })
              })
          }}
          >리뷰 업로드</RoundBtn>
          </BtnContainer>
          <hr style={{marginTop:"44px"}}/>
      </WriteContainer>
    </ColContainer>
  
  )
}

export default WriteReview

const ImgContainer=styled(ColContainer)`
  font-weight: 400;
font-size: 16px;
`
const Title=styled.div`
`
const SubTitle=styled.div`
color: #BDBDBD;
width:10%;
margin-right: 5%;
`
const Input=styled.input`
height: 40px;
background: #F5F5F5;
width: 85%;
color: #9E9E9E;
display: none;
`
const BtnContainer=styled.div`
display: flex;
  justify-content: center;
  margin-bottom: 24px;
`
const WriteContainer=styled(ColContainer)`
`
const Textarea=styled.textarea`
  background: #F5F5F5;
  height: 200px;
  margin: 10px 0 44px 0;
  padding: 20px 3%;
  font-weight: 400;
font-size: 14px;
color: #9E9E9E;
`
const Label=styled.label`
height: 40px;
background: #F5F5F5;
width: 85%;
color: #9E9E9E;
`