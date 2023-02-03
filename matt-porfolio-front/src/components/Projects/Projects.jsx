import React from 'react'
import CardProject from '../CardProject/CardProject'
import Box from '@mui/material/Box';

const Projects = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: {sm:'center', md:'center'}}}>

    <CardProject/>
    </Box>
  )
}

export default Projects