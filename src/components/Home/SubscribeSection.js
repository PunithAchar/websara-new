import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const SubscribeSection = () => {


    return (
        <Box>
            <div className='subscribe-section'>
                <p className='sbc-get'>GET STARTED</p>
                <h3 className='sbc-title'>Get started with Websara today</h3>
                <h6 className='sbc-subtitle'>Build a beautiful, modern website with flexible, fully customizable, atomic Material-UI components.</h6>
                <form className="sbc-form">
                    <TextField variant='outlined' label="Email Address" color="success" size='small' fullWidth></TextField>
                    <Button variant='contained' color="success" size='small' style={{padding:"0px 10px", width:"100px"}}>Submit</Button>
                </form>
            </div>
        </Box>
    )
}

export default SubscribeSection