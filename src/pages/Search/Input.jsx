import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from"styled-components"
import { ColContainer } from '../../components/Container'
const Input = ({value, setSearchWord, disabled}) => {
  const [search, setSearch]=useState('');
  const onChangeSearch=(e)=>{
    e.preventDefault();
    setSearch(e.target.value);
    setSearchWord(e.target.value);
  }
  const onKeyPress=(e)=>{
    if (e.key==='Enter'){
      // window.location.href=`/searchContent/${search}`;
     // document.location.href('');
      console.log("enter");
    }
  }

  useEffect(()=>{
    setSearch(value);
  }, [value])

  return (
      <ColContainer>
        <InputWrapper placeholder='어떤 책방을 찾고 계신가요?'
          style={{paddingLeft: '50px', fontSize: '20px'}}
          onChange={onChangeSearch}
          onKeyPress={onKeyPress}
          value={search}
          disabled={disabled ? true : false}
        />
        <Link to='/searchContent' state={{tag: search}}>
          <Img src='../../img/search_gray.png' className='pointer'/>
        </Link>
          
        
      </ColContainer>
  )

}

export default Input
const InputWrapper=styled.input`
    position: relative;
    height: 110px;
    background: #FFFFFF;
    border: 1px solid #616161;
    border-radius: 100px;
    padding-left: 20px;
`
const Img=styled.img`
    position: absolute;
    right: 18%;
    top: 250px;
    //margin-top:30px;
`