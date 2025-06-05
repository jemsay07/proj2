import { Box, Button } from '@mui/material'
import React from 'react'

const Buttons = ({
    text = 'gravida'
}) => {
  const ButtonStyle = {
    boxSizing: 'border-box',
    backgroundColor: '#F8FD00',
    color: '#121212',
    cursor: 'pointer',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    transition: '.5s',
    whiteSpace: 'nowrap',
    '&:hover, &:active':{
        backgroundColor: '#D5DA00',
    }
  }  
  return (
    <Box>
      <Button className='mp-btn' sx={ButtonStyle}>
        {text}
      </Button>
    </Box>
  )
}

export default Buttons
