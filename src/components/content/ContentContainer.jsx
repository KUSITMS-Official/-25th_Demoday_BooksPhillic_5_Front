import React from 'react'
import styled from 'styled-components'
import { RowContainer, ColContainer } from '../Container'
const ContentContainer = ({contentImages, content}) => {
    console.log(contentImages);
  return (
    <ContentWrapper>
                <Container>
                   <img src={contentImages[0]} width="49%" height="690px" ></img>
                    
                    <Paragraph>
                        <ParagraphTiTle>송리단길의 <br/>작은서점</ParagraphTiTle>
                       <ParagraphContent>{content[0]} </ParagraphContent>
                        
                       
                    </Paragraph>
                </Container>
                <Container>
                    <Paragraph2>
                        
                  <ParagraphContent>{content[1]} </ParagraphContent>
                        
                    </Paragraph2>
                 <img src={contentImages[1]} width="40%" height="558px" ></img>
                    
                    
                </Container>
            </ContentWrapper>
  )
}

export default ContentContainer
const ContentWrapper=styled(ColContainer)`
    margin: 0px 6% 107px 6%;
`
const Container=styled(RowContainer)`
    margin-top: 107px;
    margin-bottom: 25px;
`
const Paragraph=styled(ColContainer)`
    width: 41%;
    height: 690px;
    margin-left: 10%;
`
const Paragraph2=styled.div`
    margin-left: 8%;
    margin-right: 10%;
    height: 558px;
    width: 42%;
`
const ParagraphTiTle=styled.div`
    font-size: 55px;
    font-weight: 700;
    margin-bottom: 50px;
`
const ParagraphContent=styled.div`
    font-size: 20px;
    line-height: 37px;
    letter-spacing: -0.6px;
    color: #222222;
`