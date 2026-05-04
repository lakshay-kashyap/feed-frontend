import React, { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const fileRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    await axios.post(`${API_URL}/create-post`, formData);

    navigate("/feed");
  };

  const openCamera = () => {
    fileRef.current.setAttribute("capture", "environment");
    fileRef.current.click();
  };

  const openGallery = () => {
    fileRef.current.removeAttribute("capture");
    fileRef.current.click();
  };

  return (
    <section className='create-post'>
      <h1 className='createposth'>Create Post</h1>

      {/* hidden file input */}
      <input
        ref={fileRef}
        type="file"
        name="image"
        accept="image/*"
        style={{ display: "none" }}
      />

      {/* explicit options */}
      <button type="button" onClick={openCamera}>
        📷 Camera
      </button>

      <button type="button" onClick={openGallery}>
        🖼 Gallery
      </button>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="caption"
          placeholder="Enter Caption"
          required
        />

        <button type="submit">Create Post</button>
      </form>
    </section>
  );
};

export default CreatePost;