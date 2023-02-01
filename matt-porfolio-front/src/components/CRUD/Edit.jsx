import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const url = 'http://127.0.0.1:8000/api/works/'


const Edit = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [github, setGithub] = useState('');
    const [deploy, setDeploy] = useState('');
  const navigate = useNavigate();
  const {id} = useParams()

  const update = async (e) => {
    e.preventDefault();
    await axios.put(`${url}${id}`, {
      name : name,
      description : description,
      image: image,
      technologies : technologies,
      github : github,
      deploy : deploy,

    } )
    navigate('/')
  }

  useEffect( () => {
    const getElementsById = async () => {
      const response = await axios.get(`${url}${id}`)
      
      setName(response.data.name);
      setDescription(response.data.description);
      setImage(response.data.image);
      setTechnologies(response.data.technologies);
      setGithub(response.data.github);
      setDeploy(response.data.deploy);
    }
    getElementsById();
  }, []) 

  return (
    <div>
              <h3>Edit</h3>
        <form onSubmit={update}>
            <div className='mb-3'>
                <label className='form-label'> Name </label>
                <input 
                value={name} 
                onChange={(e)=> setName(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Description </label>
                <input 
                value={description} 
                onChange={(e)=> setDescription(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Image </label>
                <input 
                value={image} 
                onChange={(e)=> setImage(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Technologies </label>
                <input 
                value={technologies} 
                onChange={(e)=> setTechnologies(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> GitHub </label>
                <input 
                value={github} 
                onChange={(e)=> setGithub(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Deploy </label>
                <input 
                value={deploy} 
                onChange={(e)=> setDeploy(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Edit</button>
        </form>
    </div>
  )
}

export default Edit;