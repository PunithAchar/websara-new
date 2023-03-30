import { Box, Divider } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <Divider />
            <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", textAlign:"center",alignItems:"center", margin:"30px 15px", lineHeight:"2"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" fill="none" viewBox="0 0 95 71"><rect width="16.811" height="68.926" x="0.664" y="7.769" fill="#00AB55" stroke="#00AB55" rx="8.406" transform="rotate(-25 .664 7.77)"></rect><rect width="16.811" height="68.926" x="28.665" y="7.769" fill="#00AB55" stroke="#00AB55" rx="8.406" transform="rotate(-25 28.665 7.77)"></rect><rect width="16.811" height="16.81" x="78.769" y="0.664" fill="#00AB55" stroke="#00AB55" rx="8.405" transform="rotate(25 78.77 .664)"></rect></svg>
                <h6>© Websara. 2023 All rights reserved</h6>
                <p style={{fontSize:"10px"}}>When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</p>
            </Box>
        </div>
    )
}

export default Footer