import React, { useEffect, forwardRef } from 'react'
import styled from 'styled-components'
import { ColContainer } from '../../components/Container'
import { keywordList } from '../../components/keywordList'
const Keywords =()=> {
  return (
    <ScrollContainer>
        {
            keywordList.map((keyword)=>(
                 (
                    keyword.value.includes("송파")
                     ?<KeyWord className='week'>{keyword.value}</KeyWord>
                     :<KeyWord>{keyword.value}</KeyWord>
                 )
            ))
        }
    </ScrollContainer>
  )
}

export default Keywords
const ScrollContainer=styled(ColContainer)`
    margin: 50px 0 100px 0;
    height: 330px;
    width: 100%;
    font-weight: 700;
font-size: 36px;
line-height: 52px;
display: flex;
align-items: center;
color: #BDBDBD;
overflow: scroll;
&::-webkit-scrollbar {
    display: none;
}

`
const KeyWord=styled.div`
padding: 30px 0;
text-align: center;
width: 100%;
border-bottom:  1px solid #616161;
&.week{
    color:black;
}
`