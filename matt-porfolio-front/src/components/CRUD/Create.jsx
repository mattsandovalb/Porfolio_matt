import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const url = 'http://127.0.0.1:8000/api/works'

const Create = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [github, setGithub] = useState('');
    const [deploy, setDeploy] = useState('');
    const navigate = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(url, {
            name : name, 
            description : description, 
            image : image, 
            technologies : technologies, 
            github : github, 
            deploy : deploy })
       navigate('/')
    }

  return (
    <div>
        <h3>Create</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'> Nombre </label>
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
                <label className='form-label'> Image</label>
                <input 
                value={image} 
                onChange={(e)=> setImage(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Technologies</label>
                <input 
                value={technologies} 
                onChange={(e)=> setTechnologies(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> GitHub</label>
                <input 
                value={github} 
                onChange={(e)=> setGithub(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Deploy</label>
                <input 
                value={deploy} 
                onChange={(e)=> setDeploy(e.target.value)} 
                type="text"  className='form-control'/>
            </div>
            <button type="submit" className='btn btn-success'>Store</button>
        </form>
    </div>
  )
}

export default Create;