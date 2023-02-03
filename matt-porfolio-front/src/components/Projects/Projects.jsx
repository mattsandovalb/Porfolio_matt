import React, { useEffect, useState } from 'react'
import CardProject from '../CardProject/CardProject'
import Box from '@mui/material/Box';
import axios from 'axios';

const Projects = () => {

  const [data, setData] = useState([])

  const getData = async () => {
    const { data } = await axios.get('http://127.0.0.1:8000/api/works/', {
      headers: {
        "Access-Control-Allow-Origin" : "*",
        "Content-type": "Application/json",
      }
    })
    setData(data)
  }
  useEffect(() => {
    getData()
  }, [])



  return (
    <Box sx={{display: 'flex', justifyContent: {sm:'center', md:'center'}, bgColor:'inherit', flexDirection:'column'}}>

    {data.map(works =>( 
      <CardProject works = {works}/>
))}
    </Box>
  )
}

export default Projects