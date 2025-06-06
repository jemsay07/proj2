import { Box } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import Buttons from '../Buttons/Buttons'

const PicksCardItem = ({
    data
}) => {
    const Tile = {
        position: 'relative',
        cursor: 'pointer',
        width: '100%',
        '&.mp-card-tile':{
            borderRadius: {xs: '4px', lg: '8px'},
            color: '#000',
            filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, .25))',
            width: {xs: '260px', sm: '306.11px', md: '336px', lg: '567px'},
            'img':{
                display: 'block',
                height: '100%',
                maxWidth: '100%'
            },
            '&:hover.mp-hover':{
                transition: 'all .5s ease'
            },
            '.mp-info-box':{
                display: 'flex',
                justifyContent: 'flex-end',
                padding: {xs: '0 32px 15px 32px', md: '0 40px 20px 40px', lg: '0 56px 40px 56px'},
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '100%',
            }
        },
    }

    const fontSize = {xs: '10px', md: '0.75rem',lg: '1rem'}
    const height = {xs: '25px', md: '28px', lg: '45px'}
    const width = {xs: '100%', md: '97.5px', lg: '150px'}

    return (
        <Box className="mp-card-tile mp-hover" sx={Tile}>
            <img src={data.img.src} alt={data.title} />
            <Box
                className='mp-info-box'
            >
                <Buttons
                    text={'facilisis'}
                    fontSize={fontSize}
                    height={height}
                    width={width}
                />
            </Box>
        </Box>
    )
}

PicksCardItem.propTypes = {
    data: PropTypes.shape({
        img: PropTypes.shape({
            src: PropTypes.string.isRequired
        }).isRequired,
        title: PropTypes.string
    }).isRequired
}

export default PicksCardItem
