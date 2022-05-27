import styled from "styled-components";
import React from 'react'
import { RowContainer } from "../Container";

const Input = ({placeholder}) => {
  return (
    <InputWrapper>
    <input type="text" placeholder={placeholder}></input>
    </InputWrapper>
  )
}

export default Input

const InputWrapper=styled(RowContainer)`
    border: 1px solid #616161;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: ${( props ) => props.width || "70%"};
    justify-content: space-between;
`