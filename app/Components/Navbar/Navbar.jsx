import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, Link, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const pages = ['Home', 'Picks', 'Experience',"Videos"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <Box>
      <AppBar position='fixed' elevation={0} sx={{backgroundColor: '#222939',  paddingY: '5px'}}>
        <Container maxWidth='lg'>
          <Box className='flex align-center justify-between'sx={{height: '60px',}}>
            <Box component='h1' sx={{ fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase' }}>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: '#fff' }}>
                Logo Here
              </Typography>
            </Box>
            <Box component={'nav'} sx={{ display: { xs: 'none', md: 'flex' }, gap: '20px' }}>
              {pages.map((page) => (
                <Link 
                  key={page} 
                  color='inherit'
                  underline='none'
                  href={`#${page.toLowerCase().replace(/\s+/g, '-')}`}
                  sx={{
                    lineHeight: '56px',
                    '&:hover': {
                      color: '#CAAB72',
                      transition: 'color 0.3s ease-in-out',
                      textDecoration: 'none',
                    },
                  }}
                >
                  {page}
                </Link>
              ))}

            </Box>
            <Box sx={{ display: {xs:'flex', md: 'none'}, gap: '20px' }}>
              {/* Add your navigation items here */}
              <IconButton 
                size='large'
                color='inherit'
                aria-label='menu'
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <Box 
                  component={'nav'}
                  sx={{
                    display: anchorElNav ? 'flex' : 'none',
                    flexDirection: 'column',
                    position: 'fixed',
                    top: 0,
                    right: 0,
                    backgroundColor: '#222939',
                    boxShadow: 0,
                    zIndex: 10,
                    height: '100vh',
                    width: '200px',
                    padding: '20px',
                    transition: 'transform 0.3s ease-in-out',
                    lineHeight: '50px'
                  }}
                  onClose={handleCloseNavMenu}
                >
                  <Box sx={{display: 'flex', justifyContent: 'end'}}>
                    <IconButton 
                      size='meduim'
                      color='inherit'
                      aria-label='close menu'
                      sx={{
                        borderRadius: '5px',
                        justifyContent: 'flex-end',
                        width: '38px'
                      }}
                      onClick={handleCloseNavMenu}
                    >
                      <CloseIcon fontSize='inherit'/>
                    </IconButton>
                  </Box>
                  
                  {pages.map((page) => (
                    <Link 
                      key={page}
                      underline='none'
                      href={`#${page.toLowerCase().replace(/\s+/g, '-')}`}
                      sx={{
                        color: '#fff',
                        '&:hover': {
                          color: '#CAAB72',
                          transition: 'color 0.3s ease-in-out',
                          textDecoration: 'none',
                        },
                      }}
                    >
                      {page}
                    </Link>
                  ))}

                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Navbar
