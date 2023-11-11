"use client"
import React, { useState, useEffect } from "react";
import "./Blogs.css";
import axios from "axios"; // Import Axios library

import Header from "../../components/blogsHeader/Header.jsx";
import BlogCard from "@/components/blogsCard/BlogCard.jsx";
import FilterBlog from "@/components/BlogsFilter/FilterBlog.jsx";


const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [likedBlogs, setLikedBlogs] = useState([]);

  useEffect(() => {
    getBlogs(); // Fetch blogs when component mounts
  setLikedBlogs(JSON.parse(localStorage.getItem("likedBlogs"))||[])
  }, []);

  const getBlogs = () => {
    axios
      .get("http://localhost:3001/blogs/getAll", { headers: { "Cache-Control": "no-store" } })
      .then((response) => {
 
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  const handleVuee = () => {
    getBlogs()
  };
if(!blogs){
  return null
}
const handleLikes = (id) => {
  if (!likedBlogs.includes(id)) {
    axios
      .put(`http://localhost:3001/blogs/updateLikes/${id}`, { like: "+1" })
      .then((res) => {
        handleVuee();
        const updatedLikedBlogs = [...likedBlogs, id];
        console.log("up",updatedLikedBlogs)
        setLikedBlogs(updatedLikedBlogs);
        localStorage.setItem("likedBlogs", JSON.stringify(updatedLikedBlogs)); 
      })
      .catch((err) => console.log(err));
    } else {
      
      axios
      .put(`http://localhost:3001/blogs/updateLikes/${id}`, { like: "-1" })
      .then((res) => {
        console.log('time')
        handleVuee();
        const updatedLikedBlogs = likedBlogs.filter((like) => like !== id);
        setLikedBlogs(updatedLikedBlogs);
        localStorage.setItem("likedBlogs", JSON.stringify(updatedLikedBlogs));
      })
      .catch((err) => console.log(err));
    }
    
  };
 

  return (
    <div className="blogs-container">
      <section className="image-blogs-container">
        <img src="/blog.jpg" alt="aws" />
        <Header title="The Tech Blogs"/>
      </section>
      <section className="main">
        <FilterBlog />
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} handleVuee={handleVuee} handleLikes={handleLikes} likedBlogs={likedBlogs} />
        ))}
      </section>
   
    </div>
  );
};

export default BlogsPage;
