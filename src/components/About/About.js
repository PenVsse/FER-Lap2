import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container } from '@mui/material';

export default function About() {
    return (
        <Container sx={{ marginTop: '20px', marginBottom: '20px' }}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>About me</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        This is a free movie streaming service with no commercials that allows you to watch movies online, watch hd movies online free. Website provides the highest-quality films accessible on the internet.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Team</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        text....
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Daily news</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        text....
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
}