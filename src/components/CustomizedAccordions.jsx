import * as React from 'react';
import { styled } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const customTheme = createTheme({
  typography: {
    fontFamily: 'cartographCF, sans-serif',
    h6: {
      fontFamily: 'monumentExtended , sans-serif',
    },
    body1: {
      fontFamily: ', sans-serif',
    },
  },
});

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: theme.spacing(0),
  overflow: 'hidden',
  backgroundColor: '#212121',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#fff' }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#212121',
  color: 'white',
  fontFamily: 'monumentExtended, sans-serif',
  

  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(255, 255, 255, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(1),
  backgroundColor: '#212121',
  color: 'rgba(255, 255, 255, 0.5)',
  fontFamily: 'cartographCF, sans-serif',
  fontWeight: 400,
  paddingLeft: theme.spacing(5),
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <ThemeProvider theme={customTheme}>
      {' '}
      {/* Use customTheme here */}
      <div>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
            <Typography component='span'>
              What type of design work do you specialize in?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I specialize in modern, minimal, and aesthetic posters, editorial
              visuals, social media designs, magazine covers, and product
              packaging. My focus is on clean layouts and strong visual flow.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
            <Typography component='span'>
              How do you approach a new project?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I start by understanding your goals, audience, and visual
              preferences. Once the direction is clear, I create structured
              concepts and refine them into polished, high-quality designs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
            <Typography component='span'>
              Do you work with brands, individuals, or creators?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              I work with all three—businesses, personal brands, and independent
              creators. Whether you need aesthetic visuals, campaign graphics,
              or a cohesive design style, I adapt my work to your needs.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary aria-controls='panel4d-content' id='panel4d-header'>
            <Typography component='span'>
              How can I reach out or see more of your work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can explore my designs on Instagram, Pinterest, Dribbble, and
              other social platforms. If you'd like to connect professionally,
              you can reach me on LinkedIn or through my contact page.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </ThemeProvider>
  );
}
