import React, {useState} from 'react'
import { 
    Container,
    Grid ,
    Box, 
    Divider

} from '@mui/material';


import MedhaLogo from '../../assets/images/medhaLogo.png';
import BannerPattern from '../../assets/images/BannerPattern.png'



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
            <Grid container style={{ display: 'flex' ,backgroundColor:'#31B89D', marginTop:0, marginBottom:0, justifyContent:'space-between', height:'100%'}}>
                <Container maxWidth="xl">
                        <Grid container style={{ display: 'flex', justifyContent:"space-between", marginTop:'10px'}}>
                            <Grid item style={{ flex: 1 }} xs={6} sm={6} md={6} lg={6} xl={6} >
                                    <div className='header_sec'>Toolkit for Assessing Employability and Life skills</div>
                                    <Box style={{ display: 'flex', alignItems: 'center',maxWidth:'40%' }}>
                                        <Divider style={{ flex: 1, backgroundColor: '#ffffff', height: '2px',marginBottom:'10px'}} />
                                    </Box>
                                    <Box>
                                        <div className="header_body_sec">
                                            <div style={{marginTop:'10px', marginBottom:'10px'}}>
                                            Navigating the school-to-work transition in India presents an immense challenge that remains significantly under-researched. India confronts a critical employability crisis—despite increased enrollment and advancements in education, the outcomes for educated youth have regrettably declined and grown more disparate.
                                            </div>
                                            <div style={{marginTop:'10px', marginBottom:'10px'}}>
                                            In an era where substantial investments have been directed toward skilling India's youth, remarkably little research has been conducted to discern the efficacy of these efforts. Recognizing this gap, J-PAL and Medha partnered to evaluate an intervention aimed at tackling the pressing employability crisis.

                                            </div>
                                            <div style={{marginTop:'10px', marginBottom:'10px'}}>
                                            Principal Investigator &nbsp;<a href='https://faculty.wcas.northwestern.edu/lab823/' target="_blank" rel="noopener noreferrer">Lori Beaman</a> &nbsp; and her team have undertaken the development, testing, and implementation of three distinct assessments to evaluate the impact of Medha's Career Advancement Bootcamp (CAB) through randomized controlled trials (RCTs). These assessment tools are made available as a public resource for practitioners working to enhance career readiness skills in the school-to-work space in the Indian subcontinent.

                                            </div>
                                            <div style={{marginTop:'10px', marginBottom:'10px'}}>
                                            Our collaboration endeavors to shed light on what truly works and what doesn’t in addressing this challenge, forging a path toward informed, evidence-based solutions that can empower India's youth to thrive in the workforce.
                                            Lori A. Beaman, Northwestern University

                                            </div>
                                        </div>
                                    </Box>
                                    
                            </Grid>
                            <Grid item>
                                <img src={MedhaLogo}  alt='Medha logo' className='logo-image'/>
                            </Grid>
                        </Grid>
                        <img src={BannerPattern} alt='Banner' className='banner-pattern'></img>
                </Container>
            </Grid>
           

           <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', height:'100%', marginTop:'1rem'}}>
                <Container className='secondary_section' maxWidth="xl">
                    <Box display={'flex'}>
                        <div style={{width:'15px', backgroundColor:'#FF9700'}}></div>
                        <div className='secondary_header_sec'>Toolkit</div>
                    </Box>
                    <div className='accordion_header_sec' id="interview_skills_sec">Career Readiness: Interview Skills</div>
                    <Container>
                        <Grid container display="flex" justifyContent="space-between">
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Box>
                                    <div style={{marginBottom:'30px'}}>
                                        <div className='box_header_sec' >About</div>
                                        <div className='box_body_sec'>
                                        Career readiness skills are best assessed through an interview process. The test simulates the first-round interview for hiring processes of a generalist role for students with little or no work experience. The assessment is a mock interview, scored on a standardized rubric that assesses the interviewee's ability to communicate their fit in an interview.
                                        </div>
                                    </div>
                                    

                                    <div className='box_header_sec'> Limitations</div>
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
                                <div className='box_header_sec'>Target Population</div>
                                    <div className='box_body_sec' style={{lineHeight:'30px', marginTop:'15px'}}>
                                        <div>
                                        AGE <span className="age_span">19-25 Years</span>

                                        </div>
                                        <div>
                                        Students or graduates of general degree colleges

                                        </div>
                                    
                                    </div>
                                </Box>

                                <Box>
                                <div className="font-Lato-regular-500">
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
                </Container>
           </div>
           <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', height:'100%', marginTop:'1.5rem'}}>
                <Container className='secondary_section' maxWidth="xl">
                    <div className='accordion_header_sec' id="interview_skills_sec">Career Planning</div>
                    <Container>
                        <Grid container display="flex" justifyContent="space-between">
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Box>
                                    <div style={{marginBottom:'30px'}}>
                                        <div className='box_header_sec' >About</div>
                                        <div className='box_body_sec'>
                                        Career Planning is a function of self-awareness as well as an understanding of available career paths. This is assessed through a reflective, planning exercise in which the participants present a Plan A and a Plan B for their career, demonstrating their knowledge of job roles, career pathways, and progression.
                                        </div>
                                    </div>
                                    

                                    <div className='box_header_sec'> Limitations</div>
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
                                <div className='box_header_sec'>Target Population</div>
                                    <div className='box_body_sec' style={{lineHeight:'30px', marginTop:'15px'}}>
                                        <div>
                                        AGE <span className="age_span">19-25 Years</span>

                                        </div>
                                        <div>
                                        Students or graduates of general degree colleges

                                        </div>
                                    
                                    </div>
                                </Box>

                                <Box>
                                <div className="font-Lato-regular-500">
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
                </Container>
           </div>
           <div style={{ display:'flex', flexDirection:'column', justifyContent:'center', height:'100%', marginTop:'2rem'}}>
                <Container className='secondary_section' maxWidth="xl">
                    <div className='accordion_header_sec' id="interview_skills_sec">Team Work</div>
                    <Container>
                        <Grid container display="flex" justifyContent="space-between">
                            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                                <Box>
                                    <div style={{marginBottom:'30px'}}>
                                        <div className='box_header_sec' >About</div>
                                        <div className='box_body_sec'>
                                        Team work is influenced by a number of life skills such as communication, empathy, problem-solving and leadership. In this survey, participants are assessed for their ability to understand instructions, and participate in team efforts. Traits such as initiative, creative problem-solving, and encouraging participation from others, are assessed.
                                        </div>
                                    </div>
                                    

                                    <div className='box_header_sec'> Limitations</div>
                                    <div className='box_body_sec'>
                                        <li>
                                        The assessment was implemented in only one round of survey (midline assessment of the pilot cohort).                                </li>
                                        
                                        <li>
                                        The assessment may require additional validation and contextualisation.                                        </li>
                                        <li>
                                        The assessment is time-intensive, and hence, heavily reliant on availability of resources.            
                                        </li>
                                    </div>
                                </Box>

                                    
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} display="flex" flexDirection="column" justifyContent="space-between">
                            <Box>
                                <div className='box_header_sec'>Target Population</div>
                                    <div className='box_body_sec' style={{lineHeight:'30px', marginTop:'15px'}}>
                                        <div>
                                        AGE <span className="age_span">19-25 Years</span>

                                        </div>
                                        <div>
                                        Students or graduates of general degree colleges

                                        </div>
                                    
                                    </div>
                                </Box>

                                <Box>
                                <div className="font-Lato-regular-500">
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
                </Container>
           </div>
        <div className='footer_sec'>Toolkit designed and conceptualized by Shivani Sharma</div>
    </>
  )
}

export default LandingPage