import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  
  return (
    <Box sx={{marginTop:20, height:'100vh'}}>
      <Typography sx={{textAlign:'center', gap:5, height:'15%'}}>
      <TypeAnimation variant='h3'
      sequence={[
        'Hello World', 
        1000, 
        'Hola Mundo', 
        1000, 
        'Hola Mon', 
        1000,
        () => {}
      ]}
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em',fontWeight:'700' ,color:'white', }}
    />
      </Typography>
      <Typography sx={{textAlign: 'center', color:'white', height:'25%'}} variant='h1'>
        Matt Sandoval Balada
      </Typography>
      <Typography variant='h4' sx={{color:'white', textAlign:'center', height:'15%'}}>
         Junior Full-Stack Developer
      </Typography>

      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Button sx={{bgcolor:'white'}}><Link sx={{textDecoration:'none', color:'black'}}>CONTACT</Link></Button>
      </Box>
    </Box>
      
  )
}

export default Home