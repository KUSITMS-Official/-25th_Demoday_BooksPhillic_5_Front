import React from 'react'
import styled from "styled-components"
import { BorderWhiteBtn } from './Buttons'
import { RowContainer } from './Container'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
      <HeaderContainer>
        <HeaderChildContainer>
          <Link to="/" className='pointer'>
          <Img src="../img/logo.svg"></Img>          
          </Link>

          <Link to="/collection">
            <Menu>동네컬렉션</Menu>
          </Link>
         
          <Link to="/profile">
          <Menu>서점프로필</Menu>
          </Link>
          
        </HeaderChildContainer>
        <HeaderChildContainer>
          <BorderWhiteBtn>
            <Link to="/apply" style={{color: '#FFFFFF'}}>미스터리북 신청하기</Link>
          </BorderWhiteBtn>
{
  localStorage.getItem('userId')
        ?
<>
 {/* 검색 버튼 */}
 <Link to="/search">
            <img src='../img/search.svg' className='pointer'></img>
          </Link>
          

          {/* 마이페이지 버튼 */}
         
           <img onClick={() => {
              if(localStorage.getItem('userId') === null) {
                // alert("로그인 후 이용가능합니다.");
                window.location.href = '/login';
              }
              else window.location.href = '/userPage';
            }} src='../img/mypage.svg'
            className='pointer'
          ></img>
</>
         
        :<BorderWhiteBtn>
          <Link to="/login" style={{color: '#FFFFFF'}}>로그인</Link>
        </BorderWhiteBtn>
}
          
        </HeaderChildContainer>
      </HeaderContainer>
     
  )
}

export default Header;
const HeaderContainer=styled(RowContainer)`
  height: 64px;
  background-color: #2A3143;
  padding: 0px 44px;
  justify-content: space-between;
`
const Img=styled.img`
  
`
const Menu=styled.div`
  color: white;
  margin: 0px 20px;
  cursor: pointer;
`
const HeaderChildContainer=styled(RowContainer)`
  gap: 0px 40px;
`
