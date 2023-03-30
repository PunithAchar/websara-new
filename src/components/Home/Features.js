import { Box, Button } from '@mui/material'
import React from 'react'
import FeatureSectionSvg from '../../svgs/FeatureSectionSvg'
import FeaturesCard from './FeaturesCard'

const Features = () => {
    return (
        <Box sx={{marginBottom:"30px"}}>
            <div className='feature-main'>
                <p className='feture-name'>Features</p>
                <h3 className='feature-title'>
                    The powerful and flexible theme
                    <br />
                    for all kinds of businesses
                </h3>
                <p className='feature-subtitle'>Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI components.
                    <br />
                    An experience you'd expect from a design system.</p>
                <Button variant='contained' color="success">Contact us</Button>
                <Box height={'75%'} width={'100%'} maxWidth={600} className="sec-1-svg" >
                    <FeatureSectionSvg />
                </Box>
            </div>
            <FeaturesCard/>
        </Box>
    )
}

export default Features