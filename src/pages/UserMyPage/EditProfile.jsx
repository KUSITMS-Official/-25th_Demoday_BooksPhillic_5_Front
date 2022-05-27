import React, {useState, useRef, useEffect} from 'react';
import { MyPageContentContainer, RowContainer } from '../../components/Container';
import styled from "styled-components";
import { BorderGrayBtn } from '../../components/Buttons';
import { userInfo, deleteProfileImage } from '../../services/ApiService';


const EditProfile = ({profile, setProfile}) => {
    var file = new FormData();
    const initialImage = '../img/mypage/profile.png';
    // const [profileImage, setProfileImage] = useState(profile.profileImgUrl);

    useEffect( ()=>{
        console.log("회원 정보", profile);
        // if(profile.profileImgUrl) {
        //     setProfileImage(profile.profileImageUrl);
        // }
    },[profile]);

    // useEffect( ()=>{
    //     console.log("회원 정보", profile);
    //     if(profile.profileImgUrl) {
    //         setProfileImage(profile.profileImageUrl);
    //     }
    // },[profileImage]);

    const imageInput = useRef();
    const insertImg=(e)=>{
        let reader=new FileReader();
        
        if (e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
            file.append('file',e.target.files[0])
        } 
        
        reader.onload=()=>{
            changeProfileImage();
        }

    }

    const changeProfileImage = async () => {
        console.log("file", file);
        const userId = localStorage.getItem('userId');
        fetch(`/api/user/profileImage?userId=${userId}`, {
            method : 'POST',
            body : file
        }).then((res) => {
            res.json().then((json) => {
                console.log("업로드된 이미지", json.data);
                setProfile({...profile, profileImgUrl : json.data})
                // setProfileImage(json.data);
                // profile.profileImgUrl = json.data;
            })
        })
    }

    const onClickDelete = async () => {
        const res = await deleteProfileImage();
        console.log(res);
        if(res.code === 1000) {
            console.log("이미지 삭제 완료");
            // setProfileImage(null);
            setProfile({...profile, profileImgUrl : null})
            // profile.profileImgUrl = null;
        }
    }

  return (
    <MyPageContentContainer>
        <Top>
            {
                profile.profileImgUrl === null
                ?
                <Img src={initialImage}></Img>
                :<Img src={profile.profileImgUrl}></Img>
            }
            <Btns>
                <BorderGrayBtn style={{height:"30px"}}        
                    onClick={() => {
                        imageInput.current.click();
                    }}
                >수정</BorderGrayBtn>
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
                
                <BorderGrayBtn style={{height:"30px"}} onClick={()=>onClickDelete()}>삭제</BorderGrayBtn>
            </Btns>
        </Top>
        <Content>
            <Title>이름</Title>
            <Input placeholder={profile.username}></Input>
            <Title>이메일(아이디)</Title>
            <Input placeholder={profile.email}></Input>
            <Title>비밀번호</Title>
            <Input placeholder='******'></Input>
            <Title>휴대폰번호</Title>
            <Input placeholder={profile.phoneNumber}></Input>
        </Content>
        <RowContainer style={{marginTop:"40px"}}>
        <Delete>*북스필릭 회원탈퇴를 원하신다면</Delete>
        <Delete> 여기</Delete>{/*링크달기 */}
        <Delete>를 클릭하세요.</Delete>
        </RowContainer>
        
    </MyPageContentContainer>
  )
}

export default EditProfile
const Top=styled(RowContainer)`
    gap:10%;
    margin-top: 20px;
    margin-bottom:34px;
`
const Img=styled.img`
    height: 75px;
`
const Btns=styled(RowContainer)`
    width: 50%;
    gap: 5%;
`
const Content=styled.div`
    display:grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    gap: 24px 5%;
`
const Title=styled.div`
    margin-top:10px;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
    text-align: center;
`
const Input=styled.input`
height: 40px;
background: #F5F5F5;
`
const Delete=styled.span`
    font-weight: 400;
font-size: 14px;
color: #616161;
`