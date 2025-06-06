import { Box } from '@mui/material'
import React from 'react'

const PicksCardItem = ({
    data
}) => {
    console.log("swiper Uitem>>>", data)

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
        },
    }

    return (
        <Box className="mp-card-tile mp-hover" sx={Tile}>
            <img src={data.img.src}/>
        </Box>
    )
}

export default PicksCardItem
