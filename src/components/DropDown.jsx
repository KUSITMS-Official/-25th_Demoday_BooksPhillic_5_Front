import React from 'react'
import styled from "styled-components";
import { Box } from './apply/Boxs';
const options=[
  {value:"0", name:"전체"},
  {value:"GANGNAM", name:"강남구"},
  {value:"GANGDONG", name:"강동구"},
  {value:"GANGBOOK", name:"강북구"},
  {value:"GANGSEO", name:"강서구"},
  {value:"GWANACK", name:"관악구"},
  {value:"GWANGJIN", name:"광진구"},
  {value:"GURO", name:"구로구"},
  {value:"GUEMCHEON", name:"금천구"},
  {value:"NOWON", name:"노원구"},
  {value:"DOBONG", name:"도봉구"},
  {value:"DONGDAEMUN", name:"동대문구"},
  {value:"DONGJAK", name:"동작구"},
  {value:"MAPO", name:"마포구"},
  {value:"SEODAEMUN", name:"서대문구"},
  {value:"SEOCHO", name:"서초구"},
  {value:"SEONGDONG", name:"성동구"},
  {value:"SEONGBUK", name:"성북구"},
  {value:"SONGPA", name:"송파구"},
  {value:"YANGCHEON", name:"양천구"},
  {value:"YEONGDEUNGPO", name:"영등포구"},
  {value:"YONGSAN", name:"용산구"},
  {value:"EUNPYEONG", name:"은평구"},
  {value:"JONGNO", name:"종로구"},
  {value:"JUNGGU", name:"중구"},
  {value:"JUNGNANG", name:"중랑구"}

]
const DropDown = ({handelChange}) => {

  return (
   <DropDownWrapper onChange={handelChange}>
   {
     options.map((opt)=>(
       <option 
       key={opt.value}
       value={opt.value}
       
       >
         {opt.name}
       </option>
     ))
   }
   </DropDownWrapper>
  )
}

export default DropDown
const DropDownWrapper=styled.select`
height: 45px;
    width:10%;
    border: 1px solid black;
    &:focus{
      
    }
`