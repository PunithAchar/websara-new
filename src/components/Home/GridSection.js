import { Avatar, Grid, Typography } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import React from 'react'

const GridSection = () => {
    return (
        <Grid spacing={2} className="gridsection-main">
            <Grid xs={12} md={4} className="gridsection-gridbox">
                <Avatar sx={{ bgcolor: "#00ab551a", width: 56, height: 56 }}>
                    <svg height="24" width="24" color='#00ab55' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path></svg>
                </Avatar>
                <h6 className='gridsection-title'>Built for developers</h6>
                <p className='gridsection-subtitle'>Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
            </Grid>
            <Grid xs={12} md={4} className="gridsection-gridbox">
                <Avatar sx={{ bgcolor: "#00ab551a", width: 56, height: 56 }}>
                    <svg height="24" width="24" color="#00ab55" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                </Avatar>
                <h6 className='gridsection-title'>Built for developers</h6>
                <p className='gridsection-subtitle'>Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
            </Grid>
            <Grid xs={12} md={4} className="gridsection-gridbox">
                <Avatar sx={{ bgcolor: "#00ab551a", width: 56, height: 56 }}>
                    <svg height="24" width="24" color="#00ab55" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </Avatar>
                <h6 className='gridsection-title'>Built for developers</h6>
                <p className='gridsection-subtitle'>Webbee is built to make your life easier. Variables, build tooling, documentation, and reusable components.</p>
            </Grid>
        </Grid>
    )
}

export default GridSection