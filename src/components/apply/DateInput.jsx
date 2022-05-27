import styled from "styled-components";
import React, {useState} from 'react'
import { RowContainer } from "../Container";
import DatePicker from "react-datepicker";

const DateInput = ({placeholder, getDate}) => {
  const [date, setDate] = useState();

  return (
    <InputWrapper>
      <DatePicker
          maxDate={new Date()}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="yyyy.MM.dd"
          placeholderText={placeholder}
      />
    </InputWrapper>
  )
}

export default DateInput

const InputWrapper=styled(RowContainer)`
    border: 1px solid #616161;
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    width: ${( props ) => props.width || "70%"};
    justify-content: space-between;
`
