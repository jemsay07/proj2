import { Box, Button } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

const Buttons = ({
  fontSize,
  height,
  text,
  width,
}) => {
  console.log("text>>", text)
  const ButtonStyle = {
    boxSizing: 'border-box',
    backgroundColor: '#F8FD00',
    color: '#121212',
    cursor: 'pointer',
    fontSize: fontSize,
    fontWeight: 600,
    display: 'flex',
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    transition: '.5s',
    whiteSpace: 'nowrap',
    width: width,
    '&:hover, &:active':{
        backgroundColor: '#D5DA00',
    }
  }  
  return (
    <Box className='btnWrap'>
      <Button className='mp-btn' sx={ButtonStyle}>
        {text}
      </Button>
    </Box>
  )
}
Buttons.propTypes = {
  fontSize: PropTypes?.array,
  height: PropTypes?.array,
  text: PropTypes?.string,
  width: PropTypes?.array,
}

Buttons.defaultProps = {
  fontSize: { xs: '10px', md: '1rem' },
  height: { xs: 'inherit', sm: 'inherit', md: 'inherit', lg: 'inherit' },
  text: 'gravida',
  width: { xs: 'inherit', sm: 'inherit', md: 'inherit', lg: 'inherit' },
}

export default Buttons
