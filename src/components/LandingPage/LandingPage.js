import React, {Fragment} from 'react'
import { 
    Container,
    Grid ,
    Box, 
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails

} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import MedhaLogo from '../../assets/images/medhaLogo.png';



const LandingPage = ()=> {

    const onButtonClick = (cardName) => {
        let pdfUrl;
        let fileName;

        if (cardName === 'INTERVIEW SKILLS / CAREER READINESS'){
            pdfUrl = require("../../assets/pdf/Interview_Skills_Evaluation_Download_Tool.pdf");
            fileName = "Interview_Skills_Evaluation_Download_Tool.pdf";
        }
        else if (cardName === 'CAREER PLANNING'){
            pdfUrl = require("../../assets/pdf/Medha_Career_Planning_Download_Tool.pdf");
            fileName = "Medha_Career_Planning_Download_Tool.pdf";
        }
        else {
            pdfUrl = require("../../assets/pdf/Medha_Team_Work_Evaluation_Download_Tool.pdf");
            fileName = "Medha_Team_Work_Evaluation_Download_Tool.pdf"
        }


     
        // using Java Script method to get PDF file
        fetch(pdfUrl).then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download =fileName;
                alink.click();
            });
        });
    };

  return (

    <Fragment>
        <Container>
            <Grid container style={{ display: 'flex' }} marginTop={5} marginBottom={5}>
                <Grid item style={{ flex: 1 }} xs={12} sm={12} md={6} lg={6} xl={6} >
                    <Box>
                        <div className='header_sec'>EMPLOYABILITY</div>
                        <div className='header_sec'>SKILLS INDICES:</div>
                        <div  style={{ color:'#fc636b'}} className='header_sec'> TOOLKIT</div>
                    </Box>
                    <Box style={{ display: 'flex', alignItems: 'center' }}>
                        <Divider style={{ flex: 1, backgroundColor: '#12314c', height: '2px' , marginTop:'15px', marginBottom:'15px'}} />
                    </Box>
                    <Box sx={{marginTop:'10px'}}>
                        <div className="header_body_sec">
                            Developed and utilized for RCT Evaluation of Medha's CAB program Principal Investigator Lori Beaman and team developed, tested and implemented three assessments for measuring distinct employability
                        </div>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Box>
                        <img src={MedhaLogo} style={{width:'100px', height:'100px'}} alt='Medha logo' className='logo-image'/>
                    </Box>
                </Grid>
            </Grid>
            <Box style={{marginTop:'25px', marginBottom:'25px'}}>
                <div className='secondary_header_sec'>EMPLOYABILITY SKILLS INDICES</div>
            </Box>
            
            <div>
                <Accordion style={{ backgroundColor: '#072948', color: 'white' , marginBottom:'1rem'}} defaultExpanded={true}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className='accordion_header_sec'>INTERVIEW SKILLS / CAREER READINESS</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: 'white', color:'red'}}>
                        <Grid container style={{ display: 'flex', }} spacing={2}>
                            <Grid item style={{ flex: 1 }} xs={12} sm={12} md={6} lg={4} xl={4} >
                                <div className='box_header_sec' >ABOUT</div>
                                <div className='box_body_sec'>
                                    Career readiness or interview skills are best assessed through an interview process. The test simulates the
                                    first-round interviews for hiring processes of a generalist role for freshers with little or no work experience.
                                    The assessment is a mock interview scored on a standardised rubric which assesses the interviewee's ability to communicate their fit in an interview.
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                            
                                    <div className='box_header_sec'> LIMITATIONS</div>
                                    <div className='box_body_sec'>
                                        <li>
                                        This is a human-administered test and hence, the results can be influenced by individual bias.
                                        </li>
                                        <li>
                                        The assessment criteria is applicable only for generalist roles. It does not apply to technical roles.
                                        </li>
                                        <li>
                                        The survey relies on availability of a steady phone or internet network as it is administered online.
                                        </li>
                                    </div>
                                    
                            </Grid>
                            <Grid item xs={12} sm={12} lg={4} xl={4}>
                                    <div className='box_header_sec'>TARGET POPULATION</div>
                                    <div className='box_body_sec'>
                                    19-25
                                    </div>
                                    <div className='box_body_sec'>
                                    Students or graduates of general degree colleges
                                    </div>
                            </Grid>
                        </Grid>

                        <Box style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
                            <a href="https://medhacorp-my.sharepoint.com/personal/cturillo_medha_org_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FInterview%20Preparation%2FMedha%20Interview%20Skills%5FLearn%20More%2Epdf&parent=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FInterview%20Preparation&ct=1698057618222&or=Teams%2DHL&ga=1&LOF=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
                                justifyContent:'center'}}
                                className='button_text'
                                >
                                Learn More
                            </Box>
                            </a>
                            
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
                                }}
                                className='button_text'
                                onClick={()=>onButtonClick('INTERVIEW SKILLS / CAREER READINESS')}
                                >
                                Download Tool
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ backgroundColor: '#072948', color: 'white' ,marginBottom:'1rem'}} defaultExpanded={true}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className='accordion_header_sec'>CAREER PLANNING</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: 'white', color:'red'}}>
                        <Grid container style={{ display: 'flex', }} spacing={2}>
                            <Grid item style={{ flex: 1 }} xs={12} sm={12} md={6} lg={4} xl={4} >
                                <div className='box_header_sec'>ABOUT</div>
                                <div className='box_body_sec'>
                                Career Planning is a function of self-awareness as well as an understanding of available career paths. This is assessed through a reflective, planning exercise in which the participants presents Plan A and a Plan B for their career, demonstrating their knowledge of job roles, career pathways and progression.
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                    <div className='box_header_sec'> LIMITATIONS</div>
                                    <div className='box_body_sec'>
                                        <li>
                                        This assessment is evaluated by trained enumerators and is hence limited by fallibility of enumerator training and possible bias.
                                        </li>
                                        <li>
                                    The survey assesses only early years (0-2) of career planning.
                                        </li>
                                        <li>
                                        The survey has not been validated in settings of technical/vocational education institutions.
                                        </li>
                                    </div>
                                    
                            </Grid>
                            <Grid item xs={12} sm={12} lg={4} xl={4}>
                                    <div  className='box_header_sec'>TARGET POPULATION</div>
                                    <div className='box_body_sec'>
                                    19-25
                                    </div>
                                    <div className='box_body_sec'>
                                    Students or graduates of general degree colleges
                                    </div>
                            </Grid>
                        </Grid>

                        <Box style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>

                            <a href="https://medhacorp-my.sharepoint.com/personal/cturillo_medha_org_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FCareer%20Planning%2FMedha%20Career%20Planning%5FLearn%20More%2Epdf&parent=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FCareer%20Planning&ct=1698062583868&or=Teams%2DHL&ga=1&LOF=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
                                justifyContent:'center'}}
                                className='button_text'
                                >
                                Learn More
                            </Box>
                            </a>
                            
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
                                }} 
                                className='button_text'
                                onClick={()=>onButtonClick('CAREER PLANNING')}
                                >
                                Download Tool
                            </Box>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{ backgroundColor: '#072948', color: 'white' ,marginBottom:'1rem'}} defaultExpanded={true}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: 'white' }}/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <div className='accordion_header_sec'>TEAM WORK</div>
                    </AccordionSummary>
                    <AccordionDetails style={{ backgroundColor: 'white', color:'red'}}>
                        <Grid container style={{ display: 'flex', }} spacing={2}>
                            <Grid item style={{ flex: 1 }} xs={12} sm={12} md={6} lg={4} xl={4} >
                                <div  className='box_header_sec'>ABOUT</div>
                                <div  className='box_body_sec'>
                                Team work is influenced by a number of life skills such as communication, empathy, problem solving and leadership. In this survey, participants are assessed for their ability to understand instructions, and participate in team efforts. Traits like initiative, creative problem-solving and encouraging participation from others 
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                    <div className='box_header_sec'> LIMITATIONS</div>
                                    <div className='box_body_sec'>
                                        <li>
                                        The assessment was implemented in only round of survey (midline assessment of pilot cohort).</li>
                                        <li>
                                        The assessment may require additional validation and contextualisation.
                                        </li>
                                        <li>
                                        The assessment is time-intensive and is hence, heavily reliant on availability of resources.
                                        </li>
                                    </div>
                                    
                            </Grid>
                            <Grid item xs={12} sm={12} lg={4} xl={4}>
                                    <div className='box_header_sec'>TARGET POPULATION</div>
                                    <div className='box_body_sec'>
                                    19-25
                                    </div>
                                    <div className='box_body_sec'>
                                    Students or graduates of general degree colleges
                                    </div>
                            </Grid>
                        </Grid>

                        <Box style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'15px'}}>
                            <a href="https://medhacorp-my.sharepoint.com/personal/cturillo_medha_org_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FTeam%20Work%2FMedha%20Team%20Work%20Evaluation%5FLearn%20More%2Epdf&parent=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FTeam%20Work&ct=1698061028911&or=Teams%2DHL&ga=1&LOF=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
                                justifyContent:'center'}}
                                className='button_text'

                                >
                                Learn More
                            </Box>
                            </a>
                            
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
                                }}

                                className='button_text'
                                onClick={()=>onButtonClick('TEAM WORK')}
                                >
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