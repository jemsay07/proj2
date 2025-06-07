import { Box, Container } from '@mui/material'
import React from 'react'
import HeadingTitle from '../Heading/HeadingTitle'
import data from '../../assets/ImgData'

const Experience = () => {
    const dataExp = data?.expData;
    const ExperienceStyle = (theme) => ({
        backgroundColor: '#0038A8',
        paddingY: {xs: '24px', sm:'32px', md: '48px', lg: '64px'},
        '&:before':{
            content: '""',
            backgroundImage: `url('${dataExp.expBgSrc.src}')`,
            backgroundPosition: 'right top',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            height: {xs: '200px', md: '260px', lg: '100%'},
            margin: '0 auto',
            maxWidth: '1200px',
            position: 'absolute',
            right: '0px',
            left: 0,
            top: 0,
            width: {xs: '400px', md: '520px', lg: '100%'},
            zIndex: 1
        },
        '.mp-content': {
            height: '100%',
            position: 'relative',
            width: {xs: '100%', lg: '50%'},
            zIndex: 2,
        },
        '.mp-block':{
            flexDirection:'column',
            gap: '1.3rem',
            paddingBottom: {xs: '1rem', md: '2rem'},
        },
        '.txt':{
            color: '#fff',
            fontSize: '12px',
            lineHeight: '138%',
            [theme.breakpoints.up('lg')]:{
                '&.lg':{
                    fontSize: '1rem',
                    lineHeight: '24px',
                }
            },
            [theme.breakpoints.up('md')]:{
                '&.md':{
                    fontSize: '14px',
                    lineHeight: '20px',
                }
            },
        },
        '.mp-quote':{
            color: 'var(--white)',
            paddingX: {xs: '24px', md: '50px'},
            paddingBottom: {xs: '1rem', md: '2rem'},
            textAlign: 'center',
            '&:before, &:after': {
                background: `url('${dataExp.quoteImgSrc.src}') no-repeat`,
                backgroundSize: 'contain',
                content: '""',
                display: 'block',
                height: {xs: '24px', md: '50px'},
                filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))',
                position: 'absolute',
                width: {xs:'30.28px', md: '61px'},
            },
            '&:before':{
                top: 0,
                left:{xs: '5px', sm: '-10px'},
            },
            '&:after':{
                bottom: {xs: 0, md: '35px'},
                right: '-5px',
                transform: 'rotate(-180deg)',
            },
            '> span.txt':{
                fontSize: {xs: '18px', sm: '16px', md: '22px'},
                fontWeight: 800,
                lineHeight: {xs: '138%', sm: '22px', md: '20px', lg: '28px'},
                textAlign: 'center',
                textTransform: 'uppercase',
            },
        },
        '.gap20':{ gap: '20px'},
        '.mp-brush':{
            background: `url('${dataExp.brushImgBlue.src}') no-repeat`,
            backgroundSize: 'contain',
            position: 'absolute',
            height: {xs: '16px', sm: '1.75rem', md: '3.134rem'},
            right: {xs: '0', lg: '-32px'},
            bottom: {xs:'-32px', sm: '-45px',md: '-65px', lg: '-80px'},
            width: {xs: '171.43px', sm: '300px', md: '533.7px'},
            zIndex: 1,
            '&.bottom':{
                height: {sm: '28px', md: '50.14px'},
                width: {sm: '300px', md: '533.7px'}
            }
        },
    })
    return (
        <Box component={'section'} id='experience' className='relative' sx={ExperienceStyle}>
            <Container maxWidth='lg' className='relative'>
                <HeadingTitle text={dataExp.title} />
                <Box className="flex">
                    <Box className='mp-content gap20 flex flex-col'>
                        <Box className='flex mp-block' >
                            <Box component={'span'} className='txt md lg'>
                                {dataExp.txt1}
                            </Box>
                            <Box component={'span'} className='txt md lg'>
                                {dataExp.txt2}
                            </Box>
                        </Box>
                        <Box className='mp-quote relative'>
                            <Box component={'span'} className='txt'>
                                {dataExp.quoteText}
                            </Box>
                        </Box>
                        <Box className='flex flex-col gap20'>
                            <Box component={'span'} className='txt md lg'>
                                {dataExp.txt3}
                            </Box>
                            <Box component={'span'} className='txt md lg'>
                                {dataExp.txt4}
                            </Box>
                            <Box component={'span'} className='txt md lg'>
                                {dataExp.txt5}
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className='mp-brush bottom'></Box>
            </Container>
        </Box>
    )
}

export default Experience