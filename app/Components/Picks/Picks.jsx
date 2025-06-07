import React from 'react'
import { Box, Container } from '@mui/material'
import Buttons from '../Buttons/Buttons.jsx';
import PicksCardItem from './PicksCardItem.jsx';
import HeadingTitle from '../Heading/HeadingTitle.jsx';

import PropTypes from 'prop-types' 

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

const Picks = ({data, dataItem}) => {
    const PicksStyle = {
        backgroundColor: '#CD242B',
        boxSizing: 'border-box',
        flexDirection: 'column',
        paddingY: {xs: '2rem', md: '2rem', lg: '4rem'},
        position: 'relative',
        WebkitBoxOrient:'vertical',
        WebkitBoxDirection:'normal',
        width: '100%',
        '.mp-brush':{
            backgroundImage: {xs: `url('${data.brushImgMobile.src}')`, md: `url('${data.brushImgDesktop.src}')`},
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            position: 'absolute',
            height: {xs: '16px', sm: '1.75rem', md: '3.134rem'},
            left: {xs: '-5px', md: '-1.875rem'},
            top: {xs: '-40px', sm: '-46px', md: '-58px', lg: '-90px'},
            width: {xs: '171.43px', sm: '300px', md: '533.7px'},
            zIndex: 1,
            '&.bottom':{
                left: 'unset',
                top: 'unset',
                bottom: {xs:'-40px', sm: '-40px',md: '-45px', lg: '-80px'},
                right: {xs: '0', lg: '-32px'},
                height: {sm: '28px', md: '50.14px'},
                width: {sm: '300px', md: '533.7px'}
            }
        },
        '.mp-rightSide':{
            backgroundImage: `url('${data.bg.src}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: {xs: 'contain'},
            height: {xs: '164px', sm: '356px', md: '464px'},
            position: 'absolute',
            right: {xs: '-23px', sm: 0, md: '45px'},
            top: {xs: '-20px', sm: '-55px', md: '-115px'},
            width: {xs: '207.77px', sm: '370px',md: '451.01px', lg: '625px'},
            zIndex: {xs: '2'}
        },
        '.flex-col-row':{flexDirection: { xs: 'column', sm: 'row' }},
        '.swiper-holder':{
            margin: {xs: '-16px', lg: '-24px'},
            overflow: {xs: 'visible', md:'hidden'},
            padding: {xs: '16px', lg: '24px'},
            position: 'relative',
            zIndex: {xs: '2'},
            '.swiper':{ display: 'flex', height: '100%', overflow: 'visible', width: '100%' },
            '.swiper-slide': {width: 'max-content !important'},
        },
    }
    return (
        <Box
            component={'section'}
            sx={PicksStyle}
            className='flex'
            id='picks'
        >
            <Container maxWidth='lg' sx={{position: 'relative'}}>
                <Box className='mp-rightSide' />
                <Box className='mp-brush'/>
                <Box className='flex align-end justify-between flex-col-row relative' sx={{alignItems:{xs: 'flex-start'}, gap: '8px', paddingBottom: {xs: '1rem', md: '2rem'}, zIndex: {xs: '2'}}} >
                    <HeadingTitle
                        text={data.title}
                    />
                    <Buttons text='pharetra'/>
                </Box>
                <Box className='swiper-holder'>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={false}
                        pagination={false}
                        scrollbar={false}
                        breakpoints={{
                            0: {
                                slidesPerView: 1.4,
                                spaceBetween: 10,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 14,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 16,
                            },
                        }}
                    >
                        <>
                            {
                                dataItem?.map((data, key) => {
                                    return(
                                        <SwiperSlide 
                                            key={key}
                                            
                                        >
                                            <PicksCardItem
                                                data={data}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </>
                    </Swiper>
                </Box>
                <Box className='mp-brush bottom'/>
            </Container>
        </Box>
    )
}

Picks.propTypes = {
    data: PropTypes.any,
    dataItem: PropTypes.any,
}

export default Picks
