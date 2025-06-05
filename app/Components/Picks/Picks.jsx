import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import picksData from '../../assets/ImgData.js';
import Buttons from '../Buttons/Buttons.jsx';

const Picks = () => {
    console.log("data >>", picksData)
    const PicksStyle = {
        backgroundColor: '#CD242B',
        boxSizing: 'border-box',
        flexDirection: 'column',
        paddingY: {xs: '1rem', md: '2rem', lg: '4rem'},
        position: 'relative',
        WebkitBoxOrient:'vertical',
        WebkitBoxDirection:'normal',
        width: '100%',
        '.mp-brush':{
            backgroundImage: {xs: `url('${picksData[0].brushImgMobile.src}')`, md: `url('${picksData[0].brushImgDesktop.src}')`},
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            position: 'absolute',
            height: {xs: '100%', sm: '1.75rem', md: '3.134rem'},
            left: {xs: '-5px', md: '-1.875rem'},
            top: {xs: '-29px', sm: '-33px', md: '-58px', lg: '-90px'},
            width: {xs: '100%', sm: '300px', md: '533.7px'},
            zIndex: 1
        },
        '.mp-rightSide':{
            backgroundImage: `url('${picksData[0].bg.src}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: {xs: 'contain'},
            height: {xs: '164px', sm: '356px', md: '464px'},
            position: 'absolute',
            right: {xs: '-23px', sm: 0, md: '45px'},
            top: {xs: '-20px', sm: '-55px', md: '-115px'},
            width: {xs: '207.77px', sm: '451.01px', md: '625px'}
        },
        'h4':{
            color: '#F8FD00',
            fontSize: {xs: '1.25rem', md: '1.5rem'},
            fontWeight: 600,
            lineHeight: {xs:'1.5rem', md: '2rem'},
            textTransform: 'uppercase'
        },
        '.flex-col-row':{flexDirection: { xs: 'column', sm: 'row' }}
    }
    return (
        <Box 
            component={'section'}
            sx={PicksStyle}
            className='flex'
        >
            <Container maxWidth='lg' sx={{position: 'relative'}}>
                <Box className='mp-rightSide' />
                <Box className='mp-brush'/>
                <Box className='flex align-end justify-between flex-col-row'>
                    <Typography component={'h4'}>
                        {picksData[0].title}
                    </Typography>
                    <Buttons text='test'/>
                </Box>
                <Box>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </Box>
            </Container>
        </Box>
    )
}

export default Picks
