import { Box, Container } from '@mui/material'
import React from 'react'


const Experience = () => {
    const ExperienceStyle= {
        backgroundColor: '#0038A8',
        paddingY: {xs: '24px', sm:'32px', md: '48px', lg: '64px'}
    }
    return (
        <Box component={'section'} id='experience' sx={ExperienceStyle}>
            <Container maxWidth='lg'>
                Hello
            </Container>
        </Box>
    )
}

export default Experience
