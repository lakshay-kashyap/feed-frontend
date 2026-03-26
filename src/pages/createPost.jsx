import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreatePost = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData(e.target);
    await axios.post(`${API_URL}/create-post`,formData)
    .then((res)=>{
      navigate("/feed")
    })
    
  }

  return (
    <section className='create-post'>
       <h1 className='createposth'>Create Post</h1>
       <form onSubmit={handleSubmit}>
        <input type="file" name='image' accept='image/*' />
        <input type="text" name='caption' placeholder='Enter Caption' required/>
        <button>Create Post</button>
       </form>
    </section>
  )
}

export default CreatePost