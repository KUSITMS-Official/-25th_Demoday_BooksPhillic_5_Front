import React from 'react'
import styled from "styled-components";
import Flex from '../Flex';

export const Box=styled.div`
    height: 60px;
    border: 1px solid #616161;
    display: flex;
    justify-content: center;
    align-content: center;
    &.click{
        border-color:#FFFA88;
        background-color: white;
    }
`
export const LongBox=styled(Box)`
    width: 100%;
`
export const LongUnderlineBox=styled(Flex)`
    border-bottom: 1px solid #616161;
    width: 100%;
    height: 97px;
    align-items: end;
    padding-bottom: 10px;
    font-family: 'Noto Sans KR';
font-style: normal;
font-weight: 700;
font-size: 30px;
color: #222222;
`
