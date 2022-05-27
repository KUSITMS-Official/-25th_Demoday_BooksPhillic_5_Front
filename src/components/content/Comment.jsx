import React, {useEffect, useParams,useState} from 'react'
import styled from 'styled-components'
import { ColContainer, RowContainer } from '../Container'
import { BorderGrayBtn } from '../Buttons'
import { postComment, getComment } from '../../services/ApiService';

const Comment = ({id}) => {
    const [loading, setLoading] = useState(false); 
    const [newComment, setNewComment] = useState("");
    const [commentList, setCommentList] = useState([]);

    const onClickPostButton = async() => {
        console.log("댓글 내용", newComment);
        const res = await postComment(id, newComment);
        if(res.code === 0 || res.code === 2203 || res.code ===2206) {
            window.location.href = '/login';
            alert("로그인 후 이용 가능합니다.");
        }
        else if(res.code === 1000) {
            console.log(res.data);
            setLoading(loading => !loading);
        }
        else alert("데이터베이스 오류입니다.");
    }

    const getCommentList = async() => {
        const res = await getComment(id);
        if(res.code === 0) {
            window.location.href = '/login';
            alert("로그인 후 이용 가능합니다.");
        }
        else if(res.code === 1000) {
            console.log(res.data);
            setCommentList(res.data);
        }
    }

    useEffect( ()=> {
        getCommentList();   
    },[loading]);
    
    return (
      <CommentContainer>
        <CommentList>
            {
                commentList.map((list)=>(
                    <Reply>{
                        list.userProfileImgUrl == null ?
                        <Img src='../img/mypage/profile.png'></Img>
                        : <Img src={list.userProfileImgUrl}></Img>
                        }
                    <ColContainer>
                    <RowContainer style={{fontWeight:"400", fontSize:"16px", color:"#BDBDBD"}}>
                        <div>{list.username}</div>
                        <div>ㅣ</div>
                        <div>{(list.createdAt).slice(0,10)}</div>
                    </RowContainer>
                    <Content>
                        {list.content}
                    </Content>
                    </ColContainer>
                </Reply>
                ))
            }
        </CommentList>
        <Textarea placeholder='에디터의 글에 댓글을 남겨보세요.' value={newComment} onChange={(e)=>setNewComment(e.target.value)}></Textarea>
        <BtnContainer>
            <BorderGrayBtn onClick={()=>onClickPostButton()}>댓글 남기기</BorderGrayBtn>
        </BtnContainer>
      </CommentContainer>
       
  )
}

export default Comment
const CommentContainer=styled(ColContainer)`
    margin: 100px 10%;
`
const CommentList=styled(ColContainer)`
    min-height: 310px;
`
const Reply=styled(RowContainer)`
    border-bottom: 1px solid #616161;
    padding: 27px 0;
`
const Img=styled.img`
    margin-right: 15px;
    width : 6%;
    height : 55px;
`
const Content=styled.div`
    font-weight: 500;
font-size: 20px;
color: #222222;
margin-top: 10px;
`
const Textarea=styled.textarea`
    margin: 27px 0;
    height: 170px;
    padding:3%;
`
const BtnContainer=styled.div`
display:flex;
justify-content: flex-end;
`