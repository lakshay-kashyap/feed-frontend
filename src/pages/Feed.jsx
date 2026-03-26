
import React, { useState,useEffect } from 'react'
import axios from 'axios';
const Feed = ()=> {
    const API_URL = import.meta.env.VITE_API_URL;

    const [posts, setposts] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/posts`)
        .then((res)=>{
            setposts(res.data.post)
        }) 
            
        
    },[])

  return (
     <section className='feed'>
            <h1 className='decklist'>DeckLists</h1>
         {posts.length > 0 ? (
            posts.map((post,index)=>(
                <div key={index} className='post'>
                    <img src={post.image} alt={`Post ${index}`} />
                    <p>{post.caption}</p>
                    <button className='delete-btn' onClick={async()=>{
                        await axios.delete(`${API_URL}/delete-post/${post._id}`)
                        .then((res)=>{
                            alert(res.data.message)
                            setposts(posts.filter((p)=>p._id !== post._id))
                        })
                    }}>
                        Delete
                    </button>
                </div>
            ))
         ) : (
            <p>No posts available.</p>
         )}
          <button className='CreatePostBtn'>
            <a href='/create-post'>Create Post</a>
          </button>
     </section>    
  )
}

export default Feed