import React, {Fragment} from 'react'
import { useTheme } from '@mui/material/styles'
import { 
    Container,
    Grid ,
    Box,
    Typography, 
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails

} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MedhaLogo from '../../assets/images/medhaLogo.png';

const LandingPage = ()=> {
    const theme = useTheme();

  return (

    <Fragment>
        <Container>
            <Grid container style={{ display: 'flex' }}>
                <Grid item style={{ flex: 1 }} xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box>
                        <Typography variant='h3' style={{ textAlign: 'left' , color:'#12314c'}}>EMPLOYABILITY</Typography>
                        <Typography variant='h3' style={{ textAlign: 'left' , color:'#12314c'}}>SKILLS INDICES:</Typography>
                        <Typography variant='h3' style={{ textAlign: 'left' , color:'#fc636b'}}> TOOLKIT</Typography>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Divider style={{ flex: 1, backgroundColor: '#12314c', height: '2px' , marginTop:'10px', marginBottom:'10px'}} />
                    </Box>
                    <Box>
                        <Typography variant='body1' style={{ textAlign: 'left' }}>
                            Developed and utilized for RCT Evaluation of Medha's CAB program Principal Investigator Lori Beaman and team developed, tested and implemented three assessments for measuring distinct employability
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box>
                        <img src={MedhaLogo} style={{width:'60px', height:'60px'}} alt='Medha logo' className='logo-image'/>
                    </Box>
                </Grid>
            </Grid>
            <Box style={{marginTop:'25px', marginBottom:'25px'}}>
                <Typography variant="h3" style={{ textAlign: 'left' , color:'#12314c'}}>EMPLOYABILITY SKILLS INDICES</Typography>
            </Box>
            
            <div>
      <Accordion style={{ backgroundColor: '#072948', color: 'white' , marginBottom:'1rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>INTERVIEW SKILLS / CAREER READINESS</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: 'white', color:'red'}}>
            <Grid container style={{ display: 'flex', }} spacing={2}>
                <Grid item style={{ flex: 1 }} xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                        <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                        </Box>
                    </Box>
                    <Typography style={{color:'#000000',fontWeight:700}}>ABOUT</Typography>
                    <Typography variant='body1' style={{color:'#000000'}}>
                        Career readiness or interview skills are best assessed through an interview process. The test simulates the
                        first-round interviews for hiring processes of a generalist role for freshers with little or no work experience.
                        The assessment is a mock interview scored on a standardised rubric which assesses the interviewee's ability to communicate their fit in an interview.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                            <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                            </Box>
                        </Box>
                        <Typography style={{color:'#000000',fontWeight:700}}> LIMITATIONS</Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                            <li>
                            This is a human-administered test and hence, the results can be influenced by individual bias.
                            </li>
                            <li>
                            The assessment criteria is applicable only for generalist roles. It does not apply to technical roles.
                            </li>
                            <li>
                            The survey relies on availability of a steady phone or internet network as it is administered online.
                            </li>
                        </Typography>
                        
                </Grid>
                <Grid item xs={12} sm={12} lg={4} xl={4}>
                <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                            <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                            </Box>
                        </Box>
                        <Typography style={{color:'#000000',fontWeight:700}}>TARGET POPULATION</Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                          19-25
                        </Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                        Students or graduates of general degree colleges
                        </Typography>
                </Grid>
            </Grid>

            <Box style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
                <Box sx={{
                    borderRadius: '26px'
                }}
                style={{
                    color:'#f1f1f1', 
                    fontWeight:700, 
                    PointerEvent:'all', 
                    backgroundColor: '#072948', 
                    paddingLeft:'2rem', 
                    paddingRight:'2rem',
                    height:'2.5rem', 
                    display:'flex' ,
                    flexDirection:'column' ,
                    justifyContent:'center'}}>
                    Learn More
                </Box>
                <Box sx={{
                    borderRadius: '19px'
                }}
                style={{
                    color:'#072948',
                    fontWeight:700, 
                    PointerEvent:'all', 
                    paddingLeft:'1.7rem', 
                    paddingRight:'1.7rem',
                    height:'2.1rem', 
                    display:'flex' ,
                    flexDirection:'column' ,
                    justifyContent:'center',
                    border:'4px solid #072948',
                    marginLeft:'0.5rem'
                    }}>
                    Download Tool
                </Box>
            </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#072948', color: 'white' ,marginBottom:'1rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>CAREER PLANNING</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: 'white', color:'red'}}>
            <Grid container style={{ display: 'flex', }} spacing={2}>
                <Grid item style={{ flex: 1 }} xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                        <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                        </Box>
                    </Box>
                    <Typography style={{color:'#000000',fontWeight:700}}>ABOUT</Typography>
                    <Typography variant='body1' style={{color:'#000000'}}>
                    Career Planning is a function of self-awareness as well as an understanding of available career paths. This is assessed through a reflective, planning exercise in which the participants presents Plan A and a Plan B for their career, demonstrating their knowledge of job roles, career pathways and progression.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                            <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                            </Box>
                        </Box>
                        <Typography style={{color:'#000000',fontWeight:700}}> LIMITATIONS</Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                            <li>
                            This assessment is evaluated by trained enumerators and is hence limited by fallibility of enumerator training and possible bias.
                            </li>
                            <li>
                           The survey assesses only early years (0-2) of career planning.
                            </li>
                            <li>
                            The survey has not been validated in settings of technical/vocational education institutions.
                            </li>
                        </Typography>
                        
                </Grid>
                <Grid item xs={12} sm={12} lg={4} xl={4}>
                <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                            <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                            </Box>
                        </Box>
                        <Typography style={{color:'#000000',fontWeight:700}}>TARGET POPULATION</Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                          19-25
                        </Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                        Students or graduates of general degree colleges
                        </Typography>
                </Grid>
            </Grid>

            <Box style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
                <Box sx={{
                    borderRadius: '26px'
                }}
                style={{
                    color:'#f1f1f1', 
                    fontWeight:700, 
                    PointerEvent:'all', 
                    backgroundColor: '#072948', 
                    paddingLeft:'2rem', 
                    paddingRight:'2rem',
                    height:'2.5rem', 
                    display:'flex' ,
                    flexDirection:'column' ,
                    justifyContent:'center'}}>
                    Learn More
                </Box>
                <Box sx={{
                    borderRadius: '19px'
                }}
                style={{
                    color:'#072948',
                    fontWeight:700, 
                    PointerEvent:'all', 
                    paddingLeft:'1.7rem', 
                    paddingRight:'1.7rem',
                    height:'2.1rem', 
                    display:'flex' ,
                    flexDirection:'column' ,
                    justifyContent:'center',
                    border:'4px solid #072948',
                    marginLeft:'0.5rem'
                    }}>
                    Download Tool
                </Box>
            </Box>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{ backgroundColor: '#072948', color: 'white' ,marginBottom:'1rem'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>TEAM WORK</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ backgroundColor: 'white', color:'red'}}>
            <Grid container style={{ display: 'flex', }} spacing={2}>
                <Grid item style={{ flex: 1 }} xs={12} sm={12} md={6} lg={4} xl={4} >
                    <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                        <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                        </Box>
                    </Box>
                    <Typography style={{color:'#000000',fontWeight:700}}>ABOUT</Typography>
                    <Typography variant='body1' style={{color:'#000000'}}>
                    Team work is influenced by a number of life skills such as communication, empathy, problem solving and leadership. In this survey, participants are assessed for their ability to understand instructions, and participate in team efforts. Traits like initiative, creative problem-solving and encouraging participation from others 
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                            <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                            </Box>
                        </Box>
                        <Typography style={{color:'#000000',fontWeight:700}}> LIMITATIONS</Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                            <li>
                            The assessment was implemented in only round of survey (midline assessment of pilot cohort).</li>
                            <li>
                            The assessment may require additional validation and contextualisation.
                            </li>
                            <li>
                            The assessment is time-intensive and is hence, heavily reliant on availability of resources.
                            </li>
                        </Typography>
                        
                </Grid>
                <Grid item xs={12} sm={12} lg={4} xl={4}>
                <Box style={{display:'flex', justifyContent:'center', marginTop:'0.5rem', marginBottom:'0.5rem'}}>
                            <Box style={{height:'1rem', width:'15rem', backgroundColor:'#fc636b'}} sx={{borderRadius:'16px'}}>

                            </Box>
                        </Box>
                        <Typography style={{color:'#000000',fontWeight:700}}>TARGET POPULATION</Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                          19-25
                        </Typography>
                        <Typography variant='body1' style={{color:'#000000'}}>
                        Students or graduates of general degree colleges
                        </Typography>
                </Grid>
            </Grid>

            <Box style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
                <Box sx={{
                    borderRadius: '26px'
                }}
                style={{
                    color:'#f1f1f1', 
                    fontWeight:700, 
                    PointerEvent:'all', 
                    backgroundColor: '#072948', 
                    paddingLeft:'2rem', 
                    paddingRight:'2rem',
                    height:'2.5rem', 
                    display:'flex' ,
                    flexDirection:'column' ,
                    justifyContent:'center'}}>
                    Learn More
                </Box>
                <Box sx={{
                    borderRadius: '19px'
                }}
                style={{
                    color:'#072948',
                    fontWeight:700, 
                    PointerEvent:'all', 
                    paddingLeft:'1.7rem', 
                    paddingRight:'1.7rem',
                    height:'2.1rem', 
                    display:'flex' ,
                    flexDirection:'column' ,
                    justifyContent:'center',
                    border:'4px solid #072948',
                    marginLeft:'0.5rem'
                    }}>
                    Download Tool
                </Box>
            </Box>
        </AccordionDetails>
      </Accordion>
    </div>
        </Container>
    </Fragment>
  )
}

export default LandingPage