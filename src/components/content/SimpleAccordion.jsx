import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookstoreProfile from './BookstoreProfile';
import Comment from './Comment';
export default function SimpleAccordion({id, profile}) {
  console.log(profile);
  return (
    <div>
      <Accordion square={true} style={{margin:"0 0.1% 0 0.1%"}}>
        <AccordionSummary
          style={{padding:"0 10%", height:"113px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{fontSize:"30px", fontWeight:"700" }}>책방 정보</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {profile ?<BookstoreProfile store={profile}/> : null}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square={true} style={{margin:"0 0.1% 0 0.1%"}}>
        <AccordionSummary
         style={{padding:"0 10%", height:"114px"}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography style={{fontSize:"30px", fontWeight:"700" }}>댓글</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           <Comment id={id}/>
        
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
