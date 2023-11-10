import React, {useState} from 'react'
import { 
    Container,
    Grid ,
    Box, 
    Divider

} from '@mui/material';


import MedhaLogo from '../../assets/images/medhaLogo.png';



const LandingPage = ()=> {

    const [isDownloading,setIsDownloading] = useState(false);




    const onButtonClick = (cardName) => {
        setIsDownloading(true);

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


        setTimeout(()=>{
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

                    setIsDownloading(false);

                });
            });
        },3000)
     
        
    };

  return (

    <>
            <Grid container style={{ display: 'flex' ,backgroundColor:'#31B89D', marginTop:0, marginBottom:0, justifyContent:'space-between', height:'90vh'}}>
                <Container>
                        <Grid container style={{ display: 'flex',marginTop:'10rem'}}>
                            <Grid item style={{ flex: 1 }} xs={6} sm={6} md={6} lg={6} xl={6} >
                                    <Box>
                                        <div className='header_sec'>EMPLOYABILITY</div>
                                        <div className='header_sec'>SKILLS INDICES:</div>

                                    </Box>
                                    <Box style={{ display: 'flex', alignItems: 'center',maxWidth:'35%' }}>
                                        <Divider style={{ flex: 1, backgroundColor: '#ffffff', height: '2px' , marginTop:'15px', marginBottom:'15px'}} />
                                    </Box>
                                    <Box sx={{marginTop:'10px'}}>
                                        <div className="header_body_sec">Principal Investigator &nbsp;<a href='https://faculty.wcas.northwestern.edu/lab823/' target="_blank" rel="noopener noreferrer">Lori Beaman</a> &nbsp;
and her team have undertaken the development, testing, and implementation of three distinct assessments to evaluate the employability impact of Medha's Career Advancement Bootcamp (CAB) through randomized controlled trials (RCTs).
                                        </div>
                                    </Box>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{textAlign:'right'}}>
                                <img src={MedhaLogo}  alt='Medha logo' className='logo-image'/>
                            </Grid>
                        </Grid>
                </Container>
            </Grid>
           

           <div style={{height:'90vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Container>
                    <Box display={'flex'} marginTop={4} marginBottom={4}>
                        <div style={{width:'15px', backgroundColor:'#FF9700'}}></div>
                        <div className='secondary_header_sec'>Toolkit</div>
                    </Box>
                    <div className='accordion_header_sec' id="interview_skills_sec">Career Readiness: Interview Skills</div>
                    <Grid container spacing={20}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <div style={{marginBottom:'30px'}}>
                                    <div className='box_header_sec' >ABOUT</div>
                                    <div className='box_body_sec'>
                                    Career readiness skills are best assessed through an interview process. The test simulates the first-round interview for hiring processes of a generalist role for students with little or no work experience. The assessment is a mock interview, scored on a standardized rubric that assesses the interviewee's ability to communicate their fit in an interview
                                    </div>
                                </div>
                                

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
                            </Box>

                                
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display="flex" flexDirection="column" justifyContent="space-between">
                        <Box>
                            <div className='box_header_sec'>TARGET POPULATION</div>
                                <div className='box_body_sec' style={{lineHeight:'30px'}}>
                                    <div>
                                    AGE <span className="age_span">19-25</span>

                                    </div>
                                    <div>
                                    Students or graduates of general degree colleges

                                    </div>
                                
                                </div>
                            </Box>

                            <Box>
                            <div className="box_body_sec button_footer_sec">
                                Click the options below to :
                            </div>
                            <Grid container sx={{marginTop:'15px',display:'flex', justifyContent:'space-between', alignItems:'center',}} spacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <a href="https://medhacorp-my.sharepoint.com/personal/cturillo_medha_org_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FInterview%20Preparation%2FMedha%20Interview%20Skills%5FLearn%20More%2Epdf&parent=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FInterview%20Preparation&ct=1698057618222&or=Teams%2DHL&ga=1&LOF=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                    <Box sx={{
                                        borderRadius: '26px'
                                    }} className="learnMoreButton">
                                        LEARN MORE
                                    </Box>
                                    </a>

                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                {isDownloading ? 
                                    <Box sx={{
                                        borderRadius: '19px'
                                        }}
                                        className='downloadToolButton'>
                                            DOWNLOADING...
                                        </Box>: <Box sx={{
                                        borderRadius: '19px'
                                        }}
                                        className='downloadToolButton'
                                        onClick={()=>onButtonClick('INTERVIEW SKILLS / CAREER READINESS')}
                                        >
                                        DOWNLOAD TOOL
                                    </Box>}
                                </Grid>

                            </Grid>
                            </Box>
                                
                                
                        </Grid>
                    </Grid>
                </Container>
           </div>
           <div style={{height:'90vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Container>
                    <div className='accordion_header_sec' id="interview_skills_sec">Career Planning</div>
                    <Grid container spacing={20}>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <div style={{marginBottom:'30px'}}>
                                    <div className='box_header_sec' >ABOUT</div>
                                    <div className='box_body_sec'>
                                    Career Planning is a function of self-awareness as well as an understanding of available career paths. This is assessed through a reflective, planning exercise in which the participants present a Plan A and a Plan B for their career, demonstrating their knowledge of job roles, career pathways, and progression
                                    </div>
                                </div>
                                

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
                            </Box>

                                
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display="flex" flexDirection="column" justifyContent="space-between">
                        <Box>
                            <div className='box_header_sec'>TARGET POPULATION</div>
                                <div className='box_body_sec' style={{lineHeight:'30px'}}>
                                <div>
                                AGE <span className="age_span">19-25</span>

                                </div>
                                <div>
                                Students or graduates of general degree colleges

                                </div>
                                
                                </div>
                            </Box>

                            <Box>
                            <div className="box_body_sec button_footer_sec">
                                Click the options below to :
                            </div>
                            <Grid container sx={{marginTop:'15px',display:'flex', justifyContent:'space-between', alignItems:'center',}} spacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                <a href="https://medhacorp-my.sharepoint.com/personal/cturillo_medha_org_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FCareer%20Planning%2FMedha%20Career%20Planning%5FLearn%20More%2Epdf&parent=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FCareer%20Planning&ct=1698062583868&or=Teams%2DHL&ga=1&LOF=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Box sx={{
                                    borderRadius: '26px'
                                }} className="learnMoreButton">
                                    LEARN MORE
                                </Box>
                                </a>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                {isDownloading ? 
                                    <Box sx={{
                                        borderRadius: '19px'
                                        }}
                                        className='downloadToolButton'>
                                            DOWNLOADING...
                                        </Box>: <Box sx={{
                                        borderRadius: '19px'
                                        }}
                                        className='downloadToolButton'
                                        onClick={()=>onButtonClick('CAREER PLANNING')}
                                        >
                                        DOWNLOAD TOOL
                                    </Box>}
                                </Grid>

                            </Grid>
                            </Box>
                                
                                
                        </Grid>
                    </Grid>
                </Container>
           </div>
           <div style={{height:'90vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <Container>
                    <div className='accordion_header_sec' id="interview_skills_sec">Team Work</div>
                    <Grid container spacing={20}>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box>
                                <div style={{marginBottom:'30px'}}>
                                    <div className='box_header_sec' >ABOUT</div>
                                    <div className='box_body_sec'>
                                    Team work is influenced by a number of life skills such as communication, empathy, problem-solving and leadership. In this survey, participants are assessed for their ability to understand instructions, and participate in team efforts. Traits such as initiative, creative problem-solving, and encouraging participation from others, are assessed.
                                    </div>
                                </div>
                                

                                <div className='box_header_sec'> LIMITATIONS</div>
                                <div className='box_body_sec'>
                                <li>
                                            The assessment was implemented in only one round of survey (midline assessment of the pilot cohort).                                </li>
                                            <li>
                                            The assessment may require additional validation and contextualisation.                                </li>
                                            <li>
                                            The assessment is time-intensive, and hence, heavily reliant on availability of resources.                                </li>
                                </div>
                            </Box> 
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display="flex" flexDirection="column" justifyContent="space-between">
                        <Box>
                            <div className='box_header_sec'>TARGET POPULATION</div>
                                <div className='box_body_sec' style={{lineHeight:'30px'}}>
                                    <div>
                                    AGE <span className="age_span">19-25</span>

                                    </div>
                                    <div>
                                    Students or graduates of general degree colleges

                                    </div>
                                
                                </div>
                            </Box>

                            <Box>
                            <div className="box_body_sec button_footer_sec">
                                Click the options below to :
                            </div>
                            <Grid container sx={{marginTop:'15px',display:'flex', justifyContent:'space-between', alignItems:'center',}} spacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                        <a href="https://medhacorp-my.sharepoint.com/personal/cturillo_medha_org_in/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FTeam%20Work%2FMedha%20Team%20Work%20Evaluation%5FLearn%20More%2Epdf&parent=%2Fpersonal%2Fcturillo%5Fmedha%5Forg%5Fin%2FDocuments%2FCore%20Programs%2FCP%20%2D%20Gardener%2FEmployability%20Skills%20Indices%20PDFs%2FTeam%20Work&ct=1698061028911&or=Teams%2DHL&ga=1&LOF=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <Box sx={{
                                            borderRadius: '26px'
                                        }} className="learnMoreButton">
                                            LEARN MORE
                                        </Box>
                                    </a>
                                </Grid>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    {isDownloading ? 
                                    <Box sx={{
                                        borderRadius: '19px'
                                        }}
                                        className='downloadToolButton'>
                                            DOWNLOADING...
                                        </Box>: <Box sx={{
                                        borderRadius: '19px'
                                        }}
                                        className='downloadToolButton'
                                        onClick={()=>onButtonClick('TEAM WORK')}
                                        >
                                        DOWNLOAD TOOL
                                    </Box>}
                                </Grid>

                            </Grid>
                            </Box>
                                
                                
                        </Grid>
                    </Grid>
                </Container>
           </div>
       

        <div className='footer_sec'>Toolkit designed and conceptualized by Shivani Sharma</div>
    </>
  )
}

export default LandingPage