import { Box, Container, Typography } from '@mui/material'
import React from 'react';
import PropTypes from 'prop-types' 

const Hero = ({data}) => {

  const TileStyle = {
    '&.mp-carousel-item':{
      color: '#fff',
      height: '100%',
      position: 'relative',
    },
    '.from-tablet-up':{display: {xs: 'none', sm:'block'}},
    '.up-to-tablet':{display: {xs: 'block', sm:'none'}},
    'img':{
      display: 'block',
      height: '100%',
      width: '100%',
      '&.mp-img':{
        objectFit: 'cover'
      }
    },
  }

  const MPContentStyle = {
    '&.mp-content':{
      display: '-webkit-box',
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      paddingY:'24px',
      textAlign: 'center',
      width: {xs: '50%', lg: '720px'},
      WebkitBoxAlign:'center',
      WebkitBoxOrient:'vertical',
      WebkitBoxDirection:'normal',
      WebkitBoxPack:'center',
      '&.paddingLeftBottom':{
        paddingLeft: {lg: '64px'},
        paddingBottom: {lg: '25px'}
      },
      'span': {
        display: 'block'
      }
    }
  }
  return (
    <Box component={'section'} sx={{
        backgroundColor: '#010101', 
        height: {xs: '61.5vw', sm: '53.5vw', md: '37.38vw', lg: "42.38vw"}, 
        paddingTop: '70px',
        maxHeight:{md: '487px', lg: '520px'}
      }}>
      <Container maxWidth='lg'  sx={(theme) => ({height: '100%', [theme.breakpoints.down('md')]:{paddingX: 0}})}>
        <Box className='tile mp-carousel-item h-inherit' sx={TileStyle}>
          <Box className='mp-carousel-item h-inherit'>
            <Box className='from-tablet-up h-inherit'>
              <img src={`${data?.bannerDesk.src}`} className='mp-img' alt='' />
            </Box>
            <Box className='up-to-tablet'>
              <img src={`${data?.bannerMobi.src}`} className='mp-img' alt='' />
            </Box>
            <Box className='mp-content paddingLeftBottom' sx={MPContentStyle}>
              <Typography component={'span'} className='mp-txt'>
                {data.logo}
              </Typography>
              <Typography component={'span'} className='mp-txt'>
                {data.text1}
              </Typography>
              <Typography component={'span'} className='mp-txt'>
                {data.text2}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

Hero.propTypes = {
  data: PropTypes.any
}

export default Hero
