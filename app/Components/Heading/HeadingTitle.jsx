import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types';


const HeadingTitle = ({
    color= "#F8FD00",
    fontSize = {xs: '1.25rem', md: '1.5rem'},
    text = 'Ut tempus nisl a ante',
}) => {
    const TitleStyle = {
        '&.title':{
            color: color,
            fontSize: fontSize,
            fontWeight: 600,
            lineHeight: {xs:'1.5rem', md: '2rem'},
            paddingBottom: {xs: '1rem', md: '2rem'},
            textTransform: 'uppercase',
        }
    }
    return (
        <Typography component={'h4'} className='title' sx={TitleStyle}>
            {text}
        </Typography>
    )
}

HeadingTitle.propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.array,
    text: PropTypes.string,
}

export default HeadingTitle
