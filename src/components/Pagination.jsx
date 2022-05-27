import React from 'react'
import styled from "styled-components";

const Pagination = ({ total, limit, page, setPage,review }) => {
    const numPages = Math.ceil(total / limit);
    
  return (
    <>
    
      {
        review===1
        ?
        <>
        <img src='../img/arrow2.png' onClick={() => setPage(page + 1)} disabled={page === numPages}></img>
      </>
      : 
      <Nav>
       <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
          </Button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
              <Button
                key={i + 1}
                onClick={() => setPage(i + 1)}
                aria-current={page === i + 1 ? "page" : null}
              >
                {i + 1}
              </Button>
            ))}
          <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </Button>
          </Nav>
}
   
  </>
  )
}

export default Pagination
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 100px 0 100px 0;
`;

const Button = styled.button`
  border: 1px solid #BDBDBD;
  padding:8px;
  background:white;
  font-size: 1rem;
  width: 20px;
  text-align: center;
  &[disabled] {
    background:white;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #FFFA88;
    font-weight: bold;
    cursor: revert;
    transform: revert;
    border:none;
  }
`;
