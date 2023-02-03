import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const Home = () => {
  
  return (
    <Box sx={{ display:'flex',flexDirection:'column',height:'100vh',  bgcolor: 'background.default', justifyContent:'center'}}>
      <Typography sx={{ textAlign:'center', gap:5, height:'15%', color:'text.secondary'}}>
      <TypeAnimation variant='h2'
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
      style={{FontSize: '3em',fontWeight:'700' ,color:'text.secondary'}}
    />
      </Typography>
      <Typography sx={{color:'text.secondary',textAlign: 'center', height:'25%', fontSize:{xs:50, md:80, xl:150}}} variant='h1'>
        Matt Sandoval Balada
      </Typography>
      <Typography variant='h4' sx={{color:'text.secondary', textAlign:'center', height:'15%', marginTop: {md:5, xl:10},fontSize:{xs:20, md:40, xl:50}}}>
         Junior Full-Stack Developer
      </Typography>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Button sx={{BgColor:'button.secondary'}}><Link sx={{textDecoration:'none', color:'text.secondary'}}>CONTACT</Link></Button>
      </Box>
    </Box>
  )
}

export default Home