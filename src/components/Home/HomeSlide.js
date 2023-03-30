import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import HomeSectionSvg from '../../svgs/HomeSectionSvg'
import "./Main.css"

const HomeSlide = () => {
    return (
        <div className="main-home-1">
            <Container fixed>
                <Box >
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}  className="main-grid-sec-1">
                        <Grid item xs={12} md={6}>
                            <h2 variant='h2' className="sec-1-title">
                                Turn your ideas <br/>
                                into a <span style={{color:"#00ab55"}}>success.</span> 
                            </h2>
                            <p className='sec-1-subtitle'>
                            Webbee will make your product look modern and professional while saving you precious time.
                          </p>
                          <Box sx={{display:"flex", gap:"20px"}}>
                            <Button variant='contained' color="success" sx={{backgroundColor:"#00ab55", width:"200px"}}>Subscribe</Button>
                            <Button variant='outlined' color="success" sx={{ width:"200px"}}>Contact Us</Button>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <Box height={'75%'} width={'100%'} maxWidth={600} className="sec-1-svg" >
                                <HomeSectionSvg />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default HomeSlide